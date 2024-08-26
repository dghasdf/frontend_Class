// 지오로케이션 사용자 위치를 파악하기

// getCurrenPoision(successCB, errorCB, option)

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도:${position.coords.latitude}, 경도:${position.coords.longitude}`;
};

const erroPosition = (err) => {
  alert(err.message);
};

const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      erroPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch();
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다");
  }
});
