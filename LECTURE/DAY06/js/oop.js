// javascript programming
/*
 * 1. 함수형 프로그래밍
 * */
function Person(first_name, last_name, age, job, category){
    'use strict';

    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.job = job;
    this.category = category;
}

var kor_teacher = new Person('이', '민호', 29, '모델강사', '포즈');
var cn_teacher = new Person('ling', 'mei', 24, 'IT강사', 'tdd');

// 객체(new)로 생성해야할땐 앞에 대문자를 사용한다 -> 그렇지 않으면
// window.category, window.teacher 등이 나온다
function Subject(category, teacher, cource){
    'use strict'; // 명시해주면 반드시 new를 함께 사용해야한다
    // 지시문 프롤로그
    
    // 속성: 명사형태
    this.category = category;
    this.teacher = teacher;
    this.cource = cource;
    // 속성(메소드): 동사 형태
    this.addCourseItem = function(item){
        this.cource.push(item);
    };
    this.fireTeacher = function(){
        this.teacher = null;
    };
    this.replaceTeacher = function(newTeacher){
        this.teacher = newTeacher;
    };
}

var kor, chn

kor = new Subject(kor_teacher.category, kor_teacher, ['c', 'python', 'ruby']);
chn = new Subject(cn_teacher.category, cn_teacher, ['올바른 역사관', '사과하는 방법']);

// 생성된 객체의 생성자를 판단하는 코드
// 객체 instanceof 생성자(함수)
// 객체.constructor == 생성자(함수)
// console.log('kor instanceof Subject', kor instanceof Subject);
// console.log('jap.constructor === Subject:', jap.constructor === Subject);

// 함수와 this, 영역(scope)
// javascript 블록문
var phone = 'Gallaxy';
// console.log('1', phone);
function scopeFn(){
    // console.log(this);
    var phone = 'iPhone'; // private member
    // console.log(2, phone);
}
// 함수 내부의 this는 함수를 실행시킨 콘텍스트 객체를 가리킨다.
// scopeFn(); // window.scopeFn(); 과 동일하다
// console.log(3, phone); // iPhone

console.log('%c---------------------------------------', 'color: #343434');
// javascript 세상의 모든 객체는 .constructor 속성을 가진다
// 사용자가 정의 한 객체 역시 .constructor 속성을 가진다
console.log(kor, chn);


function Biology(state){
    this.state = state;
}

function Human(Biology, sex, age){
    this.sex = sex;
    this.age = age;
}

