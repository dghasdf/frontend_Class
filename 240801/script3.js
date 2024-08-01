//callback 1

//winddow 객체 안에는 시간 관련 내장 함수 존재
//etInterval
//clearInterval
//setTimout

//콜백함수중 js에서 자주만날 콜백함수 1번예제
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (++count > 4) clearInterval;
// };

// const timer = setInterval(cbFunc, 3);

// 2번예제
//map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당아이템을 모아서새로운 배열로 생성
// const arr = [10, 20, 30];
// const newArr = arr.map((item, index) => (item + 5) * index);

// console.log(newArr);

//3번째예제
//setTimeout = 일정 시간 지연 후 실행

// setTimeout(function () {
//   console.log("this");
// }, 300);

//4번째 예제
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach(function (item) {
//   console.log(this);
// });
// this = 카멜(중요함!)
// "보통 일반적으로" 현재 실행되고 있는 함수의 주체 // 객체 등의 아이템

// window에 탑재된 시간 내장 함수에서 this를 사용하면 무조건 window

//일반적인 콜백함수 내에서 주체가 되고있있는 아이템을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라ㅓㅅ this객체를 사용한다.

//5번째 예제
//this = 함수형태 종료에 따라서 지칭하는 대상이 달라짐 (상황에따라 화살표, funtion함수 각각 쓸때가 잇으니 너무 한개만쓰지않도록 주의.)
// document.body.innerHTML += `<button id="a">click</button>`;

// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

//예제6번째
//객체 안에 있는 메서드 함수의 경우 , this는 funtion의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만 만약 화살표 함수를 쓴다면 window객체를 찾아온다.
//내장하드 3형제는 부모요소가 window다.
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

//객체 안에 메서드 형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백함수로 사용할시, 기존 객체와의 관계성이 제거된다
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);
//콜백함수를 쓰겟다고 (obj.logValues)를 넣자마자 window가 뜬다.(obj를 못찾아옴)
//대안(?) 객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시 해당 요소의 부모를 찾아올 수 있도록 하는 방법?!

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

//위 코드보다 효율적으로 this 객체를 사용하는 방법!!
// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

// --콜백함수 --
// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `,${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `,${name}`;
//             console.log(coffeeList);
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

//콜백으로 코드가 꼬엿을때
//1번
// let coffeeList = "";

// constaddEspress = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addEspress, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에소프레소");

// const addEspress = (name) => {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addEspress, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에소프레소");

//2번 promise() => 클래시로 선언되었을 때

// new Promise(); //class로 생성된 프로토 타입 함수

// let likepizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likepizza) {
//     resolve("피자를 주문합니다");
//   } else {
//     reject("피자를 주문하지 않습니다");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// });

const obj = new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} 카페모카`;
      console.log(name);
    }, 500);
  }).then(() => {});
});
then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} 라떼`;
      console.log(name);
    }, 500);
  }).then(() => {});
});
then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} 카페모카`;
      console.log(name);
    }, 500);
  }).then(() => {});
});
