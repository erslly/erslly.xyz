
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector('.cursor');
    const cursorTracker = document.querySelector('.cursor-tracker');

    cursor.style.opacity = '0';
    cursorTracker.style.opacity = '0';

    document.addEventListener('mousemove', (e) => {
        const x = e.pageX;
        const y = e.pageY;

        // Mouse pozisyonuna göre cursorTracker'ı hareket ettiriyoruz
        cursorTracker.style.transform = `translate(${x - 7.5}px, ${y - 7.5}px)`;
        cursorTracker.style.opacity = '1';

        setTimeout(() => {
            const trackerRect = cursorTracker.getBoundingClientRect();
            

            cursor.style.transform = `translate(${trackerRect.left - 20}px, ${trackerRect.top - 20}px)`;
            cursor.style.opacity = '1';
        }, 50);
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorTracker.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorTracker.style.opacity = '1';
    });
});


window.onbeforeunload = function () {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.transform = 'scaleX(1)';
    document.body.style.overflow = 'hidden';
};

window.onload = function () {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.transform = 'scaleX(0)';
    document.body.style.overflow = 'auto';
};
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function createCircle() {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const startSide = Math.floor(Math.random() * 4); 
        let startX, startY, endX, endY;

        switch (startSide) {
            case 0: 
                startX = Math.random() * window.innerWidth;
                startY = -150; 
                endX = Math.random() * window.innerWidth;
                endY = window.innerHeight + 150; 
                break;
            case 1: 
                startX = window.innerWidth + 150; 
                startY = Math.random() * window.innerHeight;
                endX = -150; 
                endY = Math.random() * window.innerHeight;
                break;
            case 2: // Alt
                startX = Math.random() * window.innerWidth;
                startY = window.innerHeight + 150; 
                endX = Math.random() * window.innerWidth;
                endY = -150; 
                break;
            case 3: 
                startX = -150; 
                startY = Math.random() * window.innerHeight;
                endX = window.innerWidth + 150; 
                endY = Math.random() * window.innerHeight;
                break;
        }

        circle.style.left = `${startX}px`;
        circle.style.top = `${startY}px`;

        const size = Math.random() * 100 + 100; 
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        circle.style.setProperty('--endX', `${endX}px`);
        circle.style.setProperty('--endY', `${endY}px`);

        const duration = Math.random() * 5 + 3; 
        circle.style.animationDuration = `${duration}s`;

        body.appendChild(circle);

        setTimeout(() => circle.remove(), duration * 1000);
    }

    setInterval(createCircle, 800); 
});




