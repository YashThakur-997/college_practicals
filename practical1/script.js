// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');

    // Button click event
    ctaButton.addEventListener('click', () => {
        alert('Thanks for clicking! Hope you like the layout.');
    });

    // Form submission event
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page refresh
        alert('Message sent successfully!');
    });
});