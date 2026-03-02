import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function checkLogin() {
    try {
        console.log("Trying to log in as daitariswain7@gmail.com...");
        const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
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

        const data = await res.json();
        console.log("Login Response:");
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

checkLogin();
