const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function count() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/songs?select=count`, {
            method: 'GET', 
            headers: { 'apikey': ANON_KEY, 'Prefer': 'count=exact' }
        });
        console.log("Total songs in DB:", res.headers.get('content-range'));
    } catch (e) {
        console.error("Error:", e);
    }
}
count();
