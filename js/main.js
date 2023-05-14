// Silder Collection
let slider = document.querySelector(".slider");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slideWidth = document.querySelector(".slide").offsetWidth + 10;
let slideIndex = 0;

prev.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = slider.childElementCount - 5;
  } else if (slideIndex === 1) {
    slideIndex = slider.childElementCount - 4;
  } else {
    slideIndex -= 2;
  }
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

next.addEventListener("click", () => {
  if (slideIndex === slider.childElementCount - 5) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});
