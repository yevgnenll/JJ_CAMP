(function(global){
    // 엄격한 문법 모드
    'use strict'; // 과도기 이기 때문에 정확한 문법을 적용함

    cLog('this === window: %c' + (this === window));

    var container_attr = {
        'class': 'container'
    };

    var container = createEl('div', container_attr, 'this is container element.');

    console.log(container);

}(this));
