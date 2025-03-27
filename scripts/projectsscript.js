/* 
 * Function that toggles the menu visibility and handles the overlay
 * Controls the mobile navigation menu open/close state
 */
function toggleMenu() {
  // Get references to DOM elements
  let menu = document.getElementById("menu");
  let menuToggle = document.querySelector(".menu-toggle");
  let overlay = document.getElementById("menuOverlay");

  // Check if menu is currently open
  let isOpen = menu.classList.contains("show");

  // If menu is open, close it
  if (isOpen) {
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } 
  // If menu is closed, open it
  else {
    menu.classList.add("show");
    menuToggle.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  }
}

/* 
 * When the page loads, scroll to the top
 * This ensures the page always starts at the top
 */
window.onload = function () {
  window.scrollTo(0, 0);
};