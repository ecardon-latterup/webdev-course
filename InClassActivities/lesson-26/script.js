const images = [
  {url: 'images/beach.jpg', alt: 'beach with footprints in sand'},
  {url: 'images/bird.jpg', alt: 'bird'},
  {url: 'images/flowers.jpg', alt: 'soft pink flowers'},
  {url: 'images/tree_road.jpg', alt: 'road covered by tree arch'},
  {url: 'images/winter_lake.jpg', alt: 'lake scene on a cold winter'}
]

function changeImage(i) {
  mainImage.src = images[i].url
  mainImage.alt = images[i].alt
}

const mainImage = document.getElementById('main-img')
mainImage.src = images[0].url
mainImage.alt = images[0].alt

const imgStrip = document.getElementById('imgStrip')
for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img')
  img.src = images[i].url
  img.alt = images[i].alt
  img.addEventListener('click', function() {
    changeImage(i)
  })

  imgStrip.appendChild(img)
}