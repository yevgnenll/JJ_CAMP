/*! factorial.js © yamoo9.net, 2016 */

let temp = 'factorial.js'; // 자기 내에서만 사용가능한 변수
// debugger

// factorial 함수 정의
let factorial = (n) => n < 2 ? 1 : n * factorial(n - 1);

module.exports = factorial;
