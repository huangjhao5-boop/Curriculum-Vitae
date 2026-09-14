import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Server-side Gemini API for AI dynamic skill tree generation
app.post('/api/skill-tree', async (req, res) => {
  const { prompt, model, apiKey: clientApiKey } = req.body;
  const apiKey = process.env.GEMINI_API_KEY || clientApiKey;

  if (!apiKey) {
    return res.status(400).json({
      error: 'GEMINI_API_KEY is required. Please configure GEMINI_API_KEY in environment or input an API key in the UI.'
    });
  }

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  const ai = new GoogleGenAI({ apiKey });
  const requestedModel = model || 'gemini-2.5-flash';
  const candidateModels = [
    requestedModel,
    'gemini-2.5-flash',
    'gemini-1.5-flash',
    'gemini-2.0-flash'
  ];
  const uniqueModels = [...new Set(candidateModels.filter(Boolean))];

  let lastError = null;
  for (const modelName of uniqueModels) {
    try {
      console.log(`[Server AI] Generating skill tree using model: ${modelName}`);
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      let rawText = (response.text || '').trim();
      if (rawText.startsWith('```')) {
        rawText = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '');
      }

      const treeData = JSON.parse(rawText);
      return res.json({
        success: true,
        treeData,
        modelUsed: modelName
      });
    } catch (err) {
      console.warn(`[Server AI] Model ${modelName} failed:`, err.message);
      lastError = err;
    }
  }

  return res.status(500).json({
    error: lastError ? lastError.message : 'All candidate AI models failed to respond.'
  });
});

// Redirect root to V3.0 flagship app
app.get('/', (req, res) => {
  res.redirect('/v3/');
});

// Serve versioned directories
app.use('/v3', express.static(path.join(__dirname, 'v3')));
app.use('/v2', express.static(path.join(__dirname, 'v2')));
app.use('/v1', express.static(__dirname));

// Serve root static assets (index.html, README, etc.)
app.use(express.static(__dirname));

app.listen(PORT, HOST, () => {
  console.log(`Curriculum Vitae server listening on http://${HOST}:${PORT}`);
});
