(function() {
// 1. CLEANUP
document.querySelectorAll('[id*="surgical-sync"]').forEach(el => el.remove());

const style = document.createElement('style');
style.innerHTML = `
#surgical-sync-v6 {
position: fixed; bottom: 20px; right: 20px; width: 340px;
background: white; border-radius: 12px; box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
z-index: 100000; font-family: sans-serif; padding: 15px; border: 2px solid #8A5082;
}
.singer-item { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; background: #fdf6ff; padding: 8px; border-radius: 6px; border: 1px solid #efe0ef; }
.singer-label { flex: 1; font-weight: bold; font-size: 13px; color: #8A5082; }
`;
document.head.appendChild(style);

const container = document.createElement('div');
container.id = 'surgical-sync-v6';
const songTitle = decodeURIComponent(window.location.href.split('/').pop().split('_')[0]);

container.innerHTML = `
<h3 style="margin:0 0 10px 0; font-size:16px; color:#8A5082;">Surgical Sync V6 🚀</h3>
<p style="font-size:12px;margin:0 0 10px 0;"><b>Current:</b> ${songTitle}</p>
<div id="singer-box" style="max-height:220px; overflow-y:auto; border:1px inset #eee; padding:5px;">
<p style="font-size:11px; color:#999; text-align:center;">Click singers in "Choose Singer" pop-up...</p>
</div>
<button id="sync-go" style="width:100%; padding:12px; background:#8A5082; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; margin-top:10px;">SYNC TO CLOUD 🚀</button>
<div id="msg" style="margin-top:8px; text-align:center; font-size:13px; font-weight:bold;"></div>
`;
document.body.appendChild(container);

const captured = new Map();

document.addEventListener('click', (e) => {
const btn = e.target.closest('button.action-sheet-button, .alert-button-role-null, .list-item');
if (btn) {
const name = btn.innerText.split('(')[0].trim();
if (["Cancel", "Add Audio", "Default Singer"].includes(name)) return;
setTimeout(() => {
const audio = document.querySelector('audio');
if (audio && audio.src && !audio.src.startsWith('blob:')) {
if (!captured.has(audio.src)) {
captured.set(audio.src, name);
refreshUI();
}
}
}, 600);
}
}, true);

function refreshUI() {
const box = document.getElementById('singer-box');
box.innerHTML = '';
captured.forEach((n, u) => {
const div = document.createElement('div');
div.className = 'singer-item';
div.innerHTML = `<input type="checkbox" checked><span class="singer-label">${n}</span>`;
box.appendChild(div);
});
}

document.getElementById('sync-go').onclick = async () => {
const msg = document.getElementById('msg');
msg.innerText = "⏳ Syncing...";
const versions = [];
captured.forEach((n, u) => versions.push({ singer: n, url: u }));
try {
const res = await fetch('http://localhost:3456/sync', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: songTitle, versions: versions })
});
const data = await res.json();
msg.innerHTML = data.success ? `<span style="color:green">✅ SYNCED: ${data.id}</span>` : `<span style="color:red">❌ ERROR: ${data.error}</span>`;
} catch (e) { msg.innerText = "❌ Bridge Off"; }
};
})();
