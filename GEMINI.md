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
   - Upsert into Supabase `songs` table with `status: 'COMPLETED'`, `verified: true`, `published: true`, and all `audio_versions`.
   - Add the song entry to `src/data/resources.ts`.
   - Verify TypeScript compilation using `npx tsc --noEmit`.
