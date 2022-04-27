import style from "./css/style.css";
import form from "./css/form.css";
import home from "./css/home.css";
import restaurant from "./css/restaurant.css";
import menu from "./css/menu.css";
import contact from "./css/contact.css";
import location from "./css/location.css";
import bg from "./images/lofi-bg.jpg";
import addHome from "./home.js";
import addMenu from "./menu.js";
import addContact from "./contact.js";
import { initForm, validateForm } from "./catering.js";

window.addEventListener("DOMContentLoaded", () => {
  let hamburgerBtn = document.querySelector("#menu__toggle");

  hamburgerBtn.addEventListener("input", () => {
    if (hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "0";
    } else if (!hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "-100%";
    }
  });

  if (window.location.pathname == "/menu.html") {
    let content = document.querySelector(".content");
    content.appendChild(addMenu());
  }
  if (window.location.pathname == "/contact.html") {
    let content = document.querySelector(".content");
    content.appendChild(addContact());
  }
  if (window.location.pathname == "/catering.html") {
    initForm();
  }
});
