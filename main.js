document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    // Toggle Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Optional: Animate the hamburger to an 'X'
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
    });
}

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Active Link highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // UI Feedback
            const submitBtn = contactForm.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';

            // Simulate API Call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
                
                // Show success message
                formResponse.innerText = `Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you soon.`;
                formResponse.className = 'success';
                formResponse.style.display = 'block';
                
                // Reset form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formResponse.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // 6. Simple Stats Counter Animation
    const statsNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        statsNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const current = 0;
            const increment = target / 100;
            
            const updateCount = () => {
                const val = +stat.innerText.replace('+', '');
                if (val < target) {
                    stat.innerText = Math.ceil(val + increment) + '+';
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target + '+';
                }
            };
            updateCount();
        });
    };

    // Trigger animation when stats section is in view
    const statsSection = document.querySelector('.stats');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, observerOptions);

    if (statsSection) {
        observer.observe(statsSection);
    }
});
