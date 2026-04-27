document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('#navMenu a');
    const spans = menuBtn.querySelectorAll('span');

    // Toggle Mobile Menu
    menuBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        
        if (isOpen) {
            // Animate hamburger to X
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            // Reset to hamburger
            resetHamburger();
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            resetHamburger();
        });
    });

    function resetHamburger() {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    // Optional: Close menu if window is resized above 992px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('active');
            resetHamburger();
        }
    });
});