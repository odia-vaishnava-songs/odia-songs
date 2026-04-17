const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";

async function dumpIds() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/songs?select=id,title`, {
            method: 'GET',
            headers: { 'apikey': ANON_KEY }
        });
        const data = await res.json();
        const ids = data.map(s => `${s.id} | ${s.title}`);
        console.log("--- ALL DATABASE IDs ---");
        console.log(ids.join('\n'));
    } catch (e) {
        console.error("Error:", e);
    }
}
dumpIds();
