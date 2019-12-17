/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBody;
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(5);


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = 'hidden';
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].appendChild(body);
  }

  return docOverflow;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(5);


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].offsetHeight;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a"]; });


var hasClass = __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a" /* classListSupport */] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNodeList;
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(53);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_megamenu__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_herogallery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gallerySlider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigator__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_searchresults__ = __webpack_require__(52);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Import your JS components here







 //CAIT

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.components = [];
  }

  _createClass(App, [{
    key: 'component',
    value: function component(_component) {
      this.components.push(_component);
    }
  }, {
    key: 'boot',
    value: function boot() {
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }]);

  return App;
}();

var app = new App();
// Push imported JS to component variable using .component method
app.component(new __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* header */]());
app.component(new __WEBPACK_IMPORTED_MODULE_1__components_megamenu__["a" /* megamenu */]());
app.component(new __WEBPACK_IMPORTED_MODULE_2__components_search__["a" /* search */]());
// app.component(new heroGallery());
app.component(new __WEBPACK_IMPORTED_MODULE_4__components_gallerySlider__["a" /* gallerySlider */]());
app.component(new __WEBPACK_IMPORTED_MODULE_5__components_navigator__["a" /* navigator */]());

app.component(new __WEBPACK_IMPORTED_MODULE_6__components_searchresults__["a" /* searchresults */]()); //CAIT

document.addEventListener("DOMContentLoaded", function () {
  return app.boot();
});

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return header; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var header = function () {
    function header() {
        _classCallCheck(this, header);

        this.header = null;
    }

    _createClass(header, [{
        key: "getElements",
        value: function getElements() {
            this.header = document.getElementById('js-header');
        }
    }, {
        key: "checkOffsetTop",
        value: function checkOffsetTop(element) {
            var _windowOffsetTop = window.scrollY;
            if (_windowOffsetTop > 0) {
                this.setFixed("add", this.header);
            } else {
                this.setFixed("remove", this.header);
            }
        }
    }, {
        key: "setFixed",
        value: function setFixed(action, element) {
            if (action === "add") {
                element.classList.add('is-fixed');
            } else {
                element.classList.remove('is-fixed');
            }
        }
    }, {
        key: "bindElements",
        value: function bindElements() {
            var _this = this;

            var _self = this;
            window.addEventListener('scroll', function () {
                _this.checkOffsetTop(_this.header);
            });
        }
    }, {
        key: "init",
        value: function init() {
            this.getElements();
            if (this.header != null) {
                this.bindElements();
            }
        }
    }]);

    return header;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return megamenu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var megamenu = function () {
    function megamenu() {
        _classCallCheck(this, megamenu);

        this.header = null;
    }

    _createClass(megamenu, [{
        key: "getElements",
        value: function getElements() {
            this.header = document.getElementById('js-header');
        }
    }, {
        key: "checkOffsetTop",
        value: function checkOffsetTop(element) {
            var _windowOffsetTop = window.scrollY;
            if (_windowOffsetTop > 0) {
                this.setFixed("add", this.header);
            } else {
                this.setFixed("remove", this.header);
            }
        }
    }, {
        key: "setFixed",
        value: function setFixed(action, element) {
            if (action === "add") {
                element.classList.add('is-fixed');
            } else {
                element.classList.remove('is-fixed');
            }
        }
    }, {
        key: "bindElements",
        value: function bindElements() {
            var _this = this;

            var _self = this;
            window.addEventListener('scroll', function () {
                _this.checkOffsetTop(_this.header);
            });
        }
    }, {
        key: "init",
        value: function init() {
            this.getElements();
            if (this.header != null) {
                this.bindElements();
            }
        }
    }]);

    return megamenu;
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var search = function () {
    function search() {
        _classCallCheck(this, search);

        this.searchField = null;
        this.searchButton = null;
        this.searchClose = null;
        this.mainNav = null;
    }

    _createClass(search, [{
        key: 'getElements',
        value: function getElements() {
            this.searchButton = document.getElementById('js-search__button');
            this.searchField = document.getElementById('js-search__field');
            this.searchClose = document.getElementById('js-closeSearch');
            this.mainNav = document.getElementById('js-nav');
            console.log(this.searchButton);
        }
    }, {
        key: 'checkState',
        value: function checkState(element) {
            if (element.classList.contains('is-active')) {
                this.setState("remove");
            } else {
                this.setState("add");
            }
        }
    }, {
        key: 'setState',
        value: function setState(action) {
            var _this = this;

            if (action === "add") {
                this.mainNav.classList.remove('is-active');
                setTimeout(function () {
                    _this.searchField.classList.add('is-active');
                    _this.searchButton.classList.add('is-active');
                }, 200);
            } else {
                this.searchField.classList.remove('is-active');
                this.searchButton.classList.remove('is-active');
                setTimeout(function () {
                    _this.mainNav.classList.add('is-active');
                }, 500);
            }
        }
    }, {
        key: 'bindElements',
        value: function bindElements() {
            var _this2 = this;

            this.searchButton.addEventListener('click', function () {
                _this2.checkState(_this2.searchButton);
            });
            this.searchClose.addEventListener('click', function () {
                _this2.setState("remove");
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.getElements();
            if (this.searchButton != null && this.searchField != null) {
                this.bindElements();
            }
        }
    }]);

    return search;
}();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export heroGallery */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var heroGallery = function () {
    function heroGallery() {
        _classCallCheck(this, heroGallery);

        this.gallery = null;
        this.paginations = null;
        this.slides = null;
    }

    _createClass(heroGallery, [{
        key: 'getElements',
        value: function getElements() {
            this.gallery = Array.from(document.querySelectorAll('.js-gallery'));
            this.getChildElements(this.gallery);
        }
    }, {
        key: 'getChildElements',
        value: function getChildElements(element) {
            var _self = this;
            element.forEach(function (item) {
                _self.paginations = Array.from(item.querySelectorAll('.js-gallery__pagination'));
                _self.slides = Array.from(item.querySelectorAll('.c-gallery__slide'));
            });
        }
    }, {
        key: 'setActive',
        value: function setActive(element, index) {
            element.classList.add('is-active');
            this.slides[index].classList.add('is-active');
        }
    }, {
        key: 'clearActive',
        value: function clearActive(elements) {
            elements.forEach(function (item) {
                item.classList.remove('is-active');
            });
        }
    }, {
        key: 'bindElements',
        value: function bindElements() {
            var _self = this;
            this.paginations.forEach(function (item, key) {
                item.addEventListener('click', function () {
                    _self.clearActive(_self.paginations);
                    _self.clearActive(_self.slides);
                    _self.setActive(item, key);
                });
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.getElements();
            if (this.gallery != null) {
                this.bindElements();
            }
        }
    }]);

    return heroGallery;
}();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gallerySlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var gallerySlider = function () {
    function gallerySlider() {
        _classCallCheck(this, gallerySlider);

        this.slidersArray = null;
        // this.paginations = null;
        // this.slides = null;
    }

    _createClass(gallerySlider, [{
        key: 'init',
        value: function init() {
            if (Array.from(document.querySelectorAll('.js-slider')) != null) {
                this.getElements();
            } else {
                return false;
            };
        }
    }, {
        key: 'getElements',
        value: function getElements() {
            // this.slidersArray =  Array.from(document.querySelectorAll('.js-slider'));
            // this.slidersArray =  [].slice.call(document.querySelectorAll('.js-slider'));

            this.slidersArray = document.querySelectorAll('.js-slider');

            console.log(this.slidersArray);
            this.directType(this.slidersArray);
        }
    }, {
        key: 'directType',
        value: function directType(elements) {
            var _this = this;

            elements.forEach(function (element) {
                if (element.classList.contains('c-slidersgallery--hero-slides')) {
                    _this.bannerGallery(element);
                }

                if (element.classList.contains('c-slidersgallery--vertical-slides')) {
                    _this.verticalGallery(element);
                }

                if (element.classList.contains('c-slidersgallery--socmed-slides')) {
                    _this.socmedSlider(element);
                }

                // else{
                //     return 1;
                // }
            });
        }
    }, {
        key: 'bannerGallery',
        value: function bannerGallery(element) {
            Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
                container: element,
                "items": 1,
                "mode": "gallery",
                "slideBy": "page",
                "mouseDrag": true,
                "swipeAngle": false,
                "speed": 500,
                "controls": false,
                "navContainer": '.js-slider_nav'
            });
            return 1;
        }
    }, {
        key: 'verticalGallery',
        value: function verticalGallery(element) {
            Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
                container: element,
                "items": 1,
                "mode": "gallery",
                "slideBy": "page",
                "mouseDrag": true,
                "swipeAngle": false,
                "speed": 500,
                "controls": false,
                "navContainer": '.js-slider_nav--vertical',
                "navPosition": "right",
                "axis": "vertical"
            });
            return 1;
        }
    }, {
        key: 'socmedSlider',
        value: function socmedSlider(element) {
            Object(__WEBPACK_IMPORTED_MODULE_0_tiny_slider_src_tiny_slider__["a" /* tns */])({
                container: element,
                "autoWidth": true,
                "items": 3.5,
                "gutter": 40,
                "mouseDrag": true,
                "swipeAngle": false,
                "speed": 500,
                "slideBy": 1,
                "autoplay": true,
                "autoplayButtonOutput": false,
                "loop": true,
                "controls": false,
                "nav": false,
                "autoplayButton": false,
                "responsive": {
                    "350": {
                        "items": 1,
                        "gutter": 0,
                        "autoWidth": false
                    },
                    "768": {
                        "items": 3.5,
                        "gutter": 40
                    }
                }
            });
            return 1;
        }
    }]);

    return gallerySlider;
}();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Object_keys__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_Object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_caf_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_extend_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_getSlideId_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_calc_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_percentageLayout_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_mediaquerySupport_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_createStyleSheet_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_removeCSSRule_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_toDegree_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_getTouchDirection_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_hasClass_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__helpers_getAttr_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__helpers_arrayFromNodeList_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__helpers_isVisible_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_has3DTransforms_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__helpers_getEndProperty_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__helpers_events_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__helpers_jsTransform_js__ = __webpack_require__(50);





































var tns = function(options) {
  options = Object(__WEBPACK_IMPORTED_MODULE_4__helpers_extend_js__["a" /* extend */])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tC']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tC', Object(__WEBPACK_IMPORTED_MODULE_8__helpers_calc_js__["a" /* calc */])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tPL']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tPL', Object(__WEBPACK_IMPORTED_MODULE_9__helpers_percentageLayout_js__["a" /* percentageLayout */])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tMQ']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tMQ', Object(__WEBPACK_IMPORTED_MODULE_10__helpers_mediaquerySupport_js__["a" /* mediaquerySupport */])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTf']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTf', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__["a" /* whichProperty */])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['t3D']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 't3D', Object(__WEBPACK_IMPORTED_MODULE_30__helpers_has3DTransforms_js__["a" /* has3DTransforms */])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDu']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDu', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDe']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDe', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADu']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADu', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__["a" /* whichProperty */])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADe']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADe', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_whichProperty_js__["a" /* whichProperty */])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTE']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTE', Object(__WEBPACK_IMPORTED_MODULE_31__helpers_getEndProperty_js__["a" /* getEndProperty */])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(__WEBPACK_IMPORTED_MODULE_5__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tAE']) : Object(__WEBPACK_IMPORTED_MODULE_6__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tAE', Object(__WEBPACK_IMPORTED_MODULE_31__helpers_getEndProperty_js__["a" /* getEndProperty */])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], 
      optionsElements = {};
      
  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(__WEBPACK_IMPORTED_MODULE_4__helpers_extend_js__["a" /* extend */])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(__WEBPACK_IMPORTED_MODULE_11__helpers_createStyleSheet_js__["a" /* createStyleSheet */])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = slideCountNew; i--;) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new __WEBPACK_IMPORTED_MODULE_34__helpers_events_js__["a" /* Events */](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(__WEBPACK_IMPORTED_MODULE_7__helpers_getSlideId_js__["a" /* getSlideId */])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex : 
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : 
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? 
        CALC + '(100% / ' + dividend + ')' : 
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes 
    // before clone slides
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, animateNormal); }
      Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(imgs, function(img) {
        var src = img.src;
        
        if (src && src.indexOf('data:image') < 0) {
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      });

      // All imgs are completed
      Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_25__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), function() { imgsComplete = true; }); });

      // Check imgs in window only for auto height
      if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_25__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;
      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
        initSliderTransformCore() :
        setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) { 
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, 'font-size:0;', Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      } else if (carousel) {
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-mw', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-iw', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, visibilityEvent); }
      }
    }
 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(navItems, function(item, i) {
          Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(navItems[navCurrentIndex], 'tabindex');
      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }
      
      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(prevButton, {'data-controls' : 'prev'});
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(controlsContainer, controlsEvents);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(prevButton, controlsEvents);
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, eve);
    }

    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents); }
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(navContainer, navEvents); }

    // autoplay
    Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, visibilityEvent);
    if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, eve);
    }
    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }
    
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      nav ?
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(navContainer) :
        Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(navContainer);
    }
    if (touch !== touchTem) {
      touch ?
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch) :
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(doc, visibilityEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) { 
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad(); 
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        }

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(__WEBPACK_IMPORTED_MODULE_13__helpers_removeCSSRule_js__["a" /* removeCSSRule */])(sheet, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet) - 1);
          Object(__WEBPACK_IMPORTED_MODULE_12__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
    if (!nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
    if (nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['style']);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end; 
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_18__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(img, eve);

          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);

          // update src
          img.src = Object(__WEBPACK_IMPORTED_MODULE_22__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-src');

          // update srcset
          var srcset = Object(__WEBPACK_IMPORTED_MODULE_22__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(img, 'tns-complete');
    Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(img, 'loading');
    Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(img, imgEvents);
  }

  function getImageArray (start, end) {
    var imgs = [];
    while (start <= end) {
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (Object(__WEBPACK_IMPORTED_MODULE_18__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, cb); });
  } 

  function additionalUpdates () {
    doLazyLoad(); 
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['aria-hidden', 'tabindex']);
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
      }

      // remove outlet animation
      Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_forEach_js__["a" /* forEach */])(slideItems, function(el) {
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(navPrev, navActiveClass);
        
        Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_removeAttrs_js__["a" /* removeAttrs */])(navCurrent, 'tabindex');
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, classOut);
      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !Object(__WEBPACK_IMPORTED_MODULE_28__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(__WEBPACK_IMPORTED_MODULE_35__helpers_jsTransform_js__["a" /* jsTransform */])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(slideItems[indexCached], eve);
        Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(__WEBPACK_IMPORTED_MODULE_28__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) { 
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        } 

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(), 
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    
    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(__WEBPACK_IMPORTED_MODULE_22__helpers_getAttr_js__["a" /* getAttr */])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(__WEBPACK_IMPORTED_MODULE_23__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hasAttr_js__["a" /* hasAttr */])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(__WEBPACK_IMPORTED_MODULE_22__helpers_getAttr_js__["a" /* getAttr */])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(__WEBPACK_IMPORTED_MODULE_16__helpers_getTouchDirection_js__["a" /* getTouchDirection */])(Object(__WEBPACK_IMPORTED_MODULE_15__helpers_toDegree_js__["a" /* toDegree */])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }
    
    panStart = true;
    if (rafIndex) {
      Object(__WEBPACK_IMPORTED_MODULE_3__helpers_caf_js__["a" /* caf */])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if (preventScroll) { e.preventDefault(); }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_3__helpers_caf_js__["a" /* caf */])(rafIndex);
    if (panStart) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_caf_js__["a" /* caf */])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(__WEBPACK_IMPORTED_MODULE_32__helpers_addEvents_js__["a" /* addEvents */])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(__WEBPACK_IMPORTED_MODULE_33__helpers_removeEvents_js__["a" /* removeEvents */])(target, {'click': preventClick});
          }}); 
        }

        if (carousel) {
          rafIndex = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_raf_js__["a" /* raf */])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; } 
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = __WEBPACK_IMPORTED_MODULE_27__helpers_showElement_js__["a" /* showElement */];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = __WEBPACK_IMPORTED_MODULE_26__helpers_hideElement_js__["a" /* hideElement */];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.2',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(__WEBPACK_IMPORTED_MODULE_4__helpers_extend_js__["a" /* extend */])(options, optionsElements));
    }
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkStorageValue;
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setLocalStorage;
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSlideId;
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = percentageLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaquerySupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);




function mediaquerySupport () {
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return position === "absolute";
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStyleSheet;
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(3);
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(3);
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCssRulesLength;
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDegree;
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTouchDirection;
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forEach;
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(4);

var addClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(4);

var removeClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAttr;
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttr;
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(6);


function setAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(6);


function removeAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayFromNodeList;
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hideElement;
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showElement;
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVisible;
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = whichProperty;
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = has3DTransforms;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEndProperty;
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(7);


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(7);


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsTransform;
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigator; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navigator = function () {
    function navigator() {
        _classCallCheck(this, navigator);

        this.map = null;
    }

    _createClass(navigator, [{
        key: 'getElements',
        value: function getElements() {
            this.map = document.getElementById('map');
        }
    }, {
        key: 'initializeGoogleMap',
        value: function initializeGoogleMap() {
            // The location of Uluru
            var uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({ position: uluru, map: map });
        }

        // getChildElements(element){
        //     let _self = this;
        //     element.forEach((item)=>{
        //         _self.paginations = Array.from(item.querySelectorAll('.js-gallery__pagination'));
        //         _self.slides = Array.from(item.querySelectorAll('.c-gallery__slide'));
        //     });
        // }

        // setActive(element, index){
        //     element.classList.add('is-active');
        //     this.slides[index].classList.add('is-active');
        // }

        // clearActive(elements){
        //     elements.forEach((item) => {
        //         item.classList.remove('is-active');
        //     });
        // }

        // bindElements(){
        //     let _self = this;
        //     this.paginations.forEach((item, key)=> {
        //         item.addEventListener('click', () =>{
        //             _self.clearActive(_self.paginations);
        //             _self.clearActive(_self.slides);
        //             _self.setActive(item, key);
        //         });
        //     });
        // }

    }, {
        key: 'init',
        value: function init() {
            this.getElements();
            if (this.gallery != null) {
                // this.bindElements();
                this.initializeGoogleMap();
            }
            // google.maps.event.addDomListener(window, 'load', this.initializeGoogleMap());
        }
    }]);

    return navigator;
}();

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchresults; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchresults = function () {
    function searchresults() {
        _classCallCheck(this, searchresults);

        this.propertyResults = null;
        this.articleResults = null;
        this.propertyButton = null;
        this.articleButton = null;
    }

    _createClass(searchresults, [{
        key: "getElements",
        value: function getElements() {
            this.propertyResults = document.getElementById("p-results");
            this.articleResults = document.getElementById("a-results");
            this.propertyButton = document.getElementById('p-link');
            this.articleButton = document.getElementById('a-link');
        }
    }]);

    return searchresults;
}();

/*document.addEventListener("DOMContentLoaded", function(){
    const propertyResults = document.getElementById("p-results");
    const articleResults = document.getElementById("a-results");
    const propertyButton = document.getElementById('p-link');
    const articleButton = document.getElementById('a-link');

        function setActiveState(targetElement) {
            if(targetElement == 'property') {
                propertyResults.classList.add('is-active');
                articleResults.classList.remove("is-active");
                propertyButton.classList.add('is-active-tab');
                articleButton.classList.remove('is-active-tab');
            } else {
                propertyResults.classList.remove('is-active');
                articleResults.classList.add("is-active");
                propertyButton.classList.remove('is-active-tab');
                articleButton.classList.add('is-active-tab');
            }
        }
 
            propertyButton.addEventListener('click', function() { 
                let target = propertyButton.dataset.target;     
                setActiveState(target);
            });

            articleButton.addEventListener('click', function() {
                setActiveState();
            });

});*/

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);