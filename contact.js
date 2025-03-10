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
    let gap = window.innerWidth > 1024 ? 20 : 0; // Apply gap only if screen width > 1024px

    contactContainer.style.position = "absolute";
    contactContainer.style.top = `${toggleRect.bottom + gap}px`; // Position it tightly with gap for larger screens
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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-container .form");
  const inputs = document.querySelectorAll(
    ".form-container .form .input, .form-container .form .textarea"
  );
  const submitButton = document.querySelector(".form-container .form .submit");

  submitButton.addEventListener("click", function (event) {
    let isValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.borderLeft = "1vw solid #e74c3c"; // Red border for empty input
        isValid = false;
      } else if (input.checkValidity()) {
        input.style.borderLeft = "1vw solid #28a745"; // Green border for valid input
      } else {
        input.style.borderLeft = "1vw solid #e74c3c"; // Red border for invalid input
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are invalid fields
    }
  });
});
