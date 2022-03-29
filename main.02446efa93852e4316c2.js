/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  var formHeader = document.createElement("h2");
  var formContainer = document.createElement("form");
  var nameContainer = document.createElement("div");
  var nameLabel = document.createElement("label");
  var nameInput = document.createElement("input");
  var phoneContainer = document.createElement("div");
  var phoneLabel = document.createElement("label");
  var phoneInput = document.createElement("input");
  var emailContainer = document.createElement("div");
  var emailLabel = document.createElement("label");
  var emailInput = document.createElement("input");
  var commentInput = document.createElement("textarea");
  var submitBtn = document.createElement("button");
  formContainer.setAttribute("class", "form-container");
  formContainer.setAttribute("action", "#");
  nameLabel.setAttribute("for", "name");
  nameInput.setAttribute("id", "name");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone");
  emailLabel.setAttribute("type", "email");
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("id", "email");
  commentInput.setAttribute("class", "comment");
  commentInput.setAttribute("placeholder", "Eg. 'The ramen was to die for!'");
  nameContainer.append(nameLabel);
  nameContainer.append(nameInput);
  phoneContainer.append(phoneLabel);
  phoneContainer.append(phoneInput);
  emailContainer.append(emailLabel);
  emailContainer.append(emailInput);
  formContainer.append(formHeader);
  formContainer.append(nameContainer);
  formContainer.append(phoneContainer);
  formContainer.append(emailContainer);
  formContainer.append(commentInput);
  formContainer.append(submitBtn);
  formHeader.textContent = "Tell us about your experience!";
  nameLabel.textContent = "Name:";
  phoneLabel.textContent = "Phone:";
  emailLabel.textContent = "Email:";
  submitBtn.textContent = "Submit";
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
  var homeContainer = document.createElement("div");
  var video = document.createElement("iframe");
  var homeDesc = document.createElement("div");
  homeDesc.textContent = "This song of the week is brought to you by costumer of the week Andrea Lizarraga!";
  var vidURL = "https://www.youtube.com/embed/FFnjZY1vRzk";
  homeContainer.classList.add("vid-container");
  video.title = "Song of the week";
  video.src = vidURL;
  video.setAttribute("frameborder", 0);
  video.classList.add("video");
  homeDesc.classList.add("home-desc");
  homeContainer.append(video);
  homeContainer.append(homeDesc);
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





function addMenu() {
  var items = {
    Ramen: {
      desc: "This item is a fan favorite among locals.",
      img: _items_imgs_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you.",
      img: _items_imgs_miso_jpg__WEBPACK_IMPORTED_MODULE_1__
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: _items_imgs_spanish_roll_jpg__WEBPACK_IMPORTED_MODULE_2__
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: _items_imgs_spicy_tuna_jpg__WEBPACK_IMPORTED_MODULE_3__
    }
  };
  var menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  for (var key in items) {
    var menuItem = document.createElement("div");
    var menuLabel = document.createElement("h2");
    var menuImg = document.createElement("img");
    var menuDesc = document.createElement("p");
    menuItem.classList.add("menu-item");
    menuLabel.textContent = key;
    menuImg.src = items[key].img;
    menuDesc.textContent = items[key].desc;
    menuItem.append(menuLabel);
    menuItem.append(menuImg);
    menuItem.append(menuDesc);
    menuContainer.append(menuItem);
  }

  return menuContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.63);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n\r\n/* template */\r\nbody {\r\n  display: grid;\r\n\r\n  grid-template: 60px 80px 1fr 40px / 1fr;\r\n  height: 100vh;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  font-family: \"Bai Jamjuree\", sans-serif;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: var(--accent-color);\r\n}\r\nnav li {\r\n  flex: 1;\r\n  max-width: 400px;\r\n  align-self: center;\r\n  list-style: none;\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\nnav a:hover {\r\n  color: grey;\r\n}\r\n\r\n/* header */\r\nheader {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(5px);\r\n  padding: 20px;\r\n  width: 100vw;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: white;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\nheader .first-word {\r\n  color: orangered;\r\n}\r\nheader .second-word {\r\n  font-weight: 400;\r\n}\r\n/* footer */\r\nfooter {\r\n  height: 100%;\r\n  background-color: var(--accent-color);\r\n  color: rgba(255, 255, 255, 0.589);\r\n  font-size: 0.8rem;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n/* home page */\r\n\r\n.vid-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n  padding: 80px 30px;\r\n  max-width: 900px;\r\n  gap: 1.3rem;\r\n  margin: auto;\r\n}\r\n.video {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.home-desc {\r\n  background-color: var(--background-blur-color);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n/* menu content */\r\n.menu-container {\r\n  display: grid;\r\n  height: 100%;\r\n  width: 80%;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  grid-template-rows: repeat(auto-fit, minmax(300px, 100px));\r\n  gap: 1.3rem;\r\n\r\n  color: white;\r\n  margin: 1.3rem auto;\r\n}\r\n.menu-item {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(5px);\r\n\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.menu-item > * {\r\n  padding: 2px;\r\n}\r\n.menu-item h2 {\r\n  border-bottom: 1px solid white;\r\n  margin-bottom: 10px;\r\n}\r\n.menu-item img {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  padding: 0 10px;\r\n}\r\n.menu-item p {\r\n  text-align: center;\r\n  min-height: 50px;\r\n}\r\n\r\n/* contact */\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 50px auto;\r\n  max-width: 900px;\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  background-color: var(--background-blur-color);\r\n  gap: 20px;\r\n  padding: 30px 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n.form-container > div {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 260px;\r\n  gap: 1rem;\r\n}\r\n\r\ntextarea {\r\n  width: 260px;\r\n  height: 140px;\r\n  align-self: center;\r\n}\r\n\r\nbutton {\r\n  width: 160px;\r\n  font-size: 1.3rem;\r\n  border: none;\r\n  background-color: white;\r\n  align-self: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,4BAA4B;AAC9B;;AAGA,aAAa;AACb;EACE,aAAa;;EAEb,uCAAuC;EACvC,aAAa;EACb,yDAAyC;EACzC,kCAAkC;EAClC,sBAAsB;EACtB,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,qCAAqC;AACvC;AACA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA,WAAW;AACX;EACE,8CAA8C;EAC9C,0BAA0B;EAC1B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA,WAAW;AACX;EACE,YAAY;EACZ,qCAAqC;EACrC,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,8CAA8C;EAC9C,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,YAAY;EACZ,UAAU;EACV,2DAA2D;EAC3D,0DAA0D;EAC1D,WAAW;;EAEX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,8CAA8C;EAC9C,0BAA0B;;EAE1B,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;AACA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,8CAA8C;EAC9C,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --background-blur-color: rgba(0, 0, 0, 0.63);\r\n  --accent-color: rgb(0, 0, 0);\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600&display=swap\");\r\n\r\n/* template */\r\nbody {\r\n  display: grid;\r\n\r\n  grid-template: 60px 80px 1fr 40px / 1fr;\r\n  height: 100vh;\r\n  background-image: url(\"/src/lofi-bg.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  font-family: \"Bai Jamjuree\", sans-serif;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 100%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: var(--accent-color);\r\n}\r\nnav li {\r\n  flex: 1;\r\n  max-width: 400px;\r\n  align-self: center;\r\n  list-style: none;\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\nnav a:hover {\r\n  color: grey;\r\n}\r\n\r\n/* header */\r\nheader {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(5px);\r\n  padding: 20px;\r\n  width: 100vw;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  color: white;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\nheader .first-word {\r\n  color: orangered;\r\n}\r\nheader .second-word {\r\n  font-weight: 400;\r\n}\r\n/* footer */\r\nfooter {\r\n  height: 100%;\r\n  background-color: var(--accent-color);\r\n  color: rgba(255, 255, 255, 0.589);\r\n  font-size: 0.8rem;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n/* home page */\r\n\r\n.vid-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n  padding: 80px 30px;\r\n  max-width: 900px;\r\n  gap: 1.3rem;\r\n  margin: auto;\r\n}\r\n.video {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.home-desc {\r\n  background-color: var(--background-blur-color);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n/* menu content */\r\n.menu-container {\r\n  display: grid;\r\n  height: 100%;\r\n  width: 80%;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  grid-template-rows: repeat(auto-fit, minmax(300px, 100px));\r\n  gap: 1.3rem;\r\n\r\n  color: white;\r\n  margin: 1.3rem auto;\r\n}\r\n.menu-item {\r\n  background-color: var(--background-blur-color);\r\n  backdrop-filter: blur(5px);\r\n\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.menu-item > * {\r\n  padding: 2px;\r\n}\r\n.menu-item h2 {\r\n  border-bottom: 1px solid white;\r\n  margin-bottom: 10px;\r\n}\r\n.menu-item img {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  padding: 0 10px;\r\n}\r\n.menu-item p {\r\n  text-align: center;\r\n  min-height: 50px;\r\n}\r\n\r\n/* contact */\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 50px auto;\r\n  max-width: 900px;\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  background-color: var(--background-blur-color);\r\n  gap: 20px;\r\n  padding: 30px 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n.form-container > div {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 260px;\r\n  gap: 1rem;\r\n}\r\n\r\ntextarea {\r\n  width: 260px;\r\n  height: 140px;\r\n  align-self: center;\r\n}\r\n\r\nbutton {\r\n  width: 160px;\r\n  font-size: 1.3rem;\r\n  border: none;\r\n  background-color: white;\r\n  align-self: center;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _lofi_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lofi-bg.jpg */ "./src/lofi-bg.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





var content = document.querySelector(".content");
var homeTab = document.querySelector(".home-tab");
var menuTab = document.querySelector(".menu-tab");
var contactTab = document.querySelector(".contact-tab");
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
(0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
homeTab.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
});
menuTab.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
});
contactTab.addEventListener("click", function () {
  content.innerHTML = "";
  content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQzRDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZDtBQUNBLElBQUlHLFVBQVUsR0FBRy9DLFFBQVEsQ0FBQzRDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFFQUQsT0FBTyxDQUFDSyxXQUFSLENBQW9CL0Isb0RBQU8sRUFBM0I7QUFDQW5CLHVEQUFVO0FBQ1YrQyxPQUFPLENBQUNJLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdENOLEVBQUFBLE9BQU8sQ0FBQ08sU0FBUixHQUFvQixFQUFwQjtBQUNBUCxFQUFBQSxPQUFPLENBQUNLLFdBQVIsQ0FBb0IvQixvREFBTyxFQUEzQjtBQUNELENBSEQ7QUFLQTZCLE9BQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0Q04sRUFBQUEsT0FBTyxDQUFDTyxTQUFSLEdBQW9CLEVBQXBCO0FBQ0FQLEVBQUFBLE9BQU8sQ0FBQ0ssV0FBUixDQUFvQmxCLG9EQUFPLEVBQTNCO0FBQ0QsQ0FIRDtBQUtBaUIsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDTixFQUFBQSxPQUFPLENBQUNPLFNBQVIsR0FBb0IsRUFBcEI7QUFDQVAsRUFBQUEsT0FBTyxDQUFDSyxXQUFSLENBQW9CbEQsdURBQVUsRUFBOUI7QUFDRCxDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkQ29udGFjdCgpIHtcclxuICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGxldCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbGV0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgcGhvbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsZXQgcGhvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBsZXQgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxldCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGxldCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIik7XHJcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcclxuICBwaG9uZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInBob25lXCIpO1xyXG4gIHBob25lTGFiZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcclxuICBwaG9uZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGhvbmVcIik7XHJcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XHJcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcclxuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XHJcbiAgY29tbWVudElucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tbWVudFwiKTtcclxuICBjb21tZW50SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFZy4gJ1RoZSByYW1lbiB3YXMgdG8gZGllIGZvciEnXCIpO1xyXG5cclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZChuYW1lTGFiZWwpO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kKG5hbWVJbnB1dCk7XHJcbiAgcGhvbmVDb250YWluZXIuYXBwZW5kKHBob25lTGFiZWwpO1xyXG4gIHBob25lQ29udGFpbmVyLmFwcGVuZChwaG9uZUlucHV0KTtcclxuICBlbWFpbENvbnRhaW5lci5hcHBlbmQoZW1haWxMYWJlbCk7XHJcbiAgZW1haWxDb250YWluZXIuYXBwZW5kKGVtYWlsSW5wdXQpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm1IZWFkZXIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kKG5hbWVDb250YWluZXIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kKHBob25lQ29udGFpbmVyKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZChlbWFpbENvbnRhaW5lcik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmQoY29tbWVudElucHV0KTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdG4pO1xyXG5cclxuICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJUZWxsIHVzIGFib3V0IHlvdXIgZXhwZXJpZW5jZSFcIjtcclxuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XHJcbiAgcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9IFwiUGhvbmU6XCI7XHJcbiAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWw6XCI7XHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuXHJcbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRhY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZEhvbWUoKSB7XHJcbiAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgbGV0IGhvbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lRGVzYy50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRoaXMgc29uZyBvZiB0aGUgd2VlayBpcyBicm91Z2h0IHRvIHlvdSBieSBjb3N0dW1lciBvZiB0aGUgd2VlayBBbmRyZWEgTGl6YXJyYWdhIVwiO1xyXG4gIGxldCB2aWRVUkwgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZGbmpaWTF2UnprXCI7XHJcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmlkLWNvbnRhaW5lclwiKTtcclxuICB2aWRlby50aXRsZSA9IFwiU29uZyBvZiB0aGUgd2Vla1wiO1xyXG4gIHZpZGVvLnNyYyA9IHZpZFVSTDtcclxuICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJmcmFtZWJvcmRlclwiLCAwKTtcclxuICB2aWRlby5jbGFzc0xpc3QuYWRkKFwidmlkZW9cIik7XHJcbiAgaG9tZURlc2MuY2xhc3NMaXN0LmFkZChcImhvbWUtZGVzY1wiKTtcclxuICBob21lQ29udGFpbmVyLmFwcGVuZCh2aWRlbyk7XHJcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmQoaG9tZURlc2MpO1xyXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRIb21lO1xyXG4iLCJpbXBvcnQgcmFtZW4gZnJvbSBcIi4vaXRlbXMtaW1ncy9yYW1lbi5qcGdcIjtcclxuaW1wb3J0IG1pc28gZnJvbSBcIi4vaXRlbXMtaW1ncy9taXNvLmpwZ1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwYW5pc2gtcm9sbC5qcGdcIjtcclxuaW1wb3J0IHNwaWN5IGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BpY3ktdHVuYS5qcGdcIjtcclxuZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBsZXQgaXRlbXMgPSB7XHJcbiAgICBSYW1lbjoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgaXRlbSBpcyBhIGZhbiBmYXZvcml0ZSBhbW9uZyBsb2NhbHMuXCIsXHJcbiAgICAgIGltZzogcmFtZW4sXHJcbiAgICB9LFxyXG4gICAgXCJNaXNvIFNvdXBcIjoge1xyXG4gICAgICBkZXNjOiBcIlRoZSBoZWFsLWFsbCBkaXNoIHRvIGFsd2F5cyBiZSB0aGVyZSBmb3IgeW91LlwiLFxyXG4gICAgICBpbWc6IG1pc28sXHJcbiAgICB9LFxyXG4gICAgXCJTcGFuaXNoIFJvbGxcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgbG92ZXJzIGZhdm9yaXRlIG9uY2UgZWF0ZW4gYnkgdGhlIGFuY2llbnQgZ29kcy5cIixcclxuICAgICAgaW1nOiBzcGFuaXNoLFxyXG4gICAgfSxcclxuICAgIFwiU3BpY3kgVHVuYVwiOiB7XHJcbiAgICAgIGRlc2M6IFwiQSBjdWx0IGNsYXNzaWMuIERvbnQgYmUgZnJpZW5kcyB3aXRoIHNwaWN5LXR1bmEgaGF0ZXJzLlwiLFxyXG4gICAgICBpbWc6IHNwaWN5LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtcykge1xyXG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBtZW51TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBsZXQgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsZXQgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBtZW51TGFiZWwudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICBtZW51SW1nLnNyYyA9IGl0ZW1zW2tleV0uaW1nO1xyXG4gICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLmRlc2M7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUxhYmVsKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51RGVzYyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbSk7XHJcbiAgfVxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9sb2ZpLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFpK0phbWp1cmVlOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtYmx1ci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzKTtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXBsYXRlICovXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgZ3JpZC10ZW1wbGF0ZTogNjBweCA4MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJhaSBKYW1qdXJlZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5uYXYgbGkge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuZmlyc3Qtd29yZCB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5oZWFkZXIgLnNlY29uZC13b3JkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi8qIGZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG9tZSBwYWdlICovXFxyXFxuXFxyXFxuLnZpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDgwcHggMzBweDtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBnYXA6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnZpZGVvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaG9tZS1kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmx1ci1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgY29udGVudCAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMTAwcHgpKTtcXHJcXG4gIGdhcDogMS4zcmVtO1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxLjNyZW0gYXV0bztcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXItY29sb3IpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtID4gKiB7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gaDIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmx1ci1jb2xvcik7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbiAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLDRCQUE0QjtBQUM5Qjs7QUFHQSxhQUFhO0FBQ2I7RUFDRSxhQUFhOztFQUViLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IseURBQXlDO0VBQ3pDLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsV0FBVztBQUNYO0VBQ0UsOENBQThDO0VBQzlDLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQSxXQUFXO0FBQ1g7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsMERBQTBEO0VBQzFELFdBQVc7O0VBRVgsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLDBCQUEwQjs7RUFFMUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kLWJsdXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Myk7XFxyXFxuICAtLWFjY2VudC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWkrSmFtanVyZWU6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogdGVtcGxhdGUgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDgwcHggMWZyIDQwcHggLyAxZnI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2xvZmktYmcuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJhaSBKYW1qdXJlZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5uYXYgbGkge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyLWNvbG9yKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuZmlyc3Qtd29yZCB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5oZWFkZXIgLnNlY29uZC13b3JkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi8qIGZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG9tZSBwYWdlICovXFxyXFxuXFxyXFxuLnZpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDgwcHggMzBweDtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBnYXA6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnZpZGVvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaG9tZS1kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmx1ci1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgY29udGVudCAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMTAwcHgpKTtcXHJcXG4gIGdhcDogMS4zcmVtO1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxLjNyZW0gYXV0bztcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXItY29sb3IpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtID4gKiB7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gaDIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmx1ci1jb2xvcik7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbiAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcblxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuXHJcblxyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG5cclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuXHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG5cclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuXHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuXHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcblxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG5cclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcblxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcblxyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICBjc3MgKz0gb2JqLmNzcztcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH0gLy8gRm9yIG9sZCBJRVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcblxyXG5cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGJnIGZyb20gXCIuL2xvZmktYmcuanBnXCI7XHJcbmltcG9ydCBhZGRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGFkZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgYWRkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxubGV0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtdGFiXCIpO1xyXG5sZXQgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10YWJcIik7XHJcbmxldCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LXRhYlwiKTtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkSG9tZSgpKTtcclxuYWRkQ29udGFjdCgpO1xyXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkSG9tZSgpKTtcclxufSk7XHJcblxyXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxufSk7XHJcblxyXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29udGFjdCgpKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhZGRDb250YWN0IiwiZm9ybUhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvcm1Db250YWluZXIiLCJuYW1lQ29udGFpbmVyIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwicGhvbmVDb250YWluZXIiLCJwaG9uZUxhYmVsIiwicGhvbmVJbnB1dCIsImVtYWlsQ29udGFpbmVyIiwiZW1haWxMYWJlbCIsImVtYWlsSW5wdXQiLCJjb21tZW50SW5wdXQiLCJzdWJtaXRCdG4iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJ0ZXh0Q29udGVudCIsImFkZEhvbWUiLCJob21lQ29udGFpbmVyIiwidmlkZW8iLCJob21lRGVzYyIsInZpZFVSTCIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlIiwic3JjIiwicmFtZW4iLCJtaXNvIiwic3BhbmlzaCIsInNwaWN5IiwiYWRkTWVudSIsIml0ZW1zIiwiUmFtZW4iLCJkZXNjIiwiaW1nIiwibWVudUNvbnRhaW5lciIsImtleSIsIm1lbnVJdGVtIiwibWVudUxhYmVsIiwibWVudUltZyIsIm1lbnVEZXNjIiwic3R5bGUiLCJiZyIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaG9tZVRhYiIsIm1lbnVUYWIiLCJjb250YWN0VGFiIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==