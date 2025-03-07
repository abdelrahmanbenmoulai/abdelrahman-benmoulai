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