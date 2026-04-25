(function() {
// 1. CLEANUP
document.querySelectorAll('[id*="surgical-sync"]').forEach(el => el.remove());

const style = document.createElement('style');
style.innerHTML = `
#surgical-sync-v7 {
position: fixed; bottom: 20px; right: 20px; width: 360px;
background: white; border-radius: 12px; box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
z-index: 100000; font-family: sans-serif; padding: 15px; border: 2px solid #8A5082;
display: flex; flex-direction: column; gap: 10px;
}
.singer-item { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; background: #fdf6ff; padding: 8px; border-radius: 6px; border: 1px solid #efe0ef; }
.singer-label { flex: 1; font-weight: bold; font-size: 13px; color: #8A5082; }
#song-search { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 6px; font-size: 13px; box-sizing: border-box; }
#search-results { max-height: 150px; overflow-y: auto; background: #fafafa; border: 1px solid #eee; border-radius: 6px; position: absolute; bottom: 120px; width: calc(100% - 30px); display: none; box-shadow: 0 -5px 15px rgba(0,0,0,0.1); }
.search-item { padding: 8px; cursor: pointer; border-bottom: 1px solid #eee; font-size: 12px; }
.search-item:hover { background: #f0f0f0; }
.search-item.selected { background: #8A5082; color: white; }
`;
document.head.appendChild(style);

const container = document.createElement('div');
container.id = 'surgical-sync-v7';
const sourceTitle = decodeURIComponent(window.location.href.split('/').pop().split('_')[0]);

container.innerHTML = `
<h3 style="margin:0; font-size:16px; color:#8A5082;">Surgical Sync V7 (PRO) 🚀</h3>
<p style="font-size:12px;margin:0;"><b>Source:</b> ${sourceTitle}</p>

<div style="position:relative;">
  <input type="text" id="song-search" placeholder="🔍 Search library for Odia card...">
  <div id="search-results"></div>
</div>

<div id="target-info" style="font-size:11px; color:#666; font-style:italic;">Selected: (Auto-Match Based)</div>

<div id="singer-box" style="max-height:150px; overflow-y:auto; border:1px inset #eee; padding:5px; background: #fdfdfd;">
  <p style="font-size:11px; color:#999; text-align:center;">Play audio in "Choose Singer" pop-up to capture...</p>
</div>

<button id="sync-go" style="width:100%; padding:12px; background:#8A5082; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">SYNC INTO SELECTED CARD 🚀</button>
<div id="msg" style="text-align:center; font-size:13px; font-weight:bold;"></div>
`;
document.body.appendChild(container);

let allSongs = [];
let selectedId = null;
const captured = new Map();

// Fetch Library
fetch('http://localhost:3456/list')
  .then(r => r.json())
  .then(data => {
    allSongs = data;
    console.log("✅ Library Loaded:", allSongs.length);
  })
  .catch(e => console.error("❌ Bridge Off", e));

// Search Logic
const searchInput = document.getElementById('song-search');
const resultsBox = document.getElementById('search-results');
const targetInfo = document.getElementById('target-info');

searchInput.oninput = () => {
    const val = searchInput.value.toLowerCase();
    if (val.length < 2) { resultsBox.style.display = 'none'; return; }
    
    const matches = allSongs.filter(s => s.title.toLowerCase().includes(val) || s.id.toLowerCase().includes(val)).slice(0, 50);
    resultsBox.innerHTML = matches.map(s => `<div class="search-item" data-id="${s.id}">${s.title}</div>`).join('');
    resultsBox.style.display = 'block';
};

resultsBox.onclick = (e) => {
    const item = e.target.closest('.search-item');
    if (item) {
        selectedId = item.dataset.id;
        searchInput.value = item.innerText;
        targetInfo.innerText = `Selected ID: ${selectedId}`;
        resultsBox.style.display = 'none';
        targetInfo.style.color = '#8A5082';
        targetInfo.style.fontWeight = 'bold';
    }
};

// Capture Logic
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

// Sync Logic
document.getElementById('sync-go').onclick = async () => {
    const msg = document.getElementById('msg');
    msg.innerText = "⏳ Syncing...";
    const versions = [];
    captured.forEach((n, u) => versions.push({ singer: n, url: u }));
    
    if (versions.length === 0) { msg.innerText = "❌ No audio captured!"; return; }

    try {
        const res = await fetch('http://localhost:3456/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: sourceTitle, 
                forceId: selectedId, // THIS IS THE KEY: Use selected ID
                versions: versions 
            })
        });
        const data = await res.json();
        if (data.success) {
            msg.innerHTML = `<span style="color:green">✅ SYNCED INTO: ${selectedId || data.id}</span>`;
        } else {
            msg.innerHTML = `<span style="color:red">❌ ERROR: ${data.error}</span>`;
        }
    } catch (e) { msg.innerText = "❌ Bridge Off"; }
};
})();
