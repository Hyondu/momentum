const images = ["0.avif", "1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "bg-img";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
