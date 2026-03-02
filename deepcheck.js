const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function deepCheck() {
    try {
        console.log("Deep dive check on daitariswain7@gmail.com...");

        let token = "";

        // 1. Authenticate to get a token
        const loginRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: "daitariswain7@gmail.com", password: "pass-969200" })
        });

        const loginData = await loginRes.json();
        if (loginData.access_token) {
            token = loginData.access_token;
            console.log("\n--- Auth User Data ---");
            console.log("ID:", loginData.user.id);
            console.log("Email:", loginData.user.email);
        } else {
            console.error("Login failed:", loginData);
            return;
        }

        // 2. Query Profiles ignoring RLS (as much as we can from public, or using the user's own token)
        console.log("\n--- Profiles Table Data for this user ---");
        const profileRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${loginData.user.id}`, {
            method: 'GET',
            headers: { 'apikey': ANON_KEY, 'Authorization': `Bearer ${token}` }
        });

        const profileData = await profileRes.json();
        console.log(profileData);

        // 3. Just to be safe, check if there are ANY profiles that match this email loosely
        console.log("\n--- Profiles matching email ---");
        const allRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.daitariswain7@gmail.com`, {
            method: 'GET',
            headers: { 'apikey': ANON_KEY, 'Authorization': `Bearer ${token}` }
        });
        console.log(await allRes.json());

    } catch (e) {
        console.error("Error:", e);
    }
}
deepCheck();
