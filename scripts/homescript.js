// Toggle mobile menu function
const toggleMenu = () => {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.getElementById("menuOverlay");

  // If menu is currently shown, hide it
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    toggle.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } else {
    // Otherwise, show the menu
    menu.classList.add("show");
    toggle.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  }
};

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  // If click is outside menu and toggle button, close menu
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("show");
    toggle.classList.remove("active");
  }
});

// Initialize fade-in animations when page loads
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-up");

  // Set initial state for animated elements
  animatedElements.forEach((element) => {
    element.style.visibility = "visible";
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
  });
});