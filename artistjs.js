// JavaScript (Smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Save user preference
localStorage.setItem('theme', 'dark');

// Retrieve user preference
const userTheme = localStorage.getItem('theme');
if (userTheme === 'dark') {
    // Apply dark mode styles
}
