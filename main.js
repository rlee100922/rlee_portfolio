/* ===========================
   MINIMAL CLEAN PORTFOLIO
   JavaScript
   ============================ */

document.addEventListener('DOMContentLoaded', function() {
    setupScrollToTop();
    setupSmoothScroll();
    setupNavigation();
});

/* SCROLL TO TOP */
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* SMOOTH SCROLL FOR NAVIGATION */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ACTIVE NAVIGATION */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        updateActiveNav(navLinks, sections);
    });
}

function updateActiveNav(navLinks, sections) {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.opacity = '0.6';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.opacity = '1';
        }
    });
}

/* KEYBOARD SHORTCUTS */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (e.key === 'End') {
        e.preventDefault();
        const footer = document.querySelector('.footer');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    }
});
    if (timeElement) {
        timeElement.textContent = timeString;
    }


/* ===================================
   SCROLL TO TOP FUNCTIONALITY
   =================================== */
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    const floatingBtn = document.getElementById('floatingScrollBtn');
    
    if (!scrollBtn || !floatingBtn) return;
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 300) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    });
    
    // Scroll to top on button click
    scrollBtn.addEventListener('click', scrollToTop);
    floatingBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ===================================
   SMOOTH SCROLL FOR NAVIGATION
   =================================== */
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignore if it's just "#"
            if (targetId === '#') {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===================================
   NAVIGATION ACTIVE STATE
   =================================== */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        updateActiveNavLink(navLinks, sections);
    });
    
    // Initial check
    updateActiveNavLink(navLinks, sections);
}

function updateActiveNavLink(navLinks, sections) {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* ===================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   =================================== */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card, .info-box, .resume-column, .skills-column').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===================================
   KEYBOARD SHORTCUTS
   =================================== */
document.addEventListener('keydown', function(e) {
    // Home key - scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
    }
    
    // End key - scroll to bottom
    if (e.key === 'End') {
        e.preventDefault();
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/* ===================================
   START MENU ANIMATION
   =================================== */
const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        // Could implement a start menu here
        console.log('Start menu clicked!');
    });
}

/* ===================================
   ACTIVE NAV LINK STYLING
   =================================== */
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-green);
        text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
    }
    
    .nav-link.active::before {
        transform: scaleX(1);
    }
`;
document.head.appendChild(style);

/* ===================================
   PARALLAX EFFECT FOR SECTIONS
   =================================== */
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.geometric-shape');
    const scrollPosition = window.scrollY;
    
    parallaxElements.forEach(el => {
        const yPosition = scrollPosition * 0.5;
        el.style.transform = `translateY(${yPosition}px)`;
    });
});

/* ===================================
   INTERACTIVE PROJECT CARDS
   =================================== */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 40px rgba(0, 255, 136, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.1)';
    });
});

/* ===================================
   RESPONSIVE MENU TOGGLE (if needed)
   =================================== */
const navMenu = document.querySelector('.nav-menu');
const navContent = document.querySelector('.nav-content');

// Adjust nav if window is too small
function updateNavLayout() {
    if (window.innerWidth < 1024) {
        // Could add mobile menu logic here
    }
}

window.addEventListener('resize', updateNavLayout);
updateNavLayout();

/* ===================================
   CUSTOM CONSOLE MESSAGE
   =================================== */
console.log('%c▓▓▓ RETRO CYBERPUNK PORTFOLIO ▓▓▓', 'color: #00ff88; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to the portfolio | Status: ONLINE', 'color: #00d4ff; font-size: 12px;');
console.log('%c» Scroll to explore | Press Home to jump to top', 'color: #ffaa00; font-size: 11px;');
