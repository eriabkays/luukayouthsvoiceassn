
 
        document.addEventListener('DOMContentLoaded', function() {
            // Form submission handling
            const form = document.querySelector('form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = '#e74c3c';
                    } else {
                        field.style.borderColor = '#ddd';
                    }
                });
                
                if (isValid) {
                    // Show success message
                    alert('Thank you for your application! We have received your information and will contact you soon.');
                    
                    // Reset form
                    form.reset();
                    
                    // Scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    alert('Please fill in all required fields marked with *.');
                }
            });
            
            // Add smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });