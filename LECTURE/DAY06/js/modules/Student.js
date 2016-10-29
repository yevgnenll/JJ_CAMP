(function(global, yl){
    var Student = function(
        person,
        grade,
        graduation,
        like_subject,
        hate_subject
    ){
        if(!(person instanceof yl.Person)){
            throw new Error('첫 번째 인자는 Person 생성자를 사용하여 생성된 객체여야 합니다');

        }

        this.person = person;
        this.grade = grade;
        this.graduation = graduation;
        this.like_subject = like_subject;
        this.hate_subject = hate_subject;
        this.studying = studying;
    };

    function studying(how){
        return this.person.name + '은' + how + ' 공부를 한다.';

    };

    global.Student = Student;
})(this, (this.yl = this.yl || {}));


var student_cocoa = new Student(
    cocoaman,
    '2학년',
    '2020년',
    '영어',
    '수학'
);

console.log('student_cocoa', student_cocoa);
