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
    if( is_validate(typeof selector !== 'string'), function(){
        console.error('첫 번째 전달인자는 문자열로 전달해야 합니다');
    });
    if( is_validate(context.nodeType !== 1 && context.nodeType !== 9 ), function(){
        console.error('첫 번째 전달인자는 문자열로 전달해야 합니다');
    });
    // __query_validation(selector, context);
    return context.querySelectorAll(selector);
}

function __query_validation(selector, context){
    // validate argument
    if( typeof selector !== 'string'){
        console.info('전달인자는 문자열로 전달해야 합니다');
        return null;
    }
    
    if( context.nodeType !== 1 && context.nodeType !== 9 ){
        throw new Error('두번째 전달인자는 요소노드여야 합니다.');
        // console.error('두번째 전달인자는 요소노드여야 합니다.');
        // return null;
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
    if( typeof name !== 'string'){ throw new Error(' 전달된 인자는 문자 유형이어야만 합니다'); }
    if( context && context.nodeType !== document.ELEMENT_NODE ){
        throw new Error('context 객체는 문서 요소 객체여야만 합니다.');
    }
    if(!context){
        context = document;
    }

    return context.getElementsByTagName(name);
}

function id(name){
    validate(typeof name !== 'string', ' 전달된 인자는 문자 유형이어야만 합니다');
    return document.getElementById(name);
}

function classEls(name, context){
    validate(!isString(name), 'name 인자는 문자열이어야 합니다');
    // 최신 웹브라우져 -> getElementByClassName()
    if( !document.getElementsByClassName ){
        return (((context && isElement(context)) && context) || document).getElementsByClassName(name);
    } else {
    // 그렇지 않다면
    // 문서 객체를 순환하여 class 속성 값이 일치하는 집합을 배열로 반환하는 함수
        var all_els = tag('*', document.body);
        var els_length = all_els.length;
        var el = null;
        var class_name = '';
        var filtered_class = [];
        console.log(els_length);

        var reg = new RegExp('(^|\\s)+' + name + '(\\s|$)+');

        while(els_length--){
            el = all_els[els_length];
            class_name = el.getAttribute('class');
            if(reg.test(class_name)){
                filtered_class.push(el);
            }
        }
        return filtered_class;
    }
    
}

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

/* @function detectFeature 
 * 이 기능이 브라우저에서 사용 가능한건가?
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

function createEl(node_name, prop_id, prop_class){
    validate(!isString(node_name), 'node_name 파라미터는 반드시 문자열이 입력되어야 합니다');
    validate(prop_id && !isString(prop_id), 'prop_id 파라미터는 문자열이 입력되어야 합니다');
    validate(prop_class && !isString(prop_class), 'prop_class 파라미터는 문자열이 입력되어야 합니다');
    var created_el = document.createElement(node_name);
    prop_id && created_el.setAttribute('id', prop_id);
    prop_class && created_el.setAttribute('class', prop_class);

    return created_el;
}
/*
 * 메모리제이션

// 한가지 ele만 체크하면 문제가 되지 않는것인가?


// modernizer login
function detectFeatures(properties, element){
    detectFeatures.element = (element && isElement(element)) || detectFeatures.root_element;
    validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.');

    for( let property, i=properties.length; (property = properties[--i]);){
        detectFeatures.property = property;
        isValidate(detectFeature(property), detectFeatures.success, detectFeatures.fail);
    }
}

detectFeatures.root_element = document.documentElement; // <html>

detectFeatures.success = function(){
    detectFeatures.element.classList.add(detectFeatures.property);
}
detectFeatures.fail = function(){
    detectFeatures.element.classList.add('no-' + detectFeatures.property);
}
detectFeatures.element = null;
detectFeatures.property = null;
*/
