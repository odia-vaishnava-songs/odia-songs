export default async function handler(req: any, res: any) {
    try {
        const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
        const ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

        if (!SUPABASE_URL || !ANON_KEY) {
            return res.status(500).json({ error: "Missing Supabase Environment Variables" });
        }

        // An extremely lightweight request to keep Supabase awake (counts as API activity)
        const response = await fetch(`${SUPABASE_URL}/rest/v1/songs?select=id&limit=1`, {
            method: 'GET',
            headers: {
                'apikey': ANON_KEY,
                'Authorization': `Bearer ${ANON_KEY}`,
                // Bypass RLS just checking if DB is responsive
            }
        });

        if (!response.ok) {
            throw new Error(`Supabase ping failed: ${response.statusText}`);
        }

        return res.status(200).json({
            status: "Success",
            message: "Supabase Keep-Alive Ping Successful",
            timestamp: new Date().toISOString()
        });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
}
