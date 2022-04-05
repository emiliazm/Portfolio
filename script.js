let barImage = document.querySelector(".menu");
let crossMenu = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".mobile-menu");


barImage.addEventListener("click" , function() {
    mobileMenu.style.display = "block";
})

crossMenu.addEventListener("click", function() {
    mobileMenu.style.display = "none";
})


document.querySelectorAll(".hamburger-nav-list").forEach
(n => n.addEventListener("click", () => {
    mobileMenu.style.display = "none";
}))

