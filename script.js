// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe cert cards
document.querySelectorAll('.cert-card').forEach(card => {
    observer.observe(card);
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent-color)';
        } else {
            link.style.color = 'var(--text-light)';
        }
    });
});

// Scroll to top button functionality
window.addEventListener('scroll', () => {
    // Add subtle navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(59, 130, 246, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Typewriter effect for hero subtitle (optional enhancement)
function typewriterEffect() {
    const text = document.querySelector('.hero-subtitle');
    if (!text) return;
    
    const originalText = text.textContent;
    text.textContent = '';
    let index = 0;

    function type() {
        if (index < originalText.length) {
            text.textContent += originalText[index];
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add animation delay to elements
    const observableElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .project-card, .cert-card, .overview-box'
    );

    observableElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `none`;
    });

    // Use intersection observer to animate on scroll
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    observableElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Typewriter effect
    typewriterEffect();
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add copy email functionality to email contact
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', function(e) {
        // Allow default behavior but you could add a copy notification here
        const email = 'sr6760.sr@gmail.com';
        navigator.clipboard.writeText(email).catch(err => {
            console.log('Could not copy email');
        });
    });
}

// Intersection Observer for navbar style updates
const heroSection = document.querySelector('.hero');
const navObserver = new IntersectionObserver((entries) => {
    const navbar = document.querySelector('.navbar');
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.style.boxShadow = '0 2px 20px rgba(59, 130, 246, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}, { threshold: 0 });

if (heroSection) {
    navObserver.observe(heroSection);
}

// Performance: Lazy load images if added in future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add focus styles for keyboard navigation
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-color)';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('Portfolio script loaded successfully');
