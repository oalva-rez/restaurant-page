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

/***/ "./src/images/barista.jpg":
/*!********************************!*\
  !*** ./src/images/barista.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "barista.jpg";

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
/* harmony import */ var _images_barista_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/barista.jpg */ "./src/images/barista.jpg");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");













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
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_12__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBdkIsQ0FBbkI7QUFDQW1FLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixHQUF1QixLQUF2QjtBQUVBRCxFQUFBQSxZQUFZLENBQUNoRSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDLFFBQUlnRSxZQUFZLENBQUNDLE9BQWpCLEVBQTBCO0FBQ3hCckUsTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDMEQsS0FBckMsQ0FBMkNXLElBQTNDLEdBQWtELEdBQWxEO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ0YsWUFBWSxDQUFDQyxPQUFsQixFQUEyQjtBQUNoQ3JFLE1BQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixFQUFxQzBELEtBQXJDLENBQTJDVyxJQUEzQyxHQUFrRCxPQUFsRDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFJSCxNQUFNLENBQUNILFFBQVAsQ0FBZ0JPLFFBQWhCLElBQTRCLFlBQWhDLEVBQThDO0FBQzVDLFFBQUlDLE9BQU8sR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkO0FBQ0F1RSxJQUFBQSxPQUFPLENBQUMzQyxXQUFSLENBQW9CVyxvREFBTyxFQUEzQjtBQUNEOztBQUVELE1BQUkyQixNQUFNLENBQUNILFFBQVAsQ0FBZ0JPLFFBQWhCLElBQTRCLGdCQUFoQyxFQUFrRDtBQUNoRHpFLElBQUFBLHVEQUFRO0FBQ1Q7QUFDRixDQXBCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NhdGVyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvY29udGFjdC5jc3M/MzhlOSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2Zvcm0uY3NzPzFhNzUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcz85MmIzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbG9jYXRpb24uY3NzPzQyOGIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9tZW51LmNzcz8xNjIxIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvcmVzdGF1cmFudC5jc3M/OGViNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz82YjdiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHZpc2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc2FcIik7XHJcbiAgY29uc3QgY2FzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FzaFwiKTtcclxuXHJcbiAgdmlzYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCF2aXNhLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAoY2FzaC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY2FzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFjYXNoLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgIGNhc2guY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICBpZiAodmlzYS5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgIHZpc2EuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGV2dCkge1xyXG4gIGNvbnN0IGZvcm1FbGVtZW50cyA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzO1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm1FbGVtZW50cy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcblxyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH07XHJcbiIsImZ1bmN0aW9uIGFkZENvbnRhY3QoKSB7XHJcbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRhY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZEhvbWUoKSB7XHJcbiAgbGV0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBsZXQgbGVmdEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBsZXQgcmlnaHRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgbGV0IHN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBsZXQgY29mZmVlTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlZnRIYWxmLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWhhbGZcIik7XHJcbiAgcmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1oYWxmXCIpO1xyXG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xyXG5cclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIYWxmKTtcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SGFsZik7XHJcblxyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRnJpZW5kcy4gR29vZCBDb2ZmZWUuIEdvb2QgVGltZXMuXCI7XHJcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nXCIpO1xyXG5cclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJob21lLWxvZ29cIik7XHJcbiAgc3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zdWJoZWFkaW5nXCIpO1xyXG5cclxuICBzdWJoZWFkaW5nLnRleHRDb250ZW50ID1cclxuICAgIFwiTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgTm9ydGggUGFyay4gTXlzdGljIE1vY2hhIGlzIGEgY29tbXVuaXR5IG9hc2lzIHByb21vdGluZyBoZWFsdGggYW5kIHdlbGwtYmVpbmcgdGhyb3VnaCBuYXR1cmFsIGZvb2RzLCBwZWFjZWZ1bCBlbnZpcm9ubWVudHMgYW5kIGZyaWVuZGx5IHNlcnZpY2UuXCI7XHJcblxyXG4gIGNvZmZlZUxvZ28uc3JjID0gXCJsb2dvLWNvZmZlZS5wbmdcIjtcclxuICBsb2dvLnNyYyA9IGNvZmZlZUxvZ28uc3JjO1xyXG4gIHJpZ2h0SGFsZi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICByaWdodEhhbGYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgcmlnaHRIYWxmLmFwcGVuZENoaWxkKHN1YmhlYWRpbmcpO1xyXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRIb21lO1xyXG4iLCJpbXBvcnQgcmFtZW4gZnJvbSBcIi4vaXRlbXMtaW1ncy9yYW1lbi10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtaXNvIGZyb20gXCIuL2l0ZW1zLWltZ3MvbWlzby10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBzcGFuaXNoIGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BhbmlzaC1yb2xsLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IHNwaWN5IGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BpY3ktdHVuYS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBib2JhIGZyb20gXCIuL2l0ZW1zLWltZ3MvYm9iYS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBsYXR0ZSBmcm9tIFwiLi9pdGVtcy1pbWdzL2xhdHRlLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IG1hY2hpYXR0byBmcm9tIFwiLi9pdGVtcy1pbWdzL21hY2hpYXR0by10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtYXRjaGEgZnJvbSBcIi4vaXRlbXMtaW1ncy9tYXRjaGEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5mdW5jdGlvbiBhZGRNZW51KCkge1xyXG4gIGxldCBpdGVtcyA9IHtcclxuICAgIFJhbWVuOiB7XHJcbiAgICAgIGRlc2M6IFwiVGhpcyBpdGVtIGlzIGEgZmFuIGZhdm9yaXRlIGFtb25nIGxvY2Fscy4gSGFsZiBvZmYgZXZlcnkgV2VkbmVzZGF5LlwiLFxyXG4gICAgICBpbWc6IHJhbWVuLFxyXG4gICAgICBwcmljZTogXCIkOS43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBib3dsIG9mIHJhbWVuIHNvdXAuXCIsXHJcbiAgICB9LFxyXG4gICAgXCJNaXNvIFNvdXBcIjoge1xyXG4gICAgICBkZXNjOiBcIlRoZSBoZWFsLWFsbCBkaXNoIHRvIGFsd2F5cyBiZSB0aGVyZSBmb3IgeW91IHdoZW4gJ3RoZXknIHdlcmVuJ3QuXCIsXHJcbiAgICAgIGltZzogbWlzbyxcclxuICAgICAgcHJpY2U6IFwiJDUuNzVcIixcclxuICAgICAgYWx0OiBcIkEgYm93bCBvZiBtaXNvIHNvdXAuXCIsXHJcbiAgICB9LFxyXG4gICAgXCJTcGFuaXNoIFJvbGxcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgbG92ZXJzIGZhdm9yaXRlIG9uY2UgZWF0ZW4gYnkgdGhlIGFuY2llbnQgZ29kcy5cIixcclxuICAgICAgaW1nOiBzcGFuaXNoLFxyXG4gICAgICBwcmljZTogXCIkMTIuNzVcIixcclxuICAgICAgYWx0OiBcIlN1c2hpIHJvbGxzIHdpdGggc2FsbW9uLlwiLFxyXG4gICAgfSxcclxuICAgIFwiU3BpY3kgVHVuYVwiOiB7XHJcbiAgICAgIGRlc2M6IFwiQSBjdWx0IGNsYXNzaWMuIERvbnQgYmUgZnJpZW5kcyB3aXRoIHNwaWN5LXR1bmEgaGF0ZXJzLlwiLFxyXG4gICAgICBpbWc6IHNwaWN5LFxyXG4gICAgICBwcmljZTogXCIkNy43NVwiLFxyXG4gICAgICBhbHQ6IFwiU3VzaGkgcm9sbCB3aXRoIHNwaWN5IHR1bmEgaW5zaWRlLlwiLFxyXG4gICAgfSxcclxuICAgIEJvYmE6IHtcclxuICAgICAgZGVzYzogXCJTYW4gRGllZ28gaGVhdCB0b28gbXVjaD8gQ29vbCBkb3duIHdpdGggc29tZSBjb2xkIGJvYmEuXCIsXHJcbiAgICAgIGltZzogYm9iYSxcclxuICAgICAgcHJpY2U6IFwiJDQuNzVcIixcclxuICAgICAgYWx0OiBcIkEgcGxhc3RpYyBjdXAgd2l0aCBib2JhIG1pbGsgdGVhLlwiLFxyXG4gICAgfSxcclxuICAgIExhdHRlOiB7XHJcbiAgICAgIGRlc2M6IFwiTW9ybmluZyBydXNoIHJlbWVkeS4gV2hhdHMgcnVzaCBob3VyIHdoZW4geW91IGhhdmUgYSBwZXJmZWN0IGxhdHRlP1wiLFxyXG4gICAgICBpbWc6IGxhdHRlLFxyXG4gICAgICBwcmljZTogXCIkNC43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBmb2FteSBob3QgY3VwIG9mIGxhdHRlIGNvZmZlZVwiLFxyXG4gICAgfSxcclxuICAgIE1hY2hpYXR0bzoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgY3JlYW15IGhhbGYgbWlsayBoYWxmIGNvZmZlZSBpbnZlbnRpb24gY3JlYXRlZCBieSBwdXJlIGdlbml1cy5cIixcclxuICAgICAgaW1nOiBtYWNoaWF0dG8sXHJcbiAgICAgIHByaWNlOiBcIiQ0LjUwXCIsXHJcbiAgICAgIGFsdDogXCJQb3VyaW5nIGhvdCBjb2ZmZWUgaW50byBtYWNoaWF0dG9cIixcclxuICAgIH0sXHJcbiAgICBNYXRjaGE6IHtcclxuICAgICAgZGVzYzogXCJNeXN0aWMgTW9jaGFzIGNvc3R1bWVyIGZhdm9yaXRlLiBSYXRlZCBiZXN0IG1hdGNoYSB0ZWEgaW4gQ0EuXCIsXHJcbiAgICAgIGltZzogbWF0Y2hhLFxyXG4gICAgICBwcmljZTogXCIkMy43NVwiLFxyXG4gICAgICBhbHQ6IFwiaG90IG1hdGNoYSBsYXR0ZSB3aXRoIHdoaXRlIGZvYW1cIixcclxuICAgIH0sXHJcbiAgfTtcclxuICBsZXQgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gaXRlbXMpIHtcclxuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbGV0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbGV0IG1lbnVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51UHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gICAgbWVudVByaWNlLnRleHRDb250ZW50ID0gaXRlbXNba2V5XS5wcmljZTtcclxuICAgIG1lbnVMYWJlbC50ZXh0Q29udGVudCA9IGtleTtcclxuICAgIG1lbnVJbWcuc3JjID0gaXRlbXNba2V5XS5pbWc7XHJcbiAgICBtZW51RGVzYy50ZXh0Q29udGVudCA9IGl0ZW1zW2tleV0uZGVzYztcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51TGFiZWwpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVEZXNjKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51UHJpY2UpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0pO1xyXG4gIH1cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4vY3NzL2Zvcm0uY3NzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2Nzcy9ob21lLmNzc1wiO1xyXG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9jc3MvcmVzdGF1cmFudC5jc3NcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vY3NzL21lbnUuY3NzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2Nzcy9jb250YWN0LmNzc1wiO1xyXG5pbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4vY3NzL2xvY2F0aW9uLmNzc1wiO1xyXG5pbXBvcnQgYmcgZnJvbSBcIi4vaW1hZ2VzL2xvZmktYmcuanBnXCI7XHJcbmltcG9ydCBhZGRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGFkZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgYWRkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcbmltcG9ydCBiYXJpc3RhIGZyb20gXCIuL2ltYWdlcy9iYXJpc3RhLmpwZ1wiO1xyXG5pbXBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vY2F0ZXJpbmcuanNcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudV9fdG9nZ2xlXCIpO1xyXG4gIGhhbWJ1cmdlckJ0bi5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gIGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGhhbWJ1cmdlckJ0bi5jaGVja2VkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fYm94XCIpLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIH0gZWxzZSBpZiAoIWhhbWJ1cmdlckJ0bi5jaGVja2VkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fYm94XCIpLnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbWVudS5odG1sXCIpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRNZW51KCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jYXRlcmluZy5odG1sXCIpIHtcclxuICAgIGluaXRGb3JtKCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImluaXRGb3JtIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZpc2EiLCJjYXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwidmFsaWRhdGVGb3JtIiwiZXZ0IiwiZm9ybUVsZW1lbnRzIiwiZm9ybXMiLCJlbGVtZW50cyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENvbnRhY3QiLCJmb3JtQ29udGFpbmVyIiwiYWRkSG9tZSIsImhvbWVDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwibGVmdEhhbGYiLCJyaWdodEhhbGYiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsImxvZ28iLCJjb2ZmZWVMb2dvIiwiSW1hZ2UiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50Iiwic3JjIiwicmFtZW4iLCJtaXNvIiwic3BhbmlzaCIsInNwaWN5IiwiYm9iYSIsImxhdHRlIiwibWFjaGlhdHRvIiwibWF0Y2hhIiwiYWRkTWVudSIsIml0ZW1zIiwiUmFtZW4iLCJkZXNjIiwiaW1nIiwicHJpY2UiLCJhbHQiLCJCb2JhIiwiTGF0dGUiLCJNYWNoaWF0dG8iLCJNYXRjaGEiLCJtZW51Q29udGFpbmVyIiwia2V5IiwibWVudUl0ZW0iLCJtZW51TGFiZWwiLCJtZW51SW1nIiwibWVudURlc2MiLCJtZW51UHJpY2UiLCJhcHBlbmQiLCJzdHlsZSIsImhvbWUiLCJyZXN0YXVyYW50IiwibWVudSIsImNvbnRhY3QiLCJsb2NhdGlvbiIsImJnIiwiYmFyaXN0YSIsIndpbmRvdyIsImhhbWJ1cmdlckJ0biIsImNoZWNrZWQiLCJsZWZ0IiwicGF0aG5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==