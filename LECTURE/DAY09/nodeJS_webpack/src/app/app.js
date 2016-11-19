/*! app.js © yamoo9.net, 2016 */
'use strict';

// css -----------------------------------------------
require('./css/app.sass');

// 의존 모듈(square, factorial) 로드
// server side javascript env. module load
// commonJs 방법 모듈 로드
let square = require('./modules/square.js');
let factorial = require('./modules/factorial.js');
let capitalize = require('./modules/capitalize.js');
let camelcase = require('./modules/camelcase.js');

// var temp = 'app.js';
// debugger // F8을 누르면 실행

let s_result = square(3);
let result = factorial(s_result);
let word = capitalize('hi this is seungkwon');
let camel = camelcase('design school front end developer');

console.log(s_result, result);
console.log(word);
console.log(camel);
