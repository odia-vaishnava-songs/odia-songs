---
description: Speech Translation Audio Workflow (Single & Bulk Generation via Bhashini IITM-v1 & Hugging Face CDN)
---
This workflow describes how to generate, upload, and publish devotional Odia speech translation audio (`ଅନୁବାଦ ଶୁଣନ୍ତୁ`) for songs in the Odia Vaishnava Songs library.

### 🎙️ Core Engine & Cloud Storage Rules:
1. **Primary Voice Engine**: `Bhashini - IITM -v1` (`Bhashini/IITM/TTS`) for natural, sweet Indian devotional intonation.
2. **Automatic Fallback**: If IITM throws HTTP 500, immediately falls back to `ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4` without failing.
3. **Dual Voice**: Every verse receives both Female (`👩`) and Male (`👨`) audio tracks.
4. **Primary Cloud Storage (Card-Free & Zero Egress)**:
   - All audio files upload directly to **Hugging Face Dataset CDN**: `OdiaVaishnavaSongs/odia-songs-tts` via `scripts/hf_storage.cjs`.
   - Credentials configured in `.env` (`HF_TOKEN` & `HF_DATASET`).
   - Public CDN Streaming URL: `https://huggingface.co/datasets/OdiaVaishnavaSongs/odia-songs-tts/resolve/main/<slug>/<file>.mp3`.
   - **Supabase Storage is kept 100% empty (0 MB)**, completely protecting Supabase bandwidth and free limits.
5. **Ultra-Lightweight Encoding**: Audio is encoded at **64 kbps mono MP3** (~20–40 KB per verse).
6. **Zero Mobile Storage Footprint**: The frontend audio player streams on-the-fly (`nocache` & `preload="none"`) and immediately flushes RAM/cache on pause/stop, preventing mobile space buildup.
7. **Rate-Limiting**: Uses polite delays (600ms) to ensure smooth server processing.

---

### 1. Single Song Approach:
When you want to process a single song:
- **Command to tell the agent**:
  `"Generate translation audio for <song-id or title>"`
- **Agent Action**:
  1. Runs `npm run tts -- <song-id>` (and `--male` / `--force`).
  2. Synthesizes voice via Bhashini IITM-v1.
  3. Uploads directly to Hugging Face CDN (`OdiaVaishnavaSongs/odia-songs-tts`).
  4. Updates the song record in Supabase database with the Hugging Face URLs.
  5. Automatically executes Cloud-to-Code sync (`src/data/songsContent.ts`) and TypeScript verification.

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
  5. Generates both Female and Male tracks, uploads to Hugging Face, updates Supabase DB.
  6. Automatically runs cloud-to-code sync and verifies TypeScript compilation (`npx tsc --noEmit`).
