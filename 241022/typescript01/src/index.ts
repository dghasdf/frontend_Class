// TS 타입
// 기본제공타입
// number, string, boolean, object
// unknown, any, null, undefined, void, symbol, never, etc....

// 점진적 타입시스템 => 타입추론 =? 타입주석을 입력하지 않아도 타입정의
let num: number = 1;
num = 10;

// 아래와 같이 타임주석
let str: string = "Hello";
str = "World";

let bool: boolean = true;

let object = {
  name: "jun",
};

// 다양한 종류의 타입 가운데, 치트키의 역할
// any는 모든 타입을 수용할 수 있음
let sample: any = 0;
sample = "Hello";

// undefined

let sample01: undefined = undefined;

sample01 = undefined;

let sample02: unknown = 10;
sample = "true";

// 배열타입
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["JUN", "Peter"];
const boolArr: Array<boolean> = [true, false, true];

// union타입
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1, 2];
tup1.push(1);

const user: [string, number][] = [
  ["David", 1],
  ["David", 2],
  ["Juliet", 2],
  ["David", 14],
];
