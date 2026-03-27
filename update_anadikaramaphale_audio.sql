-- Update audio URLs for song: Anādi Karama Phale
-- song-anadikaramaphale

UPDATE songs
SET
    audio_url = 'https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_His_Divine_Grace_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3',
    audio_versions = '[
        {
            "label": "Śrīla Prabhupāda",
            "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_His_Divine_Grace_A_C_Bhaktivedanta_Swami_Prabhupada_IDT.mp3"
        },
        {
            "label": "HG Jai Sachinanadana Prabhu",
            "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
        },
        {
            "label": "HG Sivarama Prabhu",
            "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HG_Sivarama_Prabhu_IDT.mp3"
        },
        {
            "label": "HH Suhotra Swami",
            "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Anadi_Karama_Phale/Anadi_Karama_Phale_-_Sung_by_HH_Suhotra_Swami_IDT.mp3"
        },
        {
            "label": "Odia Recording",
            "url": "https://pub-70c3993609294898b53b2d3de11bb484.r2.dev/uploads%2F29%20Anadi%20Karma%20Phale%20P-63.MP3"
        }
    ]'::jsonb,
    updated_at = now()
WHERE id = 'song-anadikaramaphale';

-- Verify the update
SELECT id, title, audio_url, audio_versions
FROM songs
WHERE id = 'song-anadikaramaphale';
