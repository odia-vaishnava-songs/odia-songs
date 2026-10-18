---
description: Speech Translation Audio Workflow (Single & Bulk Generation via Bhashini IITM-v1)
---
This workflow describes how to generate, upload, and publish devotional Odia speech translation audio (`ଅନୁବାଦ ଶୁଣନ୍ତୁ`) for songs in the Odia Vaishnava Songs library.

### 🎙️ Core Engine Rules:
1. **Primary Model**: `Bhashini - IITM -v1` (`Bhashini/IITM/TTS`) for natural, sweet Indian intonation.
2. **Automatic Fallback**: If IITM throws HTTP 500, immediately falls back to `ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4` without failing.
3. **Dual Voice**: Every verse receives both Female (`👩`) and Male (`👨`) audio tracks.
4. **Cloud-Only Storage**: All audio is saved directly to Supabase Storage CDN (`song-tts/<slug>/...`) and never committed to Git.
5. **Rate-Limiting**: Uses polite delays (600ms) to ensure smooth server processing.

---

### 1. Single Song Approach:
When you want to process a single song:
- **Command to tell the agent**:
  `"Generate translation audio for <song-id or title>"`
- **Agent Action**:
  Runs `npm run tts -- <song-id>` (and `--male`), uploads to Supabase CDN, and syncs code.

---

### 2. Bulk / Alphabetical Category Approach:
When you want to process an entire letter or category (e.g., "Category C", "Category D", etc.):
- **Command to tell the agent**:
  `"Bulk update Category C"` or `"Do category D"`
- **1-Click Single Approval Rule**:
  1. The agent lists all songs in that category and shows verse counts.
  2. The agent asks for approval **ONCE**.
  3. You reply **"Approve"**.
  4. The agent executes `npm run tts:batch -- <letter>` autonomously from start to finish without pausing to ask for every song.
  5. The agent runs cloud-to-code sync and TypeScript check automatically.
