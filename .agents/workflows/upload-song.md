---
description: High-Quality Song Upload Workflow (Odia Songs)
---
This workflow describes the safe, high-quality method for adding new songs to the Odia Vaishnava Songs application.

### 👤 User's Part:
1.  **Post Song:** Provide the raw lyrics, Odia translation, and word meanings.
2.  **Paste to Supabase:** Copy the **SQL Sync Script** provided by the agent and run it in the **Supabase SQL Editor**.
3.  **Refresh:** View the live results in the app.

### 🤖 Agent's Part:
1.  **Parse Data:** Convert the lyrics into the **Structured JSON format** (verses, meanings, and translations).
2.  **Generate SQL:** Provide the **SQL Sync Script** (using the safe `$json$` format).
3.  **Local Registration:** Automatically add the song ID and metadata to `src/data/resources.ts`.

### Logic:
-   Supabase data is the "source of truth" and prioritizes over local files for existing IDs.
-   Rich UI functionality depends on the Structured Content format.
-   Local registration ensures the song appears in the menu.
