document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch');
    const themeSwitchSlider = document.querySelector('.theme-switch .slider');
    const sunEmoji = document.querySelector('.theme-switch .sun');
    const moonEmoji = document.querySelector('.theme-switch .moon');
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitchSlider.style.transform = 'translateX(30px)';
        sunEmoji.style.opacity = '0';
        moonEmoji.style.opacity = '1';
    }

    // Toggle theme on button click
    themeSwitch.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        themeSwitchSlider.style.transform = isDark ? 'translateX(30px)' : 'translateX(0px)';
        sunEmoji.style.opacity = isDark ? '0' : '1';
        moonEmoji.style.opacity = isDark ? '1' : '0';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Toggle navigation menu on mobile
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
        });
    }
});
