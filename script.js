// --- Fade-in Animation Logic (This applies to the whole page) ---
const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
    threshold: 0.2, // Adjust as needed
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // observer.unobserve(entry.target); // Optional: Uncomment for one-time animation
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// --- Smoke Animation Logic (Now targets the #about section) ---

const smokeElements = document.querySelectorAll('.smoke');

function reanimateSmoke() {
    smokeElements.forEach(smoke => {
        // 1. Reset animation
        smoke.style.animation = 'none';
        smoke.offsetHeight; // Trigger reflow

        // 2. Randomize size, blur, and *position*
        const size = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        const blur = Math.floor(Math.random() * (30 - 1
