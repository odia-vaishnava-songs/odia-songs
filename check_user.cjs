const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkUser() {
  console.log("Checking User Profile for: 9937327244...");
  
  // Try matching by email pattern
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .ilike('email', '%9937327244%');

  if (error) {
    console.error("Error fetching profiles:", error.message);
    return;
  }

  if (!profiles || profiles.length === 0) {
    // Try matching by phone field or metadata if it exists
    const { data: profilesByPhone, error: phoneError } = await supabase
        .from('profiles')
        .select('*')
        .ilike('id', '%9937327244%');
        
    if (profilesByPhone && profilesByPhone.length > 0) {
        console.log("Found Profile(s) by ID/Phone:", JSON.stringify(profilesByPhone, null, 2));
        return;
    }
    
    console.log("No profile record found in the 'profiles' table for 9937327244.");
    return;
  }

  console.log("Found Profile(s):", JSON.stringify(profiles, null, 2));
}

checkUser();
