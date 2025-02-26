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

//
