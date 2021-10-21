const hamburgerButton = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const headerArea = document.querySelector(".header-area");

// hamburger menu functionality //
hamburgerButton.addEventListener("click", press);

function press() {
  if (navbar.classList.contains("hidden")) {
    navbar.classList.toggle("hidden");
    headerArea.style.backgroundColor = "white";
    header.style.display = "none";
    navbar.style.display = "flex";
    hamburgerButton.src = "/Room-Homepage/images/icon-close.svg";
  } else {
    navbar.classList.toggle("hidden");
    headerArea.style.removeProperty("background-color");
    navbar.style.display = "none";
    header.style.display = "flex";
    hamburgerButton.src = "/Room-Homepage/images/icon-hamburger.svg";
  }
}
