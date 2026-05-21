document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const navLinksList = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a, .logo');
    const menuToggle = document.getElementById('menu-toggle');

    function showSection(id) {
        // Remove '#' if present
        const targetId = id.replace('#', '');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Hide all sections
            sections.forEach(s => s.classList.remove('active'));
            // Show target section
            targetSection.classList.add('active');

            // Reset scroll position
            window.scrollTo(0, 0);

            // Optional: Update URL hash without jumping
            if (window.location.hash !== `#${targetId}`) {
                history.pushState(null, null, `#${targetId}`);
            }

            // Update Nav Links
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${targetId}` || (targetId === 'hero' && link.classList.contains('logo'))) {
                    link.classList.add('nav-active');
                } else {
                    link.classList.remove('nav-active');
                }
            });
        }
    }

    // Nav click events
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                showSection(href);
                // Close mobile menu after click
                if (navLinksList) {
                    navLinksList.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
        });
    }

    // Initialize - show hash if exists, else show hero
    const initialSection = window.location.hash || '#hero';
    showSection(initialSection);

    // Board Logic (Skeleton for Firebase)
    const writeBtn = document.getElementById('write-btn');

    if (writeBtn) {
        writeBtn.addEventListener('click', () => {
            alert('Firebase 연동 후 글쓰기 기능을 사용할 수 있습니다. 가이드를 확인해 주세요!');
        });
    }



    // Search button alert
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('검색 기능은 현재 준비 중입니다.');
        });
    }
});
