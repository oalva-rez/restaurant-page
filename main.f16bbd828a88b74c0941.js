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
/* harmony import */ var _items_imgs_ramen_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-imgs/ramen-thumbnail.jpg */ "./src/items-imgs/ramen-thumbnail.jpg");
/* harmony import */ var _items_imgs_miso_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-imgs/miso-thumbnail.jpg */ "./src/items-imgs/miso-thumbnail.jpg");
/* harmony import */ var _items_imgs_spanish_roll_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-imgs/spanish-roll-thumbnail.jpg */ "./src/items-imgs/spanish-roll-thumbnail.jpg");
/* harmony import */ var _items_imgs_spicy_tuna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items-imgs/spicy-tuna-thumbnail.jpg */ "./src/items-imgs/spicy-tuna-thumbnail.jpg");
/* harmony import */ var _items_imgs_boba_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items-imgs/boba-thumbnail.jpg */ "./src/items-imgs/boba-thumbnail.jpg");
/* harmony import */ var _items_imgs_latte_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items-imgs/latte-thumbnail.jpg */ "./src/items-imgs/latte-thumbnail.jpg");
/* harmony import */ var _items_imgs_machiatto_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items-imgs/machiatto-thumbnail.jpg */ "./src/items-imgs/machiatto-thumbnail.jpg");
/* harmony import */ var _items_imgs_matcha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items-imgs/matcha-thumbnail.jpg */ "./src/items-imgs/matcha-thumbnail.jpg");









function addMenu() {
  var items = {
    Ramen: {
      desc: "This item is a fan favorite among locals. Half off every Wednesday.",
      img: _items_imgs_ramen_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__,
      price: "$9.75",
      alt: "A bowl of ramen soup."
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you when 'they' weren't.",
      img: _items_imgs_miso_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__,
      price: "$5.75",
      alt: "A bowl of miso soup."
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: _items_imgs_spanish_roll_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__,
      price: "$12.75",
      alt: "Sushi rolls with salmon."
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: _items_imgs_spicy_tuna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__,
      price: "$7.75",
      alt: "Sushi roll with spicy tuna inside."
    },
    Boba: {
      desc: "San Diego heat too much? Cool down with some cold boba.",
      img: _items_imgs_boba_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_4__,
      price: "$4.75",
      alt: "A plastic cup with boba milk tea."
    },
    Latte: {
      desc: "Morning rush remedy. Whats rush hour when you have a perfect latte?",
      img: _items_imgs_latte_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__,
      price: "$4.75",
      alt: "A foamy hot cup of latte coffee"
    },
    Machiatto: {
      desc: "This creamy half milk half coffee invention created by pure genius.",
      img: _items_imgs_machiatto_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_6__,
      price: "$4.50",
      alt: "Pouring hot coffee into machiatto"
    },
    Matcha: {
      desc: "Mystic Mochas costumer favorite. Rated best matcha tea in CA.",
      img: _items_imgs_matcha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__,
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

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/form.css":
/*!**************************!*\
  !*** ./src/css/form.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/location.css":
/*!******************************!*\
  !*** ./src/css/location.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/restaurant.css":
/*!********************************!*\
  !*** ./src/css/restaurant.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/lofi-bg.jpg":
/*!********************************!*\
  !*** ./src/images/lofi-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lofi-bg.jpg";

/***/ }),

/***/ "./src/items-imgs/boba-thumbnail.jpg":
/*!*******************************************!*\
  !*** ./src/items-imgs/boba-thumbnail.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "boba-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/latte-thumbnail.jpg":
/*!********************************************!*\
  !*** ./src/items-imgs/latte-thumbnail.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "latte-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/machiatto-thumbnail.jpg":
/*!************************************************!*\
  !*** ./src/items-imgs/machiatto-thumbnail.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "machiatto-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/matcha-thumbnail.jpg":
/*!*********************************************!*\
  !*** ./src/items-imgs/matcha-thumbnail.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "matcha-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/miso-thumbnail.jpg":
/*!*******************************************!*\
  !*** ./src/items-imgs/miso-thumbnail.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "miso-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/ramen-thumbnail.jpg":
/*!********************************************!*\
  !*** ./src/items-imgs/ramen-thumbnail.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ramen-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/spanish-roll-thumbnail.jpg":
/*!***************************************************!*\
  !*** ./src/items-imgs/spanish-roll-thumbnail.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spanish-roll-thumbnail.jpg";

/***/ }),

/***/ "./src/items-imgs/spicy-tuna-thumbnail.jpg":
/*!*************************************************!*\
  !*** ./src/items-imgs/spicy-tuna-thumbnail.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spicy-tuna-thumbnail.jpg";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/form.css */ "./src/css/form.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/home.css */ "./src/css/home.css");
/* harmony import */ var _css_restaurant_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/restaurant.css */ "./src/css/restaurant.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/contact.css */ "./src/css/contact.css");
/* harmony import */ var _css_location_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/location.css */ "./src/css/location.css");
/* harmony import */ var _images_lofi_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/lofi-bg.jpg */ "./src/images/lofi-bg.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");












window.addEventListener("DOMContentLoaded", function () {
  var hamburgerBtn = document.querySelector("#menu__toggle");
  hamburgerBtn.checked = false;
  hamburgerBtn.addEventListener("input", function () {
    if (hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "0";
    } else if (!hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "-100%";
    }
  });

  if (window.location.pathname == "/menu.html") {
    var content = document.querySelector(".content");
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  if (window.location.pathname == "/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_11__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0UsRUFBQUEsWUFBWSxDQUFDQyxPQUFiLEdBQXVCLEtBQXZCO0FBRUFELEVBQUFBLFlBQVksQ0FBQy9ELGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0MsUUFBSStELFlBQVksQ0FBQ0MsT0FBakIsRUFBMEI7QUFDeEJwRSxNQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMwRCxLQUFyQyxDQUEyQ1UsSUFBM0MsR0FBa0QsR0FBbEQ7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDRixZQUFZLENBQUNDLE9BQWxCLEVBQTJCO0FBQ2hDcEUsTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDMEQsS0FBckMsQ0FBMkNVLElBQTNDLEdBQWtELE9BQWxEO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQUlILE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQk0sUUFBaEIsSUFBNEIsWUFBaEMsRUFBOEM7QUFDNUMsUUFBSUMsT0FBTyxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQXNFLElBQUFBLE9BQU8sQ0FBQzFDLFdBQVIsQ0FBb0JXLG9EQUFPLEVBQTNCO0FBQ0Q7O0FBRUQsTUFBSTBCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQk0sUUFBaEIsSUFBNEIsZ0JBQWhDLEVBQWtEO0FBQ2hEeEUsSUFBQUEsdURBQVE7QUFDVDtBQUNGLENBcEJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2F0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcz8zOGU5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvZm9ybS5jc3M/MWE3NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzPzkyYjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9sb2NhdGlvbi5jc3M/NDI4YiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzPzE2MjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9yZXN0YXVyYW50LmNzcz84ZWI1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzZiN2IiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgY29uc3QgdmlzYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzYVwiKTtcclxuICBjb25zdCBjYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXNoXCIpO1xyXG5cclxuICB2aXNhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIXZpc2EuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgdmlzYS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIGlmIChjYXNoLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgY2FzaC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWNhc2guY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgY2FzaC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIGlmICh2aXNhLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgdmlzYS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVGb3JtKTtcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZXZ0KSB7XHJcbiAgY29uc3QgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHM7XHJcbiAgY29uc3QgaW5wdXRzID0gZm9ybUVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuXHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRGb3JtLCB2YWxpZGF0ZUZvcm0gfTtcclxuIiwiZnVuY3Rpb24gYWRkQ29udGFjdCgpIHtcclxuICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQ29udGFjdDtcclxuIiwiZnVuY3Rpb24gYWRkSG9tZSgpIHtcclxuICBsZXQgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGxldCBsZWZ0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGxldCByaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBsZXQgc3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gIGxldCBjb2ZmZWVMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgbGVmdEhhbGYuY2xhc3NMaXN0LmFkZChcImxlZnQtaGFsZlwiKTtcclxuICByaWdodEhhbGYuY2xhc3NMaXN0LmFkZChcInJpZ2h0LWhhbGZcIik7XHJcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250YWluZXJcIik7XHJcblxyXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEhhbGYpO1xyXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRIYWxmKTtcclxuXHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiR29vZCBGcmllbmRzLiBHb29kIENvZmZlZS4gR29vZCBUaW1lcy5cIjtcclxuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRpbmdcIik7XHJcblxyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImhvbWUtbG9nb1wiKTtcclxuICBzdWJoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJob21lLXN1YmhlYWRpbmdcIik7XHJcblxyXG4gIHN1YmhlYWRpbmcudGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb2NhdGVkIGluIHRoZSBoZWFydCBvZiBOb3J0aCBQYXJrLiBNeXN0aWMgTW9jaGEgaXMgYSBjb21tdW5pdHkgb2FzaXMgcHJvbW90aW5nIGhlYWx0aCBhbmQgd2VsbC1iZWluZyB0aHJvdWdoIG5hdHVyYWwgZm9vZHMsIHBlYWNlZnVsIGVudmlyb25tZW50cyBhbmQgZnJpZW5kbHkgc2VydmljZS5cIjtcclxuXHJcbiAgY29mZmVlTG9nby5zcmMgPSBcImxvZ28tY29mZmVlLnBuZ1wiO1xyXG4gIGxvZ28uc3JjID0gY29mZmVlTG9nby5zcmM7XHJcbiAgcmlnaHRIYWxmLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gIHJpZ2h0SGFsZi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICByaWdodEhhbGYuYXBwZW5kQ2hpbGQoc3ViaGVhZGluZyk7XHJcbiAgcmV0dXJuIGhvbWVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEhvbWU7XHJcbiIsImltcG9ydCByYW1lbiBmcm9tIFwiLi9pdGVtcy1pbWdzL3JhbWVuLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IG1pc28gZnJvbSBcIi4vaXRlbXMtaW1ncy9taXNvLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IHNwYW5pc2ggZnJvbSBcIi4vaXRlbXMtaW1ncy9zcGFuaXNoLXJvbGwtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgc3BpY3kgZnJvbSBcIi4vaXRlbXMtaW1ncy9zcGljeS10dW5hLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IGJvYmEgZnJvbSBcIi4vaXRlbXMtaW1ncy9ib2JhLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IGxhdHRlIGZyb20gXCIuL2l0ZW1zLWltZ3MvbGF0dGUtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbWFjaGlhdHRvIGZyb20gXCIuL2l0ZW1zLWltZ3MvbWFjaGlhdHRvLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IG1hdGNoYSBmcm9tIFwiLi9pdGVtcy1pbWdzL21hdGNoYS10aHVtYm5haWwuanBnXCI7XHJcbmZ1bmN0aW9uIGFkZE1lbnUoKSB7XHJcbiAgbGV0IGl0ZW1zID0ge1xyXG4gICAgUmFtZW46IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGl0ZW0gaXMgYSBmYW4gZmF2b3JpdGUgYW1vbmcgbG9jYWxzLiBIYWxmIG9mZiBldmVyeSBXZWRuZXNkYXkuXCIsXHJcbiAgICAgIGltZzogcmFtZW4sXHJcbiAgICAgIHByaWNlOiBcIiQ5Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgcmFtZW4gc291cC5cIixcclxuICAgIH0sXHJcbiAgICBcIk1pc28gU291cFwiOiB7XHJcbiAgICAgIGRlc2M6IFwiVGhlIGhlYWwtYWxsIGRpc2ggdG8gYWx3YXlzIGJlIHRoZXJlIGZvciB5b3Ugd2hlbiAndGhleScgd2VyZW4ndC5cIixcclxuICAgICAgaW1nOiBtaXNvLFxyXG4gICAgICBwcmljZTogXCIkNS43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBib3dsIG9mIG1pc28gc291cC5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwYW5pc2ggUm9sbFwiOiB7XHJcbiAgICAgIGRlc2M6IFwiQSBsb3ZlcnMgZmF2b3JpdGUgb25jZSBlYXRlbiBieSB0aGUgYW5jaWVudCBnb2RzLlwiLFxyXG4gICAgICBpbWc6IHNwYW5pc2gsXHJcbiAgICAgIHByaWNlOiBcIiQxMi43NVwiLFxyXG4gICAgICBhbHQ6IFwiU3VzaGkgcm9sbHMgd2l0aCBzYWxtb24uXCIsXHJcbiAgICB9LFxyXG4gICAgXCJTcGljeSBUdW5hXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGN1bHQgY2xhc3NpYy4gRG9udCBiZSBmcmllbmRzIHdpdGggc3BpY3ktdHVuYSBoYXRlcnMuXCIsXHJcbiAgICAgIGltZzogc3BpY3ksXHJcbiAgICAgIHByaWNlOiBcIiQ3Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xsIHdpdGggc3BpY3kgdHVuYSBpbnNpZGUuXCIsXHJcbiAgICB9LFxyXG4gICAgQm9iYToge1xyXG4gICAgICBkZXNjOiBcIlNhbiBEaWVnbyBoZWF0IHRvbyBtdWNoPyBDb29sIGRvd24gd2l0aCBzb21lIGNvbGQgYm9iYS5cIixcclxuICAgICAgaW1nOiBib2JhLFxyXG4gICAgICBwcmljZTogXCIkNC43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBwbGFzdGljIGN1cCB3aXRoIGJvYmEgbWlsayB0ZWEuXCIsXHJcbiAgICB9LFxyXG4gICAgTGF0dGU6IHtcclxuICAgICAgZGVzYzogXCJNb3JuaW5nIHJ1c2ggcmVtZWR5LiBXaGF0cyBydXNoIGhvdXIgd2hlbiB5b3UgaGF2ZSBhIHBlcmZlY3QgbGF0dGU/XCIsXHJcbiAgICAgIGltZzogbGF0dGUsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGZvYW15IGhvdCBjdXAgb2YgbGF0dGUgY29mZmVlXCIsXHJcbiAgICB9LFxyXG4gICAgTWFjaGlhdHRvOiB7XHJcbiAgICAgIGRlc2M6IFwiVGhpcyBjcmVhbXkgaGFsZiBtaWxrIGhhbGYgY29mZmVlIGludmVudGlvbiBjcmVhdGVkIGJ5IHB1cmUgZ2VuaXVzLlwiLFxyXG4gICAgICBpbWc6IG1hY2hpYXR0byxcclxuICAgICAgcHJpY2U6IFwiJDQuNTBcIixcclxuICAgICAgYWx0OiBcIlBvdXJpbmcgaG90IGNvZmZlZSBpbnRvIG1hY2hpYXR0b1wiLFxyXG4gICAgfSxcclxuICAgIE1hdGNoYToge1xyXG4gICAgICBkZXNjOiBcIk15c3RpYyBNb2NoYXMgY29zdHVtZXIgZmF2b3JpdGUuIFJhdGVkIGJlc3QgbWF0Y2hhIHRlYSBpbiBDQS5cIixcclxuICAgICAgaW1nOiBtYXRjaGEsXHJcbiAgICAgIHByaWNlOiBcIiQzLjc1XCIsXHJcbiAgICAgIGFsdDogXCJob3QgbWF0Y2hhIGxhdHRlIHdpdGggd2hpdGUgZm9hbVwiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtcykge1xyXG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBtZW51TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBsZXQgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsZXQgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBtZW51UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVQcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBtZW51UHJpY2UudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLnByaWNlO1xyXG4gICAgbWVudUxhYmVsLnRleHRDb250ZW50ID0ga2V5O1xyXG4gICAgbWVudUltZy5zcmMgPSBpdGVtc1trZXldLmltZztcclxuICAgIG1lbnVEZXNjLnRleHRDb250ZW50ID0gaXRlbXNba2V5XS5kZXNjO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVMYWJlbCk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUltZyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudURlc2MpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVQcmljZSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbSk7XHJcbiAgfVxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgZm9ybSBmcm9tIFwiLi9jc3MvZm9ybS5jc3NcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vY3NzL2hvbWUuY3NzXCI7XHJcbmltcG9ydCByZXN0YXVyYW50IGZyb20gXCIuL2Nzcy9yZXN0YXVyYW50LmNzc1wiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9jc3MvbWVudS5jc3NcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY3NzL2NvbnRhY3QuY3NzXCI7XHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi9jc3MvbG9jYXRpb24uY3NzXCI7XHJcbmltcG9ydCBiZyBmcm9tIFwiLi9pbWFnZXMvbG9maS1iZy5qcGdcIjtcclxuaW1wb3J0IGFkZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBhZGRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IHsgaW5pdEZvcm0sIHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL2NhdGVyaW5nLmpzXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGxldCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVfX3RvZ2dsZVwiKTtcclxuICBoYW1idXJnZXJCdG4uY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICBoYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGlmIChoYW1idXJnZXJCdG4uY2hlY2tlZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2JveFwiKS5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICB9IGVsc2UgaWYgKCFoYW1idXJnZXJCdG4uY2hlY2tlZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2JveFwiKS5zdHlsZS5sZWZ0ID0gXCItMTAwJVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL21lbnUuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxuICB9XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvY2F0ZXJpbmcuaHRtbFwiKSB7XHJcbiAgICBpbml0Rm9ybSgpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJpbml0Rm9ybSIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aXNhIiwiY2FzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInZhbGlkYXRlRm9ybSIsImV2dCIsImZvcm1FbGVtZW50cyIsImZvcm1zIiwiZWxlbWVudHMiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmVudERlZmF1bHQiLCJhZGRDb250YWN0IiwiZm9ybUNvbnRhaW5lciIsImFkZEhvbWUiLCJob21lQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImxlZnRIYWxmIiwicmlnaHRIYWxmIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJsb2dvIiwiY29mZmVlTG9nbyIsIkltYWdlIiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsInNyYyIsInJhbWVuIiwibWlzbyIsInNwYW5pc2giLCJzcGljeSIsImJvYmEiLCJsYXR0ZSIsIm1hY2hpYXR0byIsIm1hdGNoYSIsImFkZE1lbnUiLCJpdGVtcyIsIlJhbWVuIiwiZGVzYyIsImltZyIsInByaWNlIiwiYWx0IiwiQm9iYSIsIkxhdHRlIiwiTWFjaGlhdHRvIiwiTWF0Y2hhIiwibWVudUNvbnRhaW5lciIsImtleSIsIm1lbnVJdGVtIiwibWVudUxhYmVsIiwibWVudUltZyIsIm1lbnVEZXNjIiwibWVudVByaWNlIiwiYXBwZW5kIiwic3R5bGUiLCJob21lIiwicmVzdGF1cmFudCIsIm1lbnUiLCJjb250YWN0IiwibG9jYXRpb24iLCJiZyIsIndpbmRvdyIsImhhbWJ1cmdlckJ0biIsImNoZWNrZWQiLCJsZWZ0IiwicGF0aG5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==