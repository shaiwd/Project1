const images = ["배경2.jpg", "배경3.jpg", "배경4.jpg", "배경5.jpg"];

const bgimage = images[Math.floor(Math.random() * images.length)];
const bg = document.createElement("img");

bg.src = `img/${bgimage}`;

document.body.appendChild(bg);
