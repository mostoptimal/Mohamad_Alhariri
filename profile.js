// Placeholder for future interactivity, like form submission handling or additional accessibility features
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded and ready.");

    // Example: Alert on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent!');
    });
});
