// 전역 객체 Global Object
// window 생성자 - 생성 -> 객체(object, instance)
(function(){
    console.log('window:', window);
    // window screen
    // 사용자의 스크린 화면에 대한 정보 제공
    // ex) 화면 가록 폭 길이, 세로폭 길이
    // 화면의 가용(Available) 가능한 실제 폭 길이
    // 1680 * 1050 -> device마다 다름 평균치: 1360px, 국내1920px
    // avail은 위에 시간이 나오는 칸 같은곳이 빠진다
    console.log('window.screen', window.screen);

    // 현재 사용자의 화면에서 실제 사용가능하지 안흔ㄴ 공간의 폭은 얼마인가?  
    var full_height = window.screen.height;
    var avail_height = window.screen.availHeight;
    var unavail_height = full_height - avail_height;

    // console.log('full_height', full_height);
    // console.log('avail_height', avail_height);
    // console.log('unavail_height:', unavail_height);

    // orientation?
    var orient = window.screen.orientation; // Object <- ScreenOrientation 생성자 함수 
    /*
    orient.angle; // 각도
    orient.lock() // 회전차단
    orient.onchange = function(){

    };
    */
    // Navigator 객체 
    // 웹 브라우저의 정보 제공
    // 어떤 운영체제를 사용자가 쓰고 있나?
    // 플러그인은 무엇을 사용하고 있는가?
    // 웹 브라우저의 코드네임, 개발엔진 
    // 이러한 정보를 제공해줌
    var navigator = window.navigator;
    console.log('navigator', navigator.platform);
    // 미션. 사용자가 접속한 환경은 window or mac?
    // 검토한 사용자의 환경을 식별하기 위한 방법으로 class 속성에
    // 감지된 해당 플랫폼 키워드를 추가하는 것이다
    // window -> win32 나는 MacIntel
    var body = document.body;
    body.classList.add(navigator.platform);

    var html = document.documentElement;

    function detectPlatform(){
        var is_window = navigator.platform.toLowerCase().indexOf('win') > -1; // return type string 'Mac', 'Win32'
        var identifier = is_window ? 'win' : 'mac';
        // os가 window이면 win을 아니면 mac을 추가하자
        var existed_class = html.className !== '';
        console.log('exist', existed_class);
        html.className += (existed_class? ' ': '') + identifier;
    };

    function detectDevice(device_name){
        // todo: mobile or another device
        if( typeof device_name !== 'string')
            throw new Error('문자열 인자를 받습니다');
        else 
            device_name = device_name.toLowerCase();

        var user_agent = window.navigator.userAgent.toLowerCase().indexOf(device_name) > -1;

        if( user_agent )
            assignClassNameHtml(device_name);
        return user_agent;
    };

    function isHaveClass(){
        var html = document.documentElement;
        return html !== '';
    }

    function assignClassNameHtml(class_name){
        if(typeof class_name !== 'string')
            throw new Error('문자열 인자가 들어와야 합니다');
        var html = document.documentElement;
        html.className += (isHaveClass() ? ' ' : '') + class_name;
    }

    function loopDetectDevices(checking_devices){
        var is_string = typeof checking_devices !== 'string';
        // array or string?
        // checking_devices is exist or not
        // 문자라면 처리
        if( !checking_devices ){ throw new Error('전달인자는 필수입니다');}
        // typeof null or typeof [] -> objects
        // [] instanceof Array === [] instanceof Object 이런 약점이 있다
        if( !is_string || !(checking_devices instanceof Array))
            throw new Error('전달인자는 문자 또는 배열만 가능합니다');
        if(is_string){
            // 문자 -> 배열로 변환
            checking_devices = checking_devices.split(' ');
        }

        var len_devices = checking_device.length;

        while(len_devices){
            detectDevice(checking_device[len_devices -= 1]);
            console.log(checking_device[len_devices]);
        }
    };

    var checking_device = 'ios iemobile kindle iphone ipad android nexus sm-g'.split(' ');

})();
