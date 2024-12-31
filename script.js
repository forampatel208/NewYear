// Matrix rain effect
function createMatrixRain() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+";
    const container = document.body;
    
    setInterval(() => {
        const el = document.createElement("div");
        el.className = "matrix-text";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = Math.random() * 2 + 1 + "s";
        el.innerText = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(el);
        
        const animation = el.animate([
            { transform: "translateY(-100vh)", opacity: 1 },
            { transform: "translateY(100vh)", opacity: 0 }
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
        const loadingScreen = document.getElementById('loading');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            createMatrixRain();
        }, 500);
    }, 3000);
};

function revealMessage() {
    // Tech-themed New Year messages
    const messages = [
        "🤖 while(year == 2025) { success++; bugs = 0; //Happy New Year to coder in you!",
        "📊 SELECT happiness, growth FROM life WHERE year = 2025; // May your queries return success!",
        "💻 git commit -m 'Initialize Amazing Year 2025' // Pushing happiness to production!",
        "🔮 async function year2025() { await dreams.fulfill(); return success.infinity; }",
        "🎯 try { const year = new Success(2025); } // catch(challenges) { return overcome(challenges); }",
        "🌟 npm install happiness@2025 --save // Successfully installed future dreams!",
        "🧠 class Year2025 extends Opportunities { constructor() { this.success = Infinity; }}",
        "📈 model.train(dedication, hardwork).then(() => success.achieve());",
        "🎉 function celebrate() { return Array(2025).fill('happiness').map(dream => achieve(dream)); }"
    ];
    
    const messageEl = document.getElementById('message');
    messageEl.style.display = 'block';
    let currentChar = 0;
    const message = messages[Math.floor(Math.random() * messages.length)];
    messageEl.innerText = '';
    messageEl.style.opacity = '1';
    
    // Add typing sound effect
    const typeSound = new Audio('data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA');
    typeSound.volume = 0.2;

    // Add glitch effect class
    messageEl.classList.add('glitch-effect');
    
    const typing = setInterval(() => {
        if(currentChar < message.length) {
            messageEl.innerText += message[currentChar];
            typeSound.currentTime = 0;
            typeSound.play().catch(() => {}); // Ignore audio play errors
            currentChar++;
            
            // Add random glitch effect
            if(Math.random() < 0.1) {
                messageEl.style.textShadow = `
                    ${Math.random() * 4}px ${Math.random() * 4}px #0ff,
                    ${Math.random() * -4}px ${Math.random() * -4}px #f0f
                `;
                setTimeout(() => {
                    messageEl.style.textShadow = 'none';
                }, 50);
            }
        } else {
            clearInterval(typing);
            // Final animation
            messageEl.style.transform = 'scale(1.05)';
            setTimeout(() => {
                messageEl.style.transform = 'scale(1)';
            }, 200);
        }
    }, 50);
}
