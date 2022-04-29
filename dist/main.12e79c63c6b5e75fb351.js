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
    console.log(key);
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");
/* harmony import */ var _images_barista_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/barista.jpg */ "./src/images/barista.jpg");
/* harmony import */ var _images_coffee_banner_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/coffee-banner.jpg */ "./src/images/coffee-banner.jpg");
/* harmony import */ var _images_coffee_logo_transparent_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/coffee-logo-transparent.png */ "./src/images/coffee-logo-transparent.png");
/* harmony import */ var _images_farm_transparent_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/farm-transparent.png */ "./src/images/farm-transparent.png");
/* harmony import */ var _images_latte_pour_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/latte-pour.jpg */ "./src/images/latte-pour.jpg");
/* harmony import */ var _images_mex_eagle_transparent_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/mex-eagle-transparent.png */ "./src/images/mex-eagle-transparent.png");
/* harmony import */ var _images_mexico_outline_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/mexico-outline.png */ "./src/images/mexico-outline.png");
/* harmony import */ var _images_owner_headshot_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/owner-headshot.jpg */ "./src/images/owner-headshot.jpg");


















window.addEventListener("DOMContentLoaded", function () {
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
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }

  if (window.location.pathname == "/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_9__.initForm)();
  } // github pages path names


  if (window.location.pathname == "/restaurant-page/menu.html") {
    var _content = document.querySelector(".content");

    _content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }

  if (window.location.pathname == "/restaurant-page/catering.html") {
    (0,_catering_js__WEBPACK_IMPORTED_MODULE_9__.initForm)();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBa0QsR0FBbEQ7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDRixZQUFZLENBQUNDLE9BQWxCLEVBQTJCO0FBQ2hDbEUsTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDZ0QsS0FBckMsQ0FBMkNrQixJQUEzQyxHQUFrRCxPQUFsRDtBQUNEO0FBQ0YsR0FORCxFQUhnRCxDQVdoRDs7QUFDQSxNQUFJSCxNQUFNLENBQUNWLFFBQVAsQ0FBZ0JjLFFBQWhCLElBQTRCLFlBQWhDLEVBQThDO0FBQzVDLFFBQUlDLE9BQU8sR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkO0FBQ0FvRSxJQUFBQSxPQUFPLENBQUNDLFdBQVIsQ0FBb0I5QyxvREFBTyxFQUEzQjtBQUNEOztBQUNELE1BQUl3QyxNQUFNLENBQUNWLFFBQVAsQ0FBZ0JjLFFBQWhCLElBQTRCLGdCQUFoQyxFQUFrRDtBQUNoRHRFLElBQUFBLHNEQUFRO0FBQ1QsR0FsQitDLENBb0JoRDs7O0FBQ0EsTUFBSWtFLE1BQU0sQ0FBQ1YsUUFBUCxDQUFnQmMsUUFBaEIsSUFBNEIsNEJBQWhDLEVBQThEO0FBQzVELFFBQUlDLFFBQU8sR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztBQUNBb0UsSUFBQUEsUUFBTyxDQUFDQyxXQUFSLENBQW9COUMsb0RBQU8sRUFBM0I7QUFDRDs7QUFDRCxNQUFJd0MsTUFBTSxDQUFDVixRQUFQLENBQWdCYyxRQUFoQixJQUE0QixnQ0FBaEMsRUFBa0U7QUFDaEV0RSxJQUFBQSxzREFBUTtBQUNUO0FBQ0YsQ0E1QkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jYXRlcmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2NvbnRhY3QuY3NzPzM4ZTkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9mb3JtLmNzcz8xYTc1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/OTJiMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2xvY2F0aW9uLmNzcz80MjhiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3M/MTYyMSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3Jlc3RhdXJhbnQuY3NzPzhlYjUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBjb25zdCB2aXNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNhXCIpO1xyXG4gIGNvbnN0IGNhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhc2hcIik7XHJcblxyXG4gIHZpc2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghdmlzYS5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICB2aXNhLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgaWYgKGNhc2guY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICBjYXNoLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghY2FzaC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICBjYXNoLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgaWYgKHZpc2EuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICB2aXNhLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZUZvcm0pO1xyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybShldnQpIHtcclxuICBjb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cztcclxuICBjb25zdCBpbnB1dHMgPSBmb3JtRWxlbWVudHMucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG5cclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaW5pdEZvcm0sIHZhbGlkYXRlRm9ybSB9O1xyXG4iLCJpbXBvcnQgcmFtZW4gZnJvbSBcIi4vaXRlbXMtaW1ncy9yYW1lbi10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtaXNvIGZyb20gXCIuL2l0ZW1zLWltZ3MvbWlzby10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBzcGFuaXNoIGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BhbmlzaC1yb2xsLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IHNwaWN5IGZyb20gXCIuL2l0ZW1zLWltZ3Mvc3BpY3ktdHVuYS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBib2JhIGZyb20gXCIuL2l0ZW1zLWltZ3MvYm9iYS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBsYXR0ZSBmcm9tIFwiLi9pdGVtcy1pbWdzL2xhdHRlLXRodW1ibmFpbC5qcGdcIjtcclxuaW1wb3J0IG1hY2hpYXR0byBmcm9tIFwiLi9pdGVtcy1pbWdzL21hY2hpYXR0by10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtYXRjaGEgZnJvbSBcIi4vaXRlbXMtaW1ncy9tYXRjaGEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkTWVudSgpIHtcclxuICBsZXQgaXRlbXMgPSB7XHJcbiAgICBSYW1lbjoge1xyXG4gICAgICBkZXNjOiBcIlRoaXMgaXRlbSBpcyBhIGZhbiBmYXZvcml0ZSBhbW9uZyBsb2NhbHMuIEhhbGYgb2ZmIGV2ZXJ5IFdlZG5lc2RheS5cIixcclxuICAgICAgaW1nOiByYW1lbixcclxuICAgICAgcHJpY2U6IFwiJDkuNzVcIixcclxuICAgICAgYWx0OiBcIkEgYm93bCBvZiByYW1lbiBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiTWlzbyBTb3VwXCI6IHtcclxuICAgICAgZGVzYzogXCJUaGUgaGVhbC1hbGwgZGlzaCB0byBhbHdheXMgYmUgdGhlcmUgZm9yIHlvdSB3aGVuICd0aGV5JyB3ZXJlbid0LlwiLFxyXG4gICAgICBpbWc6IG1pc28sXHJcbiAgICAgIHByaWNlOiBcIiQ1Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgbWlzbyBzb3VwLlwiLFxyXG4gICAgfSxcclxuICAgIFwiU3BhbmlzaCBSb2xsXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGxvdmVycyBmYXZvcml0ZSBvbmNlIGVhdGVuIGJ5IHRoZSBhbmNpZW50IGdvZHMuXCIsXHJcbiAgICAgIGltZzogc3BhbmlzaCxcclxuICAgICAgcHJpY2U6IFwiJDEyLjc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xscyB3aXRoIHNhbG1vbi5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwaWN5IFR1bmFcIjoge1xyXG4gICAgICBkZXNjOiBcIkEgY3VsdCBjbGFzc2ljLiBEb250IGJlIGZyaWVuZHMgd2l0aCBzcGljeS10dW5hIGhhdGVycy5cIixcclxuICAgICAgaW1nOiBzcGljeSxcclxuICAgICAgcHJpY2U6IFwiJDcuNzVcIixcclxuICAgICAgYWx0OiBcIlN1c2hpIHJvbGwgd2l0aCBzcGljeSB0dW5hIGluc2lkZS5cIixcclxuICAgIH0sXHJcbiAgICBCb2JhOiB7XHJcbiAgICAgIGRlc2M6IFwiU2FuIERpZWdvIGhlYXQgdG9vIG11Y2g/IENvb2wgZG93biB3aXRoIHNvbWUgY29sZCBib2JhLlwiLFxyXG4gICAgICBpbWc6IGJvYmEsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIHBsYXN0aWMgY3VwIHdpdGggYm9iYSBtaWxrIHRlYS5cIixcclxuICAgIH0sXHJcbiAgICBMYXR0ZToge1xyXG4gICAgICBkZXNjOiBcIk1vcm5pbmcgcnVzaCByZW1lZHkuIFdoYXRzIHJ1c2ggaG91ciB3aGVuIHlvdSBoYXZlIGEgcGVyZmVjdCBsYXR0ZT9cIixcclxuICAgICAgaW1nOiBsYXR0ZSxcclxuICAgICAgcHJpY2U6IFwiJDQuNzVcIixcclxuICAgICAgYWx0OiBcIkEgZm9hbXkgaG90IGN1cCBvZiBsYXR0ZSBjb2ZmZWVcIixcclxuICAgIH0sXHJcbiAgICBNYWNoaWF0dG86IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGNyZWFteSBoYWxmIG1pbGsgaGFsZiBjb2ZmZWUgaW52ZW50aW9uIGNyZWF0ZWQgYnkgcHVyZSBnZW5pdXMuXCIsXHJcbiAgICAgIGltZzogbWFjaGlhdHRvLFxyXG4gICAgICBwcmljZTogXCIkNC41MFwiLFxyXG4gICAgICBhbHQ6IFwiUG91cmluZyBob3QgY29mZmVlIGludG8gbWFjaGlhdHRvXCIsXHJcbiAgICB9LFxyXG4gICAgTWF0Y2hhOiB7XHJcbiAgICAgIGRlc2M6IFwiTXlzdGljIE1vY2hhcyBjb3N0dW1lciBmYXZvcml0ZS4gUmF0ZWQgYmVzdCBtYXRjaGEgdGVhIGluIENBLlwiLFxyXG4gICAgICBpbWc6IG1hdGNoYSxcclxuICAgICAgcHJpY2U6IFwiJDMuNzVcIixcclxuICAgICAgYWx0OiBcImhvdCBtYXRjaGEgbGF0dGUgd2l0aCB3aGl0ZSBmb2FtXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGl0ZW1zKSB7XHJcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG5cclxuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbGV0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbGV0IG1lbnVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51UHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gICAgbWVudVByaWNlLnRleHRDb250ZW50ID0gaXRlbXNba2V5XS5wcmljZTtcclxuICAgIG1lbnVMYWJlbC50ZXh0Q29udGVudCA9IGtleTtcclxuICAgIG1lbnVJbWcuc3JjID0gaXRlbXNba2V5XS5pbWc7XHJcbiAgICBtZW51RGVzYy50ZXh0Q29udGVudCA9IGl0ZW1zW2tleV0uZGVzYztcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51TGFiZWwpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVEZXNjKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51UHJpY2UpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0pO1xyXG4gIH1cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4vY3NzL2Zvcm0uY3NzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2Nzcy9ob21lLmNzc1wiO1xyXG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9jc3MvcmVzdGF1cmFudC5jc3NcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vY3NzL21lbnUuY3NzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2Nzcy9jb250YWN0LmNzc1wiO1xyXG5pbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4vY3NzL2xvY2F0aW9uLmNzc1wiO1xyXG5pbXBvcnQgYmcgZnJvbSBcIi4vaW1hZ2VzL2xvZmktYmcuanBnXCI7XHJcbmltcG9ydCBhZGRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgaW5pdEZvcm0sIHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL2NhdGVyaW5nLmpzXCI7XHJcblxyXG5pbXBvcnQgYmFyaXN0YSBmcm9tIFwiLi9pbWFnZXMvYmFyaXN0YS5qcGdcIjtcclxuaW1wb3J0IGNvZmZlZUJhbm5lciBmcm9tIFwiLi9pbWFnZXMvY29mZmVlLWJhbm5lci5qcGdcIjtcclxuaW1wb3J0IGNvZmZlZUxvZ28gZnJvbSBcIi4vaW1hZ2VzL2NvZmZlZS1sb2dvLXRyYW5zcGFyZW50LnBuZ1wiO1xyXG5pbXBvcnQgZmFybSBmcm9tIFwiLi9pbWFnZXMvZmFybS10cmFuc3BhcmVudC5wbmdcIjtcclxuaW1wb3J0IGxhdHRlUG91ciBmcm9tIFwiLi9pbWFnZXMvbGF0dGUtcG91ci5qcGdcIjtcclxuaW1wb3J0IG1leEVhZ2xlIGZyb20gXCIuL2ltYWdlcy9tZXgtZWFnbGUtdHJhbnNwYXJlbnQucG5nXCI7XHJcbmltcG9ydCBtZXhPdXRsaW5lIGZyb20gXCIuL2ltYWdlcy9tZXhpY28tb3V0bGluZS5wbmdcIjtcclxuaW1wb3J0IGhlYWRzaG90IGZyb20gXCIuL2ltYWdlcy9vd25lci1oZWFkc2hvdC5qcGdcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudV9fdG9nZ2xlXCIpO1xyXG4gIGhhbWJ1cmdlckJ0bi5jaGVja2VkID0gZmFsc2U7XHJcbiAgaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBpZiAoaGFtYnVyZ2VyQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19ib3hcIikuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgfSBlbHNlIGlmICghaGFtYnVyZ2VyQnRuLmNoZWNrZWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19ib3hcIikuc3R5bGUubGVmdCA9IFwiLTEwMCVcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gbG9jYWxob3N0IHBhdGggbmFtZXNcclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL21lbnUuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9jYXRlcmluZy5odG1sXCIpIHtcclxuICAgIGluaXRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICAvLyBnaXRodWIgcGFnZXMgcGF0aCBuYW1lc1xyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvcmVzdGF1cmFudC1wYWdlL21lbnUuaHRtbFwiKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTWVudSgpKTtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9yZXN0YXVyYW50LXBhZ2UvY2F0ZXJpbmcuaHRtbFwiKSB7XHJcbiAgICBpbml0Rm9ybSgpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJpbml0Rm9ybSIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aXNhIiwiY2FzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsInZhbGlkYXRlRm9ybSIsImV2dCIsImZvcm1FbGVtZW50cyIsImZvcm1zIiwiZWxlbWVudHMiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmVudERlZmF1bHQiLCJyYW1lbiIsIm1pc28iLCJzcGFuaXNoIiwic3BpY3kiLCJib2JhIiwibGF0dGUiLCJtYWNoaWF0dG8iLCJtYXRjaGEiLCJhZGRNZW51IiwiaXRlbXMiLCJSYW1lbiIsImRlc2MiLCJpbWciLCJwcmljZSIsImFsdCIsIkJvYmEiLCJMYXR0ZSIsIk1hY2hpYXR0byIsIk1hdGNoYSIsIm1lbnVDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwia2V5IiwiY29uc29sZSIsImxvZyIsIm1lbnVJdGVtIiwibWVudUxhYmVsIiwibWVudUltZyIsIm1lbnVEZXNjIiwibWVudVByaWNlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhcHBlbmQiLCJzdHlsZSIsImhvbWUiLCJyZXN0YXVyYW50IiwibWVudSIsImNvbnRhY3QiLCJsb2NhdGlvbiIsImJnIiwiYmFyaXN0YSIsImNvZmZlZUJhbm5lciIsImNvZmZlZUxvZ28iLCJmYXJtIiwibGF0dGVQb3VyIiwibWV4RWFnbGUiLCJtZXhPdXRsaW5lIiwiaGVhZHNob3QiLCJ3aW5kb3ciLCJoYW1idXJnZXJCdG4iLCJjaGVja2VkIiwibGVmdCIsInBhdGhuYW1lIiwiY29udGVudCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==