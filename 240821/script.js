// const regexp = /\d{3}/;
// const regexp = new RegExp(/\d{3}/);
// //둘이 같은 내용
// console.log(regexp.test("hello"));
// console.log(regexp.test("123"));
//정규식의 패턴값을 잘 따르고 있는가. = test() 즉, false true 둘 중하나가 나옴

// const str = "ES2024 IS Powerfull";
// // const regexp = /es/i;
// // console.log(str.replace(/ES24024/, "Javascript"));

// // console.log(regexp.test(str));

// console.log(str.match(/ES\d/));

// const hello = "Hello, everyone";

// console.log(/^H/.test(hello));
// console.log(/^h/.test(hello));
// console.log(/^H/i.test(hello));

// console.log(/one.$/.test(hello));

// console.log(/e.$/i.test(hello));

// console.log(/one$/.test(hello));

// const str = "ES2024"

// console.log(str.match(/[^0-9]/g))

// const str ="Oooops"

// console.log(str.match(/o{2}/))
// console.log(str.match(/o{2,}/))
// console.log(str.match(/o{2,4}/i))

// const str2 = "ES2024(ES8) is Powerfull";
// const regexp = /ES2024|ES8/; //띄어쓰기 = 빈문자

// console.log(regexp.test(str2));

// 1) 숫자만 가능한 정규표현식 패턴

const regexp = /^[0-9]+$/;

// 2)양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;

const regexp2 = /^\-[1-9]\d*$/;

// 4) 영문자만 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;

// 5) 숫자와 영문자를 찾아오도록 하는 정규표현식
//정규표현식 패턴
const regexp4 = /^[a-zA-Z-9]+$/;

// 6)한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7)한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8) 예) 문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;

