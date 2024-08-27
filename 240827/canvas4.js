const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//rect() = > 사각형
//삼격형, 원
//arc()
//ellipse(x,y,radiusX, radisuY, rotation,endAngke,counterClock) = 가로의 반지름
// ctx.beginPath();
// ctx.ellipse(200, 70, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle="red"
// ctx.strokeStyle();

// ctx.beginPath();
// ctx.ellipse(150,200,80,50(Math.PI/180)*+=30 ,000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000666666666666666666)

ctx.beginPath();
ctx.clearRect(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
