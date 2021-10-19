"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const activeNav = document.querySelector(".active-navbar");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".name");

hamburgerIcon.addEventListener("click", toggleState);

function toggleState() {
  if (activeNav.classList.contains("hidden")) {
    console.log("kdfhnag");
    activeNav.classList.toggle("hidden");
    hamburgerIcon.src = "/Room-Homepage/images/icon-close.svg";
    navbar.style.backgroundColor = "white";
    header.style.display = "none";
  } else {
    activeNav.classList.toggle("hidden");
    hamburgerIcon.src = "/Room-Homepage/images/icon-hamburger.svg";
    navbar.style.removeProperty("background-color");
    header.style.display = "flex";
  }
}
