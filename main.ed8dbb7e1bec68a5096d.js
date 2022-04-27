/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/catering.js":
/*!*************************!*\
  !*** ./src/catering.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initForm": () => (/* binding */ initForm),
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
function initForm() {
  var form = document.querySelector(".container");
  var visa = document.querySelector(".visa");
  var cash = document.querySelector(".cash");
  visa.addEventListener("click", function () {
    if (!visa.classList.contains("on")) {
      visa.classList.toggle("on");

      if (cash.classList.contains("on")) {
        cash.classList.toggle("on");
      }
    }
  });
  cash.addEventListener("click", function () {
    if (!cash.classList.contains("on")) {
      cash.classList.toggle("on");

      if (visa.classList.contains("on")) {
        visa.classList.toggle("on");
      }
    }
  });
  form.addEventListener("submit", validateForm);
}

function validateForm(evt) {
  var formElements = document.forms[0].elements;
  var inputs = formElements.querySelectorAll("input");
  evt.preventDefault();
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addContact() {
  return formContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addHome() {
  var homeContainer = document.createElement("main");
  var leftHalf = document.createElement("section");
  var rightHalf = document.createElement("section");
  var heading = document.createElement("h2");
  var subheading = document.createElement("h3");
  var logo = document.createElement("img");
  var coffeeLogo = new Image();
  leftHalf.classList.add("left-half");
  rightHalf.classList.add("right-half");
  homeContainer.classList.add("home-container");
  homeContainer.appendChild(leftHalf);
  homeContainer.appendChild(rightHalf);
  heading.textContent = "Good Friends. Good Coffee. Good Times.";
  heading.classList.add("home-heading");
  logo.classList.add("home-logo");
  subheading.classList.add("home-subheading");
  subheading.textContent = "Located in the heart of North Park. Mystic Mocha is a community oasis promoting health and well-being through natural foods, peaceful environments and friendly service.";
  coffeeLogo.src = "logo-coffee.png";
  logo.src = coffeeLogo.src;
  rightHalf.appendChild(heading);
  rightHalf.appendChild(logo);
  rightHalf.appendChild(subheading);
  return homeContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _items_imgs_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-imgs/ramen.jpg */ "./src/items-imgs/ramen.jpg");
/* harmony import */ var _items_imgs_miso_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-imgs/miso.jpg */ "./src/items-imgs/miso.jpg");
/* harmony import */ var _items_imgs_spanish_roll_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-imgs/spanish-roll.jpg */ "./src/items-imgs/spanish-roll.jpg");
/* harmony import */ var _items_imgs_spicy_tuna_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items-imgs/spicy-tuna.jpg */ "./src/items-imgs/spicy-tuna.jpg");
/* harmony import */ var _items_imgs_boba_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-imgs/boba.jpg */ "./src/items-imgs/boba.jpg");
/* harmony import */ var _items_imgs_latte_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-imgs/latte.jpg */ "./src/items-imgs/latte.jpg");
/* harmony import */ var _items_imgs_machiatto_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items-imgs/machiatto.jpg */ "./src/items-imgs/machiatto.jpg");
/* harmony import */ var _items_imgs_matcha_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items-imgs/matcha.jpg */ "./src/items-imgs/matcha.jpg");









function addMenu() {
  var items = {
    Ramen: {
      desc: "This item is a fan favorite among locals. Half off every Wednesday.",
      img: _items_imgs_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__,
      price: "$9.75",
      alt: "A bowl of ramen soup."
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you when 'they' weren't.",
      img: _items_imgs_miso_jpg__WEBPACK_IMPORTED_MODULE_1__,
      price: "$5.75",
      alt: "A bowl of miso soup."
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: _items_imgs_spanish_roll_jpg__WEBPACK_IMPORTED_MODULE_2__,
      price: "$12.75",
      alt: "Sushi rolls with salmon."
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: _items_imgs_spicy_tuna_jpg__WEBPACK_IMPORTED_MODULE_3__,
      price: "$7.75",
      alt: "Sushi roll with spicy tuna inside."
    },
    Boba: {
      desc: "San Diego heat too much? Cool down with some cold boba.",
      img: _items_imgs_boba_jpg__WEBPACK_IMPORTED_MODULE_4__,
      price: "$4.75",
      alt: "A plastic cup with boba milk tea."
    },
    Latte: {
      desc: "Morning rush remedy. Whats rush hour when you have a perfect latte?",
      img: _items_imgs_latte_jpg__WEBPACK_IMPORTED_MODULE_5__,
      price: "$4.75",
      alt: "A foamy hot cup of latte coffee"
    },
    Machiatto: {
      desc: "This creamy half milk half coffee invention created by pure genius.",
      img: _items_imgs_machiatto_jpg__WEBPACK_IMPORTED_MODULE_6__,
      price: "$4.50",
      alt: "Pouring hot coffee into machiatto"
    },
    Matcha: {
      desc: "Mystic Mochas costumer favorite. Rated best matcha tea in CA.",
      img: _items_imgs_matcha_jpg__WEBPACK_IMPORTED_MODULE_7__,
      price: "$3.75",
      alt: "hot matcha latte with white foam"
    }
  };
  var menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  for (var key in items) {
    var menuItem = document.createElement("div");
    var menuLabel = document.createElement("h2");
    var menuImg = document.createElement("img");
    var menuDesc = document.createElement("p");
    var menuPrice = document.createElement("p");
    menuPrice.classList.add("menu-price");
    menuItem.classList.add("menu-item");
    menuPrice.textContent = items[key].price;
    menuLabel.textContent = key;
    menuImg.src = items[key].img;
    menuDesc.textContent = items[key].desc;
    menuItem.append(menuLabel);
    menuItem.append(menuImg);
    menuItem.append(menuDesc);
    menuItem.append(menuPrice);
    menuContainer.append(menuItem);
  }

  return menuContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* contact */\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.contact-container {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: fit-content;\r\n  position: relative;\r\n}\r\n\r\n.contact-heading {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2.4rem;\r\n  height: 17vh;\r\n}\r\n\r\n.social-media {\r\n  display: flex;\r\n  flex-direction: column;\r\n  right: 0;\r\n  top: 30%;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n  background-color: #eeeae4;\r\n  border-right: none;\r\n  border-radius: 8px 0 0 8px;\r\n  padding: 20px;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  gap: 30px;\r\n  position: fixed;\r\n\r\n  text-decoration: none;\r\n}\r\n.social-media a {\r\n  color: #eb9549;\r\n}\r\n.yelp {\r\n  padding-left: 3px;\r\n}\r\n\r\n.contact-type {\r\n  display: flex;\r\n  margin: 2% 40px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 90px;\r\n}\r\n.contact-type > * {\r\n  width: 200px;\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.contact-type h3 {\r\n  font-size: 1.8rem;\r\n}\r\n.contact-type a {\r\n  text-decoration: none;\r\n  color: #9a7a4a;\r\n}\r\n.contact-type a:hover {\r\n  color: #9a7a4abb;\r\n}\r\n.contact-type i {\r\n  font-size: 5rem;\r\n  color: #eb9549;\r\n}\r\n.contact-type button {\r\n  border: none;\r\n  outline: none;\r\n  background-color: #eb9549;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  padding: 10px 18px;\r\n  border-radius: 10px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.sign-up {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #9a7a4acb;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 20px;\r\n}\r\n.sign-up input {\r\n  margin-top: 20px;\r\n  width: 250px;\r\n  height: 27px;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 3px;\r\n  padding-left: 9px;\r\n  font-size: 1.2rem;\r\n}\r\n.sign-up-btn {\r\n  margin-top: 20px;\r\n  height: 27px;\r\n  width: 120px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #eb9549;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  border-radius: 8px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/contact.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,QAAQ;EACR,4CAA4C;EAC5C,yBAAyB;EACzB,kBAAkB;EAClB,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,eAAe;;EAEf,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* contact */\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.contact-container {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: fit-content;\r\n  position: relative;\r\n}\r\n\r\n.contact-heading {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2.4rem;\r\n  height: 17vh;\r\n}\r\n\r\n.social-media {\r\n  display: flex;\r\n  flex-direction: column;\r\n  right: 0;\r\n  top: 30%;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n  background-color: #eeeae4;\r\n  border-right: none;\r\n  border-radius: 8px 0 0 8px;\r\n  padding: 20px;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  gap: 30px;\r\n  position: fixed;\r\n\r\n  text-decoration: none;\r\n}\r\n.social-media a {\r\n  color: #eb9549;\r\n}\r\n.yelp {\r\n  padding-left: 3px;\r\n}\r\n\r\n.contact-type {\r\n  display: flex;\r\n  margin: 2% 40px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 90px;\r\n}\r\n.contact-type > * {\r\n  width: 200px;\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.contact-type h3 {\r\n  font-size: 1.8rem;\r\n}\r\n.contact-type a {\r\n  text-decoration: none;\r\n  color: #9a7a4a;\r\n}\r\n.contact-type a:hover {\r\n  color: #9a7a4abb;\r\n}\r\n.contact-type i {\r\n  font-size: 5rem;\r\n  color: #eb9549;\r\n}\r\n.contact-type button {\r\n  border: none;\r\n  outline: none;\r\n  background-color: #eb9549;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  padding: 10px 18px;\r\n  border-radius: 10px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.sign-up {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #9a7a4acb;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 20px;\r\n}\r\n.sign-up input {\r\n  margin-top: 20px;\r\n  width: 250px;\r\n  height: 27px;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 3px;\r\n  padding-left: 9px;\r\n  font-size: 1.2rem;\r\n}\r\n.sign-up-btn {\r\n  margin-top: 20px;\r\n  height: 27px;\r\n  width: 120px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #eb9549;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  border-radius: 8px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/form.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/form.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --btn-padding: 15px;\r\n  --label-color: #795f37;\r\n  --input-border: solid 1px lightgrey;\r\n  --border-rad: 3px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  padding: 30px 20px;\r\n}\r\n.container {\r\n  width: 900px;\r\n  margin: auto;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  border: var(--input-border);\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n  border-left: 10px solid #795f37;\r\n}\r\n\r\n.error-messages {\r\n  width: 40%;\r\n  margin: auto;\r\n  margin-top: 5vh;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  border: 3px solid #eed3d7;\r\n  border-radius: 7px;\r\n  background-color: #f2dede;\r\n  color: #b84a48;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n.email {\r\n  position: relative;\r\n}\r\n\r\n.not-valid::before {\r\n  content: \"\\2716\";\r\n  position: absolute;\r\n  left: -25px;\r\n  top: 5px;\r\n  font-size: 1.2rem;\r\n  color: red;\r\n}\r\n.valid::before {\r\n  content: \"\\2714\";\r\n  position: absolute;\r\n  left: -25px;\r\n  top: 5px;\r\n  font-size: 1.2rem;\r\n  color: rgb(4, 171, 4);\r\n}\r\n.label {\r\n  color: #eb9549;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 1.2rem;\r\n  margin-bottom: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* icons */\r\n.icon:not(.fa-money-bill-wave):not(.fa-cc-visa) {\r\n  font-size: 1rem;\r\n  width: 40px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border: var(--input-border);\r\n  color: lightslategray;\r\n  border: none;\r\n}\r\n\r\n.fa-money-bill-wave,\r\n.fa-cc-visa {\r\n  margin-right: 5px;\r\n}\r\n\r\ninput:not(.date):not([type=\"month\"]) {\r\n  border: none;\r\n  border-left: var(--input-border);\r\n}\r\n\r\n.icon-input {\r\n  border: var(--input-border);\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n/* inputs */\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"email\"]:focus,\r\n#information:focus {\r\n  transition: outline 200ms;\r\n\r\n  outline: solid 1px #795f37;\r\n  border: none;\r\n}\r\n\r\n/* buttons */\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n.card-btns > * {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  cursor: pointer;\r\n  border: var(--input-border);\r\n  color: lightslategray;\r\n}\r\n\r\n.visa {\r\n  border-radius: 3px 0 0 3px;\r\n  transition: background-color 350ms;\r\n}\r\n.cash {\r\n  border-radius: 0 3px 3px 0;\r\n  transition: background-color 350ms;\r\n}\r\n.on {\r\n  background-color: #795f37c6 !important;\r\n  color: white !important;\r\n  border: solid rgba(0, 0, 0, 0.246) 1px !important;\r\n}\r\n.err {\r\n  border: 1.5px solid rgb(255, 0, 0) !important;\r\n  border-radius: 0 var(--border-rad) var(--border-rad) 0;\r\n}\r\n.not-checked::after {\r\n  content: \"*\";\r\n  color: red;\r\n  font-size: 1.2rem;\r\n  padding-left: 2px;\r\n}\r\n/* account */\r\n.account {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.account > * {\r\n  display: flex;\r\n}\r\n\r\n.account input {\r\n  width: 100%;\r\n  padding-left: 5px;\r\n}\r\n\r\n/* payment details */\r\n.payment-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.card-btns {\r\n  display: flex;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n/* party information */\r\n.size-when {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n.size-when > * {\r\n  flex: 1;\r\n}\r\n\r\n.party-size,\r\n.when {\r\n  display: flex;\r\n  min-width: 70px;\r\n  border: var(--input-border);\r\n}\r\n\r\ninput[type=\"date\"] {\r\n  outline: none;\r\n  border: none;\r\n  padding-right: 10px;\r\n  color: black;\r\n}\r\n\r\n.party-size > input,\r\n.when > input {\r\n  width: 100%;\r\n  padding-left: 5px;\r\n}\r\n\r\n.info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.info-container textarea {\r\n  width: 100%;\r\n  padding: 10px 10px;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n/* newsletter */\r\n.check-newsletter {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  font-size: 1rem;\r\n  color: rgb(139, 139, 139);\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  padding-left: 30px;\r\n}\r\n.check-newsletter input {\r\n  transform: scale(1.5);\r\n  margin-right: 10px;\r\n}\r\n\r\n/* submit button */\r\n\r\n.submit-btn {\r\n  min-width: 150px;\r\n  margin: auto;\r\n  background-color: #eb9549;\r\n  border: none;\r\n  border-radius: 10px;\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n.submit-btn:hover {\r\n  background-color: #eb9549b6;\r\n  transform: scale(1.05);\r\n}\r\n\r\n@media (max-width: 1240px) {\r\n  .container,\r\n  .error-messages {\r\n    width: 80%;\r\n  }\r\n}\r\n@media (max-width: 625px) {\r\n  .container {\r\n    margin-top: 3vh;\r\n    width: 100%;\r\n    gap: 0.5rem;\r\n  }\r\n  .error-messages {\r\n    width: 90%;\r\n  }\r\n\r\n  .submit-btn {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/form.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;AACnB;;AAIA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2BAA2B;EAC3B,kBAAkB;EAClB,sBAAsB;EACtB,2CAA2C;EAC3C,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,iBAAiB;EACjB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,qCAAqC;EACrC,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,UAAU;AACV;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,qBAAqB;EACrB,YAAY;AACd;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA,WAAW;AACX;;;;EAIE,yBAAyB;;EAEzB,0BAA0B;EAC1B,YAAY;AACd;;AAEA,YAAY;;AAEZ;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,kCAAkC;AACpC;AACA;EACE,0BAA0B;EAC1B,kCAAkC;AACpC;AACA;EACE,sCAAsC;EACtC,uBAAuB;EACvB,iDAAiD;AACnD;AACA;EACE,6CAA6C;EAC7C,sDAAsD;AACxD;AACA;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,iBAAiB;AACnB;AACA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA,eAAe;AACf;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,kBAAkB;;AAElB;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF;AACA;EACE;IACE,eAAe;IACf,WAAW;IACX,WAAW;EACb;EACA;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":[":root {\r\n  --btn-padding: 15px;\r\n  --label-color: #795f37;\r\n  --input-border: solid 1px lightgrey;\r\n  --border-rad: 3px;\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n\r\nfieldset {\r\n  border: none;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  padding: 30px 20px;\r\n}\r\n.container {\r\n  width: 900px;\r\n  margin: auto;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  border: var(--input-border);\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n  border-left: 10px solid #795f37;\r\n}\r\n\r\n.error-messages {\r\n  width: 40%;\r\n  margin: auto;\r\n  margin-top: 5vh;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  border: 3px solid #eed3d7;\r\n  border-radius: 7px;\r\n  background-color: #f2dede;\r\n  color: #b84a48;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n\r\n.email {\r\n  position: relative;\r\n}\r\n\r\n.not-valid::before {\r\n  content: \"\\2716\";\r\n  position: absolute;\r\n  left: -25px;\r\n  top: 5px;\r\n  font-size: 1.2rem;\r\n  color: red;\r\n}\r\n.valid::before {\r\n  content: \"\\2714\";\r\n  position: absolute;\r\n  left: -25px;\r\n  top: 5px;\r\n  font-size: 1.2rem;\r\n  color: rgb(4, 171, 4);\r\n}\r\n.label {\r\n  color: #eb9549;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 1.2rem;\r\n  margin-bottom: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* icons */\r\n.icon:not(.fa-money-bill-wave):not(.fa-cc-visa) {\r\n  font-size: 1rem;\r\n  width: 40px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border: var(--input-border);\r\n  color: lightslategray;\r\n  border: none;\r\n}\r\n\r\n.fa-money-bill-wave,\r\n.fa-cc-visa {\r\n  margin-right: 5px;\r\n}\r\n\r\ninput:not(.date):not([type=\"month\"]) {\r\n  border: none;\r\n  border-left: var(--input-border);\r\n}\r\n\r\n.icon-input {\r\n  border: var(--input-border);\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n/* inputs */\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"email\"]:focus,\r\n#information:focus {\r\n  transition: outline 200ms;\r\n\r\n  outline: solid 1px #795f37;\r\n  border: none;\r\n}\r\n\r\n/* buttons */\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n.card-btns > * {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  cursor: pointer;\r\n  border: var(--input-border);\r\n  color: lightslategray;\r\n}\r\n\r\n.visa {\r\n  border-radius: 3px 0 0 3px;\r\n  transition: background-color 350ms;\r\n}\r\n.cash {\r\n  border-radius: 0 3px 3px 0;\r\n  transition: background-color 350ms;\r\n}\r\n.on {\r\n  background-color: #795f37c6 !important;\r\n  color: white !important;\r\n  border: solid rgba(0, 0, 0, 0.246) 1px !important;\r\n}\r\n.err {\r\n  border: 1.5px solid rgb(255, 0, 0) !important;\r\n  border-radius: 0 var(--border-rad) var(--border-rad) 0;\r\n}\r\n.not-checked::after {\r\n  content: \"*\";\r\n  color: red;\r\n  font-size: 1.2rem;\r\n  padding-left: 2px;\r\n}\r\n/* account */\r\n.account {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.account > * {\r\n  display: flex;\r\n}\r\n\r\n.account input {\r\n  width: 100%;\r\n  padding-left: 5px;\r\n}\r\n\r\n/* payment details */\r\n.payment-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.card-btns {\r\n  display: flex;\r\n  border-radius: var(--border-rad);\r\n}\r\n\r\n/* party information */\r\n.size-when {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n.size-when > * {\r\n  flex: 1;\r\n}\r\n\r\n.party-size,\r\n.when {\r\n  display: flex;\r\n  min-width: 70px;\r\n  border: var(--input-border);\r\n}\r\n\r\ninput[type=\"date\"] {\r\n  outline: none;\r\n  border: none;\r\n  padding-right: 10px;\r\n  color: black;\r\n}\r\n\r\n.party-size > input,\r\n.when > input {\r\n  width: 100%;\r\n  padding-left: 5px;\r\n}\r\n\r\n.info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.info-container textarea {\r\n  width: 100%;\r\n  padding: 10px 10px;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n/* newsletter */\r\n.check-newsletter {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  font-size: 1rem;\r\n  color: rgb(139, 139, 139);\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  padding-left: 30px;\r\n}\r\n.check-newsletter input {\r\n  transform: scale(1.5);\r\n  margin-right: 10px;\r\n}\r\n\r\n/* submit button */\r\n\r\n.submit-btn {\r\n  min-width: 150px;\r\n  margin: auto;\r\n  background-color: #eb9549;\r\n  border: none;\r\n  border-radius: 10px;\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n.submit-btn:hover {\r\n  background-color: #eb9549b6;\r\n  transform: scale(1.05);\r\n}\r\n\r\n@media (max-width: 1240px) {\r\n  .container,\r\n  .error-messages {\r\n    width: 80%;\r\n  }\r\n}\r\n@media (max-width: 625px) {\r\n  .container {\r\n    margin-top: 3vh;\r\n    width: 100%;\r\n    gap: 0.5rem;\r\n  }\r\n  .error-messages {\r\n    width: 90%;\r\n  }\r\n\r\n  .submit-btn {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! storefront.jpg */ "./src/storefront.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* home page */\r\n.home-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n}\r\n.home-container > * {\r\n  flex: 1;\r\n}\r\n.left-half {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n.right-half {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(10px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  color: white;\r\n  padding: 40px 40px;\r\n}\r\n.home-subheading {\r\n  font-size: 1.8rem;\r\n  text-align: center;\r\n  font-weight: 400;\r\n}\r\n.home-heading {\r\n  font-size: 2.5rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n.home-logo {\r\n  width: 50%;\r\n  align-self: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,cAAc;AACd;EACE,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA;EACE,OAAO;AACT;AACA;EACE,yDAAuC;EACvC,kCAAkC;EAClC,sBAAsB;EACtB,4BAA4B;AAC9B;AACA;EACE,8CAA8C;EAC9C,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* home page */\r\n.home-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n}\r\n.home-container > * {\r\n  flex: 1;\r\n}\r\n.left-half {\r\n  background-image: url(\"storefront.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n.right-half {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(10px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  color: white;\r\n  padding: 40px 40px;\r\n}\r\n.home-subheading {\r\n  font-size: 1.8rem;\r\n  text-align: center;\r\n  font-weight: 400;\r\n}\r\n.home-heading {\r\n  font-size: 2.5rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n.home-logo {\r\n  width: 50%;\r\n  align-self: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/location.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/location.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* location */\r\n\r\n.location {\r\n  display: grid;\r\n  grid-template: 1fr 1.2fr / 1fr 1.4fr;\r\n}\r\n\r\n.address-container {\r\n  grid-area: 1 / 1 / 2 / 2;\r\n  background-color: #9a7a4acb;\r\n}\r\n.address-container a {\r\n  color: rgb(0, 0, 0);\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n}\r\n.address-container,\r\n.hours-container {\r\n  font-size: 1.5rem;\r\n  padding: 40px 10px 10px 40px;\r\n}\r\n.hours-container table {\r\n  margin-top: 20px;\r\n}\r\n.hours-container td:first-child {\r\n  padding-right: 30px;\r\n}\r\n.hours-container {\r\n  grid-area: 2 / 1 / 3 / 2;\r\n  background-color: #eb9549cb;\r\n}\r\n.map-container {\r\n  grid-area: 1 / 2 / -1 / -1;\r\n}\r\n.map-container iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/location.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,aAAa;;AAEb;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;;EAEE,iBAAiB;EACjB,4BAA4B;AAC9B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* location */\r\n\r\n.location {\r\n  display: grid;\r\n  grid-template: 1fr 1.2fr / 1fr 1.4fr;\r\n}\r\n\r\n.address-container {\r\n  grid-area: 1 / 1 / 2 / 2;\r\n  background-color: #9a7a4acb;\r\n}\r\n.address-container a {\r\n  color: rgb(0, 0, 0);\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n}\r\n.address-container,\r\n.hours-container {\r\n  font-size: 1.5rem;\r\n  padding: 40px 10px 10px 40px;\r\n}\r\n.hours-container table {\r\n  margin-top: 20px;\r\n}\r\n.hours-container td:first-child {\r\n  padding-right: 30px;\r\n}\r\n.hours-container {\r\n  grid-area: 2 / 1 / 3 / 2;\r\n  background-color: #eb9549cb;\r\n}\r\n.map-container {\r\n  grid-area: 1 / 2 / -1 / -1;\r\n}\r\n.map-container iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* menu content */\r\n.menu-container {\r\n  display: grid;\r\n  border-radius: 10px;\r\n\r\n  width: 80%;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  grid-template-rows: repeat(auto-fit, minmax(300px, 1frpx));\r\n  gap: 1.3rem;\r\n  color: white;\r\n  margin: 65px auto;\r\n}\r\n.menu-item {\r\n  background-color: white;\r\n  color: black;\r\n  border-left: 9px solid #795f37;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.menu-item > * {\r\n  padding: 2px;\r\n}\r\n.menu-item h2 {\r\n  border-bottom: 1px solid #795f37;\r\n  margin-bottom: 10px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.menu-item img {\r\n  width: 250px;\r\n  height: 130px;\r\n  border-radius: 5px;\r\n  border: 2px solid rgba(255, 68, 0, 0.21);\r\n  margin: 15px 0;\r\n}\r\n.menu-item p {\r\n  text-align: center;\r\n  min-height: 50px;\r\n}\r\n.menu-price {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  border-top: 1px solid #795f37;\r\n  margin-top: 8px;\r\n  letter-spacing: 0.1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/menu.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;;EAEnB,UAAU;EACV,2DAA2D;EAC3D,0DAA0D;EAC1D,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,qCAAqC;AACvC;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,wCAAwC;EACxC,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;EACf,sBAAsB;AACxB","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* menu content */\r\n.menu-container {\r\n  display: grid;\r\n  border-radius: 10px;\r\n\r\n  width: 80%;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  grid-template-rows: repeat(auto-fit, minmax(300px, 1frpx));\r\n  gap: 1.3rem;\r\n  color: white;\r\n  margin: 65px auto;\r\n}\r\n.menu-item {\r\n  background-color: white;\r\n  color: black;\r\n  border-left: 9px solid #795f37;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.menu-item > * {\r\n  padding: 2px;\r\n}\r\n.menu-item h2 {\r\n  border-bottom: 1px solid #795f37;\r\n  margin-bottom: 10px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.menu-item img {\r\n  width: 250px;\r\n  height: 130px;\r\n  border-radius: 5px;\r\n  border: 2px solid rgba(255, 68, 0, 0.21);\r\n  margin: 15px 0;\r\n}\r\n.menu-item p {\r\n  text-align: center;\r\n  min-height: 50px;\r\n}\r\n.menu-price {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  border-top: 1px solid #795f37;\r\n  margin-top: 8px;\r\n  letter-spacing: 0.1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/restaurant.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/restaurant.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* restaurant */\r\n.restaurant {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.color-block {\r\n  background-color: #eb9549;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 2.8rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5rem;\r\n  color: white;\r\n  height: max-content;\r\n  padding: 20px 0;\r\n}\r\n.color-block h2 {\r\n  z-index: 999;\r\n}\r\n.me {\r\n  color: #006545;\r\n}\r\n.xi {\r\n  color: white;\r\n}\r\n.co {\r\n  color: #c80f25;\r\n}\r\n\r\n.mex-eagle {\r\n  position: absolute;\r\n  width: 250px;\r\n  right: 58%;\r\n  top: -5%;\r\n  opacity: 0.2;\r\n}\r\n.shop-bio-container {\r\n  background-color: white;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: min-content;\r\n  width: 100vw;\r\n}\r\n.shop-bio {\r\n  max-width: 700px;\r\n  padding: 40px 40px;\r\n  margin: 30px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n  position: relative;\r\n}\r\n.shop-bio p {\r\n  font-size: 1.1rem;\r\n}\r\n.shop-bio h3,\r\n.owner-bio-words h3 {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.6rem;\r\n}\r\n.shop-bio .jalisco {\r\n  font-family: \"Water Brush\", cursive;\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.6rem;\r\n}\r\n.owner-name {\r\n  font-family: \"Water Brush\", cursive;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.5rem;\r\n}\r\n.image-section {\r\n  height: 300px;\r\n}\r\n.coffee-banner {\r\n  object-fit: cover;\r\n  height: 300px;\r\n  margin-bottom: -10px;\r\n\r\n  width: 100%;\r\n}\r\n\r\n.owner-bio-container {\r\n  display: flex;\r\n  height: max-content;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 4%;\r\n  background-color: #fff;\r\n  padding: 40px;\r\n  position: relative;\r\n}\r\n\r\n.owner-headshot {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\r\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\r\n  border-left: 9px solid #795f37;\r\n  z-index: 9999;\r\n}\r\n.owner-bio-words {\r\n  background-color: #e2dedae0;\r\n  padding: 25px;\r\n  max-width: 700px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\r\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\r\n  text-align: center;\r\n  border-left: 9px solid #795f37;\r\n  z-index: 9999;\r\n}\r\n\r\n.owner-bio-words > *:nth-child(n + 3) {\r\n  margin-top: 10px;\r\n}\r\n.owner-bio-words p:not(.owner-name) {\r\n  font-size: 1.1rem;\r\n}\r\n.farm {\r\n  position: absolute;\r\n  height: 100%;\r\n  right: 40px;\r\n  width: 800px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/restaurant.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,QAAQ;EACR,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,qCAAqC;EACrC,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,oBAAoB;;EAEpB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB;wCACsC;EACtC,8BAA8B;EAC9B,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB;wCACsC;EACtC,kBAAkB;EAClB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;AACd","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* restaurant */\r\n.restaurant {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.color-block {\r\n  background-color: #eb9549;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 2.8rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5rem;\r\n  color: white;\r\n  height: max-content;\r\n  padding: 20px 0;\r\n}\r\n.color-block h2 {\r\n  z-index: 999;\r\n}\r\n.me {\r\n  color: #006545;\r\n}\r\n.xi {\r\n  color: white;\r\n}\r\n.co {\r\n  color: #c80f25;\r\n}\r\n\r\n.mex-eagle {\r\n  position: absolute;\r\n  width: 250px;\r\n  right: 58%;\r\n  top: -5%;\r\n  opacity: 0.2;\r\n}\r\n.shop-bio-container {\r\n  background-color: white;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: min-content;\r\n  width: 100vw;\r\n}\r\n.shop-bio {\r\n  max-width: 700px;\r\n  padding: 40px 40px;\r\n  margin: 30px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n  position: relative;\r\n}\r\n.shop-bio p {\r\n  font-size: 1.1rem;\r\n}\r\n.shop-bio h3,\r\n.owner-bio-words h3 {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.6rem;\r\n}\r\n.shop-bio .jalisco {\r\n  font-family: \"Water Brush\", cursive;\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.6rem;\r\n}\r\n.owner-name {\r\n  font-family: \"Water Brush\", cursive;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.5rem;\r\n}\r\n.image-section {\r\n  height: 300px;\r\n}\r\n.coffee-banner {\r\n  object-fit: cover;\r\n  height: 300px;\r\n  margin-bottom: -10px;\r\n\r\n  width: 100%;\r\n}\r\n\r\n.owner-bio-container {\r\n  display: flex;\r\n  height: max-content;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 4%;\r\n  background-color: #fff;\r\n  padding: 40px;\r\n  position: relative;\r\n}\r\n\r\n.owner-headshot {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\r\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\r\n  border-left: 9px solid #795f37;\r\n  z-index: 9999;\r\n}\r\n.owner-bio-words {\r\n  background-color: #e2dedae0;\r\n  padding: 25px;\r\n  max-width: 700px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\r\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\r\n  text-align: center;\r\n  border-left: 9px solid #795f37;\r\n  z-index: 9999;\r\n}\r\n\r\n.owner-bio-words > *:nth-child(n + 3) {\r\n  margin-top: 10px;\r\n}\r\n.owner-bio-words p:not(.owner-name) {\r\n  font-size: 1.1rem;\r\n}\r\n.farm {\r\n  position: absolute;\r\n  height: 100%;\r\n  right: 40px;\r\n  width: 800px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/lofi-bg.jpg */ "./src/lofi-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Water+Brush&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* template */\r\nbody {\r\n  display: grid;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  font-family: \"Bai Jamjuree\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\n.frosted-bg {\r\n  backdrop-filter: blur(5px);\r\n  background-color: rgba(255, 255, 255, 0.11);\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  z-index: -999;\r\n}\r\n\r\n/* nav */\r\nnav ul {\r\n  display: flex;\r\n  gap: 2.5rem;\r\n  height: 100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: #eeeae5;\r\n  border-bottom: 1px solid rgba(180, 180, 180, 0.256);\r\n  position: relative;\r\n}\r\n\r\nnav li {\r\n  flex: 1;\r\n  max-width: min-content;\r\n  align-self: center;\r\n  list-style: none;\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 1.1rem;\r\n}\r\nnav ul .active {\r\n  color: #eb9549;\r\n}\r\nnav li {\r\n  width: min-content;\r\n}\r\nnav li a:not(.active):after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #eb954984;\r\n  transition: width 0.4s ease-in;\r\n}\r\n\r\nnav li a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n/* mobile nav */\r\n\r\n/* company-name */\r\n.company-name {\r\n  display: flex;\r\n  height: 100%;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\n.company-name .first-word {\r\n  color: #795f37;\r\n}\r\n.company-name .second-word {\r\n  font-weight: 400;\r\n}\r\n/* footer */\r\nfooter {\r\n  height: 100%;\r\n  background-color: #eeeae5;\r\n  color: black;\r\n  font-size: 0.8rem;\r\n  display: grid;\r\n  place-items: center;\r\n  border-top: 1px solid rgba(180, 180, 180, 0.303);\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n  .right-half img {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .home-container {\r\n    flex-direction: column;\r\n  }\r\n  .left-half {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .right-half img {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1950px) {\r\n  .menu-container {\r\n    width: 1300px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,6CAA6C;EAC7C,4BAA4B;AAC9B;;AAKA,aAAa;AACb;EACE,aAAa;EACb,yDAAyC;;EAEzC,kCAAkC;EAClC,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;EAClC,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,2CAA2C;EAC3C,eAAe;EACf,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;EACzB,mDAAmD;EACnD,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,cAAc;EACd,QAAQ;EACR,WAAW;EACX,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA,eAAe;;AAEf,iBAAiB;AACjB;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA,WAAW;AACX;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,gDAAgD;AAClD;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.742);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Water+Brush&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap\");\r\n\r\n/* template */\r\nbody {\r\n  display: grid;\r\n  background-image: url(\"/src/lofi-bg.jpg\");\r\n\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  font-family: \"Bai Jamjuree\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\n.frosted-bg {\r\n  backdrop-filter: blur(5px);\r\n  background-color: rgba(255, 255, 255, 0.11);\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  z-index: -999;\r\n}\r\n\r\n/* nav */\r\nnav ul {\r\n  display: flex;\r\n  gap: 2.5rem;\r\n  height: 100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: #eeeae5;\r\n  border-bottom: 1px solid rgba(180, 180, 180, 0.256);\r\n  position: relative;\r\n}\r\n\r\nnav li {\r\n  flex: 1;\r\n  max-width: min-content;\r\n  align-self: center;\r\n  list-style: none;\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 1.1rem;\r\n}\r\nnav ul .active {\r\n  color: #eb9549;\r\n}\r\nnav li {\r\n  width: min-content;\r\n}\r\nnav li a:not(.active):after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #eb954984;\r\n  transition: width 0.4s ease-in;\r\n}\r\n\r\nnav li a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n/* mobile nav */\r\n\r\n/* company-name */\r\n.company-name {\r\n  display: flex;\r\n  height: 100%;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\n.company-name .first-word {\r\n  color: #795f37;\r\n}\r\n.company-name .second-word {\r\n  font-weight: 400;\r\n}\r\n/* footer */\r\nfooter {\r\n  height: 100%;\r\n  background-color: #eeeae5;\r\n  color: black;\r\n  font-size: 0.8rem;\r\n  display: grid;\r\n  place-items: center;\r\n  border-top: 1px solid rgba(180, 180, 180, 0.303);\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n  .right-half img {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .home-container {\r\n    flex-direction: column;\r\n  }\r\n  .left-half {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .right-half img {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1950px) {\r\n  .menu-container {\r\n    width: 1300px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/contact.css":
/*!*************************!*\
  !*** ./src/contact.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/form.css":
/*!**********************!*\
  !*** ./src/form.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/location.css":
/*!**************************!*\
  !*** ./src/location.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_location_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./location.css */ "./node_modules/css-loader/dist/cjs.js!./src/location.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_location_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_location_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/restaurant.css":
/*!****************************!*\
  !*** ./src/restaurant.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./restaurant.css */ "./node_modules/css-loader/dist/cjs.js!./src/restaurant.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/items-imgs/boba.jpg":
/*!*********************************!*\
  !*** ./src/items-imgs/boba.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "boba.jpg";

/***/ }),

/***/ "./src/items-imgs/latte.jpg":
/*!**********************************!*\
  !*** ./src/items-imgs/latte.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "latte.jpg";

/***/ }),

/***/ "./src/items-imgs/machiatto.jpg":
/*!**************************************!*\
  !*** ./src/items-imgs/machiatto.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "machiatto.jpg";

/***/ }),

/***/ "./src/items-imgs/matcha.jpg":
/*!***********************************!*\
  !*** ./src/items-imgs/matcha.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "matcha.jpg";

/***/ }),

/***/ "./src/items-imgs/miso.jpg":
/*!*********************************!*\
  !*** ./src/items-imgs/miso.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "miso.jpg";

/***/ }),

/***/ "./src/items-imgs/ramen.jpg":
/*!**********************************!*\
  !*** ./src/items-imgs/ramen.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ramen.jpg";

/***/ }),

/***/ "./src/items-imgs/spanish-roll.jpg":
/*!*****************************************!*\
  !*** ./src/items-imgs/spanish-roll.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spanish-roll.jpg";

/***/ }),

/***/ "./src/items-imgs/spicy-tuna.jpg":
/*!***************************************!*\
  !*** ./src/items-imgs/spicy-tuna.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spicy-tuna.jpg";

/***/ }),

/***/ "./src/lofi-bg.jpg":
/*!*************************!*\
  !*** ./src/lofi-bg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lofi-bg.jpg";

/***/ }),

/***/ "./src/storefront.jpg":
/*!****************************!*\
  !*** ./src/storefront.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "storefront.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _restaurant_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant.css */ "./src/restaurant.css");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.css */ "./src/menu.css");
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.css */ "./src/contact.css");
/* harmony import */ var _location_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.css */ "./src/location.css");
/* harmony import */ var _lofi_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lofi-bg.jpg */ "./src/lofi-bg.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");












window.addEventListener("DOMContentLoaded", function () {
  if (_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].pathname == "/index.html" || _location_css__WEBPACK_IMPORTED_MODULE_6__["default"].pathname == "/") {
    var content = document.querySelector(".content");
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }

  if (_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].pathname == "/menu.html") {
    var _content = document.querySelector(".content");

    _content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  if (_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].pathname == "/contact.html") {
    var _content2 = document.querySelector(".content");

    _content2.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_10__["default"])());
  }

  if (_location_css__WEBPACK_IMPORTED_MODULE_6__["default"].pathname == "/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_11__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxRQUFRLGFBQWEsYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUs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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEwQixNQUFNLENBQUM5RCxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFJNEQsOERBQUEsSUFBcUIsYUFBckIsSUFBc0NBLDhEQUFBLElBQXFCLEdBQS9ELEVBQW9FO0FBQ2xFLFFBQUlJLE9BQU8sR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkO0FBQ0FtRSxJQUFBQSxPQUFPLENBQUN2QyxXQUFSLENBQW9CWCxvREFBTyxFQUEzQjtBQUNEOztBQUNELE1BQUk4Qyw4REFBQSxJQUFxQixZQUF6QixFQUF1QztBQUNyQyxRQUFJSSxRQUFPLEdBQUdwRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFDQW1FLElBQUFBLFFBQU8sQ0FBQ3ZDLFdBQVIsQ0FBb0JXLG9EQUFPLEVBQTNCO0FBQ0Q7O0FBQ0QsTUFBSXdCLDhEQUFBLElBQXFCLGVBQXpCLEVBQTBDO0FBQ3hDLFFBQUlJLFNBQU8sR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUNBbUUsSUFBQUEsU0FBTyxDQUFDdkMsV0FBUixDQUFvQmIsd0RBQVUsRUFBOUI7QUFDRDs7QUFDRCxNQUFJZ0QsOERBQUEsSUFBcUIsZ0JBQXpCLEVBQTJDO0FBQ3pDbEUsSUFBQUEsdURBQVE7QUFDVDtBQUNGLENBaEJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2F0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb3JtLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvY2F0aW9uLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc3RhdXJhbnQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmNzcz8zMTNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb3JtLmNzcz9jMmY1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2NhdGlvbi5jc3M/YmJhNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5jc3M/MTEwYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzdGF1cmFudC5jc3M/MDdjYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHZpc2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc2FcIik7XHJcbiAgY29uc3QgY2FzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FzaFwiKTtcclxuXHJcbiAgdmlzYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCF2aXNhLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAoY2FzaC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2FzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFjYXNoLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAodmlzYS5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGV2dCkge1xyXG4gIGNvbnN0IGZvcm1FbGVtZW50cyA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzO1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm1FbGVtZW50cy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcblxyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH07XHJcbiIsImZ1bmN0aW9uIGFkZENvbnRhY3QoKSB7XHJcbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRhY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZEhvbWUoKSB7XHJcbiAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBsZXQgbGVmdEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBsZXQgcmlnaHRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgbGV0IHN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBsZXQgY29mZmVlTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlZnRIYWxmLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWhhbGZcIik7XHJcbiAgcmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1oYWxmXCIpO1xyXG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xyXG5cclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIYWxmKTtcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SGFsZik7XHJcblxyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRnJpZW5kcy4gR29vZCBDb2ZmZWUuIEdvb2QgVGltZXMuXCI7XHJcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nXCIpO1xyXG5cclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJob21lLWxvZ29cIik7XHJcbiAgc3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zdWJoZWFkaW5nXCIpO1xyXG5cclxuICBzdWJoZWFkaW5nLnRleHRDb250ZW50ID1cclxuICAgIFwiTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgTm9ydGggUGFyay4gTXlzdGljIE1vY2hhIGlzIGEgY29tbXVuaXR5IG9hc2lzIHByb21vdGluZyBoZWFsdGggYW5kIHdlbGwtYmVpbmcgdGhyb3VnaCBuYXR1cmFsIGZvb2RzLCBwZWFjZWZ1bCBlbnZpcm9ubWVudHMgYW5kIGZyaWVuZGx5IHNlcnZpY2UuXCI7XHJcblxyXG4gIGNvZmZlZUxvZ28uc3JjID0gXCJsb2dvLWNvZmZlZS5wbmdcIjtcclxuICBsb2dvLnNyYyA9IGNvZmZlZUxvZ28uc3JjO1xyXG4gIHJpZ2h0SGFsZi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICByaWdodEhhbGYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgcmlnaHRIYWxmLmFwcGVuZENoaWxkKHN1YmhlYWRpbmcpO1xyXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRIb21lO1xyXG4iLCJpbXBvcnQgcmFtZW4gZnJvbSBcIi4vaXRlbXMtaW1ncy9yYW1lbi5qcGdcIjtcclxuaW1wb3J0IG1pc28gZnJvbSBcIi4vaXRlbXMtaW1ncy9taXNvLmpwZ1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwYW5pc2gtcm9sbC5qcGdcIjtcclxuaW1wb3J0IHNwaWN5IGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BpY3ktdHVuYS5qcGdcIjtcclxuaW1wb3J0IGJvYmEgZnJvbSBcIi4vaXRlbXMtaW1ncy9ib2JhLmpwZ1wiO1xyXG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4vaXRlbXMtaW1ncy9sYXR0ZS5qcGdcIjtcclxuaW1wb3J0IG1hY2hpYXR0byBmcm9tIFwiLi9pdGVtcy1pbWdzL21hY2hpYXR0by5qcGdcIjtcclxuaW1wb3J0IG1hdGNoYSBmcm9tIFwiLi9pdGVtcy1pbWdzL21hdGNoYS5qcGdcIjtcclxuZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBsZXQgaXRlbXMgPSB7XHJcbiAgICBSYW1lbjoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgaXRlbSBpcyBhIGZhbiBmYXZvcml0ZSBhbW9uZyBsb2NhbHMuIEhhbGYgb2ZmIGV2ZXJ5IFdlZG5lc2RheS5cIixcclxuICAgICAgaW1nOiByYW1lbixcclxuICAgICAgcHJpY2U6IFwiJDkuNzVcIixcclxuICAgICAgYWx0OiBcIkEgYm93bCBvZiByYW1lbiBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiTWlzbyBTb3VwXCI6IHtcclxuICAgICAgZGVzYzogXCJUaGUgaGVhbC1hbGwgZGlzaCB0byBhbHdheXMgYmUgdGhlcmUgZm9yIHlvdSB3aGVuICd0aGV5JyB3ZXJlbid0LlwiLFxyXG4gICAgICBpbWc6IG1pc28sXHJcbiAgICAgIHByaWNlOiBcIiQ1Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgbWlzbyBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiU3BhbmlzaCBSb2xsXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGxvdmVycyBmYXZvcml0ZSBvbmNlIGVhdGVuIGJ5IHRoZSBhbmNpZW50IGdvZHMuXCIsXHJcbiAgICAgIGltZzogc3BhbmlzaCxcclxuICAgICAgcHJpY2U6IFwiJDEyLjc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xscyB3aXRoIHNhbG1vbi5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwaWN5IFR1bmFcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgY3VsdCBjbGFzc2ljLiBEb250IGJlIGZyaWVuZHMgd2l0aCBzcGljeS10dW5hIGhhdGVycy5cIixcclxuICAgICAgaW1nOiBzcGljeSxcclxuICAgICAgcHJpY2U6IFwiJDcuNzVcIixcclxuICAgICAgYWx0OiBcIlN1c2hpIHJvbGwgd2l0aCBzcGljeSB0dW5hIGluc2lkZS5cIixcclxuICAgIH0sXHJcbiAgICBCb2JhOiB7XHJcbiAgICAgIGRlc2M6IFwiU2FuIERpZWdvIGhlYXQgdG9vIG11Y2g/IENvb2wgZG93biB3aXRoIHNvbWUgY29sZCBib2JhLlwiLFxyXG4gICAgICBpbWc6IGJvYmEsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIHBsYXN0aWMgY3VwIHdpdGggYm9iYSBtaWxrIHRlYS5cIixcclxuICAgIH0sXHJcbiAgICBMYXR0ZToge1xyXG4gICAgICBkZXNjOiBcIk1vcm5pbmcgcnVzaCByZW1lZHkuIFdoYXRzIHJ1c2ggaG91ciB3aGVuIHlvdSBoYXZlIGEgcGVyZmVjdCBsYXR0ZT9cIixcclxuICAgICAgaW1nOiBsYXR0ZSxcclxuICAgICAgcHJpY2U6IFwiJDQuNzVcIixcclxuICAgICAgYWx0OiBcIkEgZm9hbXkgaG90IGN1cCBvZiBsYXR0ZSBjb2ZmZWVcIixcclxuICAgIH0sXHJcbiAgICBNYWNoaWF0dG86IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGNyZWFteSBoYWxmIG1pbGsgaGFsZiBjb2ZmZWUgaW52ZW50aW9uIGNyZWF0ZWQgYnkgcHVyZSBnZW5pdXMuXCIsXHJcbiAgICAgIGltZzogbWFjaGlhdHRvLFxyXG4gICAgICBwcmljZTogXCIkNC41MFwiLFxyXG4gICAgICBhbHQ6IFwiUG91cmluZyBob3QgY29mZmVlIGludG8gbWFjaGlhdHRvXCIsXHJcbiAgICB9LFxyXG4gICAgTWF0Y2hhOiB7XHJcbiAgICAgIGRlc2M6IFwiTXlzdGljIE1vY2hhcyBjb3N0dW1lciBmYXZvcml0ZS4gUmF0ZWQgYmVzdCBtYXRjaGEgdGVhIGluIENBLlwiLFxyXG4gICAgICBpbWc6IG1hdGNoYSxcclxuICAgICAgcHJpY2U6IFwiJDMuNzVcIixcclxuICAgICAgYWx0OiBcImhvdCBtYXRjaGEgbGF0dGUgd2l0aCB3aGl0ZSBmb2FtXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGxldCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IG1lbnVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IGl0ZW1zW2tleV0ucHJpY2U7XHJcbiAgICBtZW51TGFiZWwudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICBtZW51SW1nLnNyYyA9IGl0ZW1zW2tleV0uaW1nO1xyXG4gICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLmRlc2M7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUxhYmVsKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51RGVzYyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudVByaWNlKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcclxuICB9XHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnU7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFpK0phbWp1cmVlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V2F0ZXIrQnJ1c2gmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtYmx1ci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Mik7XFxyXFxuICAtLWFjY2VudC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICBoZWlnaHQ6IDE3dmg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlYWU0O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5zb2NpYWwtbWVkaWEgYSB7XFxyXFxuICBjb2xvcjogI2ViOTU0OTtcXHJcXG59XFxyXFxuLnllbHAge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXR5cGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMiUgNDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogOTBweDtcXHJcXG59XFxyXFxuLmNvbnRhY3QtdHlwZSA+ICoge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXR5cGUgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcbi5jb250YWN0LXR5cGUgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzlhN2E0YTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtdHlwZSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjOWE3YTRhYmI7XFxyXFxufVxcclxcbi5jb250YWN0LXR5cGUgaSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBjb2xvcjogI2ViOTU0OTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtdHlwZSBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTdhNGFjYjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uc2lnbi11cCBpbnB1dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogOXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcbi5zaWduLXVwLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDZDQUE2QztFQUM3Qyw0QkFBNEI7QUFDOUI7O0FBS0EsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsUUFBUTtFQUNSLDRDQUE0QztFQUM1Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTs7RUFFZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG4uY29udGFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1oZWFkaW5nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGhlaWdodDogMTd2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVhZTQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnNvY2lhbC1tZWRpYSBhIHtcXHJcXG4gIGNvbG9yOiAjZWI5NTQ5O1xcclxcbn1cXHJcXG4ueWVscCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdHlwZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAyJSA0MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiA5MHB4O1xcclxcbn1cXHJcXG4uY29udGFjdC10eXBlID4gKiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdHlwZSBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtdHlwZSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjOWE3YTRhO1xcclxcbn1cXHJcXG4uY29udGFjdC10eXBlIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICM5YTdhNGFiYjtcXHJcXG59XFxyXFxuLmNvbnRhY3QtdHlwZSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGNvbG9yOiAjZWI5NTQ5O1xcclxcbn1cXHJcXG4uY29udGFjdC10eXBlIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViOTU0OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAxOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhN2E0YWNiO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcbi5zaWduLXVwIGlucHV0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuLnNpZ24tdXAtYnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViOTU0OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWkrSmFtanVyZWU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJ0bi1wYWRkaW5nOiAxNXB4O1xcclxcbiAgLS1sYWJlbC1jb2xvcjogIzc5NWYzNztcXHJcXG4gIC0taW5wdXQtYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmV5O1xcclxcbiAgLS1ib3JkZXItcmFkOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMjBweDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzc5NWYzNztcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2VzIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWQzZDc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcclxcbiAgY29sb3I6ICNiODRhNDg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LXZhbGlkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwyNzE2XFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0yNXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi52YWxpZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxNFxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMjVweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogcmdiKDQsIDE3MSwgNCk7XFxyXFxufVxcclxcbi5sYWJlbCB7XFxyXFxuICBjb2xvcjogI2ViOTU0OTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpY29ucyAqL1xcclxcbi5pY29uOm5vdCguZmEtbW9uZXktYmlsbC13YXZlKTpub3QoLmZhLWNjLXZpc2EpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcXHJcXG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLW1vbmV5LWJpbGwtd2F2ZSxcXHJcXG4uZmEtY2MtdmlzYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6bm90KC5kYXRlKTpub3QoW3R5cGU9XFxcIm1vbnRoXFxcIl0pIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1pbnB1dC1ib3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1pbnB1dCB7XFxyXFxuICBib3JkZXI6IHZhcigtLWlucHV0LWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXRzICovXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcclxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOmZvY3VzLFxcclxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl06Zm9jdXMsXFxyXFxuI2luZm9ybWF0aW9uOmZvY3VzIHtcXHJcXG4gIHRyYW5zaXRpb246IG91dGxpbmUgMjAwbXM7XFxyXFxuXFxyXFxuICBvdXRsaW5lOiBzb2xpZCAxcHggIzc5NWYzNztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnV0dG9ucyAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQtYnRucyA+ICoge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IHZhcigtLWlucHV0LWJvcmRlcik7XFxyXFxuICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi52aXNhIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzNTBtcztcXHJcXG59XFxyXFxuLmNhc2gge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDM1MG1zO1xcclxcbn1cXHJcXG4ub24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NWYzN2M2ICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAwLjI0NikgMXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5lcnIge1xcclxcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMjU1LCAwLCAwKSAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1ib3JkZXItcmFkKSB2YXIoLS1ib3JkZXItcmFkKSAwO1xcclxcbn1cXHJcXG4ubm90LWNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIqXFxcIjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbn1cXHJcXG4vKiBhY2NvdW50ICovXFxyXFxuLmFjY291bnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5hY2NvdW50ID4gKiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3VudCBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwYXltZW50IGRldGFpbHMgKi9cXHJcXG4ucGF5bWVudC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4uY2FyZC1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcGFydHkgaW5mb3JtYXRpb24gKi9cXHJcXG4uc2l6ZS13aGVuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5zaXplLXdoZW4gPiAqIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wYXJ0eS1zaXplLFxcclxcbi53aGVuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4td2lkdGg6IDcwcHg7XFxyXFxuICBib3JkZXI6IHZhcigtLWlucHV0LWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhcnR5LXNpemUgPiBpbnB1dCxcXHJcXG4ud2hlbiA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmluZm8tY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmV3c2xldHRlciAqL1xcclxcbi5jaGVjay1uZXdzbGV0dGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG59XFxyXFxuLmNoZWNrLW5ld3NsZXR0ZXIgaW5wdXQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdWJtaXQgYnV0dG9uICovXFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI5NTQ5YjY7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTI0MHB4KSB7XFxyXFxuICAuY29udGFpbmVyLFxcclxcbiAgLmVycm9yLW1lc3NhZ2VzIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAuZXJyb3ItbWVzc2FnZXMge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1Ym1pdC1idG4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixr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RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFOztJQUVFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJ0bi1wYWRkaW5nOiAxNXB4O1xcclxcbiAgLS1sYWJlbC1jb2xvcjogIzc5NWYzNztcXHJcXG4gIC0taW5wdXQtYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmV5O1xcclxcbiAgLS1ib3JkZXItcmFkOiAzcHg7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFpK0phbWp1cmVlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMzBweCAyMHB4O1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA5MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1pbnB1dC1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjNzk1ZjM3O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZXMge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2VlZDNkNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxyXFxuICBjb2xvcjogI2I4NGE0ODtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5lbWFpbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ub3QtdmFsaWQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTZcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTI1cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnZhbGlkOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwyNzE0XFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0yNXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoNCwgMTcxLCA0KTtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjZWI5NTQ5O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIGljb25zICovXFxyXFxuLmljb246bm90KC5mYS1tb25leS1iaWxsLXdhdmUpOm5vdCguZmEtY2MtdmlzYSkge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1pbnB1dC1ib3JkZXIpO1xcclxcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtbW9uZXktYmlsbC13YXZlLFxcclxcbi5mYS1jYy12aXNhIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpub3QoLmRhdGUpOm5vdChbdHlwZT1cXFwibW9udGhcXFwiXSkge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWlucHV0LWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWlucHV0IHtcXHJcXG4gIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dHMgKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxyXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl06Zm9jdXMsXFxyXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXTpmb2N1cyxcXHJcXG4jaW5mb3JtYXRpb246Zm9jdXMge1xcclxcbiAgdHJhbnNpdGlvbjogb3V0bGluZSAyMDBtcztcXHJcXG5cXHJcXG4gIG91dGxpbmU6IHNvbGlkIDFweCAjNzk1ZjM3O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBidXR0b25zICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uY2FyZC1idG5zID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcXHJcXG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2Ege1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDM1MG1zO1xcclxcbn1cXHJcXG4uY2FzaCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzUwbXM7XFxyXFxufVxcclxcbi5vbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1ZjM3YzYgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQ2KSAxcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmVyciB7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYigyNTUsIDAsIDApICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWJvcmRlci1yYWQpIHZhcigtLWJvcmRlci1yYWQpIDA7XFxyXFxufVxcclxcbi5ub3QtY2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIipcXFwiO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi8qIGFjY291bnQgKi9cXHJcXG4uYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLmFjY291bnQgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hY2NvdW50IGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHBheW1lbnQgZGV0YWlscyAqL1xcclxcbi5wYXltZW50LWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5jYXJkLWJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwYXJ0eSBpbmZvcm1hdGlvbiAqL1xcclxcbi5zaXplLXdoZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLnNpemUtd2hlbiA+ICoge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcnR5LXNpemUsXFxyXFxuLndoZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi13aWR0aDogNzBweDtcXHJcXG4gIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFydHktc2l6ZSA+IGlucHV0LFxcclxcbi53aGVuID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uaW5mby1jb250YWluZXIgdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuZXdzbGV0dGVyICovXFxyXFxuLmNoZWNrLW5ld3NsZXR0ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHJnYigxMzksIDEzOSwgMTM5KTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG4uY2hlY2stbmV3c2xldHRlciBpbnB1dCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIHN1Ym1pdCBidXR0b24gKi9cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViOTU0OTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDliNjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcXHJcXG4gIC5jb250YWluZXIsXFxyXFxuICAuZXJyb3ItbWVzc2FnZXMge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5lcnJvci1tZXNzYWdlcyB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0LWJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwic3RvcmVmcm9udC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8qIGhvbWUgcGFnZSAqL1xcclxcbi5ob21lLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5ob21lLWNvbnRhaW5lciA+ICoge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuLmxlZnQtaGFsZiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbn1cXHJcXG4ucmlnaHQtaGFsZiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXItY29sb3IpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcXHJcXG59XFxyXFxuLmhvbWUtc3ViaGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi5ob21lLWhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi5ob21lLWxvZ28ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkNBQTZDO0VBQzdDLDRCQUE0QjtBQUM5Qjs7QUFLQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSx5REFBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIGhvbWUgcGFnZSAqL1xcclxcbi5ob21lLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5ob21lLWNvbnRhaW5lciA+ICoge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuLmxlZnQtaGFsZiB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInN0b3JlZnJvbnQuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxufVxcclxcbi5yaWdodC1oYWxmIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmx1ci1jb2xvcik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogNDBweCA0MHB4O1xcclxcbn1cXHJcXG4uaG9tZS1zdWJoZWFkaW5nIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuLmhvbWUtaGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmhvbWUtbG9nbyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWkrSmFtanVyZWU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1XYXRlcitCcnVzaCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8qIGxvY2F0aW9uICovXFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMS4yZnIgLyAxZnIgMS40ZnI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE3YTRhY2I7XFxyXFxufVxcclxcbi5hZGRyZXNzLWNvbnRhaW5lciBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmFkZHJlc3MtY29udGFpbmVyLFxcclxcbi5ob3Vycy1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiA0MHB4IDEwcHggMTBweCA0MHB4O1xcclxcbn1cXHJcXG4uaG91cnMtY29udGFpbmVyIHRhYmxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi5ob3Vycy1jb250YWluZXIgdGQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxyXFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI5NTQ5Y2I7XFxyXFxufVxcclxcbi5tYXAtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAtMSAvIC0xO1xcclxcbn1cXHJcXG4ubWFwLWNvbnRhaW5lciBpZnJhbWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sb2NhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCOztBQUtBLGFBQWE7O0FBRWI7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kLWJsdXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDIpO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFpK0phbWp1cmVlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V2F0ZXIrQnJ1c2gmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMDs2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogbG9jYXRpb24gKi9cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxLjJmciAvIDFmciAxLjRmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTdhNGFjYjtcXHJcXG59XFxyXFxuLmFkZHJlc3MtY29udGFpbmVyIGEge1xcclxcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG4uYWRkcmVzcy1jb250YWluZXIsXFxyXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMTBweCAxMHB4IDQwcHg7XFxyXFxufVxcclxcbi5ob3Vycy1jb250YWluZXIgdGFibGUge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuLmhvdXJzLWNvbnRhaW5lciB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4uaG91cnMtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDljYjtcXHJcXG59XFxyXFxuLm1hcC1jb250YWluZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIC0xIC8gLTE7XFxyXFxufVxcclxcbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFpK0phbWp1cmVlOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V2F0ZXIrQnJ1c2gmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtYmx1ci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Mik7XFxyXFxuICAtLWFjY2VudC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZW51IGNvbnRlbnQgKi9cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnJweCkpO1xcclxcbiAgZ2FwOiAxLjNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDY1cHggYXV0bztcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1sZWZ0OiA5cHggc29saWQgIzc5NWYzNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gPiAqIHtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSBoMiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc5NWYzNztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDY4LCAwLCAwLjIxKTtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLm1lbnUtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3OTVmMzc7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCOztBQUtBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsMERBQTBEO0VBQzFELFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIG1lbnUgY29udGVudCAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcnB4KSk7XFxyXFxuICBnYXA6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogNjVweCBhdXRvO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCAjNzk1ZjM3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSA+ICoge1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIGgyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzk1ZjM3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgNjgsIDAsIDAuMjEpO1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG4ubWVudS1wcmljZSB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc5NWYzNztcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kLWJsdXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDIpO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVzdGF1cmFudCAqL1xcclxcbi5yZXN0YXVyYW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3ItYmxvY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViOTU0OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG4uY29sb3ItYmxvY2sgaDIge1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG4ubWUge1xcclxcbiAgY29sb3I6ICMwMDY1NDU7XFxyXFxufVxcclxcbi54aSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5jbyB7XFxyXFxuICBjb2xvcjogI2M4MGYyNTtcXHJcXG59XFxyXFxuXFxyXFxuLm1leC1lYWdsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICByaWdodDogNTglO1xcclxcbiAgdG9wOiAtNSU7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxufVxcclxcbi5zaG9wLWJpby1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuLnNob3AtYmlvIHtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxyXFxuICBtYXJnaW46IDMwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zaG9wLWJpbyBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4uc2hvcC1iaW8gaDMsXFxyXFxuLm93bmVyLWJpby13b3JkcyBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG4uc2hvcC1iaW8gLmphbGlzY28ge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJXYXRlciBCcnVzaFxcXCIsIGN1cnNpdmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcbi5vd25lci1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2F0ZXIgQnJ1c2hcXFwiLCBjdXJzaXZlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4uaW1hZ2Utc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG4uY29mZmVlLWJhbm5lciB7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3duZXItYmlvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm93bmVyLWhlYWRzaG90IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEwcHggMTVweCAtM3B4LFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0cHggNnB4IC0ycHg7XFxyXFxuICBib3JkZXItbGVmdDogOXB4IHNvbGlkICM3OTVmMzc7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG4ub3duZXItYmlvLXdvcmRzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmRlZGFlMDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMTBweCAxNXB4IC0zcHgsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDRweCA2cHggLTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA5cHggc29saWQgIzc5NWYzNztcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi5vd25lci1iaW8td29yZHMgPiAqOm50aC1jaGlsZChuICsgMykge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLm93bmVyLWJpby13b3JkcyBwOm5vdCgub3duZXItbmFtZSkge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi5mYXJtIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHJpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzdGF1cmFudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCOztBQUtBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9COztFQUVwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEI7d0NBQ3NDO0VBQ3RDLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEI7d0NBQ3NDO0VBQ3RDLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHJlc3RhdXJhbnQgKi9cXHJcXG4ucmVzdGF1cmFudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG9yLWJsb2NrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjk1NDk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuLmNvbG9yLWJsb2NrIGgyIHtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuLm1lIHtcXHJcXG4gIGNvbG9yOiAjMDA2NTQ1O1xcclxcbn1cXHJcXG4ueGkge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uY28ge1xcclxcbiAgY29sb3I6ICNjODBmMjU7XFxyXFxufVxcclxcblxcclxcbi5tZXgtZWFnbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgcmlnaHQ6IDU4JTtcXHJcXG4gIHRvcDogLTUlO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG4uc2hvcC1iaW8tY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcbi5zaG9wLWJpbyB7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgcGFkZGluZzogNDBweCA0MHB4O1xcclxcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uc2hvcC1iaW8gcCB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuLnNob3AtYmlvIGgzLFxcclxcbi5vd25lci1iaW8td29yZHMgaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG59XFxyXFxuLnNob3AtYmlvIC5qYWxpc2NvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2F0ZXIgQnJ1c2hcXFwiLCBjdXJzaXZlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG4ub3duZXItbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIldhdGVyIEJydXNoXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuLmltYWdlLXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuLmNvZmZlZS1iYW5uZXIge1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm93bmVyLWJpby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5vd25lci1oZWFkc2hvdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxMHB4IDE1cHggLTNweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDZweCAtMnB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCAjNzk1ZjM3O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLm93bmVyLWJpby13b3JkcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkZWRhZTA7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEwcHggMTVweCAtM3B4LFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0cHggNnB4IC0ycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItbGVmdDogOXB4IHNvbGlkICM3OTVmMzc7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3duZXItYmlvLXdvcmRzID4gKjpudGgtY2hpbGQobiArIDMpIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5vd25lci1iaW8td29yZHMgcDpub3QoLm93bmVyLW5hbWUpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4uZmFybSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICByaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2xvZmktYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWkrSmFtanVyZWU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1XYXRlcitCcnVzaCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtYmx1ci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Mik7XFxyXFxuICAtLWFjY2VudC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wbGF0ZSAqL1xcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWkgSmFtanVyZWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyb3N0ZWQtYmcge1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IC05OTk7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdiAqL1xcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVhZTU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjI1Nik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5uYXYgdWwgLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ViOTU0OTtcXHJcXG59XFxyXFxubmF2IGxpIHtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxubmF2IGxpIGE6bm90KC5hY3RpdmUpOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ViOTU0OTg0O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIG1vYmlsZSBuYXYgKi9cXHJcXG5cXHJcXG4vKiBjb21wYW55LW5hbWUgKi9cXHJcXG4uY29tcGFueS1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFueS1uYW1lIC5maXJzdC13b3JkIHtcXHJcXG4gIGNvbG9yOiAjNzk1ZjM3O1xcclxcbn1cXHJcXG4uY29tcGFueS1uYW1lIC5zZWNvbmQtd29yZCB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWFlNTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMwMyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gIC5yaWdodC1oYWxmIGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5sZWZ0LWhhbGYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5yaWdodC1oYWxmIGltZyB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXHJcXG4gIC5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCOztBQUtBLGFBQWE7QUFDYjtFQUNFLGFBQWE7RUFDYix5REFBeUM7O0VBRXpDLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7RUFDUixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxlQUFlOztBQUVmLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBLFdBQVc7QUFDWDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQyKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaStKYW1qdXJlZTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdhdGVyK0JydXNoJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHRlbXBsYXRlICovXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2xvZmktYmcuanBnXFxcIik7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWkgSmFtanVyZWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyb3N0ZWQtYmcge1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IC05OTk7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdiAqL1xcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVhZTU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjI1Nik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5uYXYgdWwgLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2ViOTU0OTtcXHJcXG59XFxyXFxubmF2IGxpIHtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxubmF2IGxpIGE6bm90KC5hY3RpdmUpOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ViOTU0OTg0O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIG1vYmlsZSBuYXYgKi9cXHJcXG5cXHJcXG4vKiBjb21wYW55LW5hbWUgKi9cXHJcXG4uY29tcGFueS1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFueS1uYW1lIC5maXJzdC13b3JkIHtcXHJcXG4gIGNvbG9yOiAjNzk1ZjM3O1xcclxcbn1cXHJcXG4uY29tcGFueS1uYW1lIC5zZWNvbmQtd29yZCB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWFlNTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMwMyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gIC5yaWdodC1oYWxmIGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5sZWZ0LWhhbGYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5yaWdodC1oYWxmIGltZyB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXHJcXG4gIC5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcblxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuXHJcblxyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2NhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvY2F0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzdGF1cmFudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3RhdXJhbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgZm9ybSBmcm9tIFwiLi9mb3JtLmNzc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmNzc1wiO1xyXG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9yZXN0YXVyYW50LmNzc1wiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LmNzc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmNzc1wiO1xyXG5pbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb24uY3NzXCI7XHJcbmltcG9ydCBiZyBmcm9tIFwiLi9sb2ZpLWJnLmpwZ1wiO1xyXG5pbXBvcnQgYWRkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBhZGRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IGFkZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vY2F0ZXJpbmcuanNcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2luZGV4Lmh0bWxcIiB8fCBsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9cIikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEhvbWUoKSk7XHJcbiAgfVxyXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9tZW51Lmh0bWxcIikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE1lbnUoKSk7XHJcbiAgfVxyXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jb250YWN0Lmh0bWxcIikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZENvbnRhY3QoKSk7XHJcbiAgfVxyXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jYXRlcmluZy5odG1sXCIpIHtcclxuICAgIGluaXRGb3JtKCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImluaXRGb3JtIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZpc2EiLCJjYXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwidmFsaWRhdGVGb3JtIiwiZXZ0IiwiZm9ybUVsZW1lbnRzIiwiZm9ybXMiLCJlbGVtZW50cyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENvbnRhY3QiLCJmb3JtQ29udGFpbmVyIiwiYWRkSG9tZSIsImhvbWVDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwibGVmdEhhbGYiLCJyaWdodEhhbGYiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImxvZ28iLCJjb2ZmZWVMb2dvIiwiSW1hZ2UiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50Iiwic3JjIiwicmFtZW4iLCJtaXNvIiwic3BhbmlzaCIsInNwaWN5IiwiYm9iYSIsImxhdHRlIiwibWFjaGlhdHRvIiwibWF0Y2hhIiwiYWRkTWVudSIsIml0ZW1zIiwiUmFtZW4iLCJkZXNjIiwiaW1nIiwicHJpY2UiLCJhbHQiLCJCb2JhIiwiTGF0dGUiLCJNYWNoaWF0dG8iLCJNYXRjaGEiLCJtZW51Q29udGFpbmVyIiwia2V5IiwibWVudUl0ZW0iLCJtZW51TGFiZWwiLCJtZW51SW1nIiwibWVudURlc2MiLCJtZW51UHJpY2UiLCJhcHBlbmQiLCJzdHlsZSIsImhvbWUiLCJyZXN0YXVyYW50IiwibWVudSIsImNvbnRhY3QiLCJsb2NhdGlvbiIsImJnIiwid2luZG93IiwicGF0aG5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==