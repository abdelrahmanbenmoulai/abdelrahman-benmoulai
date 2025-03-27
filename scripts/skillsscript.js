// Function to toggle the mobile menu visibility
function toggleMenu() {
  let menu = document.getElementById("menu");
  let menuToggle = document.querySelector(".menu-toggle");
  let overlay = document.getElementById("menuOverlay");

  let isOpen = menu.classList.contains("show");

  if (isOpen) {
    // Close the menu
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  } else {
    // Open the menu
    menu.classList.add("show");
    menuToggle.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  }
}

// Function to adjust the skills container position based on nav height
function adjustSkillsPosition() {
  const nav = document.querySelector("nav");
  const skillsContainer = document.querySelector(".skills-container");

  if (nav && skillsContainer) {
    let navHeight = nav.offsetHeight;
    skillsContainer.style.paddingTop = `${navHeight + 20}px`;
  }
}

// Function to adjust the toggle background based on window size
function adjustToggleBackground() {
  const toggle = document.querySelector(".menu-toggle");
  const skillsContainer = document.querySelector(".skills-container");

  if (toggle) {
    // Set CSS variable for toggle width
    toggle.style.setProperty("--toggle-width", `${window.innerWidth}px`);
  }

  if (skillsContainer) {
    const toggleHeight = toggle.offsetHeight || 40;
    // Add extra padding for smaller screens
    let extraPadding = window.innerHeight <= 500 ? 6 : 4;
    skillsContainer.style.paddingTop = `calc(${toggleHeight}px + ${extraPadding}vh)`;
  }
}

// Initialize toggle background adjustment
adjustToggleBackground();

// Adjust toggle background on window resize
window.addEventListener("resize", adjustToggleBackground);

// Track scroll position to hide/show navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.querySelector("nav");

  // Show nav when scrolling up, hide when scrolling down
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

// Add animation effects for mobile devices
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll(
    ".skill-card, .technologys, .languages"
  );

  if (isMobile) {
    let lastScrollPosition = window.pageYOffset;

    // Create intersection observer to detect when cards are visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScroll = window.pageYOffset;
          const scrollingDown = currentScroll > lastScrollPosition;

          // Apply different animation classes based on scroll direction
          if (entry.isIntersecting && scrollingDown) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("shrink", "visible-up");
          } else if (entry.intersectionRatio > 0.95 && !scrollingDown) {
            entry.target.classList.add("visible-up");
            entry.target.classList.remove("shrink", "visible");
          } else if (!entry.isIntersecting && !scrollingDown) {
            entry.target.classList.add("shrink");
            entry.target.classList.remove("visible", "visible-up");
          }

          lastScrollPosition = currentScroll;
        });
      },
      {
        threshold: [0.2, 0.95], // Observe at 20% and 95% visibility
      }
    );

    // Observe all skill cards
    cards.forEach((card) => observer.observe(card));
  }
});