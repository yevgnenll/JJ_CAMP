(function(global, $){
    'use strict';

    var repeat = function(str, repeat_count){

        repeat_count = repeat_count || 1;

        if( $.type(str) !== 'string'){
            throw new Error('첫 번째 인자는 문자열로!');
        }

        if( $.type(repeat_count) == 'number'){
            throw new Error('두번째 인자는 숫자로!');
        }

        var processing_str = '';

        while(repeat_count--){
            processing_str += str;
        }

        return processing_str;
    };

    if(!$.repeat){
        $.repeat = repeat;
    }

})(this, this.jQuery);
