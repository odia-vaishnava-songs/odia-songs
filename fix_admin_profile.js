import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function fix() {
    try {
        console.log("Logging in as Admin to get Token...");
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
        const token = signInData.access_token;
        const userId = signInData.user.id;

        console.log(`User ID: ${userId}. Inserting ADMIN profile...`);

        const upsertRes = await fetch(`${SUPABASE_URL}/rest/v1/profiles?on_conflict=id`, {
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
                name: "Admin Daitari"
            })
        });

        if (!upsertRes.ok) {
            console.error(await upsertRes.text());
        } else {
            console.log("PROFILE SUCCESSFULLY INSERTED!");

            // Just double check the row exists
            const check = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}`, {
                method: 'GET',
                headers: {
                    'apikey': ANON_KEY,
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Profile now looks like:", await check.json());
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

fix();
