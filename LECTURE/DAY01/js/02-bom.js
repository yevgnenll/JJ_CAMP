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

    // assign class to html whenever width resize
    function assign_class_detection(){
        // html 요소의 class 속성값을 가져온다
        var html_class = html.getAttribute('class'); 
        var current_class = detect_device_type();
        if(!html_class || html_class.pre_class === current_class) {return;}
        // 기존 클래스 값을 제거한다
        console.log('---------', assign_class_detection.pre_class);
        if(html.classList.contains(assign_class_detection.pre_class)){
            html.classList.remove(assign_class_detection.pre_class);
        }
        html.classList.add(detect_device_type());
        console.log('trycode', html_class);
        // 현재 설정된 class 값을 기억해두겠다 -> 변수 만드는건 아니다?
        // memorization
        assign_class_detection.pre_class = detect_device_type();
    };
    
    var init_class = detect_device_type();
    assign_class_detection.pre_class = init_class;

    function class_text(){
    };

    window.onload = init();
    window.onresize = assign_class_detection();
})();
