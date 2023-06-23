let navbar = document.getElementById("navbar-toggle");
let button = document.getElementById("hamburger-menu");

if (screen.width <= 768) {
    button.addEventListener("click", function() {
        navbar.classList.toggle("visible");
        navbar.classList.toggle("invisible");
      });
      
      navbar.addEventListener("click", function() {
          navbar.classList.toggle("visible");
          navbar.classList.toggle("invisible");
      });
} else {
    navbar.classList.remove("invisible")
}