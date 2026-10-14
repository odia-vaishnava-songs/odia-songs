-- Drop the old 'verified' column from Supabase 'songs' table
-- (All songs in the app are now automatically treated as verified and complete)

ALTER TABLE songs DROP COLUMN IF EXISTS verified;
