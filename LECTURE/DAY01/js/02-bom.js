// 브라우저를 구성하는 개체들
// window 객체
// location
// screen
// navigator online, offline
// document
// history
// window.localStorage 추가됨
// window.sessionStorage 추가됨
//
// event -> only IE

// 이 모든것을 포함하는것은 window이다.

// for appling reponsive web design
// 브라우저의 문서가 로드되었을때 1회 감지
// 각 기기의 폭을 감지한 결과를 html 요소의 class 속성값으로 처리


(function(){
    var detect_classes ={
        // class, 조건
        'mobile': 800,
        'tablet': 1024,
        'desktop': 1200
            // 조건이 3개 이상이면 switch
    };

    function init(){
        check_device();
        window.addEventListener('resize', function(){
            check_device();
        });
    };

    function check_device(){
        var device_width = window.innerWidth;
        var root = document.documentElement;
        console.log('start init', device_width);
        switch(true){
            case (device_width <= detect_classes['mobile']):
                console.log('mobile', device_width, detect_classes.mobile);
                root.classList.add('mobile');
                break;
            case (device_width <= detect_classes.tablet):
                root.classList.add('tablet');
                console.log('tablet', device_width, detect_classes.tablet);
                break;
            case (device_width <= detect_classes.desktop):
                root.classList.add('desktop');
                console.log('desktop', device_width, detect_classes.desktop);
                break;
            default:
                root.classList.add('wide');
                console.log('wide', device_width);
                break;
        }
    };

    function class_text(){
        var root = document.documentElement;
    };

    window.onload = init();
})();

