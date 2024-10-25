// const fuc = (a: number, b: number): number => {
//   return a + b;
// };

// const fuc1 = (name = "jun"): void => {
//   console.log(`name: ${name}`);
// };

// const self = (name = "사용자", tall?: number): void => {
//   console.log(`${age}세${name})님 반갑습니다`);
//   if(typeof tall === "number") {
//     console.log(`${name}님의 키는 ${tall}`)
//   }
// };

// const getItem =(...rest: [number, number,number]) =>{
//   let sum =0;
//   rest.forEach((it) => (sum+=it));
//   return sum}

//   getItem(1,2,3);
//   getItem(1,2,3),4;
type Add =(a:number, b:number) => {

}
// 타입별칭 생성 후 함수 시그니처 적용
const add0 = (a, b) => a + b;
const add1= (a, b) => a * b;
const add2 = (a, b) => a / b;
const add3 = (a, b) => a - b;
