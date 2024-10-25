// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "David",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// type Type1 = number | string;
// type Type2 = number & string;

// // interface Person {
// //   name: number;
// //   age: number;
// // } | number

// type Type = number | string |Person

// const person Type3 = {
//   name: "jun",
//   age:20,
// }

// interface Animal {
//   name: string;
//   age: number;
// }

// 다중확장

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}
interface DogCat extends Dog, Cat {
  breed: boolean;

const dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};


