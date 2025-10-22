// Handle contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  // Handle event registration form
  const eventForm = document.getElementById("eventForm");
  if (eventForm) {
    eventForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("You are registered for the event!");
      eventForm.reset();
    });
  }

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show'); // .show should be handled in CSS to display the menu on mobile
    });
  }
});
