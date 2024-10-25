// // 제네릭이 필요한 상황
// // 종합적인 타입을 정의하고 싶을 때 사용
// // General: 종합적인

// const func = (value: any) => {
//   return value;
// };

// const num = func(10);
// num.toUpperCase();

// func("jun");
// func({ name: "jun", age: 20 });

// const func = <T>(value: T): T => {
//   return value;
// };

// const swap = <T, U>(a: T, b: U) => {
//   return [a, b];
// };

// const [a, b] = swap("1", 2);

// const funcArry = <T>(data: T[]): T => {
//   return data[0];
// };

// const num = funcArry([0, 1, 2]);
// console.log(num);

// let str = funcArry([1, "Hello", "world"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = returnFirst([1, "hello", "world"]);

// console.log(str);

const func4 = <T extends { length: number }>(data: T): number => {
  return data.length;
};

console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));

console.log(func4(null));
console.log(func4(undefined));
