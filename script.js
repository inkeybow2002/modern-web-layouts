// JavaScript can go here for interactive features.

// Example: Function to handle navigation clicks
function navigateToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href').substring(1);
        navigateToSection(target);
        console.log(`Navigating to section: ${target}`); // Improved log format
    });
});