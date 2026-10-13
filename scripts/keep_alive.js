// Native .env loader for local development (Node 20.6+) without needing external packages
if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch {
    // Ignore error if .env file is not found (e.g. in CI/GitHub Actions)
  }
}

// Fallback to project's public Supabase credentials if environment variables are not set in GitHub Secrets
const DEFAULT_SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const DEFAULT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabaseUrl = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL).trim();
const supabaseKey = (process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_KEY).trim();

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  process.exit(1);
}

// Simple GET request to songs table to register activity
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
      console.log('✅ Success! Supabase project activity recorded.');
      console.log('Response sample:', data);
    } else {
      const text = await response.text();
      console.error(`❌ Ping failed with status ${response.status}:`, text);
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Network error while pinging Supabase:', err.message);
    process.exit(1);
  }
}

ping();
