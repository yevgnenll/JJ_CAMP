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
    var html = document.documentElement;
    var detect_classes ={
        // class, 조건
        'mobile': 800,
        'tablet': 1024,
        'desktop': 1200
            // 조건이 3개 이상이면 switch
    };

    function init(){
        detect_device_type();
    };

    function detect_device_type(){
        var device_width = window.innerWidth;
        var type = null;
        var current_class = html.classList;
        switch(true){
            case (device_width <= detect_classes['mobile']):
                html.classList.remove(current_class);
                html.classList.add('mobile');
                type = 'mobile';
                break;
            case (device_width <= detect_classes.tablet):
                html.classList.remove(current_class);
                html.classList.add('tablet');
                type = 'tablet';
                break;
            case (device_width <= detect_classes.desktop):
                html.classList.remove(current_class);
                html.classList.add('desktop');
                type = 'desktop';
                break;
            default:
                html.classList.remove(current_class);
                html.classList.add('wide');
                type = 'wide';
                break;
        }
        return type;
    };

    

    function class_text(){
    };

    window.onload = init();
    window.onresize = assign_class_detection();
})();
