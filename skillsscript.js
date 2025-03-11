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
function adjustSkillsPosition() {
  const nav = document.querySelector("nav");
  const skillsContainer = document.querySelector(".skills-container");

  if (nav && skillsContainer) {
    let navHeight = nav.offsetHeight; // Get navbar height dynamically
    skillsContainer.style.paddingTop = `${navHeight + 20}px`; // Add some spacing
  }
}

function adjustToggleBackground() {
  const toggle = document.querySelector(".menu-toggle");
  const skillsContainer = document.querySelector(".skills-container");

  if (toggle) {
    toggle.style.setProperty("--toggle-width", `${window.innerWidth}px`);
  }

  if (skillsContainer) {
    const toggleHeight = toggle.offsetHeight || 40; // Default to 40px if not detected
    let extraPadding = window.innerHeight <= 500 ? 6 : 4; // More space in landscape mode
    skillsContainer.style.paddingTop = `calc(${toggleHeight}px + ${extraPadding}vh)`;
  }
}

// Run the function when the page loads
adjustToggleBackground();

// Adjust when the window resizes
window.addEventListener("resize", adjustToggleBackground);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.querySelector("nav");

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0"; // Show nav
  } else {
    nav.style.top = "-60px"; // Hide nav (adjust if needed)
  }
  prevScrollpos = currentScrollPos;
};
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll('.skill-card, .technologys, .languages');
  
  if (isMobile) {
    let lastScrollPosition = window.pageYOffset;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScroll = window.pageYOffset;
            const scrollingDown = currentScroll > lastScrollPosition;
            
            if (entry.isIntersecting && scrollingDown) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('shrink', 'visible-up');
            } else if (entry.intersectionRatio > 0.95 && !scrollingDown) {
                entry.target.classList.add('visible-up');
                entry.target.classList.remove('shrink', 'visible');
            } else if (!entry.isIntersecting && !scrollingDown) {
                entry.target.classList.add('shrink');
                entry.target.classList.remove('visible', 'visible-up');
            }
            
            lastScrollPosition = currentScroll;
        });
    }, { 
        threshold: [0.2, 0.95]  // Added higher threshold for upward scrolling
    });

    cards.forEach(card => observer.observe(card));
  }
});