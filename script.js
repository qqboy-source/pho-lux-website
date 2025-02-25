// Fade-in on scroll functionality
const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Smoke animation functionality
const smokeElements = document.querySelectorAll('.smoke');

function reanimateSmoke() {
    smokeElements.forEach(smoke => {
        const animName = smoke.style.animationName;
        smoke.style.animation = 'none';
        void smoke.offsetWidth; // Trigger reflow
        smoke.style.animation = 'fastBlow 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    });
}

// Reanimate smoke every 3 seconds
setInterval(reanimateSmoke, 3000);

// Initial animation
reanimateSmoke();
