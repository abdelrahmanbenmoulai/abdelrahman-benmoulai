/**
 * Toggles the mobile menu visibility
 */
function toggleMenu() {
  let menu = document.getElementById("menu");
  let menuToggle = document.querySelector(".menu-toggle");
  let overlay = document.getElementById("menuOverlay");

  let isOpen = menu.classList.contains("show");

  if (isOpen) {
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } else {
    menu.classList.add("show");
    menuToggle.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  }
}

/**
 * Adjusts the position of the contact container based on viewport size
 */
function adjustContactContainerPosition() {
  const toggle = document.querySelector(".menu-toggle");
  const contactContainer = document.querySelector(".contact-container");

  if (toggle && contactContainer) {
    let toggleRect = toggle.getBoundingClientRect();
    let gap = window.innerWidth > 1024 ? 20 : 0;

    contactContainer.style.position = "absolute";
    contactContainer.style.top = `${toggleRect.bottom + gap}px`;
    contactContainer.style.left = "50%";
    contactContainer.style.transform = "translateX(-50%)";
    contactContainer.style.width = "95%";
    contactContainer.style.margin = "0";
  }
}

// Event listeners for responsive layout adjustments
window.addEventListener("load", adjustContactContainerPosition);
window.addEventListener("resize", adjustContactContainerPosition);
window.addEventListener("orientationchange", adjustContactContainerPosition);

// Form validation
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
        input.style.borderLeft = "1vw solid #e74c3c";
        isValid = false;
      } else if (input.checkValidity()) {
        input.style.borderLeft = "1vw solid #28a745";
      } else {
        input.style.borderLeft = "1vw solid #e74c3c";
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
});