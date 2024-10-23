// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "world"];
// const boolArr: Array<boolean> = [true, false, true];

import { Console } from "console";
import { deflate } from "zlib";

// let multiArr: (number | string)[]= [1,"hello"];
// 유니온 타입 = 숫자 문자 다쓰는 경우

// let doubleArr: number[][]= [
//   [1,2,3],
//   [4,5],
// ]
// 중첩배열타입

// let tup1: [number, number]= [1,2];

// tup1=[1,2,3];

// tup1.push(5);
// 튜플타입

const user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "jun",
};
// 구조적 타입시스템을 적용

let config: {
  readonly apikey: string;
} = {
  apikey: "123456456",
};

// config.apikey = "hacked";

type User = {
  id: number;
  name: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "jun",
  location: "seoul",
};
let user2: User = {
  id: 1,
  name: "dsaf",
  location: "Incheon",
};

// 타입별칭

const fnc = () => {
  type User = {};
};

// 인덱스 시그니처 => 타입별칭으로 어떠한 타입을 정의 =>하위 요소의 모든 타입의 형태가 동일 경우

type countryCodes = {
  [key: string]: string;
};

const countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  Unitedkingdom: "uk",
};

interface User01 {
  id: number;
}

interface Person {
  name: string;
  age: number;
  etc?: boolean;
}

const person01: Person = {
  name: "peter",
  age: 20,
};
const person02: Person = {
  name: "peter",
  age: 20,
  etc: true,
};

class Person1 {
  name: string;
  age: number;
}

const person03: Person1 = new Person1();
person03.name = "jun";
person03.age = 20;

console.log(person03);

// class Person2 {
//   name: string;
//   age:number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }

// const person04 = new Person2("Romeo");

// console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }

// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("jul", 20);

// console.log(person05);

// 추상클래스
// 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어넣고, 해당 추상적인 개념을 모티브로 클래스를 선언 및 생성

// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person6 = new Person8("bruce", 20);
// console.log(person6);

// static 속성
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;
// console.log(test01A)

// enum Role{
//   admin = 0,
//   USER = 1,
//   GESET = 2,
// }

// const user10 = {
//   name: "jun",
//   role: "rOLE.admin",
//   id: 0,
// };
// const user20 = {
//   name: "jun",
//   role: "admin.USER",
//   id: 1,
// };
// const user30 = {
//   name: "jun",
//   role: "admin.GESET",
//   id: 2,
// };

let test01: any = 10;
test01 = "hello";

let test02: unknown;

test02 = "world";

test02 = () => {};

let test03 = test01;

let test04 = test02;

if (typeof test02 === "number") {
  test04 = test02;
}

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  console.log("World");
};

let test05: void;

// test05 = 1;
// test05 = "hello";
// test05 = true;

test05 = undefined;

let test06: never;
// never도 아무속성값이 먹지않음

const func3 = (): never => {
  while (true) {}
};

let obj: object = {
  name: "jun",
};

interface Namegle {
  name: string;
}

// 타입단언
let name1 = (<Namegle>obj).name;
let name2 = (obj as Namegle).name;

console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

type PrintMeFnc = (name: string, age: number) => void;

const printMe: PrintMeFnc = (name, age) => {};

// 타입가드
interface Nameble02 {
  name: string;
}

const getName = (o: Nameble02) => {
  return o !== undefined ? o.name : "Loading...";
};

const dataResult = getName(undefined);
console.log(dataResult);
console.log(getName({ name: "jun" }));

const getName01 = (o: Nameble02 | undefined) => {
  return o !== undefined ? o.name : "Loading...";
};
