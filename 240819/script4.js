// JS ES6에 불 필요한 ?
//Map & Set => 다른 map & set이랑 다름 주의.
//배열 & 객체 때문에?
// 배열 장점: 인덱스값을 사용할수잇음 // 개수 //넣고, 뺄수잇음
// 객체 장점: 프로퍼티 형태(어떤 자료가 무슨 의미인지 파악가능)
// 배열 + 객체 => 집합한 것 = map
//Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점
//중복되는 값을 제어하지 못한다.

// const bag = new Map();
// bag.set("color", "red")

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");

console.log(myCup);
