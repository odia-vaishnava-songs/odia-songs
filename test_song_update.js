const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function testSongUpdate() {
    try {
        console.log("Logging in...");
        const loginRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: "daitariswain7@gmail.com", password: "pass-969200" })
        });

        const loginData = await loginRes.json();
        const token = loginData.access_token;

        console.log("Trying to fetch songs as admin...");
        const getRes = await fetch(`${SUPABASE_URL}/rest/v1/songs?limit=1`, {
            method: 'GET',
            headers: { 'apikey': ANON_KEY, 'Authorization': `Bearer ${token}` }
        });
        console.log("GET songs:", await getRes.json());

        console.log("Trying to update a song...");
        const updateRes = await fetch(`${SUPABASE_URL}/rest/v1/songs?id=eq.test-id`, {
            method: 'PATCH',
            headers: {
                'apikey': ANON_KEY,
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ title: "Test Update" })
        });

        if (!updateRes.ok) {
            console.error("Update Error:", await updateRes.text());
        } else {
            console.log("Update Success (No rows matched probably, or actual success):", await updateRes.json());
        }

    } catch (e) {
        console.error("Error:", e);
    }
}
testSongUpdate();
