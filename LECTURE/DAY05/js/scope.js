
// 전역변수
var creation = 'create element node';
console.log('외부 creation', creation);

// let 키워드를 이 안에서 사용하면 별도의 공간이 만들어진다
{
    var creation = 'create front-end eveloper';
    console.log('블록 내부 - creation', creation);
}


(function(){
    // 지역변수
    var creation = 'create front-end develper';
    console.log('내부 creation 1', creation);
}());

(function(){
    var creation = 'create RXJS';
    console.log('내부 creation 2', creation);
}());


console.log('외부 creation', creation);
