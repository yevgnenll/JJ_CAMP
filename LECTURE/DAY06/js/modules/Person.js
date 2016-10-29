// javascript module pattern
// javascript는 모듈이 존재하지 않았기 때문에 이와같은 방법을 사용하여 모듈생성
// ES6에서는 공식으로 모듈을 언어 차원에서 지원한다.
(function(global){
    'use strict';

    // 사람을 만들고 싶다
    function Person(
        name,
        gender,
        age,
        height,
        weight,
        hobby,
        health,
        sickness){
        'use strict';

        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.hobby = hobby;
        this.health = health;
        this.sickness = sickness;
        this.eat = eat;
        this.run = run;
        this.sleep = sleep;
    };
    function eat(what){
        return this.name + '은' + what + '을 먹었다';
    };
    function run(how_much){
        return this.name + '은' + how_much + '만큼 달렸다.';
    };
    function sleep(time){
        return this.name + '은' + time + '만큼 잤다.';
    };

    global.Person = Person;

})(this);


var cocoaman = new Person(
    '코코아',
    '남성',
    23,
    '167cm',
    '52kg',
    '독서',
    '건강',
    '감기'
);


console.log(cocoaman);
