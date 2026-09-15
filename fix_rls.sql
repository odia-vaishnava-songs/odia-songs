-- Fix RLS (Row Level Security) Vulnerabilities

-- 1. Enable RLS on the tables to prevent unauthorized access
ALTER TABLE IF EXISTS songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS authors ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- Policies for 'songs' table
-- ==========================================

-- Allow anyone to read published songs
DROP POLICY IF EXISTS "Published songs are viewable by everyone" ON songs;
CREATE POLICY "Published songs are viewable by everyone" 
  ON songs FOR SELECT USING (published = true OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN')));

-- Allow Admins and Subadmins to add and edit songs
DROP POLICY IF EXISTS "Admins/Subadmins can add and edit songs" ON songs;
CREATE POLICY "Admins/Subadmins can add and edit songs" 
  ON songs FOR INSERT WITH CHECK (
    auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN'))
  );

DROP POLICY IF EXISTS "Admins/Subadmins can update songs" ON songs;
CREATE POLICY "Admins/Subadmins can update songs" 
  ON songs FOR UPDATE USING (
    auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN'))
  );

-- Only Admins can delete songs
DROP POLICY IF EXISTS "Only Admins can delete songs" ON songs;
CREATE POLICY "Only Admins can delete songs" 
  ON songs FOR DELETE USING (
    auth.uid() IN (SELECT id FROM profiles WHERE role = 'ADMIN')
  );

-- ==========================================
-- Policies for 'authors' table
-- ==========================================

-- Allow anyone to read the authors list
DROP POLICY IF EXISTS "Authors are viewable by everyone" ON authors;
CREATE POLICY "Authors are viewable by everyone" 
  ON authors FOR SELECT USING (true);

-- Allow Admins and Subadmins to manage (insert/update/delete) authors
DROP POLICY IF EXISTS "Admins/Subadmins can manage authors" ON authors;
CREATE POLICY "Admins/Subadmins can manage authors" 
  ON authors FOR ALL USING (
    auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN'))
  );
