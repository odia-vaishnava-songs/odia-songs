import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Odia Vaishnava Songs',
        short_name: 'Odia Songs',
        description: 'Premium Odia Vaishnava Bhajans and Kirtans with lyrics and audio.',
        theme_color: '#8A5082',
        background_color: '#6F5F90',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),
    {
      name: 'song-guard-api',
      configureServer(server) {
        // --- 1. AUTO-SYNC ON STARTUP ---
        const { syncCloudToCode } = require('./scripts/sync_cloud_to_code.cjs');
        console.log('🤖 Auto-Sync: Initializing local code from Cloud...');
        syncCloudToCode().catch(err => console.error('❌ Auto-Sync failed on startup:', err));

        server.middlewares.use('/api/sync-song', async (req, res) => {
          if (req.method !== 'POST') return res.end();

          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', async () => {
            try {
              const { varName, structuredContent } = JSON.parse(body);
              const { updateSong } = require('./song_guard.cjs');
              const success = updateSong(varName, structuredContent);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        });

        server.middlewares.use('/api/sync-all', async (req, res) => {
          if (req.method !== 'POST') return res.end();
          try {
            const { syncCloudToCode } = require('./scripts/sync_cloud_to_code.cjs');
            const success = await syncCloudToCode();
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      }
    }
  ],
})


