const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
};

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your email has been submitted.");

    contactForm.reset();
});