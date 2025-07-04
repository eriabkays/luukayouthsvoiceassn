
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');

            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navLinks.classList.remove('active');
                });
            });

            // Form submission
            document.querySelector('.contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
               // alert('Thank you for your message! We will respond shortly.');
                this.reset();
            });

            // Scroll animations
            const animateItems = document.querySelectorAll('.program-card, .gallery-item, .team-member');
            window.addEventListener('scroll', () => {
                animateItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    if (itemTop < window.innerHeight - 100) {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                });
            });
        });
    
