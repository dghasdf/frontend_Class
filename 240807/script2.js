// ui만들기

// js 별모양 => 폰트어썸
// 쿼리셀레터올로 가져오기
// 별을 클릭하면 컬러가 변경
// 어떤 별을 클릭하던지 간에 무조건 별 안에 색상은 제거
// 조건문 - 선택된 별의 개수에 따라서 안에 들어가는 이미지 및 문장이 변경 =>innerText

const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      // s.classList.remove("active");
      // if (i <= index) {
      //   s.classList.add("active");
      // }
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let meessage = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로에요";
        imageURL = "./frontent/Git/240805/img/imgstar-lv1.png";
        break;

      case 1:
        message = "보통이에요";
        break;

      case 2:
        message = "좋아요";
        break;

      case 3:
        message = "맘에 들어요";
        break;

      case 4:
        message = "오쉣";
        break;
    }

    print.innerHTML = `<img src="${imageURL}" > ${message}`;
  });
});
