this.DOM_Helper = (function(global){
    'use strict';

      // 라이브러 정보(Private Data)
      var version = '1.0.0';
      var author  = 'yevgnenll';

    /** 
     * function cLog 사용자 정의 CSS 스타일을 가미한
     * console.log() */
    function cLog(input, console_style){

        // input은 문자열 이어야 한다는 것을 검증
        validate(!isString(input), '문자열을 입력해야 합니다');

        // option: console_style
        // default style
        console_style = console_style || cLog.styles;
        if(input.indexOf('%c') > -1){
            console.log(input, console_style);
        } else {
            console.log(' %c' + input, console_style);
        }
    };

    cLog.styles = 'color #fe4940; font-size: 1.2rem;';

    /*
     * @function query() 
     * */
    // function query(selector, context = document){
    function query(selector, context){
        context = context || document;
        __query_validation(selector, context);
        return context.querySelector(selector);
    }

    function queryAll(selector, context){
        context = context || document;
        __query_validation(selector, context);
        return context.querySelectorAll(selector);
    }

    function __query_validation(selector, context){
        if( typeof selector !== 'string'){
            console.info('전달인자는 문자열로 전달해야 합니다');
            return null;
        }
        
        if( context.nodeType !== 1 && context.nodeType !== 9 ){
            throw new Error('두번째 전달인자는 요소노드여야 합니다.');
        }

        return context;
    }

    /*
     * 선생님 code
     * */
    function _queryAll(selector, context){
        // validate argument
        if( typeof selector !== 'string'){
            console.info('전달인자는 문자열로 전달해야 합니다');
            return null;
        }

        if( typeof context === 'string'){
            context = _query(context);
        }
        
        if( context.nodeType !== 1 && context.nodeType !== 9 ){
            throw new Error('두번째 전달인자는 요소노드여야 합니다.');
            // console.error('두번째 전달인자는 요소노드여야 합니다.');
            // return null;
        }

        context = context || document;

        return context.querySelectorAll(selector);
    }

    function _query(selector, context){
        return _queryAll(selector, context)[0];
    }

    function tag(name, context){
        validate(typeof name !== 'string', '전달된 인자는 문자 유형이어야만 합니다');
        context && validate(context.nodeType !== document.ELEMENT_NODE, 'context 객체는 문서 요소 객체여야만 합니다.');
        context = context || document;
        return context.getElementsByTagName(name);
    }

    function id(name){
        validate(typeof name !== 'string', ' 전달된 인자는 문자 유형이어야만 합니다');
        return document.getElementById(name);
    }

    var classEls = (function(){
        var _classEls = null;

        if( !document.getElementsByClassName ){
            _classEls = function(name, context){
                validate(!isString(name), 'name 인자는 문자열이어야 합니다');
                context = (context && isElement(context)) && context || document;
                return context.getElementsByClassName(name);
            };
        } else {
            /* 모든 elements를 가져온다
             * 거기서 class가 있다면 name이 포함된 class인지 확인한다
             * coffee 라는 클래스를 찾는다면 cof, co 는 검색이 되면 안되므로
             * regular expression을 사용한다
             * 해당하는것만 모아서 array롤 반환한다
             * */
            _classEls = function(name, context){
                validate(!isString(name), 'name 인자는 문자열이어야 합니다');
                // 1. get all elemnts
                var elements = tag('*');
                // 2. get elements' length
                var elements_length = elements.length;
                // 3. each element
                var element = null;
                // 4. class name if exists
                var class_name = null;
                // 5. filter class name with reg expression
                var reg = new RegExp('(^|\\s)+' + name + '($|\\s)+');
                // 6. result array
                var result = [];

                while(elements_length--){
                    element = elements[elements_length];
                    class_name = element.getAttribute('class');
                    if(reg.test(class_name)){
                        result.push(element);
                    }
                }
                return result;
            }
        }

        return _classEls;
    }());

    function validate(condition, error_message){
        // error is exist function will be stop
        if( condition ){
            throw new Error(error_message);
        }
    }

    function isValidate(condition, success, fail){
        // callback pattern 어떤일이 완료가 되면 그때 실행시킨다
        if(condition && success && isFunction(success) ){ success(); }
        if(!condition && fail && isFunction(fail) ){ fail(); }
        return condition ? true : false;
    }

    // javascript 데이터 유형을 완벽하게 체크하기 위해서
    function isDataType(data){
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    }
    function isNumber(data){ return isDataType(data) === 'number';}

    function isBoolean(data){ return isDataType(data) === 'boolean'; }

    function isObject(data){ return isDataType(data) === 'object'; }

    function isTextNode(node){
        if(!node){ return false; }
        return node.nodeType === 3;
    }

    function isEmptyObject(data){ 
        // 속정이 존재하는지 확인
        // 속성이 존쟁하지 않는다면? 텅빈 객체()
        var prop_length = 0;
        var d = 0;
        for(var prop in data ){
            prop_length++;
            ++d;
        }
        console.log(prop_length, 'd', d);
        return isObject(data) && !prop_length;
    }

    function isString(property){ return isDataType(property) === 'string'; }

    function isFunction(data){ return isDataType(data) === 'function' }

    function isArray(data){ return isDataType(data) === 'array';}

    function isElement(node){
        if(!node){return false;}
        return node.nodeType === 1;
    }

    /** @function isNodeList() */
    function isNodeList(node) {
        if (!node) {return false;}
        return isDataType(node) === 'nodelist';
    }
    /** @function isTextNode() */
    function isTextNode(node) {
        if (!node) { return false; }
        return node.nodeType === 3;
    }
    /** @function isDocument() */
    function isDocument(node) {
        return node.nodeType === 9;
    }

	/** @function isArguments() */
    function isArguments(obj) {
        return isDataType(obj) === 'arguments';
    }

    /* @function detectFeature 
     * 이 기능이 브라우저에서 사용 가능한건가?
     * animation, flex 등의 기능이 사용가능하다면 class name에 가능 유무를 나타낸다.
     * */
    // 클로져
    var detectFeatures = (function(){

        var el = null;
        var prop = null;
        var root_element = document.documentElement;

        function success(){
            el.classList.add(prop);
        };

        function fail(){
            el.classList.add('no-' + prop);
        };
        function _detectFeature(properties, element){

            // el = ((element && isElement(element)) && element) || root_element;
            // a = true && 'hi';        a -> 'hi
            // a = false && 'hello';    a -> false
            // -> 아래가 정석
            if( element && isElement(element)){
                el = element;
            } else {
                el = root_element;
            }
            validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.');
            for( var property, i=properties.length; (property = properties[--i]);){
                prop = property
                isValidate(detectFeature(property), success, fail);
            }
        }

        return _detectFeature;

    }());


    function detectFeature(property, element){
        // element = element || detectFeature.dummy;
        // validate( !isElement(element), '문서 요소 객체가 아닙니다');
        // validate( element.nodeType !== 1, '문서 요소 객체가 아닙니다');
        validate( !isString(property), '2번째 인자는 문자 유형이어야 합니다');
       //  validate( isDataType(property) !== 'string', '2번째 인자는 문자 유형이어야 합니다');

        return property in detectFeature.dummy.style;
    }
    detectFeature.dummy = document.createElement('div');


    function createEl(node_name, properties, contents){

        validate(!isString(node_name) && !isObject(node_name), 'node_name 파라미터는 반드시 문자열이 입력되어야 합니다');
        validate(properties && !isObject(properties), 'properties는 객체 유형이 전달되어야 합니다.');

        var created_el, create_text;

        if(isObject(node_name) && isString(node_name.element)){

            created_el = document.createElement(node_name.element);
            node_name.attr && attrs(created_el, node_name.attr || {});
            node_name.text && append(created_el, createText(node_name.text));
            node_name.finish && isFunction(node_name.finish) && node_name.finish.call(created_el);
            // call은 빌려쓰기 다른 객체에 있는 함수를 빌려쓴다

        } else {

            created_el = document.createElement(node_name);
            properties && attrs(created_el, properties);
            if(contents){
                createed_text = createText(contents);
                append(created_el, createed_text);
            }
        }

        return created_el;
    }

    function createText(content){
        validate(!isString(content), '텍스트노들르 생성하기 위한 문자열을 이력하여야 합니다');
        return document.createTextNode(content);
    }

    function attrs(element, properties){

        validate(!isElement(element), 'element는 요소노드여야 합니다.');
        validate(!isObject(properties), 'properties는 객체 유형이여야 합니다.');

        for(var prop in properties){
            var value = properties[prop];
            element.setAttribute(prop, value);
        }
    }

    function append(parent_node, child_node){
        validate(!isElement(parent_node), '부모노드는 요소노드를 전달해야 합니다');
        validate(!isElement(child_node) && !isTextNode(child_node), '자식 노드는 요소노드, 또는 텍스트노드를 전달해야 합니다');
        parent_node.appendChild(child_node)
    }

    function appendTo(child_node, parent_node){
        append(parent_node, child_node);
    }

    function insertBefore(insert_node, target_node){

        validate(!isElement(insert_node) || !isElement(target_node), '전달 인자는 모두 요소노드여야 합니다');

        target_node.parentNode.insertBefore(insert_node, target_node);
    }

    function before(target_node, insert_node){
        // validation은 insertBefore에서 실행됨
        insertBefore(insert_node, target_node);
    }

    function insert(insert_node, target_node){

        console.log(insert_node, target_node);
        validate(!isElement(insert_node) || !isElement(target_node), '전달 인자는 모두 요소노드여야 합니다');

        var next = target_node.nextSibling;
        while(isElement(next)){
            if(!isElement(next)){
                next = next.nextSibling;
            }
        }
        if(!isElement(next)){
            append(query('body'), insert_node);
        } else {
            insertBefore(insert_node, next);
        }

    }

    function insertAfter(insert_node, target_node){

        validate(!isElement(insert_node) || !isElement(target_node), '전달 인자는 모두 요소노드여야 합니다');   
        var next_node = target_node;
        do{
            next_node = next_node.nextSibling;;
        } while( next_node && !isElement(next_node));

        next_node ? insertBefore(insert_node, next_node) : appendTo(insert_node, target_node.parentNode);

    }

    /** @function makeArray() */
    function makeArray(like_arr_obj) {
        // 배열과 유사한 데이터 arguments, nodeList를
        // 배열로 변경하려면? 어떤 로직이 필요할까요?

        console.log(like_arr_obj);
        validate ( 
            !isNodeList(like_arr_obj) && !isArguments(like_arr_obj),
            'nodeList 또는 arguments 객체를 전달해야 합니다.'
        );

        // 방법 1. 복습
        /*
        var converted_array = [];
        for ( var i=0, l=like_arr_obj.length; i<l; i++ ) {
        converted_array.push(like_arr_obj[i]);
        }
        return converted_array;
        */

        // 방법 2. 네이티브 배열의 기술을 활용
        return Array.prototype.slice.call(like_arr_obj, 0);
        // return [].slice.call(like_arr_obj, 0); // 위의 코드와 같다
    }

    /** @function each() */
    function each(data, callback) {

        // console.log('data:', data);
        // console.log('callback:', callback);
        if( data.forEach ){
            data.forEach(function(item, idx){
                // call, apply 차이
                // callback.call(data, arguments[0], arguments[1], ...);
                callback.call(data, idx, item, data);
                // callback.apply(data, arguments);
            });
        } else {
            for(var i=0, l=data.length; i<l; i++){
                var item = data[i];
                // first parameter data is context
                callback.call(data, i, item, data);
                
            }
        }
    }

    // ------------------------------------------------------
    // 클로저 패턴(객체를 반환)
    return {
        'info': {
        'version': version,
        'author': author
        },
        'util': {
        'cLog': cLog,
        'isNumber': isNumber,
        'isString': isString,
        'isBoolean': isBoolean,
        'isFunction': isFunction,
        'isArray': isArray,
        'isObject': isObject,
        'isEmptyObject': isEmptyObject,
        'isElement': isElement,
        'isNodeList': isNodeList,
        'isTextNode': isTextNode,
        'isDocument': isDocument,
        'validate': validate,
        'makeArray': makeArray,
        },
        'id'       : id,
        'tag'      : tag,
        'classEls' : classEls,
        'queryAll' : queryAll,
        'query'    : query,
        'each'     : each,
    };

}(this));
