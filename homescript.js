const toggleMenu = () => {
  const e = document.getElementById("menu"),
    t = document.querySelector(".menu-toggle"),
    n = document.getElementById("menuOverlay");
  e.classList.contains("show")
    ? (e.classList.remove("show"),
      t.classList.remove("active"),
      (n.style.opacity = "0"),
      (n.style.pointerEvents = "none"))
    : (e.classList.add("show"),
      t.classList.add("active"),
      (n.style.opacity = "1"),
      (n.style.pointerEvents = "all"));
};
document.addEventListener("click", (e) => {
  const t = document.getElementById("menu"),
    n = document.querySelector(".menu-toggle");
  t.contains(e.target) ||
    n.contains(e.target) ||
    (t.classList.remove("show"), n.classList.remove("active"));
}),
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero-text").style.animation =
      "fadeIn 1.5s ease-out forwards";
  });
