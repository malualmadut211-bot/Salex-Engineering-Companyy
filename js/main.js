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
<div class="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-[#111418]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" id="navbar">
    <div class="max-w-[1280px] mx-auto px-4 md:px-10 py-3">
        <header class="flex items-center justify-between whitespace-nowrap">
            <a href="${basePath}index.html" class="flex items-center gap-4 text-slate-900 dark:text-white">
                <div class="w-8 h-8 text-blue-600">
                    <span class="material-symbols-outlined text-3xl">engineering</span>
                </div>
                <h2 class="text-xl font-display font-bold leading-tight tracking-[-0.015em]">Salex Engineering</h2>
            </a>
            
            <div class="hidden lg:flex flex-1 justify-end gap-8 items-center">
                <nav class="flex items-center gap-9" id="desktop-nav">
                    <a href="${basePath}index.html" class="nav-link text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</a>
                    <a href="${basePath}pages/about.html" class="nav-link text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</a>
                    <a href="${basePath}pages/services.html" class="nav-link text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Services</a>
                    <a href="${basePath}pages/projects.html" class="nav-link text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</a>
                    <a href="${basePath}pages/contact.html" class="nav-link text-sm font-medium leading-normal text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</a>
                </nav>
                <a href="${basePath}pages/contact.html" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    <span class="truncate">Get a Quote</span>
                </a>
            </div>
            
            <div class="lg:hidden">
                <button id="mobile-menu-btn" class="p-2 text-slate-900 dark:text-white">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    </div>
</div>

<!-- Mobile Menu -->
<div id="mobile-menu" class="fixed inset-0 z-40 bg-white dark:bg-[#111418] pt-20 px-6 hidden flex-col gap-6 lg:hidden">
    <a href="${basePath}index.html" class="nav-link text-lg font-medium text-slate-900 dark:text-white">Home</a>
    <a href="${basePath}pages/about.html" class="nav-link text-lg font-medium text-slate-900 dark:text-white">About</a>
    <a href="${basePath}pages/services.html" class="nav-link text-lg font-medium text-slate-900 dark:text-white">Services</a>
    <a href="${basePath}pages/projects.html" class="nav-link text-lg font-medium text-slate-900 dark:text-white">Projects</a>
    <a href="${basePath}pages/contact.html" class="nav-link text-lg font-medium text-slate-900 dark:text-white">Contact</a>
    <a href="${basePath}pages/contact.html" class="mt-4 flex items-center justify-center rounded-lg h-12 bg-blue-600 text-white text-base font-bold">
        Get a Quote
    </a>
</div>
`;

const footerHTML = `
<div class="w-full bg-[#0b1116] text-white pt-20 pb-10 mt-auto">
    <div class="max-w-[1280px] mx-auto px-4 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 border-b border-slate-800 pb-16">
            <div class="flex flex-col gap-6">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 text-blue-600">
                        <span class="material-symbols-outlined text-3xl">engineering</span>
                    </div>
                    <h2 class="text-xl font-display font-bold">Salex Engineering</h2>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed">
                    A premier construction and engineering firm in South Sudan dedicated to building the future with integrity and innovation.
                </p>
                <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                        <span class="font-bold">fb</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                        <span class="font-bold">in</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                        <span class="font-bold">x</span>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6">Quick Links</h3>
                <ul class="flex flex-col gap-3">
                    <li><a href="${basePath}index.html" class="text-slate-400 hover:text-blue-600 transition-colors text-sm">Home</a></li>
                    <li><a href="${basePath}pages/about.html" class="text-slate-400 hover:text-blue-600 transition-colors text-sm">About Us</a></li>
                    <li><a href="${basePath}pages/services.html" class="text-slate-400 hover:text-blue-600 transition-colors text-sm">Services</a></li>
                    <li><a href="${basePath}pages/projects.html" class="text-slate-400 hover:text-blue-600 transition-colors text-sm">Our Projects</a></li>
                    <li><a href="${basePath}pages/contact.html" class="text-slate-400 hover:text-blue-600 transition-colors text-sm">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-6">Contact Us</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-blue-600 text-xl mt-0.5">location_on</span>
                        <span class="text-slate-400 text-sm">Plot 45, Tongping, Juba,<br/>South Sudan</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-blue-600 text-xl">call</span>
                        <span class="text-slate-400 text-sm">+211 912 345 678</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-blue-600 text-xl">mail</span>
                        <span class="text-slate-400 text-sm">info@salexengineering.com</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-blue-600 text-xl">schedule</span>
                        <span class="text-slate-400 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</span>
                    </li>
                </ul>
            </div>
            
            <div class="h-48 w-full rounded-lg overflow-hidden bg-slate-800 relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA00Ve3qD-8wxvekyVsOwbHM4Vg3r9iRSUAozL9tLyVg15bX2SQwuPN0qyUVYVJvQOlYjMlGptp4MPZ8x90rfsWZsECnItxd0ImgQmSnOjVriD4qF89uH_OqGkU2JKRQ1h7OvBHQouKYxlWJAxTtW_ZQ1BS1_g0g0neqU3VNmxwKDsksirE10RwPQ2BMJbEV5htwrjApUq6dFKndzF3XLjUOWLR7pmv6lNrPbwyjmVmLKQgWtPOLCyhpWi9t9EJj2qtWCDXs0Gx7w" alt="Map showing Juba location" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <a href="${basePath}pages/contact.html" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2 transition-colors">
                        <span class="material-symbols-outlined text-sm">map</span> Open Map
                    </a>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2024 Salex Engineering Company. All rights reserved.</p>
            <div class="flex gap-6">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
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

    // Highlight active link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('./', '').replace('../', '');
        if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.remove('text-slate-700', 'dark:text-slate-300');
            link.classList.add('text-blue-600');
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

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }
});
