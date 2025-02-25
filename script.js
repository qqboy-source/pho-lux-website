const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavLinks() {
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Initial call to set the active link on page load
updateNavLinks();

// Listen for scroll events
window.addEventListener('scroll', updateNavLinks);

const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
    threshold: 0.5
    // Adjust as needed
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // Remove 'active' class on scroll up
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
const heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reanimateSmoke();
        }
    });
});

// Select the Hero Section
const heroSection = document.querySelector('.hero-section');
heroObserver.observe(heroSection);
