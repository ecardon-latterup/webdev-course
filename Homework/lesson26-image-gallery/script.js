const images = [
  { url: "images/beach.jpg", alt: "beach with footprints in sand" },
  { url: "images/bird.jpg", alt: "bird" },
  { url: "images/flowers.jpg", alt: "soft pink flowers" },
  { url: "images/tree_road.jpg", alt: "road covered by tree arch" },
  { url: "images/winter_lake.jpg", alt: "lake scene on a cold winter" },
];

function changeImage(i, clickedImg) {
  mainImage.src = images[i].url;
  mainImage.alt = images[i].alt;
  imgInfo.innerText = images[i].alt;

  const currentActive = document.querySelector("img.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }

  clickedImg.classList.add("active");
}

const mainImage = document.getElementById("main-img");
const imgInfo = document.getElementById("imgInfo");
mainImage.src = images[0].url;
mainImage.alt = images[0].alt;
imgInfo.innerText = images[0].alt;

const imgStrip = document.getElementById("imgStrip");
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  // img.className = 'indImg';
  img.src = images[i].url;
  img.alt = images[i].alt;
  img.addEventListener("click", function () {
    changeImage(i, img);
  });

  if (i === 0) {
    img.classList.add("active");
  }

  imgStrip.appendChild(img);
}
