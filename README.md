# 📖 人生履歴書 (Life Resume Pro) - Next-Gen Career & Life OS

<div align="center">

![Version](https://img.shields.io/badge/version-V3.0_Pro_PWA-0f766e?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Ready-6366f1?style=for-the-badge&logo=pwa)
![Gemini AI](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4ade80?style=for-the-badge&logo=google)
![Firebase](https://img.shields.io/badge/Sync-Firebase_Firestore-f59e0b?style=for-the-badge&logo=firebase)
![Standard](https://img.shields.io/badge/JIS-R3_Compliant-3b82f6?style=for-the-badge)

<p align="center">
  <b>厚生労働省 JIS R3 最新規格準拠の履歴書印刷 ✕ Google Gemini 2.0 AI 動的スキルツリー ✕ 家族リアルタイム共同編集</b><br>
  生涯のキャリア、目標、学び、思い出を一元管理する次世代ライフマネジメントシステム。
</p>

[🌐 線上即時體驗 V3.0 網址](https://huangjhao5-boop.github.io/Curriculum-Vitae/v3/)

</div>

---

## 🌟 核心特色 (Key Features)

### 1. 📄 厚生労働省 JIS R3 最新規格 履歴書印刷
* **最新標準準拠**：拿掉通勤時間、扶養家族等舊式欄位，性別改為自由選填。
* **Pixel Perfect A4 見開き 2 頁排版**：
  * Page 1：基本資訊、學歷/職歷（上限 16 行）。
  * Page 2：職歷延續（6 行）、免許・資格（6 行）、志望動機、本人希望記入欄。
* **和曆 / 西曆一鍵切換**：自動將西元年轉換為令和/平成/昭和並動態計算足歲年齡。

### 2. 🌳 AI 動態技能樹 (Powered by Gemini 2.0 Flash)
* **雙模式智能導航**：
  * 🔍 **可能性探索模式**：根據現有學經歷與目標，探索 2~3 條高潛力未來職涯路徑。
  * 🎯 **目標逆算模式**：指定目標職業（如 IT 架構師、專案經理），AI 逆向推導最短技能養成路徑。
* **嚴格防捏造 Prompt 防呆機制**：已習得技能嚴格對照履歷內容，未習得技能提供具體可執行的檢定與考照建議。
* **Vis-network 物理拓撲圖**：
  * 懸浮控制工具欄（放大、縮小、視角重置、物理模擬凍結）。
  * 點擊琥珀色節點即可一鍵加入「個人目標清單」。

### 3. 📱 完整 PWA 支援 (Progressive Web App)
* **安裝為原生 App**：支援 iOS、Android 及 Desktop 一鍵安裝至桌面或主畫面。
* **離線快取（Service Worker）**：無網路環境下亦可離線瀏覽並操作履歷。
* **行動端手感最佳化**：底部抽屜式彈窗（Bottom Sheet）與快捷浮動按鈕（FAB `+`）。

### 4. ⏱️ 雙軌對比時間軸 & 即時篩選
* **左側歷程 vs 右側目標**：學經歷/資格/日記與家族期望平行對比。
* **即時篩選晶片（Filter Chips）**：一鍵切換 `全部`、`學歷職歷`、`免許資格`、`重要里程碑`、`目標計劃`、`日記筆記`。

### 5. 🤝 家族共有與即時雙向雲端同步
* **一鍵共享碼機制**：發行 `LR-XXXXXX` 專屬代碼，跨 Google 帳號無縫拉取資料並建立即時雙向監聽。
* **權限與隱私鎖定**：獨立密碼鎖、日記與目標的公開/私密/授權閱覽機制。
* **智慧衝突解決（Conflict Resolution）**：自動偵測本機與雲端版本差異，彈窗支援自由選擇優先端。

### 6. 📊 LIFE PROGRESS & 能力雷達圖
* **人生階段進度儀表板**：根據當前年齡動態呈現所處人生黃金期（成長期 ➔ 青年開拓期 ➔ 飛躍期 ➔ 圓熟期）。
* **Chart.js 5 大維度分析**：語學、IT技術、管理領導、溝通協調、專門資格多維度可視化。

---

## 📁 專案檔案結構 (Project Structure)

```text
Curriculum-Vitae/
├── index.html        # V1.0 原始版本 (完好保留)
├── v2/
│   └── index.html    # V2.0 進階版
├── v3/
│   └── index.html    # 🚀 V3.0 Pro PWA 完整旗艦版 (最新)
└── README.md         # 專案說明文件
```

---

## 🚀 快速開始 (Quick Start)

### 1. 本地直接執行
單一 HTML 檔案全封裝，無需安裝 Node.js 或建置流程：
1. 雙擊打開 `v3/index.html` 即可在任何現代瀏覽器運行。

### 2. 設定 Gemini API Key
1. 前往 [Google AI Studio](https://aistudio.google.com/) 免費取得 API Key。
2. 進入網頁內的 **「🌳 AI 技能樹」** 頁籤，於下方貼上 API Key（僅保存在本機瀏覽器 LocalStorage）。

### 3. Google 雲端同步
1. 點擊 **「⚙️ 設定・共有」** ➔ **「Google アカウントを連携する」** 即可啟用 Firebase 跨裝置即時雙向同步。

---

## 🛠️ 技術棧 (Tech Stack)

* **Core**: HTML5, Modern CSS3 (Glassmorphism, CSS Grid, Flexbox), Vanilla ES6+ JavaScript
* **AI Engine**: Google Gemini 2.0 Flash / 1.5 Flash API (Structured JSON Mode)
* **Visualization**: [Chart.js](https://www.chartjs.org/), [Vis-Network](https://visjs.github.io/vis-network/docs/network/)
* **Backend & Sync**: Google Firebase (Authentication & Cloud Firestore)
* **Offline & PWA**: Service Worker, Web App Manifest
* **Design Standards**: 厚生労働省 履歴書新様式（JIS R3 規格準拠）

---

## 📜 版本歷程 (Changelog)

* **V3.0 (Pro PWA Edition)** - 2026 最新旗艦版
  * ✨ 全新現代毛玻璃美學 UI 與 Segmented Pill 膠囊導航。
  * ✨ 完整 PWA 模式（Service Worker 離線快取、安裝至主畫面提示）。
  * ✨ 實裝家族共享碼（Push/Pull）與即時雙向監聽。
  * ✨ 升級 Google Gemini 2.0 Flash AI 引擎與技能樹畫布懸浮控制列。
  * ✨ 實裝雙軌時間軸即時篩選晶片（Filter Chips）與行動端 FAB。
  * 🐛 修復衝突對話盒、舊版快取隔離、JIS 行數溢出檢測提示。
* **V2.0** - 加入家族共享與基礎技能樹。
* **V1.0** - 基礎 JIS 履歷書管理系統。

---

<div align="center">
  <sub>Produced with ❤️ by M.K (TW)</sub>
</div>
