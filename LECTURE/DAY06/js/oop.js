// javascript programming
/*
 * 1. 함수형 프로그래밍
 * */

function Subject(category, teacher, cource){
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

var kor, jap;

kor = new Subject('수학', '하이', ['c', 'python', 'ruby']);
jap = new Subject('영어', '레드', ['올바른 역사관', '사과하는 방법']);

// 생성된 객체의 생성자를 판단하는 코드
// 객체 instanceof 생성자(함수)
// 객체.constructor == 생성자(함수)
console.log('kor instanceof Subject', kor instanceof Subject);
console.log('jap.constructor === Subject:', jap.constructor === Subject);

