"use strict";
const hamburgerButton = document.querySelector(".hamburger-button");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const header = document.querySelector(".top-picture-header");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");
const navLinks = document.querySelector(".nav-links-mobile");
const leftSliderMobile = document.querySelector(".left-slider-mobile");
const rightSliderMobile = document.querySelector(".right-slider-mobile");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");

const topArea = document.querySelector("#top-area-with-navbar");
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
// varriables needed for slider //
let header1 = "Discover innovative ways to decorate";
let mainText1 =
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make you property a refelction of you and what you love.";

let header2 = "We are available all across the globe";
let mainText2 =
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

let header3 = "Manufactured with the best materials";
let mainText3 =
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

// beginning of image slider functionallity //
// mobile //
leftSliderMobile.addEventListener("click", function () {
  console.log("left arrow pressed");
});
rightSliderMobile.addEventListener("click", function () {
  console.log("right arrow pressed");
});

function discoverInsideContent() {
  let discoverInsideContent = document.querySelector(
    ".discover-inside-content"
  );
  let header = discoverHeader(header2);
  let mainText = discoverMainText(mainText2);

  currentSlide(header, mainText);
  discoverInsideContent.appendChild(discoverHeader(header1));
  discoverInsideContent.appendChild(discoverMainText(mainText1));
  discoverInsideContent.appendChild(shopNowButton());

  console.log(discoverInsideContent);
}

discoverInsideContent();

function discoverHeader(text) {
  let header = document.createElement("h1");
  header.classList.add("discover-header");
  header.classList.add("text-weight-600");
  header.textContent = text;
  return header;
}

function discoverMainText(text) {
  let mainText = document.createElement("p");
  mainText.classList.add("main-text");
  mainText.classList.add("gray");
  mainText.textContent = text;
  return mainText;
}

function shopNowButton() {
  let button = document.createElement("button");
  button.classList.add("shop-now");
  button.classList.add("text-weight-600");
  button.textContent = "SHOP NOW";

  let img = shopNowImg();
  button.appendChild(img);
  return button;
}

function shopNowImg() {
  let img = document.createElement("img");
  img.classList.add("shop-now-img");
  img.src = "/Room-Homepage/images/icon-arrow.svg";
  return img;
}

function currentSlide(header, mainText) {
  let topPicture = document.querySelector(".top-picture");
  topPicture.style.backgroundImage =
    "url(/Room-Homepage/images/desktop-image-hero-2.jpg)";

  console.log(header, mainText);
}
currentSlide();
