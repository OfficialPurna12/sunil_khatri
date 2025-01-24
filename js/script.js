window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 255, 200, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Active link handling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
    this.reset();
});