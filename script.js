const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
    threshold: 0.2, // Reduced threshold for earlier triggering
    // Adjust as needed
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            //  observer.unobserve(entry.target); // Optional:  Uncomment if you only want the animation once.
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Smoke reanimation (simplified and improved)
const smokeElements = document.querySelectorAll('.smoke');

function reanimateSmoke() {
    smokeElements.forEach(smoke => {
        // 1. Reset animation
        smoke.style.animation = 'none';
        smoke.offsetHeight; // Trigger reflow

        // 2. Randomize size, blur, and *position*
        const size = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        const blur = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        const offsetX = (Math.random() * 200) - 100; // -100 to 100
        const offsetY = (Math.random() * 100) - 50
