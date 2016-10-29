// javascript module pattern
// javascript는 모듈이 존재하지 않았기 때문에 이와같은 방법을 사용하여 모듈생성
// ES6에서는 공식으로 모듈을 언어 차원에서 지원한다.
(function(global, yl){
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
        /*
         * 비효율적인 접근이다 매번 만들어줘야 한다
        this.eat = eat;
        this.run = run;
        this.sleep = sleep;
        */
    };
    /* 프로토타입 객체
     * 생성자함수의 prototype 속성으로 포로토타입 객체에 접근 가능
     * 자바스크립트의 모든 함수는 선언과 동시에 기본적으로 포로토타입 객체도 함깨 생성
     * */

    /*
     * 생성자함수.prototype
     * Methods (공통: 생성된 객체가 모두 함께 사용)
     * Person.prototype
     * */
    Person.prototype.eat = eat;
    Person.prototype.run = run;
    Person.prototype.sleep = sleep;

    // private
    function eat(what){
        return this.name + '은' + what + '을 먹었다';
    };
    function run(how_much){
        return this.name + '은' + how_much + '만큼 달렸다.';
    };
    function sleep(time){
        return this.name + '은' + time + '만큼 잤다.';
    };

    yl.Person = Person;

})(this, (this.yl = this.yl || {}));
// yl이 없으면 빈 객체가 yl로 온다


var cocoaman = new yl.Person(
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



var a = new yl.Person();
var b = new yl.Person();
var c = new yl.Person();
var d = new yl.Person();


