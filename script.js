const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
    threshold: 0.2, // Reduced threshold for earlier triggering
    // Adjust as needed
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once active
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Select all smoke elements
const smokeElements = document.querySelectorAll('.smoke');

// Function to reanimate the smoke AND set random sizes/blur
function reanimateSmoke() {
    smokeElements.forEach(smoke => {
        // 1. Remove current animation.
        smoke.style.animation = 'none';

        // 2. Randomize size and blur.  THIS IS THE KEY CHANGE.
        const size = Math.floor(Math.random() * (200 - 80 + 1)) + 80; // Random between 80 and 200
        const blur = Math.floor(Math.random() * (30 - 10 + 1)) + 10;  // Random between 10 and 30
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        smoke.style.filter = `blur(${blur}px)`;

        // 3. Trigger reflow = flush the changes
        smoke.offsetHeight;

        // 4. Trigger animation.
        smoke.style.animation = 'fastBlow 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards'; // Re-add with consistent timing
    });
}

// Hero section observer to run the smoke
const heroObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reanimateSmoke();
        }
    });
});

// Select the Hero Section
const heroSection = document.querySelector('.hero-section');
heroObserver.observe(heroSection);


// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
