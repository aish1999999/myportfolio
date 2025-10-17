// ===================================
// Navigation & Scroll Effects
// ===================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update scroll progress bar
    const scrollProgress = document.getElementById('scrollProgress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;

    // Show/hide back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Typing Animation for Hero Section
// ===================================
const typedTextElement = document.querySelector('.typed-text');
const typedCursor = document.querySelector('.typed-cursor');

const textArray = [
    'Industrial Engineer',
    'Process Optimizer',
    'Data Analyst',
    'Digital Twin Developer',
    'Systems Engineer'
];

let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function type() {
    const currentText = textArray[textArrayIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        typingDelay = 500;
    }

    setTimeout(type, typingDelay);
}

// Start typing animation after page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.section-title h2, .section-subtitle, .about-content, .timeline-item, ' +
        '.project-card, .skill-category, .education-card, .contact-item'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===================================
// Counter Animation for Stats
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// ===================================
// Dynamic Year in Footer
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('.footer-copy p');
    yearElements.forEach(el => {
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', new Date().getFullYear());
        }
    });
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===================================
// Scroll-triggered Animations for Timeline
// ===================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// ===================================
// Lazy Loading for Images (if any)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ===================================
// Keyboard Navigation Accessibility
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard navigation for buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .mobile-nav-link');

    interactiveElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
});

// ===================================
// Contact Form Validation (if form is added)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // If validation passes, you can submit the form
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// ===================================
// External Link Handling
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===================================
// Loading Animation (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Remove any loading overlay if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello, curious engineer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in how this portfolio was built?', 'color: #f093fb; font-size: 14px;');
console.log('%cFeel free to reach out: ayeshwarm@gmail.com', 'color: #b8b8d1; font-size: 12px;');
console.log('%c---', 'color: #8888aa;');
console.log('%cEngineering smarter systems, one line of code at a time.', 'color: #667eea; font-style: italic; font-size: 12px;');

// ===================================
// Theme Toggle (Optional Feature)
// ===================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        // Check for saved theme preference or default to dark
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);

        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);

// ===================================
// Error Handling for Missing Resources
// ===================================
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Optionally set a fallback image
        // e.target.src = 'path/to/fallback-image.png';
    }
}, true);

// ===================================
// Analytics Event Tracking (Optional)
// ===================================
function trackEvent(category, action, label) {
    // If you add Google Analytics or similar, track events here
    console.log('Event tracked:', { category, action, label });
}

// Track project link clicks
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const projectName = e.target.closest('.project-card')?.querySelector('h3')?.textContent;
            trackEvent('Projects', 'Click', projectName);
        });
    });
});

// Track contact link clicks
document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('.contact-details a');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const contactType = e.target.textContent;
            trackEvent('Contact', 'Click', contactType);
        });
    });
});

// ===================================
// Prefetch Resources for Better Performance
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Prefetch important resources
    const importantLinks = [
        'projects/tesla-market-analysis/Tesla_Market_Analysis.pdf',
        'projects/waymo-autonomous-logistics/waymo_integration_analysis.pdf'
    ];

    importantLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    });
});

// ===================================
// Service Worker Registration (PWA Support)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// ===================================
// Print Optimization
// ===================================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.pageBreakInside = 'avoid';
    });
});

// ===================================
// Copy to Clipboard Functionality
// ===================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
        // Show a toast notification if implemented
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Add copy functionality to email addresses
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('contextmenu', (e) => {
            // Right-click to copy email
            const email = link.href.replace('mailto:', '');
            copyToClipboard(email);
        });
    });
});
