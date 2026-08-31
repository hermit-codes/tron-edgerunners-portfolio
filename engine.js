/**
 * TRON CORE ENGINE // SENIOR ARCHITECT SYSTEM
 * Pure Vanilla Architecture Modules
 */

// --- DATA LAYER CONFIGURATIONS ---
const appStateData = {
    profile: `
        <h1 class="content-title">EXECUTIVE_SUMMARY</h1>
        <p class="summary-text">Hi, I'm a Frontend Developer. I build highly responsive websites with clean layouts and organized code structures. Welcome to my custom-built portfolio hub.</p>
    `,
    projects: `
        <h1 class="content-title">FUNCTIONAL_PROJECTS</h1>
        <p class="summary-text">Interact with these live, vanilla JavaScript widgets built completely from scratch.</p>

        <div class="matrix-grid">
            <!-- PROJECT 1: BINARY CONVERTER -->
            <div class="matrix-card">
                <div class="card-border-glow"></div>
                <h3>[ TRON_BYTE_CONVERTER ]</h3>
                <p>Type any plain text below to dynamically watch JavaScript translate it into raw computer binary strings.</p>
                <input type="text" id="binaryInput" class="tron-input" placeholder="Type text to convert..." oninput="processBinary()">
                <div class="binary-output" id="binaryResult">010100110101100101010011</div>
            </div>

            <!-- PROJECT 2: PALETTE THEME CHANGER -->
            <div class="matrix-card">
                <div class="card-border-glow"></div>
                <h3>[ GRID_COLOR_TOGGLE ]</h3>
                <p>Click a command path below to directly rewrite the site's styling variables in real time.</p>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="tron-btn" onclick="changeTheme('#00f0ff', '#0066ff')">CYAN / BLUE</button>
                    <button class="tron-btn" onclick="changeTheme('#ff5500', '#aa3300')" style="border-color: #ff5500; color: #ff5500;">ORANGE</button>
                </div>
            </div>
        </div>
    `,
    contact: `
        <h1 class="content-title">ESTABLISH_UPLINK</h1>
        <p class="summary-text">Leave a transmission message payload below to establish a communications link.</p>
        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 500px;">
            <input type="text" class="tron-input" placeholder="YOUR_EMAIL_ADDRESS" />
            <textarea class="tron-input" placeholder="YOUR_MESSAGE_PAYLOAD" rows="4" style="resize: none;"></textarea>
            <button class="tron-btn" onclick="alert('Transmission simulated! Open engine.js to plug in a real backend service.')">[ TRANSMIT_DATA ]</button>
        </div>
    `
};

// --- ROUTING ENGINE LOGIC ---
function switchTab(activeTabButtonRef) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeTabButtonRef.classList.add('active');

    const stateTargetToken = activeTabButtonRef.getAttribute('data-tab');
    const displayContainerTarget = document.getElementById('deck-content');

    if (displayContainerTarget && appStateData[stateTargetToken]) {
        displayContainerTarget.innerHTML = appStateData[stateTargetToken];
    }
}

// --- PROJECT 1: REAL BINARY LOGIC ---
function processBinary() {
    const input = document.getElementById('binaryInput').value;
    const outputElement = document.getElementById('binaryResult');

    if(input === "") {
        outputElement.innerText = "Waiting for input...";
        return;
    }

    // Convert text letters to binary code characters strings
    let binaryString = "";
    for (let i = 0; i < input.length; i++) {
        let binaryChar = input[i].charCodeAt(0).toString(2);
        // Ensure character string block has 8 bits padding
        binaryString += "0".repeat(8 - binaryChar.length) + binaryChar + " ";
    }
    outputElement.innerText = binaryString.trim();
}

// --- PROJECT 2: REAL CUSTOM STYLING THEME OVERRIDES ---
function changeTheme(primaryNeon, secondaryNeon) {
    // Overrides root document token values
    document.documentElement.style.setProperty('--tron-cyan', primaryNeon);
    document.documentElement.style.setProperty('--tron-blue', secondaryNeon);
    document.documentElement.style.setProperty('--tron-dark-cyan', primaryNeon + "1A"); // appends hex transparent color values safely
}

// Automatically load the profile page view first on application launch
document.addEventListener("DOMContentLoaded", () => {
    const initialTargetContainer = document.getElementById('deck-content');
    if(initialTargetContainer) {
        initialTargetContainer.innerHTML = appStateData.profile;
    }
});
