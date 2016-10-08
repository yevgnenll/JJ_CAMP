<<<<<<< HEAD
(function(){

    function init(){

        // var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
        var body = document.body;
        var target_p ;
        target_p = document.getElementsByTagName('p').item(0);
        window.setTimeout(function(){
            createHeadline('h1', 'Javascript Log', target_p);
            createHeadline('h2', 'Javascript hi there', target_p);
        }, 2000);
        
        var ul = document.createElement('ul');
        setTimeout(function(){
            createUlList(ul, 'IOT VR AI IT', body);
            createList('ul', 'hi there coffe cake', body);
        },4000);
    };

    function make_list(node, lists){
        for(var i=0; i<lists.length; i++){
            var parent_li = document.createElement('li');
            var list_content = document.createTextNode(lists[i]);
            parent_li.appendChild(list_content);
            node.appendChild(parent_li);
        }

        return node;
    };

    function createHeadline(h_lv, content, target){
        
        if( typeof h_lv !== 'string'){ throw new Error('첫 번째 인자는 문자열이여야 한다.'); }
        if( typeof content !== 'string'){ throw new Error('두 번째 인자는 문자열이여야 한다.'); }
        if( target && target.nodeType !== 1){ throw new Error('세 번째 인자는 노드여야 한다.'); }
         
        var headline = document.createElement(h_lv);
        var headline_content = document.createTextNode(content);
        headline.appendChild(headline_content);
        
        if( target )
            target.parentNode.insertBefore(headline, target);

        return headline;
    };

    function createUlList(ul_node, contents_string_with_blank, target){

        if( ul_node && ul_node.nodeType !== 1){ throw new Error('첫 번째 인자는 노드여야 한다'); }
        if ( typeof contents_string_with_blank !== 'string'){ throw new Error('두 번째 인자는 문자열이여야 한다.'); }
        if( target && target.nodeType !== 1){ throw new Error('세 번째 인자는 노드여야 한다.'); }

        var lists = contents_string_with_blank.split(' ');
        lists.forEach(function(item, index){
            var li = document.createElement('li');
            var li_content = document.createTextNode(item);
            li.appendChild(li_content);
            ul_node.appendChild(li);
        });
        target.appendChild(ul_node);

        return ul_node;
    };

    function createList(list_type, contents, target){

        var categories;

        if(typeof list_type !== 'string'){throw new Error('첫 번째 인자는 노드여야 한다'); }
        if(contents && typeof contents === 'string'){
            categories = contents.split(' ');
        }
        if(contents && typeof contents === 'array'){
            categories = contents;
        }
        if ( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 합니다.'); }


        var list = document.createElement(list_type);

        categories.forEach(function(item, index){
            var li = document.createElement('li');
            var li_content = document.createTextNode(item);
            li.appendChild(li_content);
            list.appendChild(li);
        });
        
        if( target ){
            target.appendChild(list);
        }

        return list;
    
    };

    window.onload = init();
    // 이 부분은 jQuery의 ready와 같다
})();

=======
/*! fde.js © yamoo9.net, 2016 */

/** @function initialization */
function initialization() {
  // var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
  var body = document.body; // HTML DOM 방식
  // 문서에서 <p> 요소를 찾아 변수에 참조
  // 문서에서 첫번째 <p> 요소를 찾아온다.
  var target_p = document.getElementsByTagName('p').item(0);
  // console.log(target_p);

  // 지연 시켜 호출 할 함수 설정
  window.setTimeout(function() {
    createHeadline('h1', 'JavaScript Log', target_p);
    createHeadline('h2', 'JavaScript Star', target_p);
  }, 2000);

  var list = null;

  window.setTimeout(function() {
    list = createList('ul', 'IOT VR IT');
    collection = createList('ol', 'HTML CSS JavaScript');
    body.appendChild(list);
    var t = body.firstElementChild;
    t.parentNode.insertBefore(collection, t);
  }, 4000);

}

/** @function createHeadline */
function createHeadline(h_lv, content, target) {
  // 유효성 검사
  if( typeof h_lv !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 한다.'); }
  if( typeof content !== 'string' ) { throw new Error('두번째 인자도 문자열이어야 한다.'); }
  if( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 한다.'); }
  // 단계 1.
  // <h1> 요소를 생성하고,
  var headline = document.createElement(h_lv);
  // 텍스트 내용으로 `JavaScript Log` 라고하는 텍스트를 동적으로 생성한다.
  var headline_content = document.createTextNode(content);
  // 생성된 각 노드(Node) 검증
  // console.log('headline:', headline);
  // console.log('headline_content:', headline_content);
  // 각 노드를 합치기(둘 중 하나는 부모 노드, 자식 노드가 되어야 함)

  // 단계 2.
  // DOM API: ~ 자식으로 삽입
  // 부모노드.appendChild(자식노드)
  headline.appendChild(headline_content);
  // 합쳐진 노드 결과 검증
  // console.log('headline:', headline);

  // 단계 3.
  // DOM API: ~ 앞에 삽입
  // 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
  if ( target ) {
    target.parentNode.insertBefore(headline, target);
  }
  return headline;
}

/** @function createList */
function createList(list_type, contents, target) {
  var categories;
  // 유효성 검사
  if ( typeof list_type !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 합니다.'); }
  /**
   * --------------------------------
   * ul 생성
   * li 생성 x3
   * 콘텐츠 생성 x3
   * li + 콘텐츠 접합 x3
   * ul + li x3 접합
   * ul > target_p 뒤에 삽입
   */

  // <ul>
  //   <li>IOT</li>
  //   <li>VR</li>
  //   <li>IT</li>
  // </ul>
  if ( contents && typeof contents === 'string' ) {
    categories = contents.split(' ');
  }
  if ( contents && contents instanceof Array ) {
    categories = contents;
  }
  if ( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 합니다.'); }

  // console.log(categories);

  // Legacy 방법
  // var a = 0, l = categories.length;
  // for( ; a<l; a=a+1 ) {
  //   console.log( categories[a], a );
  // }

  // 크로스 브라우징 이슈: ES5 Shim JS Library
  // Modern 방법

  var list = document.createElement(list_type);

  categories.forEach(function(item, index) {
    // console.log(item, index);
    // <li>item</li>
    var li = document.createElement('li');
    var li_content = document.createTextNode(item);
    li.appendChild(li_content);
    // <list> 요소 내부에 삽입
    list.appendChild(li);
  });

  // console.log(list);
  if ( target ) {
    target.appendChild(list);
  }
  return list;

  // ES2015
  // for (category of categories) {
  //   console.log(category);
  // }
}


// window.alert('excute javascript code');
// initialization(); // 함수는 언제 실행되어야 하는가? -> 문서가 로드된 이후

window.onload = initialization;
>>>>>>> day02
