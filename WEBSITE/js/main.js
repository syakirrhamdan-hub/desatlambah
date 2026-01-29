document.addEventListener('DOMContentLoaded', function () {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'navbar-light');
            navbar.classList.remove('navbar-dark');
        } else {
            navbar.classList.remove('scrolled', 'navbar-light');
            navbar.classList.add('navbar-dark');
        }
    });

    // Close mobile menu on click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    // Smooth Scroll for Anchor Links (Optional, CSS scroll-behavior: smooth handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Submission Placeholder
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah kami terima.\n(Ini adalah demo, pesan tidak terkirim ke server)');
            form.reset();
        });
    }

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));



});
