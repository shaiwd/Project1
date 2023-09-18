// const a = 5;
// const b = 3;
// let MyName = "chamgmin";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// MyName = "신창민";
// console.log("Hello " + MyName);

// const MyFat = "신";
// let something;
// console.log(something);

// const Webtoon = [
//   "김부장",
//   "한림체육관",
//   "퀘스트지상주의",
//   "싸움독학",
//   "입학용병",
//   "화산귀환",
// ];

// console.log(Webtoon);

// Webtoon.push("사신소년");

// console.log(Webtoon);

// const myState = {
//   name: "신창민",
//   키: 175,
//   몸무게: 70,
//   취미: "웹툰",
// };

// console.log(myState);
// myState.키 = myState.키 + 10;
// console.log(myState.키);

// function sayHello(one, two) {
//   console.log("지금벌써", one, "어서 빨리", two);
// }

// sayHello("11시가 넘었습니다.", "잠을 자야 합니다.");
// sayHello("12시가 넘었습니다.", "숙면을 해야 합니다.");
// sayHello("1시가 넘었습니다.", "꿈나라로 가야 합니다.");

// const water = {
//   name: "제주삼다수",
//   길이: function (Other, another) {
//     console.log("10cm", Other, "조정하자", another);
//   },
// };

// water.길이("길다.", "줄이자");
// water.길이("짧다.", "늘리자");
// water.길이("보통이다.", "놔두자");
// water.name = "아리수";

// console.log(water);

// const Webtoon = [
//   "김부장",
//   "한림체육관",
//   "퀘스트지상주의",
//   "싸움독학",
//   "입학용병",
//   "화산귀환",
// ];

// console.log(Webtoon);

// Webtoon.push("잔불의기사");

// console.log(Webtoon);

// const Calculater = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   gegum: function (a, b) {
//     return a ** b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
// };

// const addresult = Calculater.add(30, 2);
// const minusresult = Calculater.minus(4, 2);
// const gegumresult = Calculater.gegum(4, 4);
// const divideresult = Calculater.divide(6, 2);

// const age = parseInt(prompt("나이를 입력하세요"));

// if (isNaN(age) || age <= 0) {
//   console.log("잘못된 숫자입니다.");
// } else if (age < 18) {
//   console.log("나이가 너무 적습니다.");
// } else if (age >= 18 && age <= 50) {
//   console.log("당신은 술을 마실 수 있습니다.");
// } else if (age > 50 && age <= 100) {
//   console.log("금주를 추천합니다.");
// } else if (age > 100) {
//   console.log("나이를 다시 수정하세요");
// }

// document.title = "반갑습니다.";

// console.log(document.title);

// function handleChangeClick() {
//   element.textContent = "마우스를 떼보세요";
// }

// function handleMouseLeave() {
//   element.textContent = "마우스를 호버해보세요";
//   element.style.color = "red";
// }

// function handleResize() {
//   document.body.style.backgroundColor = "orange";
// }

// function handleCopy() {
//   alert("복사에 성공했습니다.");
// }

const element = document.querySelector("h1");
const inputTag = document.querySelector("#container input");
const submitTag = document.querySelector("#container");
const pTag = document.querySelector("p");

function handleClick() {
  element.classList.toggle("active");
}

const 숨김 = "hidden";

function handleButton(event) {
  event.preventDefault();
  submitTag.classList.add(숨김);
  const username = inputTag.value;
  localStorage.setItem("username", username);
  paintGreeting(username);

  console.log(username);
}

element.addEventListener("click", handleClick);

const savedUserName = localStorage.getItem("username");

function paintGreeting(username) {
  pTag.innerText = `안녕 ${username}`;
}

if (savedUserName === null) {
  submitTag.classList.remove("hidden");
  submitTag.addEventListener("submit", handleButton);
} else {
  paintGreeting(savedUserName);
}
//1. 유저가 이름을 제출하면 form을 없앤다.
//2. css로 from x태그를 숨긴다.
//3. js로 css를 불러온다.
//4. 그자리에 텍스트를 넣는다.

//1. localstorage에 값이 있으면 텍스트를 유지시켜준다
//2. localstorage에 값이 없으면 form 태그가 나오게 한다.
//
//
