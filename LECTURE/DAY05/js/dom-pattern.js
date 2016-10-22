(function(global){
    // 엄격한 문법 모드
    'use strict'; // 과도기 이기 때문에 정확한 문법을 적용함

    function cLog(input, console_style){

        // input은 문자열 이어야 한다는 것을 검증
        validate(!isString(input), '문자열을 입력해야 합니다');
        // option: console_style
        // default
        console_style = console_style || 'color #fe4940; font-size: 1.2rem;';

        console.log(input, console_style);
    };

    cLog('this === window: %c' + (this === window));

}(this));
