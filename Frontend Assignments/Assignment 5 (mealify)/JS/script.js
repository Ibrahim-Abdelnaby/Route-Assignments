"use strict";
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const burgerMenu = document.getElementById("burgerMenu");
const sideBar = document.getElementById("sideBar");
const closeSide = document.getElementById("closeSide");

// Toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  moon.classList.toggle("hide");
  sun.classList.toggle("hide");
};

// Toggle sidebar visibility
const toggleSidebar = () => {
  sideBar.classList.toggle("show");
  burgerMenu.classList.toggle("hide");
};

// Close sidebar
const closeSidebar = () => {
  sideBar.classList.add("hide");
  sideBar.classList.remove("show");
};

// Event listeners
moon.addEventListener("click", toggleDarkMode);
sun.addEventListener("click", toggleDarkMode);
burgerMenu.addEventListener("click", toggleSidebar);
closeSide.addEventListener("click", closeSidebar);
