
let currentImageIndex = 0;
let imageElements = [];

function openLightbox(src) {
  imageElements = Array.from(document.querySelectorAll('.gallery img'));
  currentImageIndex = imageElements.findIndex(img => img.src === src);

  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigate(direction) {
  currentImageIndex = (currentImageIndex + direction + imageElements.length) % imageElements.length;
  document.getElementById('lightbox-img').src = imageElements[currentImageIndex].src;
}

function filterImages(category) {
  const boxes = document.querySelectorAll('.image-box');
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
