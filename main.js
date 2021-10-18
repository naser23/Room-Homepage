"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const activeNav = document.querySelector(".active-navbar");

hamburgerIcon.addEventListener("click", function () {
  activeNav.classList.toggle("hidden");
  hamburgerIcon.src = "/Room-Homepage/images/icon-close.svg";
});
