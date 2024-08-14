// 원기둥의 부피계산
//  언기둥 밑면적 * 높이 = 부피
// 부피 = 파이r^

const form = document.querySelector("form");
const result = document.querySelector("#result");

// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }
class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
  getVolume = function() {
    let radius = this.diameter /2
    return(Math PI * radius * radius) 
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diamete").value;
  const height = document.querySelector("#height").value;
  console.log(diameter, height);

  if (
    diameter === "" ||
    height === "" ||
    isNaN !== typeof diameter ||
    isNaN !== typeof height
  )
    result.innerText = `정확한 지름과 높이값을 입력해주세요`;
  else {
    const Cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${(Cylinder01, getVolume())}입니다`;
  }
});

// const Cylinder01 = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${Cylinder01.getVolume()}입니다.`);
