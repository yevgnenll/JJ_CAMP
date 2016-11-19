/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*! app.js © yamoo9.net, 2016 */
	'use strict';
	
	// css -----------------------------------------------
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./css/app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	// 의존 모듈(square, factorial) 로드
	// server side javascript env. module load
	// commonJs 방법 모듈 로드
	var square = __webpack_require__(2);
	var factorial = __webpack_require__(3);
	var capitalize = __webpack_require__(4);
	var camelcase = __webpack_require__(5);
	
	// var temp = 'app.js';
	// debugger // F8을 누르면 실행
	
	var s_result = square(3);
	var result = factorial(s_result);
	var word = capitalize('hi this is seungkwon');
	var camel = camelcase('design school front end developer');
	
	console.log(s_result, result);
	console.log(word);
	console.log(camel);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var temp = 'square.js';
	// debugger
	
	// square 함수 정의
	function square(n) {
	  return n * n;
	}
	
	
	// export로 내보내기를 해줘야 require로 가져온다
	module.exports = square;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*! factorial.js © yamoo9.net, 2016 */
	'use strict';
	
	var temp = 'factorial.js'; // 자기 내에서만 사용가능한 변수
	// debugger
	
	// factorial 함수 정의
	function factorial(n) {
	  // factorial 로직
	  return n < 2 ? 1 : n * factorial(n - 1);
	}
	
	module.exports = factorial;


/***/ },
/* 4 */
/***/ function(module, exports) {

	function capitalize(text){
	
	    return text.split(' ').map(function(k){
	        return k.replace(/^./, function($1){
	            return $1.toUpperCase();
	        });
	    }).join(' ');
	}
	
	module.exports = capitalize;


/***/ },
/* 5 */
/***/ function(module, exports) {

	function camelCase(text){
	    return text.split(' ').map(function(k, i){
	        if(i === 0){ return k; }
	        return k.replace(/^./, function($1){
	            return $1.toUpperCase();
	        });
	    }).join('');
	}
	
	module.exports = camelCase;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map