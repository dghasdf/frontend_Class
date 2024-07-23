//current position
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  //kakao map
  const container = document.querySelector("#map");
  console.log(container);
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  //Olive store info(여러개 마커넣기)
  const positions = [
    {
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 강남구 강남대로 320",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 강남구 강남대로 374",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 서초구 서초대로 78길",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 서초구 서초대로 314",
    },
    {
      title: "올리브영 역삼점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 강남구 테헤란로 111",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map,ma)
      }
    };

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
  }

  //kakao marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  //kakao marker infowindow

  const iwContent = '<div class="iwItem";">현재 내 위치!</div>';
  const iwRemoveable = true;
  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
};

const errorPosition = (err) => {
  alert(err.messge);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
