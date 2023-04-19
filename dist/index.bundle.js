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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nnav {\n  background-color: #333;\n  overflow: hidden;\n}\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n  gap: 100px;\n}\nnav ul:hover {\n  background-color: #333;\n}\n\na {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 4rem;\n  padding: 2rem 2rem;\n}\n.main .list {\n  display: flex;\n  flex-direction: column;\n}\n.main .list img {\n  width: 100%;\n  align-self: center;\n  height: auto;\n  border-radius: 1rem;\n  transition: all 0.8s ease-in-out;\n}\n.main .list img:hover {\n  scale: 1.1;\n}\n.main .list .description {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n}\n.main .list button {\n  background-color: inherit;\n  border: 1px solid white;\n}\n.main .list button:hover {\n  cursor: pointer;\n  color: red;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #333;\n  color: var(--first-color);\n  padding: 10px;\n}\n.footer a:hover {\n  text-decoration: underline;\n}\n.footer a .fab {\n  margin-left: 5px;\n}\n\n.like {\n  background-color: burlywood !important;\n  width: 100px;\n  padding: 5px;\n  align-self: center;\n  border-radius: 0.8rem;\n}\n\n.like:hover {\n  font-weight: bolder;\n  background-color: rgb(135, 222, 174) !important;\n  color: #da2929 !important;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,UAAA;EACA,SAAA;AAHF;;AAMA;EACE,sBATY;EAUZ,gBAAA;AAHF;AAKE;EACE,qBAAA;EACA,SAAA;EACA,cAAA;EACA,aAAA;EACA,8BAAA;EACA,UAAA;AAHJ;AAKI;EACE,sBArBQ;AAkBd;;AAQA;EACE,cAAA;EACA,YA7BY;EA8BZ,kBAAA;EACA,kBAAA;EACA,qBAAA;AALF;;AAQA;EACE,aAAA;EACA,2DAAA;EACA,SAAA;EACA,kBAAA;AALF;AAOE;EACE,aAAA;EACA,sBAAA;AALJ;AAOI;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,gCAAA;AALN;AAOM;EACE,UAAA;AALR;AASI;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;AAPN;AAUI;EACE,yBAAA;EACA,uBAAA;AARN;AAUM;EACE,eAAA;EACA,UApEM;AA4Dd;;AAcA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBA/EY;EAgFZ,yBAAA;EACA,aAAA;AAXF;AAcI;EACE,0BAAA;AAZN;AAeI;EACE,gBAAA;AAbN;;AAkBA;EACE,sCAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,+CAAA;EACA,yBAAA;AAfF","sourcesContent":["$first-color: white;\n$second-color:#333;\n$fifth-color: red;\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nnav {\n  background-color: $second-color;\n  overflow: hidden;\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0 10%;\n    display: flex;\n    justify-content: space-between;\n    gap: 100px;\n\n    &:hover {\n      background-color: $second-color;\n    }\n  }\n}\n\na {\n  display: block;\n  color: $first-color;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 4rem;\n  padding: 2rem 2rem;\n\n  .list {\n    display: flex;\n    flex-direction: column;\n\n    img {\n      width: 100%;\n      align-self: center;\n      height: auto;\n      border-radius: 1rem;\n      transition: all 0.8s ease-in-out;\n\n      &:hover {\n        scale: 1.1;\n      }\n    }\n\n    .description {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-top: 1rem;\n    }\n\n    button {\n      background-color: inherit;\n      border: 1px solid $first-color;\n\n      &:hover {\n        cursor: pointer;\n        color: $fifth-color;\n      }\n    }\n  }\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: $second-color;\n  color: var(--first-color);\n  padding: 10px;\n\n  a {\n    &:hover {\n      text-decoration: underline;\n    }\n\n    .fab {\n      margin-left: 5px;\n    }\n  }\n}\n\n.like {\n  background-color: burlywood !important;\n  width: 100px;\n  padding: 5px;\n  align-self: center;\n  border-radius: 0.8rem;\n}\n\n.like:hover {\n  font-weight: bolder;\n  background-color: rgb(135, 222, 174) !important;\n  color: #da2929 !important;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".comment-container {\n  position: absolute;\n  top: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding-bottom: 3rem;\n}\n\n.close {\n  position: sticky;\n  top: 2rem;\n  left: 100%;\n  margin-right: -90%;\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.open {\n  display: none;\n}\n\n.comment-container img {\n  height: 21rem;\n  width: 65%;\n}\n\n.ingredient {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  width: 49%;\n  column-gap: 20%;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: scroll;\n  backdrop-filter: blur(20px);\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nform input,\ntextarea {\n  padding: 0.8rem;\n  border-radius: 0.8rem;\n  border: none;\n  width: 30vw;\n  background-color: rgb(231, 214, 192);\n}\n\nform button {\n  background-color: orangered;\n  padding: 1rem;\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 0.8rem;\n  border: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;AACd","sourcesContent":[".comment-container {\n  position: absolute;\n  top: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding-bottom: 3rem;\n}\n\n.close {\n  position: sticky;\n  top: 2rem;\n  left: 100%;\n  margin-right: -90%;\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.open {\n  display: none;\n}\n\n.comment-container img {\n  height: 21rem;\n  width: 65%;\n}\n\n.ingredient {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  width: 49%;\n  column-gap: 20%;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: scroll;\n  backdrop-filter: blur(20px);\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nform input,\ntextarea {\n  padding: 0.8rem;\n  border-radius: 0.8rem;\n  border: none;\n  width: 30vw;\n  background-color: rgb(231, 214, 192);\n}\n\nform button {\n  background-color: orangered;\n  padding: 1rem;\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 0.8rem;\n  border: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/likeAPI.js":
/*!********************************!*\
  !*** ./src/modules/likeAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike)
/* harmony export */ });
/* harmony import */ var _config_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/keys.js */ "./config/keys.js");


const likesURL = `${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}apps/${_config_keys_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi}/likes`;
const postLike = async (id) => {
  const result = fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await result.json();
  return res;
};

const fetchLikes = async () => {
  const result = await fetch(likesURL, {
    method: 'GET',
  });
  return result.json();
};



/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLike": () => (/* binding */ renderLike),
/* harmony export */   "renderMeal": () => (/* binding */ renderMeal)
/* harmony export */ });
/* harmony import */ var _likeAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeAPI.js */ "./src/modules/likeAPI.js");
/* harmony import */ var _renderComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComment.js */ "./src/modules/renderComment.js");



const main = document.querySelector('.main');
const renderMeal = async (item) => {
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
      
     <button class="btn-like" id= "${item.idMeal}">
      <i class="far fa-heart fa-2x"></i><span id= "likes${item.idMeal}">0</span>
        </button>
  
    </div>
    <button class="like" data-id= "${item.idMeal}">See More</button>
  `;
  main.append(div);
  const likeBtn = div.querySelector('.btn-like');
  likeBtn.addEventListener('click', () => {
    const itemId = likeBtn.getAttribute('id');
    const likeCount = parseInt(likeBtn.querySelector('span').textContent, 10);
    likeBtn.querySelector('span').textContent = likeCount + 1;

    (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(itemId);
  });

  const detailsBtn = document.querySelector(`[data-id= "${item.idMeal}"]`);

  detailsBtn.addEventListener('click', async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`,
    );
    const result = await response.json();

    (0,_renderComment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result.meals[0]);
  });
};

const renderLike = async (id, likes) => {
  likes.then((data) => {
    data.forEach((element) => {
      if (element.item_id === id) {
        document.getElementById(`likes${id}`).innerHTML = element.likes;
      }
    });
  });
};



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
  if (!comment.error && add !== true) {
    commentsHeader.innerHTML = `comments (${comment.length})`;
  } else if (add === undefined) {
    commentsHeader.innerHTML = 'comments (0)';
  }
  if (add) {
    if (!comment.error) {
      commentsHeader.innerHTML = `comments (${
        (comment.length ? comment.length : 0) + 1
      })`;
      commentList.push(comment);
    } else {
      commentList.push('comment');
      commentsHeader.innerHTML = `comments (${commentList.length})`;
    }
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
    // eslint-disable-next-line
    !comment.error ? (commentList = comment) : [];
    updateCommentCount(comment, commentsHeader);

    comment?.forEach((comment) => {
      const p = document.createElement('p');
      const { creation_date: date, username, comment: commentText } = comment;
      // eslint-disable-next-line
      p.innerHTML = date + ' ' + '👤' + username + ' 💬 ' + commentText;
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
    p.innerHTML = `${formattedDate} 👤 ${name.value} 💬 ${comment.value}`;
    commments.appendChild(p);
    name.value = '';
    comment.value = '';
    updateCommentCount(commentList, commentsHeader, true);
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
/* harmony import */ var _modules_likeAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likeAPI */ "./src/modules/likeAPI.js");






const mainAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const itemCounter = document.querySelector('#counter');
window.addEventListener('DOMContentLoaded', async () => {
  const likes = (0,_modules_likeAPI__WEBPACK_IMPORTED_MODULE_3__.fetchLikes)();
  fetch(mainAPI)
    .then((response) => response.json())
    .then((data) => {
      const slicedData = data.meals.slice(0, 24);

      slicedData.forEach((list) => {
        (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__.renderMeal)(list);
        (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__.renderLike)(list.idMeal, likes);
      });
      itemCounter.innerHTML = `Food(${slicedData.length})`;
    })
    .catch((error) => {
      throw new Error(error);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0Q7O0FBRXdDO0FBQ2Q7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsOERBQVU7QUFDbEIsUUFBUSw4REFBVTtBQUNsQixPQUFPO0FBQ1Asc0NBQXNDLGtCQUFrQjtBQUN4RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9jb25maWcva2V5cy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldENvbW1lbnRJdGVtcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VBUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZW5kZXJDb21tZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuZXhwb3J0IGNvbnN0IGludm9sdmVtZW50QXBpID0gJ3hFeEdsUU5NcFZYOE8yMjFlZkVkJztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5uYXYgdWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG59XFxuXFxuYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG4ubWFpbiAubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1haW4gLmxpc3QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubWFpbiAubGlzdCBpbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuLm1haW4gLmxpc3QgLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5tYWluIC5saXN0IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5tYWluIC5saXN0IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmZvb3RlciBhIC5mYWIge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxufVxcblxcbi5saWtlOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyMjIsIDE3NCkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZGEyOTI5ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQVRZO0VBVVosZ0JBQUE7QUFIRjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFISjtBQUtJO0VBQ0Usc0JBckJRO0FBa0JkOztBQVFBO0VBQ0UsY0FBQTtFQUNBLFlBN0JZO0VBOEJaLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUxOO0FBT007RUFDRSxVQUFBO0FBTFI7QUFTSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFQTjtBQVVJO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQVJOO0FBVU07RUFDRSxlQUFBO0VBQ0EsVUFwRU07QUE0RGQ7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQS9FWTtFQWdGWix5QkFBQTtFQUNBLGFBQUE7QUFYRjtBQWNJO0VBQ0UsMEJBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7QUFiTjs7QUFrQkE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWZGOztBQWtCQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtBQWZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmaXJzdC1jb2xvcjogd2hpdGU7XFxuJHNlY29uZC1jb2xvcjojMzMzO1xcbiRmaWZ0aC1jb2xvcjogcmVkO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmQtY29sb3I7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMDBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1jb2xvcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5hIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICRmaXJzdC1jb2xvcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcGFkZGluZzogMnJlbSAycmVtO1xcblxcbiAgLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHNjYWxlOiAxLjE7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGZpcnN0LWNvbG9yO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICRmaWZ0aC1jb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1jb2xvcjtcXG4gIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgYSB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuXFxuICAgIC5mYWIge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmxpa2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxufVxcblxcbi5saWtlOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyMjIsIDE3NCkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZGEyOTI5ICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21tZW50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAycmVtO1xcbiAgbGVmdDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogLTkwJTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDIxcmVtO1xcbiAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLmluZ3JlZGllbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIHdpZHRoOiA0OSU7XFxuICBjb2x1bW4tZ2FwOiAyMCU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjE0LCAxOTIpO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29tbWVudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMnJlbTtcXG4gIGxlZnQ6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IC05MCU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAyMXJlbTtcXG4gIHdpZHRoOiA2NSU7XFxufVxcblxcbi5pbmdyZWRpZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICB3aWR0aDogNDklO1xcbiAgY29sdW1uLWdhcDogMjAlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMzB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIxNCwgMTkyKTtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJhc2VVcmwsIGludm9sdmVtZW50QXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnL2tleXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaXRlbSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICBgJHtiYXNlVXJsfWFwcHMvJHtpbnZvbHZlbWVudEFwaX0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW0uaWRNZWFsfWBcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG4iLCJpbXBvcnQgeyBiYXNlVXJsLCBpbnZvbHZlbWVudEFwaSB9IGZyb20gJy4uLy4uL2NvbmZpZy9rZXlzLmpzJztcblxuY29uc3QgbGlrZXNVUkwgPSBgJHtiYXNlVXJsfWFwcHMvJHtpbnZvbHZlbWVudEFwaX0vbGlrZXNgO1xuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmV0Y2gobGlrZXNVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IGZldGNoTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGxpa2VzVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQuanNvbigpO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2UsIGZldGNoTGlrZXMgfTsiLCJpbXBvcnQgeyBwb3N0TGlrZSB9IGZyb20gJy4vbGlrZUFQSS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29tbWVudCBmcm9tICcuL3JlbmRlckNvbW1lbnQuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IHJlbmRlck1lYWwgPSBhc3luYyAoaXRlbSkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcblxuICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIiR7aXRlbS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICA8aDUgY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj5cbiAgICAgICR7aXRlbS5zdHJNZWFsfVxuICAgICBcbiAgICAgIDwvaDU+XG4gICAgICBcbiAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1saWtlXCIgaWQ9IFwiJHtpdGVtLmlkTWVhbH1cIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0IGZhLTJ4XCI+PC9pPjxzcGFuIGlkPSBcImxpa2VzJHtpdGVtLmlkTWVhbH1cIj4wPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgXG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImxpa2VcIiBkYXRhLWlkPSBcIiR7aXRlbS5pZE1lYWx9XCI+U2VlIE1vcmU8L2J1dHRvbj5cbiAgYDtcbiAgbWFpbi5hcHBlbmQoZGl2KTtcbiAgY29uc3QgbGlrZUJ0biA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuYnRuLWxpa2UnKTtcbiAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpdGVtSWQgPSBsaWtlQnRuLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBsaWtlQ291bnQgPSBwYXJzZUludChsaWtlQnRuLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCwgMTApO1xuICAgIGxpa2VCdG4ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gbGlrZUNvdW50ICsgMTtcblxuICAgIHBvc3RMaWtlKGl0ZW1JZCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0gXCIke2l0ZW0uaWRNZWFsfVwiXWApO1xuXG4gIGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aXRlbS5pZE1lYWx9YCxcbiAgICApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJlbmRlckNvbW1lbnQocmVzdWx0Lm1lYWxzWzBdKTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJMaWtlID0gYXN5bmMgKGlkLCBsaWtlcykgPT4ge1xuICBsaWtlcy50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pdGVtX2lkID09PSBpZCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZXMke2lkfWApLmlubmVySFRNTCA9IGVsZW1lbnQubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCB7IHJlbmRlck1lYWwsIHJlbmRlckxpa2UgfTtcbiIsImltcG9ydCB7IGJhc2VVcmwsIGludm9sdmVtZW50QXBpIH0gZnJvbSAnLi4vLi4vY29uZmlnL2tleXMuanMnO1xuaW1wb3J0IGdldEl0ZW1Db21tZW50cyBmcm9tICcuL2dldENvbW1lbnRJdGVtcy5qcyc7XG5cbmxldCBjb21tZW50TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudENvdW50ID0gKGNvbW1lbnQsIGNvbW1lbnRzSGVhZGVyLCBhZGQpID0+IHtcbiAgaWYgKCFjb21tZW50LmVycm9yICYmIGFkZCAhPT0gdHJ1ZSkge1xuICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBjb21tZW50cyAoJHtjb21tZW50Lmxlbmd0aH0pYDtcbiAgfSBlbHNlIGlmIChhZGQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9ICdjb21tZW50cyAoMCknO1xuICB9XG4gIGlmIChhZGQpIHtcbiAgICBpZiAoIWNvbW1lbnQuZXJyb3IpIHtcbiAgICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBjb21tZW50cyAoJHtcbiAgICAgICAgKGNvbW1lbnQubGVuZ3RoID8gY29tbWVudC5sZW5ndGggOiAwKSArIDFcbiAgICAgIH0pYDtcbiAgICAgIGNvbW1lbnRMaXN0LnB1c2goY29tbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnRMaXN0LnB1c2goJ2NvbW1lbnQnKTtcbiAgICAgIGNvbW1lbnRzSGVhZGVyLmlubmVySFRNTCA9IGBjb21tZW50cyAoJHtjb21tZW50TGlzdC5sZW5ndGh9KWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoaXRlbSkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQkcuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgY29uc3QgY29tbWVudFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRVSS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWNvbnRhaW5lcicpO1xuICBjb21tZW50VUkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5zdHJNZWFsVGh1bWJ9XCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxoMj4ke2l0ZW0uc3RyTWVhbH08L2gyPlxuICAgICAgXG4gICAgICBgO1xuXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnWCc7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWxCRy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJykpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnQnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYCR7aXRlbVtgc3RySW5ncmVkaWVudCR7aX1gXX0gOiAke2l0ZW1bYHN0ck1lYXN1cmUke2l9YF19YDtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHApO1xuICB9XG5cbiAgY29tbWVudFVJLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gIGNvbnN0IGNvbW1tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21tZW50c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgY29tbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnRzSGVhZGVyKTtcblxuICBjb21tZW50VUkuYXBwZW5kQ2hpbGQoY29tbW1lbnRzKTtcblxuICBnZXRJdGVtQ29tbWVudHMoaXRlbSkudGhlbigoY29tbWVudCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICFjb21tZW50LmVycm9yID8gKGNvbW1lbnRMaXN0ID0gY29tbWVudCkgOiBbXTtcbiAgICB1cGRhdGVDb21tZW50Q291bnQoY29tbWVudCwgY29tbWVudHNIZWFkZXIpO1xuXG4gICAgY29tbWVudD8uZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IHsgY3JlYXRpb25fZGF0ZTogZGF0ZSwgdXNlcm5hbWUsIGNvbW1lbnQ6IGNvbW1lbnRUZXh0IH0gPSBjb21tZW50O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBwLmlubmVySFRNTCA9IGRhdGUgKyAnICcgKyAn8J+RpCcgKyB1c2VybmFtZSArICcg8J+SrCAnICsgY29tbWVudFRleHQ7XG4gICAgICBjb21tbWVudHMuYXBwZW5kQ2hpbGQocCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb21tZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWZvcm0nKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmlubmVySFRNTCA9ICdBZGQgQSBDb21tZW50ICc7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWUudHlwZSA9ICd0ZXh0JztcbiAgbmFtZS5uYW1lID0gJ25hbWUnO1xuICBuYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgTmFtZSc7XG5cbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbW1lbnQubmFtZSA9ICdjb21tZW50JztcbiAgY29tbWVudC5wbGFjZWhvbGRlciA9ICdZb3VyIEluc2lnaHRzJztcblxuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChoMik7XG4gIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50KTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkQnV0dG9uLmlubmVySFRNTCA9ICdDb21tZW50JztcblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9YXBwcy8ke2ludm9sdmVtZW50QXBpfS9jb21tZW50cy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbS5pZE1lYWwsXG4gICAgICAgIHVzZXJuYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICBwLmlubmVySFRNTCA9IGAke2Zvcm1hdHRlZERhdGV9IPCfkaQgJHtuYW1lLnZhbHVlfSDwn5KsICR7Y29tbWVudC52YWx1ZX1gO1xuICAgIGNvbW1tZW50cy5hcHBlbmRDaGlsZChwKTtcbiAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgIHVwZGF0ZUNvbW1lbnRDb3VudChjb21tZW50TGlzdCwgY29tbWVudHNIZWFkZXIsIHRydWUpO1xuICB9KTtcblxuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gIGNvbW1lbnRVSS5hcHBlbmRDaGlsZChjb21tZW50Rm9ybSk7XG4gIG1vZGFsQkcuYXBwZW5kQ2hpbGQoY29tbWVudFVJKTtcbiAgbW9kYWxCRy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbEJHKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgcmVuZGVyTGlrZSwgcmVuZGVyTWVhbCB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXIuanMnO1xuaW1wb3J0IHsgZmV0Y2hMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9saWtlQVBJJztcblxuY29uc3QgbWFpbkFQSSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPVNlYWZvb2QnO1xuY29uc3QgaXRlbUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRlcicpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gZmV0Y2hMaWtlcygpO1xuICBmZXRjaChtYWluQVBJKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBzbGljZWREYXRhID0gZGF0YS5tZWFscy5zbGljZSgwLCAyNCk7XG5cbiAgICAgIHNsaWNlZERhdGEuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICByZW5kZXJNZWFsKGxpc3QpO1xuICAgICAgICByZW5kZXJMaWtlKGxpc3QuaWRNZWFsLCBsaWtlcyk7XG4gICAgICB9KTtcbiAgICAgIGl0ZW1Db3VudGVyLmlubmVySFRNTCA9IGBGb29kKCR7c2xpY2VkRGF0YS5sZW5ndGh9KWA7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=