# Odia Vaishnava Songs - Developer & Agent Guidelines

## Song Import Workflow (AI Staging & Direct Approval)
Whenever the user requests adding/importing songs (e.g. from `vsnectar.web.app` or by name):

1. **Information Extraction**:
   - Scrape/fetch verse texts and all audio recordings (`.mp3` links from R2 / Cloudflare) from vsnectar.
2. **Drafting (Odia Focus)**:
   - Transliterate to accurate Odia script with proper conjuncts and poetic dandas.
   - **NO ENGLISH in Word Meanings**: Inside `wordMeanings`, both the word and meaning must be 100% pure Odia script (no Roman transliterations).
   - Provide devotional Odia Bhāvārtha adhering to Gaudiya Vaishnava Siddhanta.
3. **Staging**:
   - Provide the complete draft inside a copyable code block in chat so the user can easily paste it into ChatGPT / Gemini for double-checking.
   - **Never push to the database without explicit user approval.**
4. **Publishing (Upon User Approval)**:
   - **Audio Standards**:
     - Supabase `songs` table: `audio_url`, `vocalist`, and `audio_versions: [{ label: string, url: string }]` (**CRITICAL: must use `label`, NEVER `title`**).
     - `src/data/resources.ts`: `audioUrl`, `vocalist`, and `audioVersions: [{ label: string, url: string }]` (**CRITICAL: camelCase `audioVersions` and `label`**).
     - Clean R2 URLs: Ensure URLs use `/uploads/...` (avoid `%2F` in the path).
     - Note: The Supabase `songs` table does NOT contain a `verified` column; keep `verified: true` in `resources.ts` only.
   - Upsert into Supabase `songs` table with `status: 'COMPLETED'`, `published: true`, `vocalist`, and `audio_versions`.
   - Add the song entry to `src/data/resources.ts` and `src/data/authorCatalog.ts`.
   - Run `node scripts/sync_cloud_to_code.cjs`.
   - Verify TypeScript compilation using `npx tsc --noEmit`.

## Speech Translation Audio Workflow (Bhashini IITM-v1)
All verse translation speech audio uses the Government of India's Bhashini AI engine:

1. **Voice Quality & Architecture**:
   - Primary: `Bhashini - IITM -v1` (`Bhashini/IITM/TTS`) for natural devotional cadence.
   - Fallback: Automatically falls back to `ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4` if IITM encounters a 500 error.
   - Dual Voice: Both Female (`👩`) and Male (`👨`) tracks generated and compressed to 64 kbps MP3.
   - Cloud CDN: Uploaded directly to Hugging Face Dataset CDN (`OdiaVaishnavaSongs/odia-songs-tts`, zero egress fees & card-free) with fallback to Supabase Storage.

2. **Single Song Generation**:
   - Run: `npm run tts -- <song-id>` (and `--male` / `--force`).

3. **Bulk / Alphabetical Category Generation**:
   - When user requests bulk updates (e.g., "Category C" or "Bulk update C"):
     - **Single Approval Rule**: List all matching songs and ask for approval **ONCE**.
     - Upon approval, autonomously run: `npm run tts:batch -- <letter>` without asking on every individual song.
     - Runs cloud-to-code sync and TypeScript check automatically upon completion.
