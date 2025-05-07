var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = GenderType.Male;
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id) {
    return {
        stdId: id,
        stdName: "lee",
        // age: 20,
        gender: GenderType.Female,
        course: "javascript",
        completed: true,
    };
}
function setInfo(student) {
    console.log(student);
}
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: "male",
    course: "node.js",
    completed: true,
};
setInfo(std);
console.log(getInfo(5678));
var user = {
    name: "john",
    age: 25,
};
