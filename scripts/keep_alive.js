import 'dotenv/config';

// This script pings the Supabase REST API to prevent the project from being paused due to inactivity.
// It uses the native fetch API available in Node.js 18+.

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  process.exit(1);
}

// We just need a simple GET request to any table to register activity.
// Using the 'songs' table and limiting to 1 result for efficiency.
const url = `${supabaseUrl}/rest/v1/songs?select=id&limit=1`;

async function ping() {
  console.log(`Pinging Supabase at: ${supabaseUrl}`);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('Success! Project activity recorded.');
      console.log('Response sample:', data);
    } else {
      const text = await response.text();
      console.error(`Ping failed with status ${response.status}:`, text);
      process.exit(1);
    }
  } catch (err) {
    console.error('Network error while pinging Supabase:', err.message);
    process.exit(1);
  }
}

ping();
