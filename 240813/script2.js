//객체 생성 => 선언

// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

//객체 안에 담겨있는 데이터를 찾아
//프로퍼티(속성)에 접근 2가지방법
//1) 온점표기법
//2) 대괄호표기법

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// book1.master = "David";

// console.log(book1);

//JS 어딘가에 class 생성자함수를 활용해서 이미 누군가가 객체를 만들어놓았음!

//class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용 할때에는 반드시 new 예약어 + prototpye함수를 활용해야 함.

//prototype을 통해서 생성된 값을 인스턴스 객체에 할당
//최초에 선언한 변수의 값으로 할당

// let book2 = new Object();
// console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "김지선";
// book2.bestSeller = "YES";
// console.log(book2);

// let book3 = new Array();
// console.log(typeof book3)
// delete book2.bestSeller;
// console.log(book2);

//객체중첩
const student = {
  name: "김준영",
  age: "20",
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`김준영님은 컴퓨터를 좋아합니다`);
    },
  },
};

//function // 화살표함수
//평균값구할때 / score.history 이 아니고 student.score.history로 해야한다.

console.log(student.score.history);
console.log(student.score.average());

student.score.like();

const window ={
  document: {
    html: {
      head:{
        meta:{ "a",
          link: "./",
        },
        body:{
          h1: "안녕하세요",
          p : "반갑습니다",
          }
        }
      }
    }
  }
}

//객체 안에 property 일부로서 탄생된 함수는 method 함수라고 칭한다.
