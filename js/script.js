/* 
=========================
  NINJA THEME PORTFOLIO
  JavaScript Functions
=========================
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    initTyped();
    
    // Initialize the navigation menu
    initNav();
    
    // Initialize the shuriken cursor
    initShurikenCursor();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize scroll animations
    initScrollAnimations();
      // Initialize form validation
    initContactForm();
    
    // Initialize resume viewer
    initResumeViewer();
});

// Initialize Typed.js for text animation
function initTyped() {
    if (document.getElementById('typed')) {
        const typed = new Typed('#typed', {
            strings: [
                'Computer Science Student | Android Developer',
                'Kotlin | Jetpack Compose | Java | XML',
                'MERN Stack Developer',
                'Custom Software Solutions'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            smartBackspace: true
        });
    }
}

// Handle navigation menu
function initNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }
    
    // Add scroll event for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
    
    // Close mobile menu when clicking on a nav item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });
}

// Ninja-themed shuriken cursor
function initShurikenCursor() {
    const cursor = document.querySelector('.shuriken-cursor');
    
    if (cursor) {
        // Set initial state
        cursor.style.display = 'block';
        
        // Follow mouse movement
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            // Add ninja throwing effect on mouse move
            cursor.animate([
                { transform: 'translate(-50%, -50%) rotate(0deg)' },
                { transform: 'translate(-50%, -50%) rotate(360deg)' }
            ], {
                duration: 1000,
                iterations: 1
            });
        });
        
        // Ninja effect on click
        document.addEventListener('click', () => {
            // Add click animation
            cursor.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0.5 },
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
            ], {
                duration: 500,
                iterations: 1
            });
            
            // Create ninja star particle effect
            createNinjaParticles(cursor);
        });
    }
}

// Create ninja particles for click effect
function createNinjaParticles(cursor) {
    const particleCount = 8;
    const colors = ['#FFDE00', '#FFB800', '#FFF'];
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        
        // Set particle style
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 10px rgba(255, 222, 0, 0.8)';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9998';
        
        // Position at cursor
        const rect = cursor.getBoundingClientRect();
        particle.style.left = rect.left + 'px';
        particle.style.top = rect.top + 'px';
        
        // Add to DOM
        container.appendChild(particle);
        
        // Calculate random angle and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        
        // Animate and remove
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, 
                opacity: 0 
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0,0,0.2,1)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    // Intersection Observer for fade-in elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe section headers, skill items, project cards, etc.
    const elements = document.querySelectorAll('.section-header, .skill, .project-card, .contact-card');
    elements.forEach(element => {
        // Add animation class
        element.classList.add('fade-in');
        // Observe element
        observer.observe(element);
    });
    
    // Add ninja trail effect for scrolling
    window.addEventListener('scroll', () => {
        if (Math.random() > 0.97) { // Occasional effect
            createNinjaScrollEffect();
        }
    });
}

// Create ninja effects during scrolling
function createNinjaScrollEffect() {
    const particle = document.createElement('span');
    
    // Random position on screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Set particle style
    particle.style.position = 'fixed';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = '#FFDE00';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 20px rgba(255, 222, 0, 0.8)';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9';
    particle.style.opacity = '0';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Add to DOM
    document.body.appendChild(particle);
    
    // Animate and remove
    particle.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 1 },
        { transform: 'scale(1) rotate(180deg)', opacity: 0.8 },
        { transform: 'scale(0) rotate(360deg)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => {
        particle.remove();
    };
}

// Contact form validation and submission
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormAlert('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormAlert('Please enter a valid email', 'error');
                return;
            }
            
            // Show success message (in a real site, you would send data to server)
            showFormAlert('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Function to validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Show alert message for form
function showFormAlert(message, type) {
    // Remove existing alert if any
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `form-alert ${type}`;
    alert.textContent = message;
    
    // Add to form
    const form = document.querySelector('.contact-form');
    form.parentNode.insertBefore(alert, form);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => alert.remove(), 500);
    }, 4000);
}

// Add CSS for form alerts
document.head.insertAdjacentHTML('beforeend', `
<style>
.form-alert {
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    animation: slideIn 0.3s ease;
}
.form-alert.success {
    background-color: rgba(0, 255, 0, 0.1);
    border-left: 4px solid #FFDE00;
    color: #FFDE00;
}
.form-alert.error {
    background-color: rgba(255, 0, 0, 0.1);
    border-left: 4px solid #ff3333;
    color: #ff3333;
}
.form-alert.fade-out {
    opacity: 0;
    transition: opacity 0.5s;
}
@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in.animate {    opacity: 1;
    transform: translateY(0);
}
</style>
`);