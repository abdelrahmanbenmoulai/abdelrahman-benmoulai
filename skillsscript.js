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
function adjustSkillsPosition() {
  const nav = document.querySelector("nav");
  const skillsContainer = document.querySelector(".skills-container");

  if (nav && skillsContainer) {
    let navHeight = nav.offsetHeight;
    skillsContainer.style.paddingTop = `${navHeight + 20}px`;
  }
}

function adjustToggleBackground() {
  const toggle = document.querySelector(".menu-toggle");
  const skillsContainer = document.querySelector(".skills-container");

  if (toggle) {
    toggle.style.setProperty("--toggle-width", `${window.innerWidth}px`);
  }

  if (skillsContainer) {
    const toggleHeight = toggle.offsetHeight || 40;
    let extraPadding = window.innerHeight <= 500 ? 6 : 4;
    skillsContainer.style.paddingTop = `calc(${toggleHeight}px + ${extraPadding}vh)`;
  }
}

adjustToggleBackground();

window.addEventListener("resize", adjustToggleBackground);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.querySelector("nav");

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll(
    ".skill-card, .technologys, .languages"
  );

  if (isMobile) {
    let lastScrollPosition = window.pageYOffset;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScroll = window.pageYOffset;
          const scrollingDown = currentScroll > lastScrollPosition;

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
        threshold: [0.2, 0.95],
      }
    );

    cards.forEach((card) => observer.observe(card));
  }
});
