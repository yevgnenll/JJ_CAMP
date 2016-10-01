(function(){

    function isHaveClass(){
        var html = document.documentElement;
        return html.className !== '';
    };

    function assignClassNameHtml(class_name){
        if(typeof class_name !== 'string')
            throw new Error('문자열 인자가 들어와야 합니다');
        var html = document.documentElement;
        console.log('isHaveClass', isHaveClass(), ', html className', html.className);
        html.className += (isHaveClass() ? ' ' : '') + class_name;
    };

    function detectDevicePixcelRatio(){
        var dpr = window.devicePixelRatio || 1; // ratio isn't exist
        var is_retina = window.devicePixelRatio === 2;
        var is_retinaHD = window.devicePixelRatio === 3;

        assignClassNameHtml('@' + dpr + 'x');

        return {
            'retian': is_retina,
            'retianHD': is_retinaHD,
        };
    };

    var _location = window.location;
    // console.dir(_location);
    var hashed = 'home about works contact'.split(' ');

    assingLocationHash( hashed[0] );

    function assingLocationHash( hash ){
        _location.hash = hash;
    };

    for(var h = hashed.length, n; (n =  hashed[--h]) ; ){
        window.setTimeout( (function(n){
            return function(){
                // console.log(n);
                assingLocationHash(n);
            };
        })(n), h * 1000);
    };

})();
