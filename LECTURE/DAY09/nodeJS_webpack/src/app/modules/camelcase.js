function camelCase(text){
    return text.split(' ').map(function(k, i){
        if(i === 0){ return k; }
        return k.replace(/^./, function($1){
            return $1.toUpperCase();
        });
    }).join('');
}

module.exports = camelCase;
