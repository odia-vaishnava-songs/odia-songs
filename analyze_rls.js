import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

// We can't run raw SQL as Anon. But this confirms the RLS bug.
// 
// The problematic policy:
// CREATE POLICY "Admins can manage all profiles" ON profiles FOR ALL USING (
//    auth.uid() IN (SELECT id FROM profiles WHERE role = 'ADMIN')
// );
//
// When evaluating this policy for the UPSERT we just sent, the database evaluates the 
// internal SELECT id FROM profiles, which re-evaluates the SELECT policy ("Public profiles are viewable by everyone" USING true).
// Wait, no. Evaluating the "Admins can manage all profiles" for the UPSERT on 'profiles' queries 'profiles'. 
// If the internal query to 'profiles' triggers the same policy, you get infinite recursion.
// But the SELECT policy is "USING (true)" so it shouldn't trigger the ALL policy infinitely unless it's an UPDATE.
// Wait, the error happened on Profile Update.

async function tryBypass() {
    // If we login as the user, we can trigger "Users can update own profile"
    // Let's look at:
    // CREATE POLICY "Users can update own profile" 
    // ON profiles FOR UPDATE USING (auth.uid() = id AND auth.uid() NOT IN (SELECT id FROM profiles WHERE role = 'ADMIN'));

    // There it is! The "Users can update own profile" policy queries "profiles" to check if they are NOT an admin.
    // This queries profiles, which triggers policies again.

    // I need to instruct the user on how to run a SQL command in their dashboard to fix this RLS bug,
    // Or I can send instructions on how to make the user admin via the dashboard.
    console.log("RLS Bug Identified.");
}
tryBypass();
