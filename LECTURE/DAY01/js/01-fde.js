(function(){

    function init(){

        // var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
        var body = document.body;
        // 1. 문서에서 단락 요소를 찾아 변수에 참조한다
        var target_p ;
        target_p = document.getElementsByTagName('p').item(0);
         // h1 요소를 생성하고
         // text 내용으로 Javascript Log라는 텍스트를 동적으로 생성한다
         // 단계 1.
        var headline = document.createElement('h1');
        var headline_content = document.createTextNode('Javascript Log');

        // 생성된 각 노드 검증
        // console.log('headline', headline);
        // console.log('headline content', headline_content);
        // headline -> parent , headline_content -> child
        // DOM API의 appendChild 사용
        // 단계 2.
        headline.appendChild(headline_content);
        // 합쳐진 노드 검증
        // console.log('headline', headline);
        // 단계 3.
        // DOM API
        // ~ 앞에 삽입
        // 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
        target_p.parentNode.insertBefore(headline, target_p);

        // 1. 추가할 노드 만들기
        var add_ul = document.createElement('ul');
        var array_list = make_list(add_ul, ['IOT', 'VR', 'AI']);

        target_p.parentNode.insertBefore(array_list, target_p.nextSibling);

        var categories = 'IOT VR IT'.split(' ');
        // modern ES5 shim JS Library -> 중단 불가
        categories.forEach(function(item, index){
            // <li>item</li>
            var li = document.createElement('li');
            var li_content = document.createTextNode(item);
            li.appendChild(li_content);
            // <ul>요소 내부에 삽입

            add_ul.appendChild(li);
        });
        body.appendChild(add_ul);

        // legacy -> 중단 불가
        var a = 0, l = categories.length;
        for( ; a<l; a++){
            console.log(categories[a], a);
        }

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

    window.onload = init();
    // 이 부분은 jQuery의 ready와 같다
})();

