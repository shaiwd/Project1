const API_KEY = "d9e218d0167fcbdb5fc639413cf549a5";

function Geook(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const location = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      location.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function Geoerr() {
  alert("오류가 발생했습니다.");
}

navigator.geolocation.getCurrentPosition(Geook, Geoerr);
