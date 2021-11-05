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
let topPicture = document.querySelector(".top-picture");
const discoverHeader = document.querySelector(".discover-header");
const mainText = document.querySelector(".main-text");
let numCount = 0;
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

const backgroundImages = [
  "/Room-Homepage/images/desktop-image-hero-1.jpg",
  "/Room-Homepage/images/desktop-image-hero-2.jpg",
  "/Room-Homepage/images/desktop-image-hero-3.jpg",
];
const backgroundImagesMobile = [
  "/Room-Homepage/images/mobile-image-hero-1.jpg",
  "/Room-Homepage/images/mobile-image-hero-2.jpg",
  "/Room-Homepage/images/mobile-image-hero-3.jpg",
];

const headerArray = [header1, header2, header3];
const mainTextArray = [mainText1, mainText2, mainText3];

// beginning of image slider functionallity //
// mobile //
leftSliderMobile.addEventListener("click", previousSlideMobile);
rightSliderMobile.addEventListener("click", currentSlideMobile);

leftSlider.addEventListener("click", previousSlide);
rightSlider.addEventListener("click", currentSlide);

// desktop slider functionality //
function currentSlide() {
  if (numCount < backgroundImages.length - 1) {
    numCount++;
    topPicture.style.backgroundImage = `url(${backgroundImages[numCount]})`;
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
    topPicture.classList.add("transition");
  } else {
    numCount = 0;
    topPicture.style.backgroundImage = `url(${backgroundImages[numCount]})`;
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
  }
}

function previousSlide() {
  if (numCount == 0) {
    numCount = 2;
    topPicture.style.backgroundImage = `url(${backgroundImages[numCount]})`;
    topPicture.classList.add("transition");
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
    console.log(numCount);
  } else {
    numCount--;
    topPicture.style.backgroundImage = `url(${backgroundImages[numCount]})`;
    topPicture.classList.add("transition");
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
  }
}

// mobile slider functionality //
function currentSlideMobile() {
  if (numCount < backgroundImages.length - 1) {
    numCount++;
    topPicture.style.backgroundImage = `url(${backgroundImagesMobile[numCount]})`;
    topPicture.classList.add("transition");
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
    console.log(numCount);
  } else {
    numCount = 0;
    topPicture.style.backgroundImage = `url(${backgroundImagesMobile[numCount]})`;
    topPicture.classList.add("transition");
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
  }
}

function previousSlideMobile() {
  if (numCount == 0) {
    numCount = 2;
    topPicture.style.backgroundImage = `url(${backgroundImagesMobile[numCount]})`;
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
  } else {
    numCount--;
    topPicture.style.backgroundImage = `url(${backgroundImagesMobile[numCount]})`;
    discoverHeader.textContent = headerArray[numCount];
    mainText.textContent = mainTextArray[numCount];
  }
}
