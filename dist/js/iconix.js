(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IconIx"] = factory();
	else
		root["IconIx"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

;// CONCATENATED MODULE: ./src/icon-ix/iconix.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var IconSet = /*#__PURE__*/function () {
  function IconSet() {
    _classCallCheck(this, IconSet);
  }

  _createClass(IconSet, null, [{
    key: "search",
    value: function search(value, icons_set) {
      return icons_set.filter(function (item) {
        return item.search.find(function (elem) {
          return elem.includes(value);
        }) ? item : null;
      });
    }
  }, {
    key: "paginate",
    value: function paginate(page, page_size, icons_set) {
      var result = icons_set.slice((page - 1) * page_size, page * page_size);
      return {
        data: result,
        page_count: Math.ceil(icons_set.length / page_size)
      };
    }
  }, {
    key: "get_icon_set",
    value: function get_icon_set() {
      if (this.ICONS.length > 0) {
        return this.ICONS;
      } else if (_typeof(window.ICON_SET) === 'object') {
        return window.ICON_SET;
      } else {
        throw new Error('ICON_SET is not defined or not connected.');
      }
    }
  }]);

  return IconSet;
}();

_defineProperty(IconSet, "ICONS", []);

var _icons = /*#__PURE__*/new WeakMap();

var _option = /*#__PURE__*/new WeakMap();

var _paginator = /*#__PURE__*/new WeakMap();

var _init = /*#__PURE__*/new WeakMap();

var _sync = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _destroy = /*#__PURE__*/new WeakMap();

var _onIcon = /*#__PURE__*/new WeakMap();

var _onClose = /*#__PURE__*/new WeakMap();

var _onSearch = /*#__PURE__*/new WeakMap();

var _onPaginate = /*#__PURE__*/new WeakMap();

var _pushIcons = /*#__PURE__*/new WeakMap();

var IconIx = /*#__PURE__*/function () {
  function IconIx(option) {
    var _this = this;

    _classCallCheck(this, IconIx);

    _icons.set(this, {
      writable: true,
      value: []
    });

    _option.set(this, {
      writable: true,
      value: {}
    });

    _paginator.set(this, {
      writable: true,
      value: {}
    });

    _init.set(this, {
      writable: true,
      value: function value() {
        _classPrivateFieldSet(_this, _icons, IconSet.get_icon_set());

        _this.modalRootElement = _classStaticPrivateMethodGet(IconIx, IconIx, _create).call(IconIx, _this);
        _this.modalCloseElemenet = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "close", _this.modalRootElement);
        _this.modalSearchElemenet = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "search", _this.modalRootElement);
        _this.modalPaginateNextElement = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "next", _this.modalRootElement);
        _this.modalPaginatePrevElement = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "prev", _this.modalRootElement);
        _this.modalPaginateInfoElement = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "info", _this.modalRootElement);
        _this.modalIconContainerElement = _classStaticPrivateMethodGet(IconIx, IconIx, _get_role).call(IconIx, "container", _this.modalRootElement);

        _classPrivateFieldGet(_this, _sync).call(_this);

        _classPrivateFieldGet(_this, _start).call(_this);
      }
    });

    _sync.set(this, {
      writable: true,
      value: function value() {
        var root = document.documentElement;
        root.style.setProperty("--pc-icon-size", _classPrivateFieldGet(_this, _option).iconSize);
        root.style.setProperty("--pc-icon-margin", _classPrivateFieldGet(_this, _option).iconMargin);
        root.style.setProperty("--pc-icon-padding", _classPrivateFieldGet(_this, _option).iconPadding);
        root.style.setProperty("--pc-icon-font-size", _classPrivateFieldGet(_this, _option).iconFontSize);
      }
    });

    _start.set(this, {
      writable: true,
      value: function value() {
        _classPrivateFieldGet(_this, _pushIcons).call(_this);

        _classStaticPrivateMethodGet(IconIx, IconIx, _add_handlers).call(IconIx, _this);

        document.body.appendChild(_this.modalRootElement);
        setTimeout(function () {
          return _this.modalRootElement.classList.add("open");
        });
      }
    });

    _destroy.set(this, {
      writable: true,
      value: function value() {
        _classPrivateFieldSet(_this, _icons, null);

        _classStaticPrivateMethodGet(IconIx, IconIx, _del_handlers).call(IconIx, _this);

        _this.modalRootElement.classList.remove("open");

        setTimeout(function () {
          return _this.modalRootElement.parentNode.removeChild(_this.modalRootElement);
        }, 100);
      }
    });

    _onIcon.set(this, {
      writable: true,
      value: function value(event) {
        var role = event.target.getAttribute("picker-role");

        if (role === "icon") {
          var data = event.target.getAttribute("data-icon");
          _classStaticPrivateMethodGet(IconIx, IconIx, _get_element).call(IconIx, _classPrivateFieldGet(_this, _option).output).value = data;
          _classStaticPrivateMethodGet(IconIx, IconIx, _get_element).call(IconIx, _classPrivateFieldGet(_this, _option).preview).innerHTML = "<i class=\"".concat(data, "\"></i>");

          if (_classPrivateFieldGet(_this, _option).hideOnSelect) {
            _classPrivateFieldGet(_this, _destroy).call(_this);
          }
        }
      }
    });

    _onClose.set(this, {
      writable: true,
      value: function value(event) {
        var role = event.target.getAttribute("picker-role");

        if (role === "close") {
          _classPrivateFieldGet(_this, _destroy).call(_this);
        }
      }
    });

    _onSearch.set(this, {
      writable: true,
      value: function value(event) {
        if (event.target.value === '') {
          _classPrivateFieldSet(_this, _icons, IconSet.get_icon_set());
        } else {
          _classPrivateFieldSet(_this, _icons, IconSet.search(event.target.value, IconSet.get_icon_set()));
        }

        _classPrivateFieldGet(_this, _pushIcons).call(_this);
      }
    });

    _onPaginate.set(this, {
      writable: true,
      value: function value(event) {
        var role = event.target.getAttribute("picker-role");

        switch (role) {
          case "next":
            if (_classPrivateFieldGet(_this, _paginator).page + 1 > _classPrivateFieldGet(_this, _paginator).page_count) return;
            _classPrivateFieldGet(_this, _paginator).page++;
            break;

          case "prev":
            if (_classPrivateFieldGet(_this, _paginator).page - 1 < 1) return;
            _classPrivateFieldGet(_this, _paginator).page--;
            break;
        }

        _classPrivateFieldGet(_this, _pushIcons).call(_this);
      }
    });

    _pushIcons.set(this, {
      writable: true,
      value: function value() {
        if (_classPrivateFieldGet(_this, _option).paginate) {
          var result = IconSet.paginate(_classPrivateFieldGet(_this, _paginator).page, _classPrivateFieldGet(_this, _paginator).page_size, _classPrivateFieldGet(_this, _icons));
          _classPrivateFieldGet(_this, _paginator).page_count = result.page_count;
          _this.modalPaginateInfoElement.innerHTML = _classPrivateFieldGet(_this, _paginator).page + "/" + result.page_count;
          _this.modalIconContainerElement.innerHTML = result.data.map(function (e) {
            return "<a picker-role='icon' data-icon=\"".concat(e.value, "\"><i class='").concat(e.value, "'></i></a>");
          }).join("");
        } else {
          _this.modalIconContainerElement.innerHTML = _classPrivateFieldGet(_this, _icons).map(function (e) {
            return "<a picker-role='icon' data-icon=\"".concat(e.value, "\"><i class='").concat(e.value, "'></i></a>");
          }).join("");
        }
      }
    });

    _classPrivateFieldSet(this, _option, _objectSpread(_objectSpread({}, IconIx.OPTIONS), option));

    _classPrivateFieldSet(this, _paginator, {
      page: 1,
      paginate: _classPrivateFieldGet(this, _option).paginate,
      page_size: _classPrivateFieldGet(this, _option).page_size
    });

    _classStaticPrivateMethodGet(IconIx, IconIx, _get_element).call(IconIx, _classPrivateFieldGet(this, _option).picker).addEventListener("click", _classPrivateFieldGet(this, _init));
  }

  _createClass(IconIx, null, [{
    key: "ICONS",
    get: function get() {
      return IconSet.ICONS;
    },
    set: function set(value) {
      IconSet.ICONS = value;
    }
  }]);

  return IconIx;
}();

function _create(instance) {
  var div = document.createElement("div");
  div.innerHTML = "<div class=\"picker__wrapper\" picker-role=\"close\">\n\t\t\t\t\t\t\t<div class=\"picker\" picker-role=\"picker\">\n\t\t\t\t\t\t\t\t<div class=\"picker__header\" ".concat(_classPrivateFieldGet(instance, _option).header ? '' : "style='display:none'", ">\n\t\t\t\t\t\t\t\t\t<h4 picker-role=\"tittle\">").concat(_classPrivateFieldGet(instance, _option).title, "</h4>\n\t\t\t\t\t\t\t\t\t<span picker-role=\"close\">\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"picker__content\">\n\t\t\t\t\t\t\t\t\t<div class=\"picker__content-search\" ").concat(_classPrivateFieldGet(instance, _option).searchable ? '' : "style='display:none'", ">\n\t\t\t\t\t\t\t\t\t<input placeholder=\"").concat(_classPrivateFieldGet(instance, _option).searchPlaceholder, "\" type=\"text\" picker-role=\"search\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"picker__content-icons\">\n\t\t\t\t\t\t\t\t\t<main picker-role=\"container\">\n\t\t\t\t\t\t\t\t\t</main>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"picker__content-paginator\" ").concat(_classPrivateFieldGet(instance, _option).paginate ? '' : "style='display:none'", ">\n\t\t\t\t\t\t\t\t\t<input type=\"button\" picker-role=\"prev\" value=\"").concat(_classPrivateFieldGet(instance, _option).paginatorPrevButton, "\"/>\n\t\t\t\t\t\t\t\t\t<span                picker-role=\"info\"></span>\n\t\t\t\t\t\t\t\t\t<input type=\"button\" picker-role=\"next\" value=\"").concat(_classPrivateFieldGet(instance, _option).paginatorNextButton, "\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>");
  return div.firstElementChild;
}

function _add_handlers(instance) {
  instance.modalRootElement.addEventListener("click", _classPrivateFieldGet(instance, _onClose));
  instance.modalCloseElemenet.addEventListener("click", _classPrivateFieldGet(instance, _onClose));
  instance.modalSearchElemenet.addEventListener("input", _classPrivateFieldGet(instance, _onSearch));
  instance.modalIconContainerElement.addEventListener("click", _classPrivateFieldGet(instance, _onIcon));
  instance.modalPaginateNextElement.addEventListener("click", _classPrivateFieldGet(instance, _onPaginate));
  instance.modalPaginatePrevElement.addEventListener("click", _classPrivateFieldGet(instance, _onPaginate));
}

function _del_handlers(instance) {
  instance.modalRootElement.removeEventListener("click", _classPrivateFieldGet(instance, _onClose));
  instance.modalCloseElemenet.removeEventListener("click", _classPrivateFieldGet(instance, _onClose));
  instance.modalSearchElemenet.removeEventListener("input", _classPrivateFieldGet(instance, _onSearch));
  instance.modalIconContainerElement.removeEventListener("click", _classPrivateFieldGet(instance, _onIcon));
  instance.modalPaginateNextElement.removeEventListener("click", _classPrivateFieldGet(instance, _onPaginate));
  instance.modalPaginatePrevElement.removeEventListener("click", _classPrivateFieldGet(instance, _onPaginate));
}

function _get_role(role, root) {
  return root.querySelector("[picker-role=\"".concat(role, "\"]"));
}

function _get_element(selector) {
  var _document;

  return selector instanceof HTMLElement ? selector : (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(selector);
}

_defineProperty(IconIx, "OPTIONS", {
  title: "IconIx",
  picker: null,
  output: null,
  preview: null,
  page_size: 50,
  searchPlaceholder: "Search icon",
  paginatorNextButton: "next",
  paginatorPrevButton: "prev",
  header: true,
  paginate: true,
  searchable: true,
  hideOnSelect: true,
  iconSize: '45px',
  iconMargin: '5px',
  iconPadding: '5px',
  iconFontSize: '30px'
});

/* harmony default export */ var iconix = (IconIx);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (iconix);
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});