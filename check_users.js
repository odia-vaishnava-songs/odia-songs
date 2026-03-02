const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

fetch(`${SUPABASE_URL}/rest/v1/profiles?select=*`, {
    headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`
    }
}).then(res => res.json()).then(console.log).catch(console.error);
