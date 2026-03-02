const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function makeAdmin() {
    try {
        console.log("Attempting to sign up user...");
        // 1. Sign up the user (Email & Password)
        const signUpRes = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
            method: 'POST',
            headers: {
                'apikey': ANON_KEY,
                'Authorization': `Bearer ${ANON_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "daitariswain7@gmail.com",
                password: "pass-969200",
                data: { full_name: "Admin" }
            })
        });

        const signUpData = await signUpRes.json();

        if (!signUpRes.ok && signUpData.msg !== "User already registered") {
            throw new Error(`Signup failed: ${JSON.stringify(signUpData)}`);
        }

        console.log("User authentication ready. Checking if profile was auto-created...");

        // Let's sign in to get their session token so we can update their profile RLS
        const signInRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apikey': ANON_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "daitariswain7@gmail.com",
                password: "pass-969200"
            })
        });

        const signInData = await signInRes.json();
        if (!signInRes.ok) {
            throw new Error(`Sign in failed: ${JSON.stringify(signInData)}`);
        }

        const token = signInData.access_token;
        const userId = signInData.user.id;

        console.log(`User ID: ${userId}. Updating role to ADMIN...`);

        // 3. Update the profile role to ADMIN
        const updateRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}`, {
            method: 'PATCH',
            headers: {
                'apikey': ANON_KEY,
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                role: "ADMIN"
            })
        });

        if (!updateRes.ok) {
            // It might fail if profile doesn't exist yet, let's try UPSERT
            const upsertRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
                method: 'POST',
                headers: {
                    'apikey': ANON_KEY,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify({
                    id: userId,
                    email: "daitariswain7@gmail.com",
                    role: "ADMIN",
                    name: "Admin"
                })
            });

            if (!upsertRes.ok) {
                throw new Error(`Profile update failed: ${await upsertRes.text()}`);
            }
        }

        console.log("SUCCESS! User daitariswain7@gmail.com is now an ADMIN!");
    } catch (e) {
        console.error("Error:", e);
    }
}

makeAdmin();
