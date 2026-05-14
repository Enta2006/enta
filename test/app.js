document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-title').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Board Logic (Skeleton for Firebase)
    const boardList = document.getElementById('board-list');
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
