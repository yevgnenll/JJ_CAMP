/*
 * 자바스크립트 클로저
 * 함수
 * 객체(모던 자바스크립트: 모듈 패턴)
 * */
(function(){
    // 함수 표현식
    // yahoo 더글라스 크록포드 권장
    var num;
    var countDownMaker = function(p){
        // p 는 10을 저장하고 있었고
        // 감소하는 값이 적용되어 저장된다, 사라지지 않는다

        var _innerContDown = function(){
            return p--;
        };
        return _innerContDown;
    };

    var countdown10 = countDownMaker(10);
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
    console.log(countdown10());
})();
