"use strict";
const hamburgerButton = document.querySelector(".hamburger-button");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const header = document.querySelector(".top-picture-header");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");
const navLinks = document.querySelector(".nav-links-mobile");
let isOpen = false;

// hamburger menu functionallity //
hamburgerButton.addEventListener("click", pressed);

function pressed() {
  if (isOpen === false) {
    hamburgerIcon.src = "/Room-Homepage/images/icon-close.svg";
    header.style.display = "none";
    navLinks.style.display = "flex";
    hamburgerNavbar.style.backgroundColor = "white";
    isOpen = true;
  } else if (isOpen === true) {
    hamburgerIcon.src = "/Room-Homepage/images/icon-hamburger.svg";
    header.style.display = "flex";
    navLinks.style.display = "none";
    hamburgerNavbar.style.removeProperty("background-color");
    isOpen = false;
  }
}
