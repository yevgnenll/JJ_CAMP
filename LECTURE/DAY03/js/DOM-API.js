// level 0 legacy dom
// 문서 객체에 대한 제한적 접근
console.log('문서에 존재하는 객체: 하이퍼링크', document.links);
console.log('문서에 존재하는 객체: 네임드앵커', document.anchors);
console.log('문서에 존재하는 객체: 이미지', document.images);
console.log('문서에 존재하는 객체: 폼', document.forms[0]);
// console.log('문서에 존재하는 객체: 폼 컨트롤', document.forms[0].elements[0]);
/* DOM Level 1 
// W3C 주관 NN, IE 회사가 공통 API를 제작함
document.getElementById();
document.getElementsByTagName();

현재 dom level 4
*/
/*
 *
 *
 */

function init(){
    var html = document.documentElement; // 바로나옴
    var head = document.head;
    var body = document.body;
    console.log(html);
    console.log(head);
    console.log(body);
    body.className = 'dom--legacy-method';
    // 코드의 실행 시점을 늦춘다.
    // DOM lv1 방식
    html = document.getElementsByTagName('html'); // nodelist, object like Array 형태로 나옴
    head = document.getElementsByTagName('head'); // [<head>]
    body = document.getElementsByTagName('body'); // [<body>]
    console.log(html);
    console.log(head);
    console.log(body); // 만약 script가 head안에 있다면 null 에러가 나타난다
    // body.setAttribute('class', 'dom-modern-method'); // 에러가 나온다 왜냐하면 array안에 있으므로
    // setAttribute가 권장방식이다(form은 className을 권장한다)
    body.item(0).setAttribute('class', 'dom-modern-method'); // 이 코드가 맞다
    // body[0].setAttribute('class', 'dom-modern-method'); // 이 방법도 가능하지만 body가 여러개있다는 혼란을 줄 수 있다
    // lv 1방식
    var first_a = document.getElementsByTagName('a').item(0);
    var second_a = document.getElementsByTagName('a').item(1);
    // lv 4 방식
    console.log(first_a, second_a);

}
window.onload = init; // load 권장하는 이벤트는 아님 -> 이미지가 다 뜨고나서 나옴
// DOMcontentLoaded 이벤트 (이미지 로드와 상관 없이 이벤트 발생)
window.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
}, false);
// onload보다 DOMcontentLoaded 가 더 빠르기 때문에 DOMContentLoaded 가 먼저 나온다
