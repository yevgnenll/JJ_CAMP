/*! factorial.js © yamoo9.net, 2016 */
'use strict';

// factorial 함수 정의
function factorial(n) {
  // factorial 로직
  return n < 2 ? 1 : n * factorial(n - 1);
}

module.exports = factorial;
