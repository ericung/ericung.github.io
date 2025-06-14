document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update copyright year dynamically
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Simple scroll animation (example)
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the section must be visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in'); // Optional: remove on scroll out
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add CSS for fade-in effect (add this to your style.css)
    /*
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    section {
        opacity: 0;
        transform: translateY(20px);
    }
    */
});