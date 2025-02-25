// Here for Javascript
// Fade-in on scroll
        const faders = document.querySelectorAll('.fade-in-on-scroll');

        const appearOptions = {
            threshold: 0.5 // Adjust as needed
        };

        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove('active');  // Remove 'active' class on scroll up
                }
            })
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
