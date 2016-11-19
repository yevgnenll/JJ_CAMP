/*! app.js © yamoo9.net, 2016 */
'use strict';

// 의존 모듈(square, factorial) 로드
// server side javascript env. module load
// commonJs 방법 모듈 로드
var square = require('./modules/square.js');
var factorial = require('./modules/factorial.js');
var capitalize = require('./modules/capitalize.js');

// var temp = 'app.js';
// debugger // F8을 누르면 실행

var s_result = square(3);
var result = factorial(s_result);
var word = capitalize('hi this is seungkwon');

console.log(s_result, result);
console.log(word);
