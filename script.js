"use strict";

console.log("hello");

const body = document.querySelector("body");
const backgroundTop = document.querySelector(".background-top");
const mainTitle = document.querySelector(".main-title");
const overview = document.querySelector(".overview");
const totalFollowers = document.querySelector(".total-followers");
const cards = document.querySelectorAll(".card-dark");
const toggleLabel = document.querySelector(".toggle-label");
const attribution = document.querySelector(".attribution");
const headingTitle = document.querySelector(".heading__title");

document.querySelector(".control").addEventListener("click", function () {
  body.classList.toggle("dark-mode-off");
  backgroundTop.classList.toggle("background-top-dark-mode-off");
  mainTitle.classList.toggle("dark-mode-title-off");
  totalFollowers.classList.toggle("dark-mode-followers");
  toggleLabel.classList.toggle("toggle-dark-mode-off");
  attribution.classList.toggle("attribution-dark-mode-off");
  overview.classList.toggle("overview-dark-mode-off");
  headingTitle.classList.toggle("heading-title-dark-mode-off");

  for (const card of cards) {
    card.classList.toggle("card-dark-off");
  }
});
