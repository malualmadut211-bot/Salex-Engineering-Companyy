const getBasePath = () => {
    // Determine depth to correctly link assets
    const path = window.location.pathname;
    // If we are in a subdirectory like /pages/, we need to go up one level
    // Also handle GitHub Pages where the path might be /repo-name/pages/
    if (path.includes('/pages/')) {
        return '../';
    }
    return './';
};

const basePath = getBasePath();

const headerHTML = `
<div class="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" id="navbar">
    <div class="max-w-[1280px] mx-auto px-4 md:px-10 py-3">
        <header class="flex items-center justify-between whitespace-nowrap">
            <a href="${basePath}index.html" class="flex items-center gap-4 text-slate-900">
                <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/024eed7c96203a8cfed8fda1799b9037650104f9/0%2C.png" alt="Salex Engineering Logo" class="h-10 w-auto" />
                <h2 class="text-xl font-display font-bold leading-tight tracking-[-0.015em]">Salex Engineering</h2>
            </a>
            
            <div class="hidden lg:flex flex-1 justify-end gap-8 items-center">
                <nav class="flex items-center gap-9" id="desktop-nav">
                    <a href="${basePath}index.html" class="nav-link text-sm font-medium leading-normal text-slate-700 hover:text-primary transition-colors">Home</a>
                    <a href="${basePath}pages/about.html" class="nav-link text-sm font-medium leading-normal text-slate-700 hover:text-primary transition-colors">About</a>
                    <a href="${basePath}pages/services.html" class="nav-link text-sm font-medium leading-normal text-slate-700 hover:text-primary transition-colors">Services</a>
                    <a href="${basePath}pages/projects.html" class="nav-link text-sm font-medium leading-normal text-slate-700 hover:text-primary transition-colors">Projects</a>
                    <a href="${basePath}pages/contact.html" class="nav-link text-sm font-medium leading-normal text-slate-700 hover:text-primary transition-colors">Contact</a>
                </nav>
                <a href="tel:+211926999751" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
                    <span class="truncate">Get a Quote</span>
                </a>
            </div>
            
            <div class="lg:hidden">
                <button id="mobile-menu-btn" class="p-2 text-slate-900">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    </div>
</div>

<!-- Mobile Menu -->
<div id="mobile-menu" class="fixed inset-0 z-40 bg-white pt-20 px-6 hidden flex-col gap-6 lg:hidden">
    <a href="${basePath}index.html" class="nav-link text-lg font-medium text-slate-900">Home</a>
    <a href="${basePath}pages/about.html" class="nav-link text-lg font-medium text-slate-900">About</a>
    <a href="${basePath}pages/services.html" class="nav-link text-lg font-medium text-slate-900">Services</a>
    <a href="${basePath}pages/projects.html" class="nav-link text-lg font-medium text-slate-900">Projects</a>
    <a href="${basePath}pages/contact.html" class="nav-link text-lg font-medium text-slate-900">Contact</a>
    <a href="tel:+211926999751" class="mt-4 flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold">
        Get a Quote
    </a>
</div>
`;

const footerHTML = `
<div class="w-full bg-white text-slate-900 pt-20 pb-10 mt-auto border-t border-slate-200">
    <div class="max-w-[1280px] mx-auto px-4 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 border-b border-slate-200 pb-16">
            <div class="flex flex-col gap-6">
                <div class="flex items-center gap-3">
                    <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/024eed7c96203a8cfed8fda1799b9037650104f9/0%2C.png" alt="Salex Engineering Logo" class="h-10 w-auto" />
                    <h2 class="text-xl font-display font-bold">Salex Engineering</h2>
                </div>
                <p class="text-slate-600 text-sm leading-relaxed">
                    A premier construction and engineering firm in South Sudan dedicated to building the future with integrity and innovation.
                </p>
                <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <span class="font-bold">fb</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <span class="font-bold">in</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <span class="font-bold">x</span>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6">Quick Links</h3>
                <ul class="flex flex-col gap-3">
                    <li><a href="${basePath}index.html" class="text-slate-600 hover:text-primary transition-colors text-sm">Home</a></li>
                    <li><a href="${basePath}pages/about.html" class="text-slate-600 hover:text-primary transition-colors text-sm">About Us</a></li>
                    <li><a href="${basePath}pages/services.html" class="text-slate-600 hover:text-primary transition-colors text-sm">Services</a></li>
                    <li><a href="${basePath}pages/projects.html" class="text-slate-600 hover:text-primary transition-colors text-sm">Our Projects</a></li>
                    <li><a href="${basePath}pages/contact.html" class="text-slate-600 hover:text-primary transition-colors text-sm">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6">Contact Us</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                        <span class="text-slate-600 text-sm">Plot 45, Tongping, Juba,<br/>South Sudan</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary text-xl">call</span>
                        <span class="text-slate-600 text-sm">+211 926 999 751</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-[#25D366] text-xl">chat</span>
                        <span class="text-slate-600 text-sm">+211 922 014 496 (WhatsApp)</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary text-xl">mail</span>
                        <span class="text-slate-600 text-sm">info@salexengineering.com</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary text-xl">schedule</span>
                        <span class="text-slate-600 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2024 Salex Engineering Company. All rights reserved.</p>
            <div class="flex gap-6">
                <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
</div>
`;

const floatingButtonsHTML = `
<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a href="https://wa.me/211922014496" target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl">
        <svg class="w-8 h-8 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
    </a>
    <button id="scroll-to-top" class="w-14 h-14 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors opacity-0 invisible translate-y-4 duration-300">
        <span class="material-symbols-outlined">arrow_upward</span>
    </button>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Header and Footer
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Inject floating buttons
    document.body.insertAdjacentHTML('beforeend', floatingButtonsHTML);

    // Highlight active link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('./', '').replace('../', '');
        if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.remove('text-slate-700');
            link.classList.add('text-primary');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            const icon = mobileMenuBtn.querySelector('span');
            if (mobileMenu.classList.contains('hidden')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
    }

    // Navbar scroll effect & Scroll to top button
    const navbar = document.getElementById('navbar');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            if (navbar) navbar.classList.add('shadow-sm');
        } else {
            if (navbar) navbar.classList.remove('shadow-sm');
        }
        
        if (window.scrollY > 300) {
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                scrollToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
            }
        } else {
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
                scrollToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Modal functions for projects page
window.openModal = function(title, category, location, imageSrc) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-category').textContent = category;
    document.getElementById('modal-location').textContent = location;
    document.getElementById('modal-image').src = imageSrc;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

window.closeModal = function() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = ''; // Restore scrolling
};
