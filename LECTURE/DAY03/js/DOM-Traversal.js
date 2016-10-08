// .col-6{}
// module design: BEM / OOCSS / SMACSS -> 공통점은 id를 사용하지 마라
// IE 6, 7에서는 왜 id 사용을 권장했을까?
// class 존재 유무 확인 -> 모든 class 요소 수집된
var filtered_el_list = [];
var all_els = document.getElementsByTagName('*');
// 수집된 모든 요소를 순환하여 
for(var i=0; i<all_els.length; i++){
    var el = all_els[i];
    //class 속성 값이 존재하고, 값이 일치하는지 확인한 후
    // 해당 요소를 반환해야 한다
    if(el.className === 'col-6'){
    // if(el.className.indexOf('col-6') > -1){
        filtered_el_list.push(el);
    }
}
console.log('filtered_el_list:', filtered_el_list);

var node_collection = document.body.childNodes; // 모든 노드 유형 수집
var el_node_collection = document.body.children; // 요소노드 유형만 수집 object like Array
var node_els = [];
for(var node, i=node_collection.length; (node=node_collection[--i]); ){
    if(node.nodeType === document.ELEMENT_NODE){ // 1 -> node라는 뜻
        // ELEMENT_NODE === 1
        // ATTRIBUTE_NODE === 2
        // TEXT_NODE === 3
        // 주석은 8
        node_els.push(node);
    }
}
console.log('node_els:', node_els);
