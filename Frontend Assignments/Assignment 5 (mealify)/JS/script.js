"use strict";
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

const darkMode = () => {
  document.body.classList.toggle("dark-mode");
  moon.classList.toggle("hide");
  sun.classList.toggle("hide");
};

moon.addEventListener("click", darkMode);
sun.addEventListener("click", darkMode);
