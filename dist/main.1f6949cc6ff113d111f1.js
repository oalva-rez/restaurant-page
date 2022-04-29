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
/* harmony export */   "default": () => (/* binding */ addMenu)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSUgsTUFBTSxDQUFDVixRQUFQLENBQWdCYyxRQUFoQixJQUE0QixZQUFoQyxFQUE4QztBQUM1QyxRQUFJQyxPQUFPLEdBQUc5RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtBQUNBNkQsSUFBQUEsT0FBTyxDQUFDQyxXQUFSLENBQW9CNUMsb0RBQU8sRUFBM0I7QUFDRDs7QUFDRCxNQUFJc0MsTUFBTSxDQUFDVixRQUFQLENBQWdCYyxRQUFoQixJQUE0QixnQkFBaEMsRUFBa0Q7QUFDaEQvRCxJQUFBQSxzREFBUTtBQUNULEdBbEIrQyxDQW9CaEQ7OztBQUNBLE1BQUkyRCxNQUFNLENBQUNWLFFBQVAsQ0FBZ0JjLFFBQWhCLElBQTRCLDRCQUFoQyxFQUE4RDtBQUM1RCxRQUFJQyxRQUFPLEdBQUc5RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFDQTZELElBQUFBLFFBQU8sQ0FBQ0MsV0FBUixDQUFvQjVDLG9EQUFPLEVBQTNCO0FBQ0Q7O0FBQ0QsTUFBSXNDLE1BQU0sQ0FBQ1YsUUFBUCxDQUFnQmMsUUFBaEIsSUFBNEIsZ0NBQWhDLEVBQWtFO0FBQ2hFL0QsSUFBQUEsc0RBQVE7QUFDVDtBQUNGLENBNUJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2F0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcz8zOGU5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvZm9ybS5jc3M/MWE3NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2hvbWUuY3NzPzkyYjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9sb2NhdGlvbi5jc3M/NDI4YiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzPzE2MjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9yZXN0YXVyYW50LmNzcz84ZWI1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzZiN2IiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0Rm9ybSgpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgY29uc3QgdmlzYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzYVwiKTtcclxuICBjb25zdCBjYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXNoXCIpO1xyXG5cclxuICB2aXNhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIXZpc2EuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgdmlzYS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIGlmIChjYXNoLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgY2FzaC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBjYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWNhc2guY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgY2FzaC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIGlmICh2aXNhLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgdmlzYS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVGb3JtKTtcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRGb3JtLCB2YWxpZGF0ZUZvcm0gfTtcclxuIiwiaW1wb3J0IHJhbWVuIGZyb20gXCIuL2l0ZW1zLWltZ3MvcmFtZW4tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbWlzbyBmcm9tIFwiLi9pdGVtcy1pbWdzL21pc28tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwYW5pc2gtcm9sbC10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBzcGljeSBmcm9tIFwiLi9pdGVtcy1pbWdzL3NwaWN5LXR1bmEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgYm9iYSBmcm9tIFwiLi9pdGVtcy1pbWdzL2JvYmEtdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4vaXRlbXMtaW1ncy9sYXR0ZS10aHVtYm5haWwuanBnXCI7XHJcbmltcG9ydCBtYWNoaWF0dG8gZnJvbSBcIi4vaXRlbXMtaW1ncy9tYWNoaWF0dG8tdGh1bWJuYWlsLmpwZ1wiO1xyXG5pbXBvcnQgbWF0Y2hhIGZyb20gXCIuL2l0ZW1zLWltZ3MvbWF0Y2hhLXRodW1ibmFpbC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1lbnUoKSB7XHJcbiAgbGV0IGl0ZW1zID0ge1xyXG4gICAgUmFtZW46IHtcclxuICAgICAgZGVzYzogXCJUaGlzIGl0ZW0gaXMgYSBmYW4gZmF2b3JpdGUgYW1vbmcgbG9jYWxzLiBIYWxmIG9mZiBldmVyeSBXZWRuZXNkYXkuXCIsXHJcbiAgICAgIGltZzogcmFtZW4sXHJcbiAgICAgIHByaWNlOiBcIiQ5Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGJvd2wgb2YgcmFtZW4gc291cC5cIixcclxuICAgIH0sXHJcbiAgICBcIk1pc28gU291cFwiOiB7XHJcbiAgICAgIGRlc2M6IFwiVGhlIGhlYWwtYWxsIGRpc2ggdG8gYWx3YXlzIGJlIHRoZXJlIGZvciB5b3Ugd2hlbiAndGhleScgd2VyZW4ndC5cIixcclxuICAgICAgaW1nOiBtaXNvLFxyXG4gICAgICBwcmljZTogXCIkNS43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBib3dsIG9mIG1pc28gc291cC5cIixcclxuICAgIH0sXHJcbiAgICBcIlNwYW5pc2ggUm9sbFwiOiB7XHJcbiAgICAgIGRlc2M6IFwiQSBsb3ZlcnMgZmF2b3JpdGUgb25jZSBlYXRlbiBieSB0aGUgYW5jaWVudCBnb2RzLlwiLFxyXG4gICAgICBpbWc6IHNwYW5pc2gsXHJcbiAgICAgIHByaWNlOiBcIiQxMi43NVwiLFxyXG4gICAgICBhbHQ6IFwiU3VzaGkgcm9sbHMgd2l0aCBzYWxtb24uXCIsXHJcbiAgICB9LFxyXG4gICAgXCJTcGljeSBUdW5hXCI6IHtcclxuICAgICAgZGVzYzogXCJBIGN1bHQgY2xhc3NpYy4gRG9udCBiZSBmcmllbmRzIHdpdGggc3BpY3ktdHVuYSBoYXRlcnMuXCIsXHJcbiAgICAgIGltZzogc3BpY3ksXHJcbiAgICAgIHByaWNlOiBcIiQ3Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJTdXNoaSByb2xsIHdpdGggc3BpY3kgdHVuYSBpbnNpZGUuXCIsXHJcbiAgICB9LFxyXG4gICAgQm9iYToge1xyXG4gICAgICBkZXNjOiBcIlNhbiBEaWVnbyBoZWF0IHRvbyBtdWNoPyBDb29sIGRvd24gd2l0aCBzb21lIGNvbGQgYm9iYS5cIixcclxuICAgICAgaW1nOiBib2JhLFxyXG4gICAgICBwcmljZTogXCIkNC43NVwiLFxyXG4gICAgICBhbHQ6IFwiQSBwbGFzdGljIGN1cCB3aXRoIGJvYmEgbWlsayB0ZWEuXCIsXHJcbiAgICB9LFxyXG4gICAgTGF0dGU6IHtcclxuICAgICAgZGVzYzogXCJNb3JuaW5nIHJ1c2ggcmVtZWR5LiBXaGF0cyBydXNoIGhvdXIgd2hlbiB5b3UgaGF2ZSBhIHBlcmZlY3QgbGF0dGU/XCIsXHJcbiAgICAgIGltZzogbGF0dGUsXHJcbiAgICAgIHByaWNlOiBcIiQ0Ljc1XCIsXHJcbiAgICAgIGFsdDogXCJBIGZvYW15IGhvdCBjdXAgb2YgbGF0dGUgY29mZmVlXCIsXHJcbiAgICB9LFxyXG4gICAgTWFjaGlhdHRvOiB7XHJcbiAgICAgIGRlc2M6IFwiVGhpcyBjcmVhbXkgaGFsZiBtaWxrIGhhbGYgY29mZmVlIGludmVudGlvbiBjcmVhdGVkIGJ5IHB1cmUgZ2VuaXVzLlwiLFxyXG4gICAgICBpbWc6IG1hY2hpYXR0byxcclxuICAgICAgcHJpY2U6IFwiJDQuNTBcIixcclxuICAgICAgYWx0OiBcIlBvdXJpbmcgaG90IGNvZmZlZSBpbnRvIG1hY2hpYXR0b1wiLFxyXG4gICAgfSxcclxuICAgIE1hdGNoYToge1xyXG4gICAgICBkZXNjOiBcIk15c3RpYyBNb2NoYXMgY29zdHVtZXIgZmF2b3JpdGUuIFJhdGVkIGJlc3QgbWF0Y2hhIHRlYSBpbiBDQS5cIixcclxuICAgICAgaW1nOiBtYXRjaGEsXHJcbiAgICAgIHByaWNlOiBcIiQzLjc1XCIsXHJcbiAgICAgIGFsdDogXCJob3QgbWF0Y2hhIGxhdHRlIHdpdGggd2hpdGUgZm9hbVwiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtcykge1xyXG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBtZW51TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBsZXQgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsZXQgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBtZW51UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVQcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBtZW51UHJpY2UudGV4dENvbnRlbnQgPSBpdGVtc1trZXldLnByaWNlO1xyXG4gICAgbWVudUxhYmVsLnRleHRDb250ZW50ID0ga2V5O1xyXG4gICAgbWVudUltZy5zcmMgPSBpdGVtc1trZXldLmltZztcclxuICAgIG1lbnVEZXNjLnRleHRDb250ZW50ID0gaXRlbXNba2V5XS5kZXNjO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVMYWJlbCk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUltZyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudURlc2MpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVQcmljZSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbSk7XHJcbiAgfVxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBmb3JtIGZyb20gXCIuL2Nzcy9mb3JtLmNzc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9jc3MvaG9tZS5jc3NcIjtcclxuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4vY3NzL3Jlc3RhdXJhbnQuY3NzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL2Nzcy9tZW51LmNzc1wiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jc3MvY29udGFjdC5jc3NcIjtcclxuaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuL2Nzcy9sb2NhdGlvbi5jc3NcIjtcclxuaW1wb3J0IGJnIGZyb20gXCIuL2ltYWdlcy9sb2ZpLWJnLmpwZ1wiO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7IGluaXRGb3JtLCB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi9jYXRlcmluZy5qc1wiO1xyXG5cclxuaW1wb3J0IGJhcmlzdGEgZnJvbSBcIi4vaW1hZ2VzL2JhcmlzdGEuanBnXCI7XHJcbmltcG9ydCBjb2ZmZWVCYW5uZXIgZnJvbSBcIi4vaW1hZ2VzL2NvZmZlZS1iYW5uZXIuanBnXCI7XHJcbmltcG9ydCBjb2ZmZWVMb2dvIGZyb20gXCIuL2ltYWdlcy9jb2ZmZWUtbG9nby10cmFuc3BhcmVudC5wbmdcIjtcclxuaW1wb3J0IGZhcm0gZnJvbSBcIi4vaW1hZ2VzL2Zhcm0tdHJhbnNwYXJlbnQucG5nXCI7XHJcbmltcG9ydCBsYXR0ZVBvdXIgZnJvbSBcIi4vaW1hZ2VzL2xhdHRlLXBvdXIuanBnXCI7XHJcbmltcG9ydCBtZXhFYWdsZSBmcm9tIFwiLi9pbWFnZXMvbWV4LWVhZ2xlLXRyYW5zcGFyZW50LnBuZ1wiO1xyXG5pbXBvcnQgbWV4T3V0bGluZSBmcm9tIFwiLi9pbWFnZXMvbWV4aWNvLW91dGxpbmUucG5nXCI7XHJcbmltcG9ydCBoZWFkc2hvdCBmcm9tIFwiLi9pbWFnZXMvb3duZXItaGVhZHNob3QuanBnXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGxldCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVfX3RvZ2dsZVwiKTtcclxuICBoYW1idXJnZXJCdG4uY2hlY2tlZCA9IGZhbHNlO1xyXG4gIGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGhhbWJ1cmdlckJ0bi5jaGVja2VkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fYm94XCIpLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIH0gZWxzZSBpZiAoIWhhbWJ1cmdlckJ0bi5jaGVja2VkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fYm94XCIpLnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGxvY2FsaG9zdCBwYXRoIG5hbWVzXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9tZW51Lmh0bWxcIikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE1lbnUoKSk7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvY2F0ZXJpbmcuaHRtbFwiKSB7XHJcbiAgICBpbml0Rm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2l0aHViIHBhZ2VzIHBhdGggbmFtZXNcclxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL3Jlc3RhdXJhbnQtcGFnZS9tZW51Lmh0bWxcIikge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE1lbnUoKSk7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvcmVzdGF1cmFudC1wYWdlL2NhdGVyaW5nLmh0bWxcIikge1xyXG4gICAgaW5pdEZvcm0oKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiaW5pdEZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlzYSIsImNhc2giLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJ2YWxpZGF0ZUZvcm0iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInJhbWVuIiwibWlzbyIsInNwYW5pc2giLCJzcGljeSIsImJvYmEiLCJsYXR0ZSIsIm1hY2hpYXR0byIsIm1hdGNoYSIsImFkZE1lbnUiLCJpdGVtcyIsIlJhbWVuIiwiZGVzYyIsImltZyIsInByaWNlIiwiYWx0IiwiQm9iYSIsIkxhdHRlIiwiTWFjaGlhdHRvIiwiTWF0Y2hhIiwibWVudUNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJrZXkiLCJtZW51SXRlbSIsIm1lbnVMYWJlbCIsIm1lbnVJbWciLCJtZW51RGVzYyIsIm1lbnVQcmljZSIsInRleHRDb250ZW50Iiwic3JjIiwiYXBwZW5kIiwic3R5bGUiLCJob21lIiwicmVzdGF1cmFudCIsIm1lbnUiLCJjb250YWN0IiwibG9jYXRpb24iLCJiZyIsImJhcmlzdGEiLCJjb2ZmZWVCYW5uZXIiLCJjb2ZmZWVMb2dvIiwiZmFybSIsImxhdHRlUG91ciIsIm1leEVhZ2xlIiwibWV4T3V0bGluZSIsImhlYWRzaG90Iiwid2luZG93IiwiaGFtYnVyZ2VyQnRuIiwiY2hlY2tlZCIsImxlZnQiLCJwYXRobmFtZSIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=