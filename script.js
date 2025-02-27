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

// --- Smoke Animation Logic Removed ---

// Back to Top Button Functionality (remains unchanged)
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

// Function to adjust the about image height
function adjustAboutImageHeight() {
    const aboutImage = document.getElementById('about-image');
    const aboutText = document.querySelector('#about .col-md-6:last-child'); // Select the text container
    if (aboutImage && aboutText) {
        aboutImage.style.height = `${aboutText.offsetHeight}px`;
    }
}

// Call the function on page load and window resize
window.addEventListener('load', adjustAboutImageHeight);
window.addEventListener('resize', adjustAboutImageHeight);
