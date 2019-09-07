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

/***/ "./src/components/Count.js":
/*!*********************************!*\
  !*** ./src/components/Count.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Observer */ \"./src/lib/Observer.js\");\n\n\nclass Count extends _lib_Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  createMarkup(state) {\n    return `<span>\n    user count: ${state.users.length}\n    </span>`;\n  }\n\n  render(state, selector = \"app\") {\n    const markup = this.createMarkup(state);\n    const parent = document.getElementById(selector);\n\n    parent.innerHTML = markup;\n  }\n\n  // This method will be called by the Subject(state) whenever it updates.\n  // Notice how it prompts a re-render.\n  update(state) {\n    this.render(state, \"user-count-container\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Count);\n\n\n//# sourceURL=webpack:///./src/components/Count.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Form {\n  // Passing in our state object and setting it as a class property.\n  constructor(state = {}) {\n    this.appState = state;\n  }\n\n  createMarkup(state) {\n    return `<div>\n      <form id=\"add-user\">\n        <label for=\"username\">Add a User</label>\n        <input id=\"username\" type=\"text\" name=\"name\">\n        <button type=\"submit\">Add</button>\n      </form>\n    </div>`;\n  }\n\n  render(selector = \"app\") {\n    const markup = this.createMarkup(this.state);\n    const parent = document.getElementById(selector);\n\n    parent.innerHTML = markup;\n\n    this.bindEvents();\n  }\n\n  // Bind an event on submit for the add user form.\n  bindEvents() {\n    const form = document.getElementById(\"add-user\");\n    form.addEventListener(\"submit\", e => {\n      e.preventDefault();\n\n      const el = e.target;\n      const { value: name } = el.name;\n\n      if (!name) {\n        return;\n      }\n\n      // Getting the current state.\n      const state = this.appState.get();\n\n      const users = [...state.users, { id: state.users.length++, name }];\n\n      el.name.value = \"\";\n\n      // Updating state will prompt a re-render via the notify method being called.\n      this.appState.update({\n        ...state,\n        users\n      });\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n\n//# sourceURL=webpack:///./src/components/Form.js?");

/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Observer */ \"./src/lib/Observer.js\");\n\n\nclass List extends _lib_Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  createMarkup(state) {\n    return `<ul>\n    ${state.users.map(user => `<li>${user.name}</li>`).join(\"\\n\")}\n    </ul>`;\n  }\n\n  render(state, selector = \"app\") {\n    const markup = this.createMarkup(state);\n    const parent = document.getElementById(selector);\n\n    parent.innerHTML = markup;\n  }\n\n  // This method will be called by the Subject(state) whenever it updates.\n  // Notice how it prompts a re-render.\n  update(state) {\n    this.render(state, \"user-list-container\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n\n//# sourceURL=webpack:///./src/components/List.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/users */ \"./src/utils/users.js\");\n/* harmony import */ var _lib_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/State */ \"./src/lib/State.js\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/List */ \"./src/components/List.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\n/* harmony import */ var _components_Count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Count */ \"./src/components/Count.js\");\n\n\n\n\n\n\n// Instantiate classes.\nconst AppState = new _lib_State__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // application state\nconst namesList = new _components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"](); // Create a new user list.\nconst userForm = new _components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"](AppState); // Create a new user form.\nconst userCount = new _components_Count__WEBPACK_IMPORTED_MODULE_4__[\"default\"](); // Create a new Count class.\n\n// Hydrate state with initial users.\nAppState.update({ users: _utils_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"] });\n\n// Add the observers. These objects will re-render when state changes.\nAppState.addObserver(namesList);\nAppState.addObserver(userCount);\n\n// On load, perform initial render..\nnamesList.render(AppState.get(), \"user-list-container\");\nuserForm.render(\"add-user-container\");\nuserCount.render(AppState.get(), \"user-count-container\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/Observer.js":
/*!*****************************!*\
  !*** ./src/lib/Observer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Observer {\n  // Gets called by the Subject::notify method.\n  update() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observer);\n\n\n//# sourceURL=webpack:///./src/lib/Observer.js?");

/***/ }),

/***/ "./src/lib/State.js":
/*!**************************!*\
  !*** ./src/lib/State.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./src/lib/Subject.js\");\n\n\nclass State extends _Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  // Update the state.\n  // Calls the update method on each observer.\n  update(data = {}) {\n    this.state = Object.assign(this.state, data);\n    this.notify(this.state);\n  }\n\n  // Get the state.\n  get() {\n    return this.state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (State);\n\n\n//# sourceURL=webpack:///./src/lib/State.js?");

/***/ }),

/***/ "./src/lib/Subject.js":
/*!****************************!*\
  !*** ./src/lib/Subject.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Subject {\n  constructor() {\n    this.observers = [];\n  }\n\n  // Add an observer to this.observers.\n  addObserver(observer) {\n    this.observers.push(observer);\n  }\n\n  // Remove an observer from this.observers.\n  removeObserver(observer) {\n    const removeIndex = this.observers.findIndex(obs => {\n      return observer === obs;\n    });\n\n    if (removeIndex !== -1) {\n      this.observers = this.observers.slice(removeIndex, 1);\n    }\n  }\n\n  // Loops over this.observers and calls the update method on each observer.\n  // The state object will call this method everytime it is updated.\n  notify(data) {\n    if (this.observers.length > 0) {\n      this.observers.forEach(observer => observer.update(data));\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subject);\n\n\n//# sourceURL=webpack:///./src/lib/Subject.js?");

/***/ }),

/***/ "./src/utils/users.js":
/*!****************************!*\
  !*** ./src/utils/users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Initial set of users.\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    id: 1,\n    name: \"Jennifer\"\n  },\n  {\n    id: 2,\n    name: \"Jane\"\n  },\n  {\n    id: 3,\n    name: \"John\"\n  }\n]);\n\n\n//# sourceURL=webpack:///./src/utils/users.js?");

/***/ })

/******/ });