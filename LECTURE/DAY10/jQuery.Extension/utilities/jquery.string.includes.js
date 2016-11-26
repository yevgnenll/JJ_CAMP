(function(global, $){
    'use strict';

    // console.log('hey you!'.includes('you'));

    var includes = function(str, compare){
        if(!$.type(str) === 'string'  || !$.type(compare) === 'string'){
            throw new Error('첫 번째 인자는 문자 유형이어야 한다.');
        }
        return str.indexOf(compare) > -1;
    };

    if(!$.includes){
        $.includes = includes;
    }

})(this, this.jQuery);
