const slider = document.querySelector(".slider");
const sliderImg = document.querySelectorAll(".slider img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const dots = document.getElementsByClassName("dot");

let counter = 0;
const size = sliderImg[0].clientWidth;
var time;
// console.log(sliderImg.length);
nextSlide();

slider.style.transform = "translateX(" + -size * counter + "px)";

function currentSlide(x) {
  stopSlide();
  slider.style.transform = "translateX(" + -size * counter + "px)";
  counter = x - 1;
  time = setTimeout(nextSlide, 3000);
}

function nextSlide() {
  stopSlide();
  if (counter >= sliderImg.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  //   console.log(counter);
  slider.style.transform = "translateX(" + -size * counter + "px)";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("counter: " + counter);
  console.log(dots.length);
  console.log(counter - dots.length);

  if (counter == 8) {
    dots[counter - dots.length].className += " active";
  }
  dots[counter - 1].className += " active";
  time = setTimeout(nextSlide, 3000);
}
prev.addEventListener("click", () => {
  stopSlide();
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  slider.style.transform = "translateX(" + -size * counter + "px)";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("counter: " + counter);
  console.log(dots.length);
  console.log(dots.length - 1);
  console.log(counter);

  if (counter == 0) {
    dots[dots.length - 2].className += " active";
  }
  if (counter == 6) {
    dots[dots.length - 1].className += " active";
  }
  dots[counter - 1].className += " active";
  time = setTimeout(nextSlide, 3000);
});

slider.addEventListener("transitionend", () => {
  if (sliderImg[counter].id == "lastImg") {
    slider.style.transition = "none";
    counter = sliderImg.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImg[counter].id == "firstImg") {
    slider.style.transition = "none";
    counter = sliderImg.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

function stopSlide() {
  clearTimeout(time);
  console.log("Stopped!");
}
