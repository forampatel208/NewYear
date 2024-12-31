// Function to create Matrix Rain Effect
function createMatrixRain() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm0123456789!~@#$%^&*()-<>+=";
    const container = document.body;

    setInterval(() => {
        const el = document.createElement("div");
        el.className = "matrix-text";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = Math.random() * 2 + 1 + "s";
        el.innerText = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(el);

        const animation = el.animate(
            [
                { transform: "translateY(-100vh)" },
                { transform: "translateY(100vh)" }
            ],
            {
                duration: Math.random() * 2000 + 3000,
                easing: "linear"
            }
        );

        animation.onfinish = () => el.remove();
    }, 50);
}

// Function to simulate the loading screen
function simulateLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading");
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            createMatrixRain();
        }, 500); // Matches the CSS transition duration
    }, 3000);
}

// Function to reveal the "Decrypt Future" message
function revealMessage() {
    const messages = [
        "🚀 FUTURE SCAN COMPLETE: 2025 is your year to innovate and inspire!",
        "💫 QUANTUM PREDICTION: Epic achievements loading... Success imminent!",
        "⚡️ SYSTEM UPGRADE: Your potential has been maximized for 2025!",
        "🎯 ALGORITHM FORECAST: Exceptional success rate detected ahead!",
        "💎 FUTURE DATABASE UNLOCKED: Your dreams are scheduled for reality!"
    ];

    const surpriseMessage = "🎉 SURPRISE UNLOCKED: You are destined for a groundbreaking invention in 2025! 💡";
    const messageEl = document.getElementById("message");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let currentChar = 0;

    messageEl.style.display = "block";
    messageEl.style.opacity = "1";
    messageEl.innerText = "";

    const typingEffect = setInterval(() => {
        if (currentChar < randomMessage.length) {
            messageEl.innerText += randomMessage[currentChar];
            currentChar++;
        } else {
            clearInterval(typingEffect);

            // Trigger the surprise message after a delay
            if (Math.random() < 0.3) { // 30% chance to reveal the surprise
                setTimeout(() => {
                    const surpriseEl = document.createElement("div");
                    surpriseEl.className = "surprise";
                    surpriseEl.innerText = surpriseMessage;
                    document.body.appendChild(surpriseEl);

                    surpriseEl.animate(
                        [
                            { transform: "scale(0)" },
                            { transform: "scale(1.2)" },
                            { transform: "scale(1)" }
                        ],
                        {
                            duration: 1000,
                            easing: "ease-out"
                        }
                    );
                }, 1000);
            }
        }
    }, 50);
}

// Initialize the script on page load
window.onload = function () {
    simulateLoadingScreen();
};

// Easter Egg Trigger
document.addEventListener("keydown", (event) => {
    if (event.key === "s") { // 's' for "surprise"
        const surpriseMessage = "✨ You've discovered a secret! Stay curious!";
        const surpriseEl = document.createElement("div");
        surpriseEl.className = "surprise";
        surpriseEl.innerText = surpriseMessage;
        document.body.appendChild(surpriseEl);

        surpriseEl.animate(
            [
                { transform: "scale(0)" },
                { transform: "scale(1.2)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 1000,
                easing: "ease-out"
            }
        );
    }
});
