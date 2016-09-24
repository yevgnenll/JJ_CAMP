(function(){

    function init(){

        // var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
        var body = document.body;
        var target_p ;
        target_p = document.getElementsByTagName('p').item(0);
        window.setTimeout(function(){
            createHeadline('h1', 'Javascript Log', target_p);
        }, 2000);
        
                
        var add_ul = document.createElement('ul');
        setTimeout(function(){
            var array_list = make_list(add_ul, ['IOT', 'VR', 'AI']);
            target_p.parentNode.insertBefore(array_list, target_p.nextSibling);

        },1000);

        setTimeout(function(){
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
        },2000);

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
        if( target && target.nodeType !== 1){ throw new Error('세 번째 인자는 문자열이여야 한다.'); }
         
        var headline = document.createElement(h_lv);
        var headline_content = document.createTextNode(content);
        headline.appendChild(headline_content);
        
        if( target )
            target.parentNode.insertBefore(headline, target);

        return headline;
    };

    window.onload = init();
    // 이 부분은 jQuery의 ready와 같다
})();

