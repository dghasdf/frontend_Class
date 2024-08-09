const nums = document.querySelectorAll(".number");
console.log(nums);
for (let i = 0; i < nums.length; i++) {
  // nums[i] + 1 => 어떤 숫자인지를 체크
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
  // continue 얘네한테는 효과 안 주고 건너뛰겠다.
  const angle = (i + 1) * (Math.PI / 6);
  const x = 132 + 132 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  const y = 132 - 132 * Math.abs(Math.cos(angle));
  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;
  if ((i + 1 > 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;
  // console.log(Math.sin(angle));
  // nums[0].style.left = `${x}px`;
  // nums[0].style.top = `${y}px`;
}
const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
const digitalClock = document.querySelector(".digital-clock");
// console.log(hourPointer, minutePointer, secondPointer);
const clock = () => {
  const currentTime = new Date();
  // console.log(currentTime);
  let second = currentTime.getSeconds();
  let secondAngle = second * 6; // 6도씩 돌면 360도
  let secondAngleValue = `rotate(${secondAngle}deg)`;
  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;
  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;
  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;

  let period = "오전";
  if (hour === 0) hour = 12;
  else if (hour > 12) {
    hour -= 12;
    peiod = "오후";
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  digitalClock.innerText = `${period} ${hour}시 ${minute}분 : ${second}`;
};
setInterval(clock, 1000);
