# Song Import & Management Rules

## 1. Absolute Prohibition of English in Word Meanings
- In `wordMeanings` (`{ word, meaning }`), both `word` and `meaning` MUST be in Odia script only.
- NEVER include English or Roman transliterations like `(dīvyat)` or English definitions. Pure Odia only!

## 2. Mandatory Staging & Approval Process
- When importing songs from vsnectar or user requests:
  1. DO NOT immediately push or save to database.
  2. Stage the complete Odia lyrics, word meanings, and translation in a single copyable code block in chat.
  3. Wait for the user to review and explicitly say "approved".
  4. Only after user approval, proceed to upsert in Supabase and register in `src/data/resources.ts`.

## 3. Audio Preservation
- Always extract and preserve all available audio recordings from vsnectar (`audio_versions` array and default `audio_url`).

## 4. Database & Codebase Synchronization
- Use Supabase admin credentials (`daitariswain7@gmail.com`) to upsert to the `songs` table with `status: 'COMPLETED'`, `verified: true`, `published: true`.
- Update `src/data/resources.ts` with matching metadata.
- Always run `npx tsc --noEmit` to ensure zero compilation or syntax errors.
