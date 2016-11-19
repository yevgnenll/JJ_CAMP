'use strict';

var temp = 'square.js';
// debugger

// square 함수 정의
function square(n) {
  return n * n;
}


// export로 내보내기를 해줘야 require로 가져온다
module.exports = square;
