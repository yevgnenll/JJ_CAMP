var a = {
    'name': 'alpha',
    'nickname': 'alphago',
    'getName': function(){
        return this.name;
    }
};

var b = {
    'name': 'beta',
    'nickname': 'betago',
    'setName': function(name, nickname){
        this.name = name;
        this.nickname = nickname;
    }
}

/*
 * method 빌려쓰기 패턴
 * .call(), .apply() 기능면에서는 유사하나
 * 전달 인자의 개수가 2개 이상일때, call의 경우는 낱개로 전달
 * apply는 배열 유형으로 전달해야 한다
 * */
console.log(a.getName.call(b));
// b.setName.call(a, 'hello world');
b.setName.apply(a, ['hi', 'nick']);
console.log(a.name);

// arguments 객체, ES3, 
function sum(){
    var total = 0;
    /*
    for(var args in arguments){
        total += parseInt(arguments[args]);
        console.log(args, arguments[args]);
    }
    */
    var i=0, arg, l = arguments.length;
    while((arg = arguments[--l])){
        total += arg;
    }
    return total;
}
console.log('a',sum(213, -10, 90, 11, 1023));

// ES6 chrome, firefox
function getSomeCoffee(who, ...collection){
    console.log(who);
    console.log(collection);
}


function borderRadius(radius){
    return `
        -webkit-border-radius: ${radius};
        -moz-border-radius: ${radius};
        border-radius: ${radius};
    `;
}
