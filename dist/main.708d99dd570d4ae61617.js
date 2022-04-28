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

/***/ "./src/images/coffee-banner.jpg":
/*!**************************************!*\
  !*** ./src/images/coffee-banner.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee-banner.jpg";

/***/ }),

/***/ "./src/images/coffee-logo-transparent.png":
/*!************************************************!*\
  !*** ./src/images/coffee-logo-transparent.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee-logo-transparent.png";

/***/ }),

/***/ "./src/images/farm-transparent.png":
/*!*****************************************!*\
  !*** ./src/images/farm-transparent.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "farm-transparent.png";

/***/ }),

/***/ "./src/images/latte-pour.jpg":
/*!***********************************!*\
  !*** ./src/images/latte-pour.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "latte-pour.jpg";

/***/ }),

/***/ "./src/images/lofi-bg.jpg":
/*!********************************!*\
  !*** ./src/images/lofi-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lofi-bg.jpg";

/***/ }),

/***/ "./src/images/mex-eagle-transparent.png":
/*!**********************************************!*\
  !*** ./src/images/mex-eagle-transparent.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mex-eagle-transparent.png";

/***/ }),

/***/ "./src/images/mexico-outline.png":
/*!***************************************!*\
  !*** ./src/images/mexico-outline.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mexico-outline.png";

/***/ }),

/***/ "./src/images/owner-headshot.jpg":
/*!***************************************!*\
  !*** ./src/images/owner-headshot.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner-headshot.jpg";

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
/* harmony import */ var _images_coffee_banner_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/coffee-banner.jpg */ "./src/images/coffee-banner.jpg");
/* harmony import */ var _images_coffee_logo_transparent_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/coffee-logo-transparent.png */ "./src/images/coffee-logo-transparent.png");
/* harmony import */ var _images_farm_transparent_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/farm-transparent.png */ "./src/images/farm-transparent.png");
/* harmony import */ var _images_latte_pour_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/latte-pour.jpg */ "./src/images/latte-pour.jpg");
/* harmony import */ var _images_mex_eagle_transparent_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/mex-eagle-transparent.png */ "./src/images/mex-eagle-transparent.png");
/* harmony import */ var _images_mexico_outline_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/mexico-outline.png */ "./src/images/mexico-outline.png");
/* harmony import */ var _images_owner_headshot_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/owner-headshot.jpg */ "./src/images/owner-headshot.jpg");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");




















window.addEventListener("DOMContentLoaded", function () {
  console.log(window.location.pathname);
  var hamburgerBtn = document.querySelector("#menu__toggle");
  hamburgerBtn.checked = false;
  hamburgerBtn.addEventListener("input", function () {
    if (hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "0";
    } else if (!hamburgerBtn.checked) {
      document.querySelector(".menu__box").style.left = "-100%";
    }
  }); // localhost path names

  if (window.location.pathname == "/menu.html") {
    var content = document.querySelector(".content");
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  if (window.location.pathname == "/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_19__.initForm)();
  } // github pages path names


  if (window.location.pathname == "/restaurant-page/menu.html") {
    var _content = document.querySelector(".content");

    _content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  if (window.location.pathname == "/restaurant-page/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_19__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU8sR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUNBK0UsSUFBQUEsUUFBTyxDQUFDbkQsV0FBUixDQUFvQlcsb0RBQU8sRUFBM0I7QUFDRDs7QUFDRCxNQUFJaUMsTUFBTSxDQUFDVCxRQUFQLENBQWdCWSxRQUFoQixJQUE0QixnQ0FBaEMsRUFBa0U7QUFDaEU5RSxJQUFBQSx1REFBUTtBQUNUO0FBQ0YsQ0E5QkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jYXRlcmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2NvbnRhY3QuY3NzPzM4ZTkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9mb3JtLmNzcz8xYTc1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/OTJiMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2xvY2F0aW9uLmNzcz80MjhiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3M/MTYyMSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3Jlc3RhdXJhbnQuY3NzPzhlYjUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBjb25zdCB2aXNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNhXCIpO1xyXG4gIGNvbnN0IGNhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhc2hcIik7XHJcblxyXG4gIHZpc2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghdmlzYS5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICB2aXNhLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgaWYgKGNhc2guY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICBjYXNoLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghY2FzaC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICBjYXNoLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgaWYgKHZpc2EuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICB2aXNhLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZUZvcm0pO1xyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybShldnQpIHtcclxuICBjb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cztcclxuICBjb25zdCBpbnB1dHMgPSBmb3JtRWxlbWVudHMucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG5cclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaW5pdEZvcm0sIHZhbGlkYXRlRm9ybSB9O1xyXG4iLCJmdW5jdGlvbiBhZGRDb250YWN0KCkge1xyXG4gIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRDb250YWN0O1xyXG4iLCJmdW5jdGlvbiBhZGRIb21lKCkge1xyXG4gIGxldCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgbGV0IGxlZnRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbGV0IHJpZ2h0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGxldCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgbGV0IGNvZmZlZUxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsZWZ0SGFsZi5jbGFzc0xpc3QuYWRkKFwibGVmdC1oYWxmXCIpO1xyXG4gIHJpZ2h0SGFsZi5jbGFzc0xpc3QuYWRkKFwicmlnaHQtaGFsZlwiKTtcclxuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0SGFsZik7XHJcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEhhbGYpO1xyXG5cclxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJHb29kIEZyaWVuZHMuIEdvb2QgQ29mZmVlLiBHb29kIFRpbWVzLlwiO1xyXG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGluZ1wiKTtcclxuXHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1sb2dvXCIpO1xyXG4gIHN1YmhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhvbWUtc3ViaGVhZGluZ1wiKTtcclxuXHJcbiAgc3ViaGVhZGluZy50ZXh0Q29udGVudCA9XHJcbiAgICBcIkxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIE5vcnRoIFBhcmsuIE15c3RpYyBNb2NoYSBpcyBhIGNvbW11bml0eSBvYXNpcyBwcm9tb3RpbmcgaGVhbHRoIGFuZCB3ZWxsLWJlaW5nIHRocm91Z2ggbmF0dXJhbCBmb29kcywgcGVhY2VmdWwgZW52aXJvbm1lbnRzIGFuZCBmcmllbmRseSBzZXJ2aWNlLlwiO1xyXG5cclxuICBjb2ZmZWVMb2dvLnNyYyA9IFwibG9nby1jb2ZmZWUucG5nXCI7XHJcbiAgbG9nby5zcmMgPSBjb2ZmZWVMb2dvLnNyYztcclxuICByaWdodEhhbGYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgcmlnaHRIYWxmLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIHJpZ2h0SGFsZi5hcHBlbmRDaGlsZChzdWJoZWFkaW5nKTtcclxuICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkSG9tZTtcclxuIiwiaW1wb3J0IHJhbWVuIGZyb20gXCIuL2l0ZW1zLWltZ3MvcmFtZW4tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbWlzbyBmcm9tIFwiLi9pdGVtcy1pbWdzL21pc28tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwYW5pc2gtcm9sbC10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBzcGljeSBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwaWN5LXR1bmEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgYm9iYSBmcm9tIFwiLi9pdGVtcy1pbWdzL2JvYmEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4vaXRlbXMtaW1ncy9sYXR0ZS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtYWNoaWF0dG8gZnJvbSBcIi4vaXRlbXMtaW1ncy9tYWNoaWF0dG8tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbWF0Y2hhIGZyb20gXCIuL2l0ZW1zLWltZ3MvbWF0Y2hhLXRodW1ibmFpbC5qcGdcIjtcclxuZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBsZXQgaXRlbXMgPSB7XHJcbiAgICBSYW1lbjoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgaXRlbSBpcyBhIGZhbiBmYXZvcml0ZSBhbW9uZyBsb2NhbHMuIEhhbGYgb2ZmIGV2ZXJ5IFdlZG5lc2RheS5cIixcclxuICAgICAgaW1nOiByYW1lbixcclxuICAgICAgcHJpY2U6IFwiJDkuNzVcIixcclxuICAgICAgYWx0OiBcIkEgYm93bCBvZiByYW1lbiBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiTWlzbyBTb3VwXCI6IHtcclxuICAgICAgZGVzYzogXCJUaGUgaGVhbC1hbGwgZGlzaCB0byBhbHdheXMgYmUgdGhlcmUgZm9yIHlvdSB3aGVuICd0aGV5JyB3ZXJlbid0LlwiLFxyXG4gICAgICBpbWc6IG1pc28sXHJcbiAgICAgIHByaWNlOiBcIiQ1Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgbWlzbyBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiU3BhbmlzaCBSb2xsXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGxvdmVycyBmYXZvcml0ZSBvbmNlIGVhdGVuIGJ5IHRoZSBhbmNpZW50IGdvZHMuXCIsXHJcbiAgICAgIGltZzogc3BhbmlzaCxcclxuICAgICAgcHJpY2U6IFwiJDEyLjc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xscyB3aXRoIHNhbG1vbi5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwaWN5IFR1bmFcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgY3VsdCBjbGFzc2ljLiBEb250IGJlIGZyaWVuZHMgd2l0aCBzcGljeS10dW5hIGhhdGVycy5cIixcclxuICAgICAgaW1nOiBzcGljeSxcclxuICAgICAgcHJpY2U6IFwiJDcuNzVcIixcclxuICAgICAgYWx0OiBcIlN1c2hpIHJvbGwgd2l0aCBzcGljeSB0dW5hIGluc2lkZS5cIixcclxuICAgIH0sXHJcbiAgICBCb2JhOiB7XHJcbiAgICAgIGRlc2M6IFwiU2FuIERpZWdvIGhlYXQgdG9vIG11Y2g/IENvb2wgZG93biB3aXRoIHNvbWUgY29sZCBib2JhLlwiLFxyXG4gICAgICBpbWc6IGJvYmEsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIHBsYXN0aWMgY3VwIHdpdGggYm9iYSBtaWxrIHRlYS5cIixcclxuICAgIH0sXHJcbiAgICBMYXR0ZToge1xyXG4gICAgICBkZXNjOiBcIk1vcm5pbmcgcnVzaCByZW1lZHkuIFdoYXRzIHJ1c2ggaG91ciB3aGVuIHlvdSBoYXZlIGEgcGVyZmVjdCBsYXR0ZT9cIixcclxuICAgICAgaW1nOiBsYXR0ZSxcclxuICAgICAgcHJpY2U6IFwiJDQuNzVcIixcclxuICAgICAgYWx0OiBcIkEgZm9hbXkgaG90IGN1cCBvZiBsYXR0ZSBjb2ZmZWVcIixcclxuICAgIH0sXHJcbiAgICBNYWNoaWF0dG86IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGNyZWFteSBoYWxmIG1pbGsgaGFsZiBjb2ZmZWUgaW52ZW50aW9uIGNyZWF0ZWQgYnkgcHVyZSBnZW5pdXMuXCIsXHJcbiAgICAgIGltZzogbWFjaGlhdHRvLFxyXG4gICAgICBwcmljZTogXCIkNC41MFwiLFxyXG4gICAgICBhbHQ6IFwiUG91cmluZyBob3QgY29mZmVlIGludG8gbWFjaGlhdHRvXCIsXHJcbiAgICB9LFxyXG4gICAgTWF0Y2hhOiB7XHJcbiAgICAgIGRlc2M6IFwiTXlzdGljIE1vY2hhcyBjb3N0dW1lciBmYXZvcml0ZS4gUmF0ZWQgYmVzdCBtYXRjaGEgdGVhIGluIENBLlwiLFxyXG4gICAgICBpbWc6IG1hdGNoYSxcclxuICAgICAgcHJpY2U6IFwiJDMuNzVcIixcclxuICAgICAgYWx0OiBcImhvdCBtYXRjaGEgbGF0dGUgd2l0aCB3aGl0ZSBmb2FtXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGxldCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IG1lbnVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IGl0ZW1zW2tleV0ucHJpY2U7XHJcbiAgICBtZW51TGFiZWwudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICBtZW51SW1nLnNyYyA9IGl0ZW1zW2tleV0uaW1nO1xyXG4gICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLmRlc2M7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUxhYmVsKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51RGVzYyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudVByaWNlKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcclxuICB9XHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnU7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBmb3JtIGZyb20gXCIuL2Nzcy9mb3JtLmNzc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9jc3MvaG9tZS5jc3NcIjtcclxuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4vY3NzL3Jlc3RhdXJhbnQuY3NzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL2Nzcy9tZW51LmNzc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jc3MvY29udGFjdC5jc3NcIjtcclxuaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuL2Nzcy9sb2NhdGlvbi5jc3NcIjtcclxuaW1wb3J0IGJnIGZyb20gXCIuL2ltYWdlcy9sb2ZpLWJnLmpwZ1wiO1xyXG5pbXBvcnQgYWRkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBhZGRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IGFkZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5cclxuaW1wb3J0IGJhcmlzdGEgZnJvbSBcIi4vaW1hZ2VzL2JhcmlzdGEuanBnXCI7XHJcbmltcG9ydCBjb2ZmZWVCYW5uZXIgZnJvbSBcIi4vaW1hZ2VzL2NvZmZlZS1iYW5uZXIuanBnXCI7XHJcbmltcG9ydCBjb2ZmZWVMb2dvIGZyb20gXCIuL2ltYWdlcy9jb2ZmZWUtbG9nby10cmFuc3BhcmVudC5wbmdcIjtcclxuaW1wb3J0IGZhcm0gZnJvbSBcIi4vaW1hZ2VzL2Zhcm0tdHJhbnNwYXJlbnQucG5nXCI7XHJcbmltcG9ydCBsYXR0ZVBvdXIgZnJvbSBcIi4vaW1hZ2VzL2xhdHRlLXBvdXIuanBnXCI7XHJcbmltcG9ydCBtZXhFYWdsZSBmcm9tIFwiLi9pbWFnZXMvbWV4LWVhZ2xlLXRyYW5zcGFyZW50LnBuZ1wiO1xyXG5pbXBvcnQgbWV4T3V0bGluZSBmcm9tIFwiLi9pbWFnZXMvbWV4aWNvLW91dGxpbmUucG5nXCI7XHJcbmltcG9ydCBoZWFkc2hvdCBmcm9tIFwiLi9pbWFnZXMvb3duZXItaGVhZHNob3QuanBnXCI7XHJcblxyXG5pbXBvcnQgeyBpbml0Rm9ybSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vY2F0ZXJpbmcuanNcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICBsZXQgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51X190b2dnbGVcIik7XHJcbiAgaGFtYnVyZ2VyQnRuLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBpZiAoaGFtYnVyZ2VyQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19ib3hcIikuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgfSBlbHNlIGlmICghaGFtYnVyZ2VyQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19ib3hcIikuc3R5bGUubGVmdCA9IFwiLTEwMCVcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gbG9jYWxob3N0IHBhdGggbmFtZXNcclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL21lbnUuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jYXRlcmluZy5odG1sXCIpIHtcclxuICAgIGluaXRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICAvLyBnaXRodWIgcGFnZXMgcGF0aCBuYW1lc1xyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvcmVzdGF1cmFudC1wYWdlL21lbnUuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9yZXN0YXVyYW50LXBhZ2UvY2F0ZXJpbmcuaHRtbFwiKSB7XHJcbiAgICBpbml0Rm9ybSgpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJpbml0Rm9ybSIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aXNhIiwiY2FzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInZhbGlkYXRlRm9ybSIsImV2dCIsImZvcm1FbGVtZW50cyIsImZvcm1zIiwiZWxlbWVudHMiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmVudERlZmF1bHQiLCJhZGRDb250YWN0IiwiZm9ybUNvbnRhaW5lciIsImFkZEhvbWUiLCJob21lQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImxlZnRIYWxmIiwicmlnaHRIYWxmIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJsb2dvIiwiY29mZmVlTG9nbyIsIkltYWdlIiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsInNyYyIsInJhbWVuIiwibWlzbyIsInNwYW5pc2giLCJzcGljeSIsImJvYmEiLCJsYXR0ZSIsIm1hY2hpYXR0byIsIm1hdGNoYSIsImFkZE1lbnUiLCJpdGVtcyIsIlJhbWVuIiwiZGVzYyIsImltZyIsInByaWNlIiwiYWx0IiwiQm9iYSIsIkxhdHRlIiwiTWFjaGlhdHRvIiwiTWF0Y2hhIiwibWVudUNvbnRhaW5lciIsImtleSIsIm1lbnVJdGVtIiwibWVudUxhYmVsIiwibWVudUltZyIsIm1lbnVEZXNjIiwibWVudVByaWNlIiwiYXBwZW5kIiwic3R5bGUiLCJob21lIiwicmVzdGF1cmFudCIsIm1lbnUiLCJjb250YWN0IiwibG9jYXRpb24iLCJiZyIsImJhcmlzdGEiLCJjb2ZmZWVCYW5uZXIiLCJmYXJtIiwibGF0dGVQb3VyIiwibWV4RWFnbGUiLCJtZXhPdXRsaW5lIiwiaGVhZHNob3QiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJoYW1idXJnZXJCdG4iLCJjaGVja2VkIiwibGVmdCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9