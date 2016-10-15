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

function isFunction(data){ return isDataType(data) === 'function' }

function isString(property){ return isDataType(property) === 'string'; }

function isArray(data){ return isDataType(data) === 'array';}

function isElement(node){
    if(!node){return false;}
    return node.nodeType === 1;
}

/* @function detectFeature 
 * 이 기능이 브라우저에서 사용 가능한건가?
 * */
function detectFeature(property, element){
    // element = element || detectFeature.dummy;
    // validate( !isElement(element), '문서 요소 객체가 아닙니다');
    // validate( element.nodeType !== 1, '문서 요소 객체가 아닙니다');
    validate( !isString(property), '2번째 인자는 문자 유형이어야 합니다');
   //  validate( isDataType(property) !== 'string', '2번째 인자는 문자 유형이어야 합니다');

    return property in detectFeature.dummy.style;
}

// 한가지 ele만 체크하면 문제가 되지 않는것인가?
detectFeature.dummy = document.createElement('div');

// modernizer login
function detectFeatures(properties, element){
    detectFeatures.element = (element && isElement(element)) || detectFeatures.root_element;
    validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.');

    for( let property, i=properties.length; (property = properties[--i]);){
        detectFeatures.property = property
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
