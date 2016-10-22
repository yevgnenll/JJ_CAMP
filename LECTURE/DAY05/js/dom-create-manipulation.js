(function(global){

    'use strict';

    var body = query('body');
    var container = createEl({
        'element': 'article',
        'attr': {'id': 'lecture' },
        'text': 'independency article',
        'finish': function(){
            this.onmouseover = function(){
                this.style.background = '#fb4848';
            };
            appendTo(this, body);
        }
    });

}(this));
