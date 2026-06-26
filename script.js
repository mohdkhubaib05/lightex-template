console.log("Lightex Fire Loaded Successfully");

// =====================
// MOBILE MENU
// =====================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuToggle.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});

// =====================
// NAVBAR SCROLL EFFECT
// =====================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

// =====================
// CLOSE MENU AFTER CLICK
// =====================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});