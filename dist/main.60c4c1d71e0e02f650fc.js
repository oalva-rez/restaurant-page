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

/***/ "./src/contact.css":
/*!*************************!*\
  !*** ./src/contact.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/form.css":
/*!**********************!*\
  !*** ./src/form.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/location.css":
/*!**************************!*\
  !*** ./src/location.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/restaurant.css":
/*!****************************!*\
  !*** ./src/restaurant.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
  if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
    var content = document.querySelector(".content");
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }

  if (window.location.pathname == "/menu.html") {
    var _content = document.querySelector(".content");

    _content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  if (window.location.pathname == "/contact.html") {
    var _content2 = document.querySelector(".content");

    _content2.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_10__["default"])());
  }

  if (window.location.pathname == "/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_11__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDRixRQUFQLENBQWdCRyxRQUFoQixJQUE0QixHQUY5QixFQUdFO0FBQ0EsUUFBSUMsT0FBTyxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQW1FLElBQUFBLE9BQU8sQ0FBQ3ZDLFdBQVIsQ0FBb0JYLG9EQUFPLEVBQTNCO0FBQ0Q7O0FBQ0QsTUFBSWdELE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQkcsUUFBaEIsSUFBNEIsWUFBaEMsRUFBOEM7QUFDNUMsUUFBSUMsUUFBTyxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7O0FBQ0FtRSxJQUFBQSxRQUFPLENBQUN2QyxXQUFSLENBQW9CVyxvREFBTyxFQUEzQjtBQUNEOztBQUNELE1BQUkwQixNQUFNLENBQUNGLFFBQVAsQ0FBZ0JHLFFBQWhCLElBQTRCLGVBQWhDLEVBQWlEO0FBQy9DLFFBQUlDLFNBQU8sR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUNBbUUsSUFBQUEsU0FBTyxDQUFDdkMsV0FBUixDQUFvQmIsd0RBQVUsRUFBOUI7QUFDRDs7QUFDRCxNQUFJa0QsTUFBTSxDQUFDRixRQUFQLENBQWdCRyxRQUFoQixJQUE0QixnQkFBaEMsRUFBa0Q7QUFDaERyRSxJQUFBQSx1REFBUTtBQUNUO0FBQ0YsQ0FuQkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jYXRlcmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5jc3M/YThkZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9ybS5jc3M/Y2ZlMSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5jc3M/MjcyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9jYXRpb24uY3NzP2QyYWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuY3NzPzFmMDciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc3RhdXJhbnQuY3NzPzQ3ZWUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHZpc2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc2FcIik7XHJcbiAgY29uc3QgY2FzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FzaFwiKTtcclxuXHJcbiAgdmlzYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCF2aXNhLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAoY2FzaC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2FzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFjYXNoLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAodmlzYS5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGV2dCkge1xyXG4gIGNvbnN0IGZvcm1FbGVtZW50cyA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzO1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm1FbGVtZW50cy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcblxyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH07XHJcbiIsImZ1bmN0aW9uIGFkZENvbnRhY3QoKSB7XHJcbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRhY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZEhvbWUoKSB7XHJcbiAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBsZXQgbGVmdEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBsZXQgcmlnaHRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgbGV0IHN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBsZXQgY29mZmVlTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlZnRIYWxmLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWhhbGZcIik7XHJcbiAgcmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1oYWxmXCIpO1xyXG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xyXG5cclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIYWxmKTtcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SGFsZik7XHJcblxyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRnJpZW5kcy4gR29vZCBDb2ZmZWUuIEdvb2QgVGltZXMuXCI7XHJcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nXCIpO1xyXG5cclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJob21lLWxvZ29cIik7XHJcbiAgc3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zdWJoZWFkaW5nXCIpO1xyXG5cclxuICBzdWJoZWFkaW5nLnRleHRDb250ZW50ID1cclxuICAgIFwiTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgTm9ydGggUGFyay4gTXlzdGljIE1vY2hhIGlzIGEgY29tbXVuaXR5IG9hc2lzIHByb21vdGluZyBoZWFsdGggYW5kIHdlbGwtYmVpbmcgdGhyb3VnaCBuYXR1cmFsIGZvb2RzLCBwZWFjZWZ1bCBlbnZpcm9ubWVudHMgYW5kIGZyaWVuZGx5IHNlcnZpY2UuXCI7XHJcblxyXG4gIGNvZmZlZUxvZ28uc3JjID0gXCJsb2dvLWNvZmZlZS5wbmdcIjtcclxuICBsb2dvLnNyYyA9IGNvZmZlZUxvZ28uc3JjO1xyXG4gIHJpZ2h0SGFsZi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICByaWdodEhhbGYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgcmlnaHRIYWxmLmFwcGVuZENoaWxkKHN1YmhlYWRpbmcpO1xyXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRIb21lO1xyXG4iLCJpbXBvcnQgcmFtZW4gZnJvbSBcIi4vaXRlbXMtaW1ncy9yYW1lbi5qcGdcIjtcclxuaW1wb3J0IG1pc28gZnJvbSBcIi4vaXRlbXMtaW1ncy9taXNvLmpwZ1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwYW5pc2gtcm9sbC5qcGdcIjtcclxuaW1wb3J0IHNwaWN5IGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BpY3ktdHVuYS5qcGdcIjtcclxuaW1wb3J0IGJvYmEgZnJvbSBcIi4vaXRlbXMtaW1ncy9ib2JhLmpwZ1wiO1xyXG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4vaXRlbXMtaW1ncy9sYXR0ZS5qcGdcIjtcclxuaW1wb3J0IG1hY2hpYXR0byBmcm9tIFwiLi9pdGVtcy1pbWdzL21hY2hpYXR0by5qcGdcIjtcclxuaW1wb3J0IG1hdGNoYSBmcm9tIFwiLi9pdGVtcy1pbWdzL21hdGNoYS5qcGdcIjtcclxuZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBsZXQgaXRlbXMgPSB7XHJcbiAgICBSYW1lbjoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgaXRlbSBpcyBhIGZhbiBmYXZvcml0ZSBhbW9uZyBsb2NhbHMuIEhhbGYgb2ZmIGV2ZXJ5IFdlZG5lc2RheS5cIixcclxuICAgICAgaW1nOiByYW1lbixcclxuICAgICAgcHJpY2U6IFwiJDkuNzVcIixcclxuICAgICAgYWx0OiBcIkEgYm93bCBvZiByYW1lbiBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiTWlzbyBTb3VwXCI6IHtcclxuICAgICAgZGVzYzogXCJUaGUgaGVhbC1hbGwgZGlzaCB0byBhbHdheXMgYmUgdGhlcmUgZm9yIHlvdSB3aGVuICd0aGV5JyB3ZXJlbid0LlwiLFxyXG4gICAgICBpbWc6IG1pc28sXHJcbiAgICAgIHByaWNlOiBcIiQ1Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgbWlzbyBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiU3BhbmlzaCBSb2xsXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGxvdmVycyBmYXZvcml0ZSBvbmNlIGVhdGVuIGJ5IHRoZSBhbmNpZW50IGdvZHMuXCIsXHJcbiAgICAgIGltZzogc3BhbmlzaCxcclxuICAgICAgcHJpY2U6IFwiJDEyLjc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xscyB3aXRoIHNhbG1vbi5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwaWN5IFR1bmFcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgY3VsdCBjbGFzc2ljLiBEb250IGJlIGZyaWVuZHMgd2l0aCBzcGljeS10dW5hIGhhdGVycy5cIixcclxuICAgICAgaW1nOiBzcGljeSxcclxuICAgICAgcHJpY2U6IFwiJDcuNzVcIixcclxuICAgICAgYWx0OiBcIlN1c2hpIHJvbGwgd2l0aCBzcGljeSB0dW5hIGluc2lkZS5cIixcclxuICAgIH0sXHJcbiAgICBCb2JhOiB7XHJcbiAgICAgIGRlc2M6IFwiU2FuIERpZWdvIGhlYXQgdG9vIG11Y2g/IENvb2wgZG93biB3aXRoIHNvbWUgY29sZCBib2JhLlwiLFxyXG4gICAgICBpbWc6IGJvYmEsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIHBsYXN0aWMgY3VwIHdpdGggYm9iYSBtaWxrIHRlYS5cIixcclxuICAgIH0sXHJcbiAgICBMYXR0ZToge1xyXG4gICAgICBkZXNjOiBcIk1vcm5pbmcgcnVzaCByZW1lZHkuIFdoYXRzIHJ1c2ggaG91ciB3aGVuIHlvdSBoYXZlIGEgcGVyZmVjdCBsYXR0ZT9cIixcclxuICAgICAgaW1nOiBsYXR0ZSxcclxuICAgICAgcHJpY2U6IFwiJDQuNzVcIixcclxuICAgICAgYWx0OiBcIkEgZm9hbXkgaG90IGN1cCBvZiBsYXR0ZSBjb2ZmZWVcIixcclxuICAgIH0sXHJcbiAgICBNYWNoaWF0dG86IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGNyZWFteSBoYWxmIG1pbGsgaGFsZiBjb2ZmZWUgaW52ZW50aW9uIGNyZWF0ZWQgYnkgcHVyZSBnZW5pdXMuXCIsXHJcbiAgICAgIGltZzogbWFjaGlhdHRvLFxyXG4gICAgICBwcmljZTogXCIkNC41MFwiLFxyXG4gICAgICBhbHQ6IFwiUG91cmluZyBob3QgY29mZmVlIGludG8gbWFjaGlhdHRvXCIsXHJcbiAgICB9LFxyXG4gICAgTWF0Y2hhOiB7XHJcbiAgICAgIGRlc2M6IFwiTXlzdGljIE1vY2hhcyBjb3N0dW1lciBmYXZvcml0ZS4gUmF0ZWQgYmVzdCBtYXRjaGEgdGVhIGluIENBLlwiLFxyXG4gICAgICBpbWc6IG1hdGNoYSxcclxuICAgICAgcHJpY2U6IFwiJDMuNzVcIixcclxuICAgICAgYWx0OiBcImhvdCBtYXRjaGEgbGF0dGUgd2l0aCB3aGl0ZSBmb2FtXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGxldCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IG1lbnVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IGl0ZW1zW2tleV0ucHJpY2U7XHJcbiAgICBtZW51TGFiZWwudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICBtZW51SW1nLnNyYyA9IGl0ZW1zW2tleV0uaW1nO1xyXG4gICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLmRlc2M7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUxhYmVsKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51RGVzYyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudVByaWNlKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcclxuICB9XHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnU7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4vZm9ybS5jc3NcIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5jc3NcIjtcclxuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4vcmVzdGF1cmFudC5jc3NcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5jc3NcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5jc3NcIjtcclxuaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLmNzc1wiO1xyXG5pbXBvcnQgYmcgZnJvbSBcIi4vbG9maS1iZy5qcGdcIjtcclxuaW1wb3J0IGFkZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBhZGRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IHsgaW5pdEZvcm0sIHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL2NhdGVyaW5nLmpzXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGlmIChcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9pbmRleC5odG1sXCIgfHxcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9cIlxyXG4gICkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEhvbWUoKSk7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbWVudS5odG1sXCIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRNZW51KCkpO1xyXG4gIH1cclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2NvbnRhY3QuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29udGFjdCgpKTtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jYXRlcmluZy5odG1sXCIpIHtcclxuICAgIGluaXRGb3JtKCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImluaXRGb3JtIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZpc2EiLCJjYXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwidmFsaWRhdGVGb3JtIiwiZXZ0IiwiZm9ybUVsZW1lbnRzIiwiZm9ybXMiLCJlbGVtZW50cyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENvbnRhY3QiLCJmb3JtQ29udGFpbmVyIiwiYWRkSG9tZSIsImhvbWVDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwibGVmdEhhbGYiLCJyaWdodEhhbGYiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImxvZ28iLCJjb2ZmZWVMb2dvIiwiSW1hZ2UiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50Iiwic3JjIiwicmFtZW4iLCJtaXNvIiwic3BhbmlzaCIsInNwaWN5IiwiYm9iYSIsImxhdHRlIiwibWFjaGlhdHRvIiwibWF0Y2hhIiwiYWRkTWVudSIsIml0ZW1zIiwiUmFtZW4iLCJkZXNjIiwiaW1nIiwicHJpY2UiLCJhbHQiLCJCb2JhIiwiTGF0dGUiLCJNYWNoaWF0dG8iLCJNYXRjaGEiLCJtZW51Q29udGFpbmVyIiwia2V5IiwibWVudUl0ZW0iLCJtZW51TGFiZWwiLCJtZW51SW1nIiwibWVudURlc2MiLCJtZW51UHJpY2UiLCJhcHBlbmQiLCJzdHlsZSIsImhvbWUiLCJyZXN0YXVyYW50IiwibWVudSIsImNvbnRhY3QiLCJsb2NhdGlvbiIsImJnIiwid2luZG93IiwicGF0aG5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==