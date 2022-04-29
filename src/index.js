import style from "./css/style.css";
import form from "./css/form.css";
import home from "./css/home.css";
import restaurant from "./css/restaurant.css";
import menu from "./css/menu.css";
import contact from "./css/contact.css";
import location from "./css/location.css";
import bg from "./images/lofi-bg.jpg";
import addMenu from "./menu.js";
import { initForm, validateForm } from "./catering.js";

import barista from "./images/barista.jpg";
import coffeeBanner from "./images/coffee-banner.jpg";
import coffeeLogo from "./images/coffee-logo-transparent.png";
import farm from "./images/farm-transparent.png";
import lattePour from "./images/latte-pour.jpg";
import mexEagle from "./images/mex-eagle-transparent.png";
import mexOutline from "./images/mexico-outline.png";
import headshot from "./images/owner-headshot.jpg";

window.addEventListener("DOMContentLoaded", () => {
  let hamburgerBtn = document.querySelector("#menu__toggle");
  hamburgerBtn.checked = false;
  hamburgerBtn.addEventListener("input", () => {
    if (hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "0";
    } else if (!hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "-100%";
    }
  });

  // localhost path names
  if (window.location.pathname == "/menu.html") {
    let content = document.querySelector(".content");
    content.appendChild(addMenu());
  }
  if (window.location.pathname == "/catering.html") {
    initForm();
  }

  // github pages path names
  if (window.location.pathname == "/restaurant-page/menu.html") {
    let content = document.querySelector(".content");
    content.appendChild(addMenu());
  }
  if (window.location.pathname == "/restaurant-page/catering.html") {
    initForm();
  }
});
