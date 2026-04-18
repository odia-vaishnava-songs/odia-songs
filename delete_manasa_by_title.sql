-- Search for entries with titles similar to "Manasa Deha Geha"
SELECT id, title FROM songs WHERE title LIKE '%Manasa%Deha%Geha%';

-- Delete by title specifically (matching the red one's title)
DELETE FROM songs WHERE title = 'ମାନସ ଦେହ ଗେହ (Mānasa Deha Geha)';
