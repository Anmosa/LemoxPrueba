var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num)
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("imageSlides");
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
      slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}


// var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("demo");
//   var circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }
//   slides[slidePosition-1].style.display = "block";
//   circles[slidePosition-1].className += " enable";
// } 