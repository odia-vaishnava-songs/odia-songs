-- 1. Create Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT,
  email TEXT,
  role TEXT DEFAULT 'USER' CHECK (role IN ('USER', 'SUBADMIN', 'ADMIN')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Songs table
DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id TEXT PRIMARY KEY, -- Using the string ID from resources.ts (e.g., 'song-guruvastaka')
  title TEXT NOT NULL,
  category TEXT,
  type TEXT DEFAULT 'article',
  description TEXT,
  content TEXT, -- HTML content
  structured_content JSONB,
  audio_url TEXT,
  audio_versions JSONB,
  author TEXT,
  verified BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'NOT_DONE' CHECK (status IN ('NOT_DONE', 'IN_PROGRESS', 'COMPLETED')),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE songs ENABLE ROW LEVEL SECURITY;

-- 4. Profiles Policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
CREATE POLICY "Public profiles are viewable by everyone" 
  ON profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE USING (auth.uid() = id AND auth.uid() NOT IN (SELECT id FROM profiles WHERE role = 'ADMIN'));

DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" 
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles" 
  ON profiles FOR ALL USING (
    auth.uid() IN (SELECT id FROM profiles WHERE role = 'ADMIN')
  );

-- 5. Songs Policies
DROP POLICY IF EXISTS "Published songs are viewable by everyone" ON songs;
CREATE POLICY "Published songs are viewable by everyone" 
  ON songs FOR SELECT USING (published = true OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN')));

DROP POLICY IF EXISTS "Admins can manage songs" ON songs;
CREATE POLICY "Admins/Subadmins can manage songs" 
  ON songs FOR ALL USING (auth.uid() IN (SELECT id FROM profiles WHERE role IN ('SUBADMIN', 'ADMIN')));
