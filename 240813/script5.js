//1.class: 자바스크립트 안에서 반복적으로 사용될 특정요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 class 사용합니다

//교보문고f/e => 매일매일 신간 책 => 객체 데이터로 만들어서 f/e서버에 데이터를 등로할 수 잇도록 지원해주세요

//300권

const newBook1 = {
  title: "당신이 누군가를 죽였다",
  author: "히가시노 게이고",
  price: 17820,
  category: "미스터리스틸러",
};

//class를 생성하는 2가지 방법

//1. 생성자 함수 만들어 사용
//2. 절대, 화살표함수를 사용하면 안된다.
// 반드시 함수의 이름 대문자
// ex = new Date, new Object, new Array

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

// 1) 생성자 함수 (function 대문자)
// 2) 프로토타입 객체
// 3) 생성자 함수를 호출 => 프로토타입 객체를 실행할 준비 
// 4) 생성자 함수 실행 = 함수의 값을 전달받는 변수 => 인스턴스 객체

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노 게이고",
  17820,
  "미스터리스릴러"
);

console.log(book1);

// 2-자주사용되는 구문) class 명령어를 사용해서 클래스를 선언하는 방법
