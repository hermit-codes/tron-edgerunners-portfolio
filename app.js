// Local Cyberdeck Clock System
function initSystemClock() {
  const clockElement = document.getElementById('hud-clock');
  if (!clockElement) return;

  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds} SYS_LOC`;
  }, 1000);
}

// Dynamic System Loop
function initBootLogs() {
  const logElement = document.getElementById('dynamic-log');
  if (!logElement) return;

  const logs = [
    "> SCANNING SYSTEM MEMORY...",
    "> BYPASSING SECURITY PROTOCOLS...",
    "> LOCALHOST SECURE...",
    "> DECK RETRACKING COMPLETED...",
    "> OVERRIDING INTERFACE GRID..."
  ];
  let index = 0;

  setInterval(() => {
    logElement.textContent = logs[index];
    index = (index + 1) % logs.length;
  }, 3000);
}

// Add initialization triggers to DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  initSystemClock();
  initBootLogs();
});

/* Operational History Panel Configuration */
