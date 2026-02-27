import re
import os
import json

def get_odia_words(text):
    # Match Odia characters and common punctuation/symbols used in lyrics
    # Odia range: \u0b00-\u0b7f
    # Bengali range: \u0980-\u09ff
    return re.findall(r'[\u0b00-\u0b7f\u0980-\u09ff]+', text)

def audit_songs_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find structured song objects
    # Matches export const SONG_NAME_STRUCTURED: StructuredSong = { ... };
    song_pattern = re.compile(r'export const (SONG_\w+_STRUCTURED): StructuredSong = (\{.*?\});', re.DOTALL)
    
    # Also handle simpler cases if any
    # song_pattern_alt = re.compile(r'export const (\w+) = (\{.*?\});', re.DOTALL)

    matches = song_pattern.findall(content)
    
    if not matches:
        print("No structured songs found in the file.")
        return

    for song_name, song_json_raw in matches:
        print(f"\nAuditing Song: {song_name}")
        
        # Clean up the "JSON" - it's a JS object, so it might have unquoted keys
        # For our purposes, we can try to extract the values using regex instead of a full parser
        
        # Extract verses
        verses_match = re.search(r'verses:\s*\[(.*?)\]\s*[,|\n]*\s*\}', song_json_raw, re.DOTALL)
        if not verses_match:
            # Try quoted keys
            verses_match = re.search(r'"verses":\s*\[(.*?)\]\s*[,|\n]*\s*\}', song_json_raw, re.DOTALL)
        
        if not verses_match:
            print(f"  Could not find verses for {song_name}")
            continue

        verses_content = verses_match.group(1)
        
        # Split into individual verse blocks
        verse_blocks = re.split(r'\}\s*,\s*\{', verses_content)
        
        for i, block in enumerate(verse_blocks):
            verse_id = i + 1
            
            # Extract lyric
            lyric_match = re.search(r'lyric:\s*["\'`](.*?)["\'`]', block, re.DOTALL)
            if not lyric_match:
                lyric_match = re.search(r'"lyric":\s*["\'`](.*?)["\'`]', block, re.DOTALL)
            
            if not lyric_match:
                continue

            lyric_text = lyric_match.group(1)
            # Remove punc
            lyric_clean = re.sub(r'[।॥,!?;:()\'"`\n]', ' ', lyric_text)
            lyric_words = get_odia_words(lyric_clean)
            
            # Extract word meanings
            # Matches { word: "...", meaning: "..." }
            wm_pattern = re.compile(r'\{\s*(?:word|["\']word["\']):\s*["\'`](.*?)["\'`]\s*,\s*(?:meaning|["\']meaning["\']):\s*["\'`](.*?)["\'`]\s*\}', re.DOTALL)
            wm_matches = wm_pattern.findall(block)
            
            meaning_words = []
            for word, meaning in wm_matches:
                meaning_words.extend(get_odia_words(word))
            
            missing = [w for w in lyric_words if w not in meaning_words]
            unused = [w for w in meaning_words if w not in lyric_words]
            
            # Script check
            bengali_in_lyric = [w for w in lyric_words if any('\u0980' <= char <= '\u09ff' for char in w)]
            bengali_in_meanings = [w for w in meaning_words if any('\u0980' <= char <= '\u09ff' for char in w)]
            
            if missing or unused or bengali_in_lyric or bengali_in_meanings:
                print(f"  Verse {verse_id}:")
                if missing: print(f"    Missing coverage: {json.dumps(list(set(missing)), ensure_ascii=False)}")
                if unused: print(f"    Extra meanings: {json.dumps(list(set(unused)), ensure_ascii=False)}")
                if bengali_in_lyric: print(f"    BENGALI IN LYRIC: {json.dumps(list(set(bengali_in_lyric)), ensure_ascii=False)}")
                if bengali_in_meanings: print(f"    BENGALI IN MEANINGS: {json.dumps(list(set(bengali_in_meanings)), ensure_ascii=False)}")

if __name__ == "__main__":
    songs_path = os.path.join("src", "data", "songsContent.ts")
    if os.path.exists(songs_path):
        audit_songs_file(songs_path)
    else:
        print(f"File not found: {songs_path}")
