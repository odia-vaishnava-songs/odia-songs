# Odia Song Guard: Subadmin Safety Manual

This manual explains how to safely update song data without breaking the application.

## 🛑 The "One Rule"
**NEVER** use `ctrl+h` (Find and Replace) or fragile regex scripts to update `songsContent.ts` directly. One missing `;` or bracket will crash the entire app for everyone.

## ✅ How to Update a Song Safely

### 1. Prepare your correction
Create a temporary JSON file (e.g., `correction.json`) with the new structured data for the song.

### 2. Run the Odia Song Guard
Open your terminal in the project folder and run:
```bash
node OdiaSongGuard_CLI.cjs SONG_VARIABLE_NAME correction.json
```
*Example:*
`node OdiaSongGuard_CLI.cjs SONG_BHAJABHAKATAVATSALA_STRUCTURED ./my_fix.json`

### 3. What the Guard does for you:
- **Surgical Update:** It only touches that specific song.
- **Syntax Check:** It verifies the whole file before saving. If you made a typo, it will **BLOCK** the save.
- **Integrity Baseline:** It ensures the app will always boot successfully.

## 🔍 How to Check Application Health
If you suspect the data is broken, run:
```bash
node song_guard.cjs verify
```
If you see ✅ `[SUCCESS] File integrity: PERFECT`, the app is safe!

## 🚀 Before you PUSH to Database
Always run the `verify` command above before pushing to Supabase/Firestore. This ensures you are not pushing broken data to the live server.
