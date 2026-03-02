const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function verify() {
    console.log("Logging in as Daitari...");
    const loginRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: "daitariswain7@gmail.com", password: "pass-969200" })
    });

    const loginData = await loginRes.json();
    const token = loginData.access_token;
    const uid = loginData.user.id;
    console.log("UID:", uid);

    console.log("Fetching profile for UID...");
    const profileRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${uid}`, {
        headers: { 'apikey': ANON_KEY, 'Authorization': `Bearer ${token}` }
    });
    console.log("Profile Data:", await profileRes.json());
}
verify();
