// var slideIndex = 1;
// showSlides(slideIndex);

// function SlideNav(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("images");
//   var dots = document.getElementsByClassName("dot");
//   for (var x = 0; x < slides.length; x++) {}
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

var slideIndex = 0;
SlideShow();

function SlideNav(x) {
  showSlides((slideIndex += x));
}

function currentSlide(x) {
  showSlides((slideIndex = x));
  slideIndex = x;
}

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(SlideShow, 3000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  for (var x = 0; x < slides.length; x++) {}
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
