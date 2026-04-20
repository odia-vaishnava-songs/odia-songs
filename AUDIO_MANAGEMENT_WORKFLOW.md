# Audio Management Workflow (Odia Songs)
*Note for future reference: documenting the method for structured audio updates.*

## 1. The Core Method
We are migrating from hardcoded `audioUrl` in `src/data/resources.ts` to a flexible SQL-based system in Supabase. This allows for multiple vocalists and dynamic updates without redeploying code.

## 2. SQL Update Template
For every song, we use this structure:
```sql
UPDATE songs 
SET 
  audio_url = 'PRIMARY_LINK_HERE',
  audio_versions = '[
    {"label": "Singer Name 1", "url": "LINK_1"},
    {"label": "Singer Name 2", "url": "LINK_2"}
  ]'::jsonb,
  vocalist = 'Primary Vocalist or "Various Artistes"',
  updated_at = now()
WHERE id = 'SONG_ID';
```

## 3. Frontend Integration
- **Hook:** `useSongs.ts` fetches `audio_versions` as `audioVersions`.
- **UI:** `AudioPlayer.tsx` automatically detects if `audioVersions.length > 1`.
- **Menu:** It renders a "Singer Selector" badge using the `AudioVersion` type.

## 4. Play Store Specifics
- **Background Mode:** Required for Android.
- **Media Session:** The `currentLabel` from the chosen version is used for lock-screen info.
- **Attribution:** Must include source (e.g., ISKCON Desire Tree) for Store compliance.

## 5. Completed Songs (Current Migration)
1. Jaya Radha Madhava (done)
2. Ohe Vaisnava Thakura (done)
3. Manasa Deho Geho (done)
4. Gurudev! Krpa Bindu Diya (Pending execution)
