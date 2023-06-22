let navbar = document.getElementById("navbar-toggle");
let button = document.getElementById("hamburger-menu")

function toggleDiv() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  };
}

function Collapse() {
  let buttonVisible = getComputedStyle(button);
  if (buttonVisible.display == "block") {
    toggleDiv();
  }
}