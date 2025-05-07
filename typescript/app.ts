let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

// 컴파일 에러 - syntax 에러

//함수의 데이터 타입 명시(매개변수, 리턴 타입)
// function Plus(a: number, b: number): number {
//   return a + b;
// }

// enum GenderType {
// 	Male,
// 	Female
// }

interface Student {
  stdId: number;
  stdName?: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  // setName(name: string):void;
  // setName: (name: string) => void;
  // getName: () => string;
}

class MyStudent implements Student {
  stdId = 91011;
  stdName = "park";
  age = 30;
  gender = GenderType.Male;
  course = "node.js";
  completed = true;
  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}
const myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "lee",
    // age: 20,
    gender: GenderType.Female,
    course: "javascript",
    completed: true,
  };
}

function setInfo(student: Student): void {
  console.log(student);
}

let std = {
  stdId: 91011,
  stdName: "park",
  age: 30,
  gender: "male",
  course: "node.js",
  completed: true,
};

setInfo(std);

// let anyVal: number | string = 100;
// anyVal = "kim";
// // anyVal = true

type strOrNum = number | string;

let numStr: strOrNum = "100";

let item: number;

function convertToString(val: strOrNum): string {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }
  return String(val);
}

function convertToNumber(val: strOrNum): number {
  return Number(val);
}

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

let mixedArray: (number | string)[] = [1, "two", 3, "four"];

let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

let greeting: [number, string, boolean] = [1, "hello", true];

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray];
