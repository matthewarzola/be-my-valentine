const partner = "Jacelyn Engreso";

document.getElementById("partnerName").textContent = partner;
document.getElementById("celebrateMessage").textContent =
"🎉 YEY SEE YOU " + partner + " I LOVE YOU 💕 🎆";

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const buttonsDiv = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("modal");
const heartsContainer = document.getElementById("hearts");
const heartsDisplay = document.querySelectorAll("#heartsDisplay .heart");

let noClicks = 0;
const maxHearts = 5;

const noMessages = [
"Are you sure?",
"Really?",
"Think again 😢",
"Please? 🥺",
"Last chance? 💔"
];

/* Floating hearts */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);

/* Open envelope */
openBtn.addEventListener("click", () => {
    envelope.classList.add("open");
    openBtn.style.display = "none";
    setTimeout(() => buttonsDiv.style.display = "block", 2000);
});

/* NO button */
noBtn.addEventListener("click", () => {
    if (noClicks < maxHearts) {
        // Break a heart - turn it black
        heartsDisplay[maxHearts - 1 - noClicks].classList.add('broken');
        
        // Change button text
        noBtn.textContent = noMessages[noClicks];
        
        noClicks++;
        
        // If all hearts are broken, reset
        if (noClicks === maxHearts) {
            setTimeout(() => {
                alert("💔 All hearts broken! Let's try again... 💖");
                resetGame();
            }, 300);
        }
    }
});

/* YES button */
yesBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    launchFireworks();
});

/* Fireworks */
function launchFireworks() {
    for (let i = 0; i < 100; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = "50%";
        firework.style.top = "50%";
        firework.style.background =
            `hsl(${Math.random()*360},100%,50%)`;
        firework.style.setProperty('--x',
            (Math.random()-0.5)*500 + "px");
        firework.style.setProperty('--y',
            (Math.random()-0.5)*500 + "px");
        modal.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

/* Reset */
function resetGame() {
    noClicks = 0;
    noBtn.textContent = "NO";
    
    // Restore all hearts - remove broken class
    heartsDisplay.forEach(heart => {
        heart.classList.remove('broken');
    });
}