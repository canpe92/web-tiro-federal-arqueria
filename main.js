/* Script nav menu mobile */

let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-list");


openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})

/* Script slider novedades */

$(document).ready(function(){
    $("#news-slider").owlCarousel({
        items:3,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});