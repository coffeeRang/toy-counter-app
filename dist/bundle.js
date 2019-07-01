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

/***/ "./src/counter-app.js":
/*!****************************!*\
  !*** ./src/counter-app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('counter-app.js run');\n/**\r\n * 작성할 함수\r\n * increase : default - 1씩 증가, 특정 파라미터를 받을 경우 해당 값만큼 증가\r\n * decrease : default - 1씩 감소, 특정 파라미터를 받을 경우 해당 값만큼 감소\r\n * reset : default - 현재 증감된 값을 초기값으로 변경, 특정 파라미터를 받을 겨웅 해당 값으로 초기화\r\n * getCounterNum : 현재까지 증감된 값을 조회\r\n */\n\ndocument.querySelector('#btn_increase').addEventListener('click', function () {\n  var increaseNum = document.querySelector('#increase_num').value || undefined;\n  counterApp.increase(increaseNum);\n  document.querySelector('#current_num').value = counterApp.getCurrentNum();\n});\ndocument.querySelector('#btn_decrease').addEventListener('click', function () {\n  var decreaseNum = document.querySelector('#decrease_num').value || undefined;\n  counterApp.decrease(decreaseNum);\n  document.querySelector('#current_num').value = counterApp.getCurrentNum();\n});\ndocument.querySelector('#btn_reset').addEventListener('click', function () {\n  var resetNum = document.querySelector('#reset_num').value || undefined;\n  counterApp.reset(resetNum);\n  document.querySelector('#current_num').value = counterApp.getCurrentNum();\n});\nvar counterApp = {\n  counterNum: 0,\n  initNum: 0,\n  increase: function increase() {\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    this.counterNum += Number(data);\n  },\n  decrease: function decrease() {\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    this.counterNum -= Number(data);\n  },\n  getCurrentNum: function getCurrentNum(data) {\n    return this.counterNum;\n  },\n  reset: function reset() {\n    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    this.counterNum = data;\n  }\n};\n\nvar logFn = function logFn(data) {\n  console.log('>> log : ' + data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterApp);\n\n//# sourceURL=webpack:///./src/counter-app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter-app */ \"./src/counter-app.js\");\n// import counter_app from './counter-app';\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });