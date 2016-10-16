/*
 * 복습
 * */

/* query, queryAll을 만들어보자
 * 만들기 위해선 validate가 필요하니 validate 먼저 구현
 * */
function query(name, context){
}

/* data type check function
 * isDataType(Array) -> array
 * isDataType(Object) -> object
 * @param -> check data
 */
function isDataType(data){
    // return Object.property.toString.call(data)
    // isDataType(new Array) -> "[object Array]"
    // slice(8, -1) -> Array
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/* validate 함수
 * @param condition
 * @param error message
 * */
function validate(condition, error_message){
    if( condition ){
        throw new Error(error_message);
    }
}

function isString(data){ return isDataType(data) === 'string';}
function isNumber(data){ return isDataType(data) === 'number';}
function isArray(data){ return isDataType(data) === 'array';}
function isFunction(data){ return isDataType(data) === 'function';}
function isObject(data){ return isDataType(data) === 'object';}
function isElement(data){
    if(!data){ return false;}
    return data.nodeType === 1;
}

