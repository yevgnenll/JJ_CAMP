function capitalize(text){

    return text.split(' ').map(function(k){
        return k.replace(/^./, function($1){
            return $1.toUpperCase();
        });
    }).join(' ');
}

module.exports = capitalize;
