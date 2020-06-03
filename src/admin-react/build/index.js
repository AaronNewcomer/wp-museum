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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/dashboard/index.js":
/*!********************************!*\
  !*** ./src/dashboard/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Dashboard = function Dashboard(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "This is the dashboard app.");
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./src/dashboard/index.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/objects/index.js");





if (!!document.getElementById('wpm-react-admin-app-container-dashboard')) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('wpm-react-admin-app-container-dashboard'));
} else if (!!document.getElementById('wpm-react-admin-app-container-objects')) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_objects__WEBPACK_IMPORTED_MODULE_2__["ObjectPage"], null), document.getElementById('wpm-react-admin-app-container-objects'));
}

/***/ }),

/***/ "./src/objects/edit.js":
/*!*****************************!*\
  !*** ./src/objects/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _field_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-edit */ "./src/objects/field-edit.js");
/* harmony import */ var _kind_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kind-settings */ "./src/objects/kind-settings.js");








var Edit = function Edit(props) {
  var kindItem = props.kindItem,
      kinds = props.kinds,
      updateKind = props.updateKind,
      saveKindData = props.saveKindData,
      isSaving = props.isSaving,
      setIsSaving = props.setIsSaving;
  var kindId = kindItem.kind_id,
      kindLabel = kindItem.label,
      kindPostType = kindItem.type_name;
  var baseRestPath = '/wp-museum/v1';
  var dimensionsDefault = {
    n: 1,
    labels: ['', '', '']
  };

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      fieldData = _useState2[0],
      setFieldData = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      nextFieldId = _useState4[0],
      setNextFieldId = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!fieldData) {
      refreshFieldData();
    }
  });

  var refreshFieldData = function refreshFieldData() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: "".concat(baseRestPath, "/").concat(kindPostType, "/fields_all")
    }).then(setFieldData);
  };

  var updateKindData = function updateKindData(field, event) {
    updateKind(kindId, field, event);
  };

  var doSave = function doSave() {
    saveFieldData();
    saveKindData();
  };

  var saveFieldData = function saveFieldData() {
    var refreshNeeded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var updatedFieldData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    setIsSaving(true);
    var saveData = updatedFieldData ? updatedFieldData : fieldData;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: "".concat(baseRestPath, "/").concat(kindPostType, "/fields_all"),
      method: 'POST',
      data: saveData
    }).then(function () {
      if (refreshNeeded) {
        refreshFieldData();
      }

      setIsSaving(false);
    });
  };

  var updateField = function updateField(fieldId, fieldItem, changeEvent) {
    var newFieldData = Object.assign({}, fieldData);

    if (fieldItem.startsWith('dimension')) {
      var _fieldItem$split = fieldItem.split('.'),
          _fieldItem$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_fieldItem$split, 3),
          dimension = _fieldItem$split2[0],
          key = _fieldItem$split2[1],
          index = _fieldItem$split2[2];

      var dimensionsField = fieldData[fieldId]['dimensions'];
      var newDimensionData = dimensionsField ? dimensionsField : dimensionsDefault;

      if (key == 'n') {
        newDimensionData.n = changeEvent.target.value;
      } else {
        newDimensionData[key][index] = changeEvent.target.value;
      }

      newFieldData[fieldId]['dimensions'] = newDimensionData;
      setFieldData(newFieldData);
      return;
    }

    if (changeEvent.target.type === 'checkbox') {
      if (fieldData[fieldId][fieldItem] != changeEvent.target.checked) {
        newFieldData[fieldId][fieldItem] = changeEvent.target.checked;
        setFieldData(newFieldData);
      }

      return;
    }

    if (fieldData[fieldId][fieldItem] != changeEvent.target.value) {
      newFieldData[fieldId][fieldItem] = changeEvent.target.value;
      setFieldData(newFieldData);
    }
  };

  var deleteField = function deleteField(fieldId) {
    var newFieldData = Object.assign({}, fieldData);
    newFieldData[fieldId]['delete'] = true;
    setFieldData(newFieldData);
    saveFieldData(true, newFieldData);
  };

  var updateFactors = function updateFactors(fieldId, newFactors) {
    if (JSON.stringify(fieldData[fieldId]['factors']) != JSON.stringify(newFactors)) {
      var newFieldData = Object.assign({}, fieldData);
      newFieldData[fieldId]['factors'] = newFactors;
      setFieldData(newFieldData);
    }
  };

  var moveItem = function moveItem(fieldId, move) {
    var oldOrder = fieldData[fieldId]['display_order'];
    var targetOrder = oldOrder + move;
    if (targetOrder < 0) return;
    var fieldValues = Object.values(fieldData);
    if (targetOrder >= fieldValues.length) return;
    var targetIndex = fieldValues.findIndex(function (fieldItem) {
      return fieldItem['display_order'] == targetOrder;
    });
    var targetKey = fieldValues[targetIndex]['field_id'];
    var newFieldData = Object.assign({}, fieldData);
    newFieldData[fieldId]['display_order'] = targetOrder;
    newFieldData[targetKey]['display_order'] = oldOrder;
    setFieldData(newFieldData);
  };

  var defaultFieldData = {
    field_id: 0,
    slug: '',
    kind_id: kindId,
    name: '',
    type: 'plain',
    display_order: 0,
    public: true,
    required: false,
    quick_browse: false,
    help_text: '',
    detailed_instructions: '',
    public_description: '',
    field_schema: '',
    max_length: 0,
    dimensions: dimensionsDefault,
    factors: [],
    units: ''
  };

  var addField = function addField() {
    var updatedFieldData = fieldData ? Object.assign({}, fieldData) : {};
    updatedFieldData[nextFieldId] = defaultFieldData;
    updatedFieldData[nextFieldId]['field_id'] = nextFieldId;

    if (fieldData && Object.values(fieldData).length > 0) {
      var sortedFields = Object.values(fieldData).sort(function (a, b) {
        return a['display_order'] < b['display_order'] ? 1 : -1;
      });
      updatedFieldData[nextFieldId]['display_order'] = sortedFields[0]['display_order'] + 1;
    }

    setNextFieldId(nextFieldId - 1);
    setFieldData(updatedFieldData);
    saveFieldData(true, updatedFieldData);
  };

  var fieldForms;

  if (fieldData) {
    fieldForms = Object.values(fieldData).filter(function (dataItem) {
      return typeof dataItem.delete == 'undefined' || !dataItem.delete;
    }).sort(function (a, b) {
      return a['display_order'] > b['display_order'] ? 1 : -1;
    }).map(function (dataItem) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_field_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: dataItem['field_id'],
        fieldData: dataItem,
        updateField: updateField,
        updateFactors: updateFactors,
        deleteField: deleteField,
        moveItem: moveItem,
        saveFieldData: saveFieldData,
        dimensionsDefault: dimensionsDefault
      });
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "edit-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", null, kindLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "do-save-button",
    onClick: doSave,
    isPrimary: true,
    isLarge: true
  }, "Save"), isSaving && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "is-saving"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), "Saving...")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "kind-edit-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "kind-edit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "kind-settings",
    onBlur: saveKindData
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_kind_settings__WEBPACK_IMPORTED_MODULE_5__["default"], {
    kindData: kindItem,
    fieldData: fieldData,
    kinds: kinds,
    updateKindData: updateKindData
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, "Fields"), !!fieldForms && fieldForms, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "new-field-button",
    onClick: addField,
    isLarge: true,
    isSecondary: true
  }, "Add New Field")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-instructions"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/objects/factor-edit.js":
/*!************************************!*\
  !*** ./src/objects/factor-edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var closeIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/**
 * Delete Icon from Darius Dan
 * @link https://www.flaticon.com/authors/darius-dan
 */

var deleteIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
  d: "M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
  d: "M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
  d: "M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0"
}));

var FactorEditModal = function FactorEditModal(props) {
  var factors = props.factors,
      updateFactors = props.updateFactors,
      close = props.close;
  var textInput = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return textInput.current.focus();
  }, []);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      currentInputText = _useState2[0],
      updateCurrentInputText = _useState2[1];

  var updateInputText = function updateInputText(event) {
    updateCurrentInputText(event.target.value);
  };

  var addItem = function addItem() {
    if (currentInputText && !factors.includes(currentInputText)) {
      var newFactors = factors.concat([currentInputText]);
      updateFactors(newFactors);
      updateCurrentInputText('');
    }
  };

  var removeItem = function removeItem(factorItem) {
    var itemIndex = factors.indexOf(factorItem);

    if (itemIndex != -1) {
      var newFactors = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(factors);

      newFactors.splice(itemIndex, 1);
      updateFactors(newFactors);
    }
  };

  var clearItems = function clearItems() {
    if (factors.length > 0) {
      updateFactors([]);
    }
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key == 'Enter') {
      event.stopPropagation();
      addItem();
    }
  };

  var handleListDelete = function handleListDelete(event, factorItem) {
    if (event.key == 'Delete' || event.key == 'Backspace') {
      event.stopPropagation();
      removeItem(factorItem);
    }
  };

  var factorListItems = factors.map(function (factorItem, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: index,
      tabIndex: "0",
      className: "factor-list-item",
      onKeyDown: function onKeyDown(event) {
        return handleListDelete(event, factorItem);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "remove-item-div",
      onClick: function onClick() {
        return removeItem(factorItem);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: deleteIcon,
      size: "0.8em"
    })), factorItem);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    className: "factor-edit-modal",
    title: "Edit Factors",
    onRequestClose: close
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "factor-edit-input"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "text",
    onKeyPress: handleKeyPress,
    placeholder: "Type to add factors...",
    value: currentInputText,
    onChange: updateInputText,
    ref: textInput
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "factor-button add",
    tabIndex: "-1",
    title: "Add",
    onClick: addItem,
    isLarge: true,
    isPrimary: true
  }, "Add")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "factor-list"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, factorListItems)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "bottom-buttons"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "factor-button clear",
    title: "Clear factors",
    onClick: clearItems,
    isLarge: true,
    isSecondary: true
  }, "Clear"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "factor-button close",
    title: "Save and close",
    onClick: close,
    isLarge: true,
    isSecondary: true
  }, "Close")));
};

/* harmony default export */ __webpack_exports__["default"] = (FactorEditModal);

/***/ }),

/***/ "./src/objects/field-edit.js":
/*!***********************************!*\
  !*** ./src/objects/field-edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factor_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factor-edit */ "./src/objects/factor-edit.js");





var trash = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
}));
var chevronDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M17 9.4L12 14 7 9.4l-1 1.2 6 5.4 6-5.4z"
}));
var chevronUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12 8l-6 5.4 1 1.2 5-4.6 5 4.6 1-1.2z"
}));

var MoveToolbar = function MoveToolbar(props) {
  var moveUp = props.moveUp,
      moveDown = props.moveDown;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    icon: chevronUp,
    onClick: moveUp
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    icon: chevronDown,
    onClick: moveDown
  }));
};

var FieldEdit = function FieldEdit(props) {
  var fieldData = props.fieldData,
      updateField = props.updateField,
      _updateFactors = props.updateFactors,
      deleteField = props.deleteField,
      moveItem = props.moveItem,
      saveFieldData = props.saveFieldData,
      dimensionsDefault = props.dimensionsDefault;
  var fieldId = fieldData.field_id,
      name = fieldData.name,
      type = fieldData.type,
      displayOrder = fieldData.display_order,
      isPublic = fieldData.public,
      required = fieldData.required,
      quickBrowse = fieldData.quick_browse,
      helpText = fieldData.help_text,
      detailedInstructions = fieldData.detailed_instructions,
      publicDescription = fieldData.public_description,
      fieldSchema = fieldData.field_schema,
      maxLength = fieldData.max_length,
      dimensions = fieldData.dimensions,
      factors = fieldData.factors,
      units = fieldData.units;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      factorModalOpen = _useState2[0],
      setFactorModalOpen = _useState2[1];

  var dimensionsData = dimensions ? dimensions : dimensionsDefault;

  var deleteThisField = function deleteThisField() {
    var confirmDelete = confirm('Really delete field? This cannot be undone. Deleting field will not remove data from database, but it will be inaccessible unless a new field with the same name is created.');

    if (confirmDelete) {
      deleteField(fieldId);
    }
  };

  var moveUp = function moveUp() {
    moveItem(fieldId, -1);
  };

  var moveDown = function moveDown() {
    moveItem(fieldId, 1);
  };

  var selectOptions = [{
    value: 'plain',
    label: 'Plain Text'
  }, {
    value: 'rich',
    label: 'Rich Text'
  }, {
    value: 'date',
    label: 'Date'
  }, {
    value: 'measure',
    label: 'Measure'
  }, {
    value: 'factor',
    label: 'Factor'
  }, {
    value: 'multiple',
    label: 'Multiple Factor'
  }, {
    value: 'flag',
    label: 'Flag'
  }];
  var selectOptionsElements = selectOptions.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
      key: index,
      value: option.value
    }, option.label);
  });
  var dimensionElements = [];

  if (dimensionsData.n > 1) {
    var _loop = function _loop(i) {
      dimensionElements[i] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "dimension-field",
        key: i
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Dimension ", i + 1, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
        type: "text",
        value: dimensionsData.labels[i],
        onChange: function onChange(event) {
          return updateField(fieldId, "dimension.labels.".concat(i), event);
        }
      })));
    };

    for (var i = 0; i < dimensionsData.n; i++) {
      _loop(i);
    }
  }

  var newField = !fieldData;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-form",
    onBlur: saveFieldData
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MoveToolbar, {
    moveUp: moveUp,
    moveDown: moveDown
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "delete-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "delete-field-button",
    icon: trash,
    onClick: deleteThisField
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Label", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    value: name,
    onChange: function onChange(event) {
      return updateField(fieldId, 'name', event);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-type"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-type-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Type", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    value: type,
    onChange: function onChange(event) {
      return updateField(fieldId, 'type', event);
    }
  }, selectOptionsElements))), !newField && (type == 'plain' || type == 'rich') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Max Length", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    value: maxLength,
    onChange: function onChange(event) {
      return updateField(fieldId, 'max_length', event);
    }
  }))), !newField && (type == 'factor' || type == 'multiple') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section factor-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "field-edit-button button",
    onClick: function onClick() {
      return setFactorModalOpen(true);
    },
    title: "Open factors modal"
  }, "Edit Factors"), factorModalOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_factor_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    factors: factors,
    updateFactors: function updateFactors(newFactors) {
      return _updateFactors(fieldId, newFactors);
    },
    close: function close() {
      return setFactorModalOpen(false);
    }
  })), !newField && type == 'measure' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Dimensions", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    value: dimensionsData.n,
    onChange: function onChange(event) {
      return updateField(fieldId, 'dimension.n', event);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "1"
  }, "1"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "2"
  }, "2"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "3"
  }, "3")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section units"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Units", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    value: units,
    onChange: function onChange(event) {
      return updateField(fieldId, 'units', event);
    }
  }))))), !newField && type == 'measure' && dimensionsData.n > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-type-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "dimension-labels"
  }, dimensionElements))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-middle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Field Schema", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    value: fieldSchema,
    onChange: function onChange(event) {
      return updateField(fieldId, 'field_schema', event);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Help Text", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    value: helpText,
    onChange: function onChange(event) {
      return updateField(fieldId, 'help_text', event);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Detailed Instructions", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("textarea", {
    value: detailedInstructions,
    onChange: function onChange(event) {
      return updateField(fieldId, 'detailed_instructions', event);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Public Description", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("textarea", {
    value: publicDescription,
    onChange: function onChange(event) {
      return updateField(fieldId, 'public_description', event);
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "field-checkboxes"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Public", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "checkbox",
    checked: isPublic,
    onChange: function onChange(event) {
      return updateField(fieldId, 'public', event);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Required", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "checkbox",
    checked: required,
    onChange: function onChange(event) {
      return updateField(fieldId, 'required', event);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Quick Browse", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "checkbox",
    checked: quickBrowse,
    onChange: function onChange(event) {
      return updateField(fieldId, 'quick_browse', event);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FieldEdit);

/***/ }),

/***/ "./src/objects/index.js":
/*!******************************!*\
  !*** ./src/objects/index.js ***!
  \******************************/
/*! exports provided: ObjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPage", function() { return ObjectAdminControl; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/objects/edit.js");







var ObjectAdminControl = function ObjectAdminControl() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('main'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selectedPage = _useState2[0],
      setSelectedPage = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isSaving = _useState4[0],
      setIsSaving = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      kindItem = _useState6[0],
      setKindItem = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      newKindCount = _useState8[0],
      updateNewKindCount = _useState8[1];

  var baseRestPath = '/wp-museum/v1';

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      objectKinds = _useState10[0],
      updateObjectKinds = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      kindIds = _useState12[0],
      setKindIds = _useState12[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!objectKinds) {
      refreshKindData();
    }
  });
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return maybeSaveKindData();
  }, [objectKinds]);

  var refreshKindData = function refreshKindData() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: "".concat(baseRestPath, "/mobject_kinds")
    }).then(function (result) {
      if (!objectKinds || JSON.stringify(result) != JSON.stringify(objectKinds)) {
        setObjectKinds(result);
      }
    });
  };

  var setObjectKinds = function setObjectKinds(newKindArray) {
    updateObjectKinds(newKindArray);
    if (!kindItem || !newKindArray) return;
    var kindItemIndex = newKindArray.findIndex(function (item) {
      return item.kind_id == kindItem.kind_id;
    });

    if (kindItemIndex === -1) {
      setKindItem(null);
    } else {
      setKindItem(newKindArray[kindItemIndex]);
    }
  };

  var updateKind = function updateKind(kindId, field, event) {
    var kindIndex = objectKinds.findIndex(function (kindItem) {
      return kindItem.kind_id == kindId;
    });
    if (kindIndex === -1) return;
    var newKindArray = objectKinds.concat([]);

    if (event.target.type === 'checkbox') {
      if (objectKinds[kindIndex][field] != event.target.checked) {
        newKindArray[kindIndex][field] = event.target.checked;
        setObjectKinds(newKindArray);
      }

      return;
    }

    if (objectKinds[kindIndex][field] != event.target.value) {
      newKindArray[kindIndex][field] = event.target.value;

      if (newKindArray[kindIndex][field] == '') {
        newKindArray[kindIndex][field] = null;
      }

      setObjectKinds(newKindArray);
    }
  };

  var defaultKind = {
    kind_id: 0 - newKindCount,
    cat_field_id: null,
    name: null,
    type_name: null,
    label: 'New Object Type',
    label_plural: null,
    description: null,
    categorized: false,
    hierarchical: false,
    must_featured_image: false,
    must_gallery: false,
    strict_checking: false,
    exclude_from_search: false,
    parent_kind_id: null
  };

  var newKind = function newKind() {
    var newKind = Object.assign({}, defaultKind);
    var newObjectKinds = objectKinds.concat([newKind]);
    setObjectKinds(newObjectKinds);
    saveKindData();
  };

  var saveKindData = function saveKindData() {
    setIsSaving(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: "".concat(baseRestPath, "/mobject_kinds"),
      method: 'POST',
      data: objectKinds
    }).then(function () {
      refreshKindData();
      setIsSaving(false);
    });
  };

  var maybeSaveKindData = function maybeSaveKindData() {
    var currentIds = objectKinds ? JSON.stringify(objectKinds.map(function (kindItem) {
      return kindItem.kind_id;
    })) : null;

    if (!kindIds || kindIds != currentIds) {
      setKindIds(currentIds);
      saveKindData();
    }
  };

  var deleteKind = function deleteKind(kindItem) {
    var confirmDelete = confirm('Really delete kind? Objects associated with this kind will remain in database but will be inaccessible.');

    if (confirmDelete) {
      kindItem.delete = true;
      saveKindData();
    }
  };

  var editKind = function editKind(newKindItem) {
    setKindItem(newKindItem);
    setSelectedPage('edit');
  };

  switch (selectedPage) {
    case 'main':
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Main, {
        objectKinds: objectKinds,
        editKind: editKind,
        newKind: newKind,
        deleteKind: deleteKind
      });

    case 'edit':
      if (kindItem) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
          kinds: objectKinds,
          kindItem: kindItem,
          updateKind: updateKind,
          saveKindData: saveKindData,
          isSaving: isSaving,
          setIsSaving: setIsSaving,
          setSelectedPage: setSelectedPage
        });
      } else {
        return null;
      }

  }
};

var Main = function Main(props) {
  var objectKinds = props.objectKinds,
      editKind = props.editKind,
      newKind = props.newKind,
      deleteKind = props.deleteKind;

  if (objectKinds) {
    var kindRows = objectKinds.filter(function (kindItem) {
      return typeof kindItem.delete === 'undefined' || !kindItem.delete;
    }).map(function (kindItem, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        key: index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, kindItem.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "object-action-buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          return editKind(kindItem);
        },
        isLarge: true,
        isSecondary: true
      }, "Edit"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        isLarge: true,
        isSecondary: true,
        onClick: function onClick() {
          return deleteKind(kindItem);
        }
      }, "Delete"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        isLarge: true,
        isSecondary: true
      }, "Export CSV"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        isLarge: true,
        isSecondary: true
      }, "Import CSV")));
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "museum-admin-main"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", null, "Museum Administration"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, kindRows), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: newKind,
      isLarge: true,
      isSecondary: true
    }, "Add New")));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null);
  }
};



/***/ }),

/***/ "./src/objects/kind-settings.js":
/*!**************************************!*\
  !*** ./src/objects/kind-settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var KindSettings = function KindSettings(props) {
  var kindData = props.kindData,
      fieldData = props.fieldData,
      kinds = props.kinds,
      updateKindData = props.updateKindData;
  var kindId = kindData.kind_id,
      catFieldId = kindData.cat_field_Id,
      description = kindData.description,
      categorized = kindData.categorized,
      excludeFromSearch = kindData.exclude_from_search,
      label = kindData.label,
      labelPlural = kindData.label_plural,
      mustFeaturedImage = kindData.must_featured_image,
      mustGallery = kindData.must_gallery,
      name = kindData.name,
      parentKindId = kindData.parent_kind_id,
      strictChecking = kindData.strict_checking;
  var parentKindOptions = kinds.filter(function (kindItem) {
    return kindItem.kind_id != kindId;
  }).map(function (kindItem) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      key: kindItem.kind_id,
      value: kindItem.kind_id
    }, kindItem.label);
  });
  var idFieldOptions = fieldData ? Object.values(fieldData).map(function (fieldItem) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      key: fieldItem.field_id,
      value: fieldItem.field_id
    }, fieldItem.name);
  }) : [];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-kind-form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Object Name", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    value: label || '',
    onChange: function onChange(event) {
      return updateKindData('label', event);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Object Name (Plural)", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    value: labelPlural || '',
    onChange: function onChange(event) {
      return updateKindData('label_plural', event);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Description", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
    value: description || '',
    onChange: function onChange(event) {
      return updateKindData('description', event);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Parent Object", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
    value: parentKindId || '',
    onChange: function onChange(event) {
      return updateKindData('parent_kind_id', event);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null), parentKindOptions)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "ID Field", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
    value: catFieldId || '',
    onChange: function onChange(event) {
      return updateKindData('cat_field_id', event);
    }
  }, idFieldOptions)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "kind-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    checked: !!strictChecking,
    onChange: function onChange(event) {
      return updateKindData('strict_checking', event);
    }
  }), "Strictly enforce requirements"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    checked: !!categorized,
    onChange: function onChange(event) {
      return updateKindData('categorized', event);
    }
  }), "Must be categorized"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    checked: !!mustFeaturedImage,
    onChange: function onChange(event) {
      return updateKindData('must_featured_image', event);
    }
  }), "Must have featured image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    checked: !!mustGallery,
    onChange: function onChange(event) {
      return updateKindData('must_gallery', event);
    }
  }), "Must have image gallery"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "checkbox",
    checked: !!excludeFromSearch,
    onChange: function onChange(event) {
      return updateKindData('exclude_from_search', event);
    }
  }), "Exclude from search")));
};

/* harmony default export */ __webpack_exports__["default"] = (KindSettings);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map