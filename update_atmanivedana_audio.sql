-- Update audio URLs for song: Ātma-nivedana, tuwā pade kori'
-- song-atmanivedanatuwapade

UPDATE songs
SET
    audio_url = 'https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Atma_nivedana_tuya_pade.mp3',
    audio_versions = '[
        {
            "label": "HH Gour Govinda Swami",
            "url": "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Gour_Govinda_Swami/Bhajans/GGM_Bhajans_-_Atma_nivedana_tuya_pade.mp3"
        },
        {
            "label": "HG Jai Sachinanadana Prabhu",
            "url": "https://audio.iskcondesiretree.com/06_-_More/10_-_Bhajans_and_Kirtans_-_Categories/Bhajans_by_Bhaktivinoda_Thakur/Atma_Nivedana_Tuwa_Pade/Atma_Nivedana_Tuwa_Pade_-_Sung_by_HG_Jai_Sachinanadana_Prabhu_IDT.mp3"
        }
    ]'::jsonb,
    updated_at = now()
WHERE id = 'song-atmanivedanatuwapade';

-- Verify the update
SELECT id, title, audio_url, audio_versions
FROM songs
WHERE id = 'song-atmanivedanatuwapade';
