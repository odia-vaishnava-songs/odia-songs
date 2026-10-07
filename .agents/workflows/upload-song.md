---
description: High-Quality Song Upload Workflow (AI Staging & 1-Click Approval)
---
This workflow describes the safe, high-quality, verified method for adding missing songs from `vsnectar` into the Odia Vaishnava Songs application.

### 👤 User's Role:
1. **Provide Link/Title:** Provide the song name or `vsnectar.web.app` URL (e.g., `https://vsnectar.web.app/home/songs/Adore%20Adore%20Ye%20All_`).
2. **Review Staged Draft:** Copy the staged draft block with 1 click to inspect or paste into external AI tools (ChatGPT / Gemini) for proofreading.
3. **Approve:** Reply "approved" (କିମ୍ବା ସଂଶୋଧନ ପରାମର୍ଶ).

### 🤖 Agent's Role:
1. **Scrape & Extract:**
   - Extract original verses, title, author, and category from vsnectar SPA/assets.
   - Extract all available `.mp3` audio recordings (Cloudflare R2 links) and singer credits.
2. **AI Transliteration & Translation:**
   - Accurate Odia pronunciation/script with proper Odia conjuncts (ଯୁକ୍ତାକ୍ଷର) and dandas (`।` / `॥୧॥`).
   - **Pure Odia Word Meanings (`wordMeanings`):** Strictly Odia words and meanings only. NEVER include English words or transliteration in word meanings.
   - Devotional Odia translation (*Bhāvārtha*) faithful to Gaudiya Vaishnava Siddhānta and Srila Prabhupada.
3. **Present Staged Draft:**
   - Display entire draft in a single copyable markdown code block for easy 1-click copying.
   - List all available audio versions.
   - **WAIT for user approval.** Do NOT push to database without user approval.
4. **Deploy on Approval:**
   - Log into Supabase using admin auth (`daitariswain7@gmail.com`).
   - Upsert into `songs` table with:
     - `status: 'COMPLETED'`
     - `verified: true`
     - `published: true`
     - `audio_url` and `audio_versions`
     - `structured_content` containing all verses, lyrics, translations, and pure Odia word meanings.
   - Add entry into `src/data/resources.ts`.
   - Run `npx tsc --noEmit` to verify type safety.
