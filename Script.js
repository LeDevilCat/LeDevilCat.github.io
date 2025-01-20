// Select the navbar and footer elements
const navbar = document.getElementById('navbar');
const footer = document.querySelector('footer');
const contactingSection = document.getElementById('contacting');

// Function to handle navbar visibility
function handleNavbarVisibility() {
    const headerHeight = document.querySelector('header').offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

// Function to handle footer visibility
function handleFooterVisibility() {
    const contactingRect = contactingSection.getBoundingClientRect();

    if (
        contactingRect.top <= window.innerHeight &&
        contactingRect.bottom >= 0
    ) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
}

// Add event listener for scrolling
window.addEventListener('scroll', () => {
    handleNavbarVisibility();
    handleFooterVisibility();
});