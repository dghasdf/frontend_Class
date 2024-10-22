const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector("progress");
const player = document.querySelector(".player");
const rateButtons = document.querySelector(".rate");
const fullButton = document.querySelector("#fullscreenBtn");

const play = () => {
  playButton.innerText = " || ";
  video.play();
};

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

const togglePlay = () => {
  video.pause ? play() : pause();
};
// pause = 일시정지

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}: ${min}: ${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  // console.log(progressBarWidth);
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

const videoPoint = (e) => {
  console.log(e.pageX);
  console.log(player.offsetleft);
  const mouseX = e.pageX - player.offsetleft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

// pullscreen
fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

// 현재값 / 전체기준값 *100
// 1.브라우저 창 기준으로 좌우상하 측면에서 얼만큰떨어졌는가 알 수 있게 해주는 속성
// offsetLeft

// 2.현재 브라우저 내 x좌표값을 찾아오도록 해주는 속성 pageX
