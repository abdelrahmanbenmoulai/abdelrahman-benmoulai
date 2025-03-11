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
window.onload = function () {
  window.scrollTo(0, 0);
};
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  const cards = document.querySelectorAll(".project-card");

  if (isMobile) {
    let lastScrollPosition = window.pageYOffset;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScroll = window.pageYOffset;
          const scrollingDown = currentScroll > lastScrollPosition;

          if (entry.isIntersecting && scrollingDown) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("shrink");
          } else if (!entry.isIntersecting && !scrollingDown) {
            entry.target.classList.add("shrink");
            entry.target.classList.remove("visible");
          }

          lastScrollPosition = currentScroll;
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }
});
