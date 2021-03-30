"use strict";

console.log("hello");

const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const mainTitle = document.querySelector(".main-title");
const totalFollowers = document.querySelector(".total-followers");
const cards = document.querySelectorAll(".card-light");

document.querySelector(".control").addEventListener("click", function () {
  console.log("event toggled");
  body.classList.toggle("dark-mode");
  heading.classList.toggle("heading-dark-mode");
  mainTitle.classList.toggle("dark-mode-title");
  totalFollowers.classList.toggle("dark-mode-followers");

  for (const card of cards) {
    card.classList.toggle("card-dark");
  }
});
