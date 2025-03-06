function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("show");
  toggle.classList.toggle("active");

  if (!menu.classList.contains("show")) {
    toggle.classList.remove("active");
  }
}

document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    // Close the menu
    menu.classList.remove("show");
    toggle.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hero-text").style.animation =
    "fadeIn 1.5s ease-out forwards";
});
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
