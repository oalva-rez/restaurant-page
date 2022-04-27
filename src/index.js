import style from "./style.css";
import form from "./form.css";
import home from "./home.css";
import restaurant from "./restaurant.css";
import menu from "./menu.css";
import contact from "./contact.css";
import location from "./location.css";
import bg from "./lofi-bg.jpg";
import addHome from "./home.js";
import addMenu from "./menu.js";
import addContact from "./contact.js";
import { initForm, validateForm } from "./catering.js";

window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname == "/index.html" ||
    window.location.pathname == "/"
  ) {
    let content = document.querySelector(".content");
    content.appendChild(addHome());
  }
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
