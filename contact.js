function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
  document.querySelector(".menu-toggle").classList.toggle("active");
}
function toggleMenu() {
  let menu = document.getElementById("menu");
  let menuToggle = document.querySelector(".menu-toggle");
  let overlay = document.getElementById("menuOverlay");

  let isOpen = menu.classList.contains("show");

  if (isOpen) {
    // Close menu
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } else {
    // Open menu
    menu.classList.add("show");
    menuToggle.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  }
}
function adjustContactContainerPosition() {
  const toggle = document.querySelector(".menu-toggle");
  const contactContainer = document.querySelector(".contact-container");

  if (toggle && contactContainer) {
    let toggleRect = toggle.getBoundingClientRect(); // Get toggle position
    let gap = -5; // Adjust this if needed (use negative if needed)

    contactContainer.style.position = "absolute";
    contactContainer.style.top = `${toggleRect.bottom + gap}px`; // Position it tightly
    contactContainer.style.left = "50%";
    contactContainer.style.transform = "translateX(-50%)";
    contactContainer.style.width = "95%";
    contactContainer.style.margin = "0"; // Ensure no extra margin
  }
}

// Run function on page load & resize
window.addEventListener("load", adjustContactContainerPosition);
window.addEventListener("resize", adjustContactContainerPosition);
window.addEventListener("orientationchange", adjustContactContainerPosition);
