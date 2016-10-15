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

function is_validate(condition, excute){
    // call back pattern 어떤일이 완료가 되면 그때 실행시킨다
    if( excute && typeof excute === 'function' ){ excute(); }
    return condition ? true : false;
}

// javascript 데이터 유형을 완벽하게 체크하기 위해서
function isDataType(data){
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
