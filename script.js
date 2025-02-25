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

// Function to reanimate the smoke
function reanimateSmoke() {
    smokeElements.forEach(smoke => {
        // Get existing animation name
        const animName = smoke.style.animationName;

        // Remove current animation.
        smoke.style.animation = 'none';

        // Trigger reflow = flush the changes
        smoke.offsetHeight;

        // Trigger animation
        smoke.style.animation = animName;
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
