// Resume Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the resume
    initResume();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add interactive features
    addInteractiveFeatures();
});

function initResume() {
    console.log('Resume website initialized');
    
    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

function addSmoothScrolling() {
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('slide-in-left');
        observer.observe(item);
    });
    
    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(category => {
        category.classList.add('scale-in');
        observer.observe(category);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('slide-in-up');
        observer.observe(card);
    });
}

function addInteractiveFeatures() {
    // Add hover effects for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click effects for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add a temporary highlight effect
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 200);
        });
    });
    
    // Add project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add print button enhancement
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    }
}

// Add CSS animations dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .slide-in-left {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.6s ease;
        }
        
        .slide-in-left.animate-in {
            opacity: 1;
            transform: translateX(0);
        }
        
        .slide-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .slide-in-up.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .scale-in {
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.6s ease;
        }
        
        .scale-in.animate-in {
            opacity: 1;
            transform: scale(1);
        }
        
        /* Stagger animations for timeline items */
        .timeline-item:nth-child(1) { transition-delay: 0.1s; }
        .timeline-item:nth-child(2) { transition-delay: 0.2s; }
        .timeline-item:nth-child(3) { transition-delay: 0.3s; }
        
        /* Stagger animations for skill categories */
        .skill-category:nth-child(1) { transition-delay: 0.1s; }
        .skill-category:nth-child(2) { transition-delay: 0.2s; }
        .skill-category:nth-child(3) { transition-delay: 0.3s; }
        .skill-category:nth-child(4) { transition-delay: 0.4s; }
        
        /* Stagger animations for project cards */
        .project-card:nth-child(1) { transition-delay: 0.1s; }
        .project-card:nth-child(2) { transition-delay: 0.2s; }
    `;
    document.head.appendChild(style);
}

// Initialize animations
addAnimationStyles();

// Add some utility functions
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

// Optimize scroll performance
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations or effects here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Print resume with Ctrl/Cmd + P
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
    
    // Escape key to close any open modals or overlays
    if (e.key === 'Escape') {
        // Handle escape key functionality
    }
});

// Add accessibility improvements
function improveAccessibility() {
    // Add ARIA labels and roles where needed
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.setAttribute('role', 'region');
        section.setAttribute('aria-labelledby', `section-${index}`);
    });
    
    // Add focus indicators for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .skill-tag, .project-card');
    interactiveElements.forEach(element => {
        element.setAttribute('tabindex', '0');
    });
}

// Initialize accessibility improvements
improveAccessibility();

// Add a simple theme toggle (you can expand this)
function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Position it in the header
    const header = document.querySelector('.header');
    header.appendChild(themeToggle);
    
    // Add theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Initialize theme toggle
addThemeToggle();
