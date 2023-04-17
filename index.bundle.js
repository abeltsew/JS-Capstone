/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "involvementApi": () => (/* binding */ involvementApi)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementApi = 'xExGlQNMpVX8O221efEd';


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nnav {\n  background-color: #333;\n  overflow: hidden;\n}\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\nnav ul a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\nnav ul a:hover {\n  background-color: #111;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 100px;\n  padding: 50px 100px;\n}\n.main .list {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n.main .list img {\n  width: 100%;\n  height: auto;\n}\n.main .list .description {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main .list button {\n  background-color: inherit;\n  border: 1px solid white;\n}\n.main .list button:hover {\n  cursor: pointer;\n  color: red;\n}\n\n.footer {\n  height: 2rem;\n  border-top: solid 1px rgb(128, 128, 128);\n  padding: 1rem;\n  font-size: 0.8rem;\n  color: rgb(128, 128, 128);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,UAAA;EACA,SAAA;AAFF;;AAKA;EACE,sBAAA;EACA,gBAAA;AAFF;AAIE;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,UAAA;AAFJ;AAII;EACE,cAAA;EACA,YAtBQ;EAuBR,kBAAA;EACA,kBAAA;EACA,qBAAA;AAFN;AAIM;EACE,sBAAA;AAFR;;AAQA;EACE,aAAA;EACA,kCAAA;EACA,UAAA;EACA,mBAAA;AALF;AAOE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AALJ;AAOI;EACE,WAAA;EACA,YAAA;AALN;AAQI;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AANN;AASI;EACE,yBAAA;EACA,uBAAA;AAPN;AASM;EACE,eAAA;EACA,UA7DM;AAsDd;;AAaA;EACE,YAAA;EACA,wCAAA;EACA,aAAA;EACA,iBAAA;EACA,yBAAA;AAVF","sourcesContent":["$first-color: white;\n$fifth-color: red;\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nnav {\n  background-color: #333;\n  overflow: hidden;\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n\n    a {\n      display: block;\n      color: $first-color;\n      text-align: center;\n      padding: 14px 16px;\n      text-decoration: none;\n\n      &:hover {\n        background-color: #111;\n      }\n    }\n  }\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 100px;\n  padding: 50px 100px;\n\n  .list {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n\n    img {\n      width: 100%;\n      height: auto;\n    }\n\n    .description {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    button {\n      background-color: inherit;\n      border: 1px solid $first-color;\n\n      &:hover {\n        cursor: pointer;\n        color: $fifth-color;\n      }\n    }\n  }\n}\n\n.footer {\n  height: 2rem;\n  border-top: solid 1px rgb(128, 128, 128);\n  padding: 1rem;\n  font-size: 0.8rem;\n  color: rgb(128, 128, 128);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-container {\n  position: absolute;\n  top: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.close {\n  position: absolute;\n  top: 2rem;\n  right: 5%;\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.open {\n  display: none;\n}\n\n.comment-container img {\n  height: 21rem;\n  width: 65%;\n}\n\n.ingredient {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: scroll;\n  backdrop-filter: blur(10px);\n  height: 58rem;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX","sourcesContent":[".comment-container {\n  position: absolute;\n  top: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.close {\n  position: absolute;\n  top: 2rem;\n  right: 5%;\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.open {\n  display: none;\n}\n\n.comment-container img {\n  height: 21rem;\n  width: 65%;\n}\n\n.ingredient {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: scroll;\n  backdrop-filter: blur(10px);\n  height: 58rem;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/getCommentItems.js":
/*!****************************************!*\
  !*** ./src/modules/getCommentItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/keys.js */ "./config/keys.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (item) => {
  const response = await fetch(
    // eslint-disable-next-line
    `${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}apps/${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/comments?item_id=${item.idMeal}`
  );
  return response.json();
});


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComment.js */ "./src/modules/renderComment.js");


const main = document.querySelector('.main');
const renderMeal = (item) => {
  const div = document.createElement('div');
  div.classList.add('list');
  div.innerHTML = `
      <div class="image">
      <img
        src="${item.strMealThumb}" alt=""
      />
    </div>
    <div class="description">
      <h5 class="description-header">
      ${item.strMeal}
     
      </h5>
      
        <button class="like" >
           <i class="far fa-heart fa-2x"></i><span>10</span>
        </button>
  
    </div>
    <button class="like" id= "${item.idMeal}">See More</button>
  `;
  main.append(div);

  const detailsBtn = document.getElementById(item.idMeal);

  detailsBtn.addEventListener('click', async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`
    );
    const result = await response.json();

    (0,_renderComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result.meals[0]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeal);


/***/ }),

/***/ "./src/modules/renderComment.js":
/*!**************************************!*\
  !*** ./src/modules/renderComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateCommentCount": () => (/* binding */ updateCommentCount)
/* harmony export */ });
/* harmony import */ var _config_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/keys.js */ "./config/keys.js");
/* harmony import */ var _getCommentItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCommentItems.js */ "./src/modules/getCommentItems.js");



let commentList = [];

const updateCommentCount = (comment, commentsHeader, add) => {
  if (comment) {
    commentsHeader.innerHTML = `comments (${comment.length})`;
  }
  if (add) {
    commentsHeader.innerHTML = `comments (${
      (comment.length ? comment.length : 0) + 1
    })`;
    commentList = [...commentList, comment];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((item) => {
  const body = document.querySelector('.container');
  const modalBG = document.createElement('div');
  modalBG.classList.add('modal');
  const commentUI = document.createElement('div');
  commentUI.classList.add('comment-container');
  commentUI.innerHTML = `
        <img src="${item.strMealThumb}" />
        
        <h2>${item.strMeal}</h2>
      
      `;

  const details = document.createElement('div');
  const closeButton = document.createElement('h2');
  closeButton.innerHTML = 'X';
  closeButton.classList.add('close');
  closeButton.addEventListener('click', () => modalBG.classList.toggle('open'));
  details.classList.add('ingredient');
  for (let i = 1; i < 5; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = `${item[`strIngredient${i}`]} : ${item[`strMeasure${i}`]}`;
    details.appendChild(p);
  }

  commentUI.appendChild(details);

  const commments = document.createElement('div');
  const commentsHeader = document.createElement('h2');

  commments.appendChild(commentsHeader);

  commentUI.appendChild(commments);

  (0,_getCommentItems_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item).then((comment) => {
    commentList = comment;
    updateCommentCount(comment, commentsHeader);

    comment?.forEach((comment) => {
      const p = document.createElement('p');
      const { creation_date: date, username, comment: commentText } = comment;
      // eslint-disable-next-line
      p.innerHTML = date + username + ':' + commentText;
      commments.appendChild(p);
    });
  });

  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Add A Comment ';

  const name = document.createElement('input');
  name.type = 'text';
  name.name = 'name';
  name.placeholder = 'Your Name';

  const comment = document.createElement('textarea');
  comment.name = 'comment';
  comment.placeholder = 'Your Insights';

  commentForm.appendChild(h2);
  commentForm.appendChild(name);
  commentForm.appendChild(comment);

  const addButton = document.createElement('button');
  addButton.innerHTML = 'Comment';

  addButton.addEventListener('click', async (e) => {
    e.preventDefault();

    await fetch(`${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}apps/${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: item.idMeal,
        username: name.value,
        comment: comment.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const p = document.createElement('p');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    p.innerHTML = `${formattedDate} ${name.value}:${comment.value}`;
    commments.appendChild(p);

    updateCommentCount(commentList, commentsHeader, true);
    name.value = '';
    comment.value = '';
  });

  commentForm.appendChild(addButton);

  commentUI.appendChild(commentForm);
  modalBG.appendChild(commentUI);
  modalBG.appendChild(closeButton);

  body.appendChild(modalBG);
});


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");





const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

window.addEventListener('DOMContentLoaded', () => {
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(5, 11);
      slicedData.forEach((list) => {
        (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFVO0FBQ2xCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9jb25maWcva2V5cy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldENvbW1lbnRJdGVtcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlckNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XG5leHBvcnQgY29uc3QgaW52b2x2ZW1lbnRBcGkgPSAneEV4R2xRTk1wVlg4TzIyMWVmRWQnO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5uYXYgdWwgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubmF2IHVsIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDEwMHB4O1xcbiAgcGFkZGluZzogNTBweCAxMDBweDtcXG59XFxuLm1haW4gLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAwcHg7XFxufVxcbi5tYWluIC5saXN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm1haW4gLmxpc3QgLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbiAubGlzdCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ubWFpbiAubGlzdCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBSUk7RUFDRSxjQUFBO0VBQ0EsWUF0QlE7RUF1QlIsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLHNCQUFBO0FBRlI7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU5OO0FBU0k7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBUE47QUFTTTtFQUNFLGVBQUE7RUFDQSxVQTdETTtBQXNEZDs7QUFhQTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBVkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGZpcnN0LWNvbG9yOiB3aGl0ZTtcXG4kZmlmdGgtY29sb3I6IHJlZDtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjb2xvcjogJGZpcnN0LWNvbG9yO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDEwMHB4O1xcbiAgcGFkZGluZzogNTBweCAxMDBweDtcXG5cXG4gIC5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmaXJzdC1jb2xvcjtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAkZmlmdGgtY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYigxMjgsIDEyOCwgMTI4KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgcmlnaHQ6IDUlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMjFyZW07XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4uaW5ncmVkaWVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGhlaWdodDogNThyZW07XFxufVxcblxcbi5jb21tZW50LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICByaWdodDogNSU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAyMXJlbTtcXG4gIHdpZHRoOiA2NSU7XFxufVxcblxcbi5pbmdyZWRpZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgaGVpZ2h0OiA1OHJlbTtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBiYXNlVXJsLCBpbnZvbHZlbWVudEFwaSB9IGZyb20gJy4uLy4uL2NvbmZpZy9rZXlzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGl0ZW0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBgJHtiYXNlVXJsfWFwcHMvJHtpbnZvbHZlbWVudEFwaX0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW0uaWRNZWFsfWBcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG4iLCJpbXBvcnQgcmVuZGVyQ29tbWVudCBmcm9tICcuL3JlbmRlckNvbW1lbnQuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IHJlbmRlck1lYWwgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIke2l0ZW0uc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgPGg1IGNsYXNzPVwiZGVzY3JpcHRpb24taGVhZGVyXCI+XG4gICAgICAke2l0ZW0uc3RyTWVhbH1cbiAgICAgXG4gICAgICA8L2g1PlxuICAgICAgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJsaWtlXCIgPlxuICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1oZWFydCBmYS0yeFwiPjwvaT48c3Bhbj4xMDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gIFxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJsaWtlXCIgaWQ9IFwiJHtpdGVtLmlkTWVhbH1cIj5TZWUgTW9yZTwvYnV0dG9uPlxuICBgO1xuICBtYWluLmFwcGVuZChkaXYpO1xuXG4gIGNvbnN0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkTWVhbCk7XG5cbiAgZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpdGVtLmlkTWVhbH1gXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZW5kZXJDb21tZW50KHJlc3VsdC5tZWFsc1swXSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVhbDtcbiIsImltcG9ydCB7IGJhc2VVcmwsIGludm9sdmVtZW50QXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnL2tleXMuanMnO1xuaW1wb3J0IGdldEl0ZW1Db21tZW50cyBmcm9tICcuL2dldENvbW1lbnRJdGVtcy5qcyc7XG5cbmxldCBjb21tZW50TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudENvdW50ID0gKGNvbW1lbnQsIGNvbW1lbnRzSGVhZGVyLCBhZGQpID0+IHtcbiAgaWYgKGNvbW1lbnQpIHtcbiAgICBjb21tZW50c0hlYWRlci5pbm5lckhUTUwgPSBgY29tbWVudHMgKCR7Y29tbWVudC5sZW5ndGh9KWA7XG4gIH1cbiAgaWYgKGFkZCkge1xuICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBjb21tZW50cyAoJHtcbiAgICAgIChjb21tZW50Lmxlbmd0aCA/IGNvbW1lbnQubGVuZ3RoIDogMCkgKyAxXG4gICAgfSlgO1xuICAgIGNvbW1lbnRMaXN0ID0gWy4uLmNvbW1lbnRMaXN0LCBjb21tZW50XTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGl0ZW0pID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29uc3QgbW9kYWxCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbEJHLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGNvbnN0IGNvbW1lbnRVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50VUkuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1jb250YWluZXInKTtcbiAgY29tbWVudFVJLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uc3RyTWVhbFRodW1ifVwiIC8+XG4gICAgICAgIFxuICAgICAgICA8aDI+JHtpdGVtLnN0ck1lYWx9PC9oMj5cbiAgICAgIFxuICAgICAgYDtcblxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ1gnO1xuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsQkcuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpKTtcbiAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50Jyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IGAke2l0ZW1bYHN0ckluZ3JlZGllbnQke2l9YF19IDogJHtpdGVtW2BzdHJNZWFzdXJlJHtpfWBdfWA7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChwKTtcbiAgfVxuXG4gIGNvbW1lbnRVSS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICBjb25zdCBjb21tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tbWVudHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGNvbW1tZW50cy5hcHBlbmRDaGlsZChjb21tZW50c0hlYWRlcik7XG5cbiAgY29tbWVudFVJLmFwcGVuZENoaWxkKGNvbW1tZW50cyk7XG5cbiAgZ2V0SXRlbUNvbW1lbnRzKGl0ZW0pLnRoZW4oKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50TGlzdCA9IGNvbW1lbnQ7XG4gICAgdXBkYXRlQ29tbWVudENvdW50KGNvbW1lbnQsIGNvbW1lbnRzSGVhZGVyKTtcblxuICAgIGNvbW1lbnQ/LmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCB7IGNyZWF0aW9uX2RhdGU6IGRhdGUsIHVzZXJuYW1lLCBjb21tZW50OiBjb21tZW50VGV4dCB9ID0gY29tbWVudDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgcC5pbm5lckhUTUwgPSBkYXRlICsgdXNlcm5hbWUgKyAnOicgKyBjb21tZW50VGV4dDtcbiAgICAgIGNvbW1tZW50cy5hcHBlbmRDaGlsZChwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtZm9ybScpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJIVE1MID0gJ0FkZCBBIENvbW1lbnQgJztcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZS50eXBlID0gJ3RleHQnO1xuICBuYW1lLm5hbWUgPSAnbmFtZSc7XG4gIG5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBOYW1lJztcblxuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29tbWVudC5uYW1lID0gJ2NvbW1lbnQnO1xuICBjb21tZW50LnBsYWNlaG9sZGVyID0gJ1lvdXIgSW5zaWdodHMnO1xuXG4gIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKGgyKTtcbiAgY29tbWVudEZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRCdXR0b24uaW5uZXJIVE1MID0gJ0NvbW1lbnQnO1xuXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH1hcHBzLyR7aW52b2x2ZW1lbnRBcGl9L2NvbW1lbnRzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtLmlkTWVhbCxcbiAgICAgICAgdXNlcm5hbWU6IG5hbWUudmFsdWUsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHAuaW5uZXJIVE1MID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtuYW1lLnZhbHVlfToke2NvbW1lbnQudmFsdWV9YDtcbiAgICBjb21tbWVudHMuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICB1cGRhdGVDb21tZW50Q291bnQoY29tbWVudExpc3QsIGNvbW1lbnRzSGVhZGVyLCB0cnVlKTtcbiAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICB9KTtcblxuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gIGNvbW1lbnRVSS5hcHBlbmRDaGlsZChjb21tZW50Rm9ybSk7XG4gIG1vZGFsQkcuYXBwZW5kQ2hpbGQoY29tbWVudFVJKTtcbiAgbW9kYWxCRy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbEJHKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHJlbmRlck1lYWwgZnJvbSAnLi9tb2R1bGVzL3JlbmRlci5qcyc7XG5cbmNvbnN0IG1haW5BUEkgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz1TZWFmb29kJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGZldGNoKG1haW5BUEkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHNsaWNlZERhdGEgPSBkYXRhLm1lYWxzLnNsaWNlKDUsIDExKTtcbiAgICAgIHNsaWNlZERhdGEuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICByZW5kZXJNZWFsKGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=