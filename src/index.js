import style from "./style.css";
import bg from "./lofi-bg.jpg";
import addHome from "./home.js";
import addMenu from "./menu.js";

let content = document.querySelector(".content");
let homeTab = document.querySelector(".home-tab");
let menuTab = document.querySelector(".menu-tab");
let contactTab = document.querySelector(".contact-tab");

content.appendChild(addHome());

homeTab.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addHome());
});

menuTab.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addMenu());
});
