import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Global error handler for startup errors
window.onerror = function (message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:white;color:red;z-index:999999;padding:20px;overflow:auto;font-family:monospace;font-size:14px;';
  errorDiv.innerHTML = `
    <h3>Application Startup Error</h3>
    <pre>${message}</pre>
    <p>Source: ${source}:${lineno}:${colno}</p>
    <pre>${error?.stack || 'No stack trace'}</pre>
    <hr>
    <button onclick="window.location.reload(true)" style="padding:10px; cursor:pointer;">Force Refresh</button>
  `;
  document.body.appendChild(errorDiv);
};

try {
  const container = document.getElementById('root');
  if (!container) throw new Error('Root container not found');

  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (e) {
  console.error("Render error:", e);
  document.body.innerHTML = `
    <div style="padding: 20px; color: red; font-family: monospace;">
      <h1>Render Failed</h1>
      <pre>${e}</pre>
      <button onclick="window.location.reload(true)" style="padding:10px; cursor:pointer; margin-top:20px;">Try Again</button>
    </div>
  `;
}
