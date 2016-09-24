(function(){

    function init(){
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
    };

    window.onload = init();
    // 이 부분은 jQuery의 ready와 같다
})();

