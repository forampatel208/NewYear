function createMatrixRain() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*+=";
    const container = document.body;
    
    setInterval(() => {
        const el = document.createElement("div");
        el.className = "matrix-text";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = Math.random() * 2 + 1 + "s";
        el.innerText = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(el);
        
        const animation = el.animate([
            { transform: "translateY(-100vh)" },
            { transform: "translateY(100vh)" }
        ], {
            duration: Math.random() * 2000 + 3000,
            easing: "linear"
        });
        
        animation.onfinish = () => el.remove();
    }, 50);
}

// Initialize
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        createMatrixRain();
    }, 3000);
};

function revealMessage() {
    const messages = [
        "🚀 FUTURE SCAN COMPLETE: 2025 is your year to innovate and inspire!",
        "💫 QUANTUM PREDICTION: Epic achievements loading... Success imminent!",
        "⚡️ SYSTEM UPGRADE: Your potential has been maximized for 2025!",
        "🎯 ALGORITHM FORECAST: Exceptional success rate detected ahead!",
        "💎 FUTURE DATABASE UNLOCKED: Your dreams are scheduled for reality!"
    ];
    const messageEl = document.getElementById('message');
    messageEl.style.display = 'block';
    let currentChar = 0;
    const message = messages[Math.floor(Math.random() * messages.length)];
    messageEl.innerText = '';
    messageEl.style.opacity = '1';
    
    const typing = setInterval(() => {
        if(currentChar < message.length) {
            messageEl.innerText += message[currentChar];
            currentChar++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}
