const audioTracks = [
    { name: "MUSIC 1", file: "beat1.mp3" },
    { name: "MUSIC 2", file: "beat2.mp3" },
    { name: "MUSIC 3", file: "beat3.mp3" }
];

const container = document.getElementById("dynamic-container");
const searchInput = document.getElementById("search-input");
const errorMessage = document.getElementById("error-message");

function renderCatalog(tracks) {
    container.innerHTML = "";
    
    if (tracks.length === 0) {
        errorMessage.textContent = "No matching audio tracks found.";
        return;
    } else {
        errorMessage.textContent = "";
    }

    tracks.forEach(track => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.cssText = "border: 2px solid #121212; background-color: #faecef; padding: 16px; border-radius: 4px; display: flex; flex-direction: column; justify-content: space-between;";
        
        card.innerHTML = `
            <span style="font-weight: bold; font-size: 1.1rem; margin-bottom: 12px; display: block;">${track.name}</span>
            <audio controls style="width: 100%;">
                <source src="${track.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        container.appendChild(card);
    });
}


renderCatalog(audioTracks);

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = audioTracks.filter(track => 
            track.name.toLowerCase().includes(query)
        );
        renderCatalog(filtered);
    });
}