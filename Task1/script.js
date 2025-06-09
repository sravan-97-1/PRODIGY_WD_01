// Grab references to DOM elements for easy access
const body = document.body;
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links");

// Define background colors for each section
const sectionColors = {
  home: "#1d2671",      // Dark Blue-Purple
  about: "#006400",     // Dark Green
  services: "#4B0082",  // Indigo
  contact: "#8B0000"    // Dark Red
};

/**
 * Changes the page background color and highlights
 * the active navigation link based on scroll position.
 */
function changeBackgroundOnScroll() {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  let currentSectionId = "home";

  // Determine which section is currently in view
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    // Use half window height as threshold for smoother transition
    if (scrollPos >= top - window.innerHeight / 2 && scrollPos < top + height - window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  // Update the body background color smoothly
  body.style.backgroundColor = sectionColors[currentSectionId];

  // Highlight the active nav link and remove highlight from others
  navLinks.forEach(link => {
    const target = link.getAttribute("href").substring(1);
    link.classList.toggle("active", target === currentSectionId);
  });
}

// Toggle mobile menu visibility on hamburger click
hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

// Run the background and nav highlight update on page load and scroll
window.addEventListener("scroll", changeBackgroundOnScroll);
window.addEventListener("load", changeBackgroundOnScroll);
