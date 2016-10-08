<<<<<<< HEAD
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
=======
/*! bom.js © yamoo9.net, 2016 */

// 브라우저를 구성하는 객체들

// 기존에 존재하던 객체들
// window 객체
// window.location 객체
// window.screen 객체
// window.navigator 객체
// window.document 객체
// window.history 객체

// ↓ HTML5에 추가된 객체들
// window.navigator.geolocation 객체
// window.localStorage 객체
// window.sessionStorage 객체


// RWD 반응형 웹 디자인 적용을 위한 기기 감지 스크립팅
// 브라우저의 문서가 로드되었을 때 1회 감지
// 각 기기의 폭을 감지한 결과를 <html> 요소의 class 속성 값으로 처리

// <html> 요소 참조
var html = document.documentElement;
// 감지 클래스 속성을 포함한 객체 정의
var detect_classes = {
  'mobile': 800,
  'tablet': 1024,
  'desktop': 1280
};

/** @function assignClassDetection - 감지된 클래스 속성 제거 및 추가 함수 */
function assignClassDetection() {
  // <html> 요소의 class 속성 값을 가져온다.
  var html_class = html.getAttribute('class');
  var current_class = detectDeviceType();
  // 기존 클래스 속성과 달라진 경우에만 이 조건을 통과할 수 있다. (성능 이슈 해결)
  if(!html_class || assignClassDetection.old_class === current_class ) { return; } // 함수 종료
  // 기존 클래스 속성 값을 제거한다.
  if ( html.classList.contains( assignClassDetection.old_class ) ) {
    html.classList.remove( assignClassDetection.old_class );
  }
  // 현재 설정된 class 값을 <html> 요소의 class 속성으로 할당한다.
  html.classList.add(current_class);
  // 현재 설정된 class 값을 기억한다.
  assignClassDetection.old_class = current_class;
}

/** @function detectDeviceType - 기기의 유형 감지 함수 */
function detectDeviceType() {
  // 조건 문
  // switch ~ case
  // if ~ else
  var device_width = window.innerWidth;
  var type = null;

  if( device_width < detect_classes.mobile ) { type = 'mobile'; }
  else if ( device_width < detect_classes.tablet ) { type = 'tablet'; }
  else if ( device_width < detect_classes.desktop ) { type = 'desktop'; }
  else { type = 'wide'; }
  return type;
}

// 초기 class 속성 가져옴
var init_class = detectDeviceType();
// 초기 실행 시, <html> 요소에 class 속성 설정
html.classList.add( init_class );
// 초기 class 속성 값을 assignClassDetection 함수에 메모이제이션(기억)
assignClassDetection.old_class = init_class;

// 사용자가 창 크기를 조정할 때
window.onresize = assignClassDetection;
>>>>>>> day02
