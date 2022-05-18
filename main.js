"use strict";

const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
const header = document.querySelector("header");
const btnContact = document.querySelector(".contact-form-btn");

//ADDING SHADOW TO HEADER

const stickHeader = () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", stickHeader);

//ADDING SHADOW TO HEADER END

burgerButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  burgerButton.classList.toggle("active");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", function (event) {
    const id = event.target.dataset.key;
    const section =
      document.querySelector(`.${id}`).getBoundingClientRect().top +
      window.pageYOffset -
      130;
    mobileMenu.classList.toggle("active");
    burgerButton.classList.toggle("active");
    window.scrollTo({ top: section, behavior: "smooth" });
  })
);
