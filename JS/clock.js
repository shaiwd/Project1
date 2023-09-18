// const clock = document.querySelector("#clock");

// function saytime() {
//   const date = new Date();
//   const hour = String(date.getHours()).padStart(2, "0");
//   const minute = String(date.getMinutes()).padStart(2, "0");
//   const second = String(date.getSeconds()).padStart(2, "0");
//   clock.innerText = `${hour}:${minute}:${second}`;
// }

// setInterval(saytime, 1000);

const clock = document.getElementById("clock");

function time() {
  const newtime = new Date();
  const hours = String(newtime.getHours()).padStart("2", 0);
  const minutes = String(newtime.getMinutes()).padStart("2", 0);
  const seconds = String(newtime.getSeconds()).padStart("2", 0);
  const 현재시간 = `${hours}:${minutes}:${seconds}`;
  clock.innerHTML = 현재시간;
}

setInterval(time, 1000);
