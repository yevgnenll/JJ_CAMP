(function(global, yl){
    'use strict';
    function Teacher(person, subject, career, major){
        'use strict';
        // person validate
        // person인자는 생성자가 Person인가?
        if(person.constructor !== yl.Person){
            throw new Error('첫 번째 인자는 Person 생성자를 사용하여 생성된 객체여야 합니다');
        }
        this.person = person;
        this.subject = subject;
        this.career = career;
        this.major = major;

    };

    yl.Teacher = Teacher;
})(this, (this.yl = this.yl || {}));


var teacher_cocoa = new yl.Teacher(cocoaman,'코코아 열매 요리하기', '5년', '코코아 재배');

console.log(teacher_cocoa);
