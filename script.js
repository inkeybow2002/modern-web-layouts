// JavaScript can go here for interactive features.

// Example: Function to handle navigation clicks
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section with ID '${sectionId}' not found.`); // Added warning for missing sections
    }
}

// Add event listeners for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href').substring(1);
        navigateToSection(target);
        console.log(`User clicked on link to section: ${target}`); // Improved log clarity
    });
});