// Track each slideshow separately
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;

// Initialize all slideshows
showSlides(slideIndex1, "mySlides1", "dot1");
showSlides(slideIndex2, "mySlides2", "dot2");
showSlides(slideIndex3, "mySlides3", "dot3");
showSlides(slideIndex4, "mySlides4", "dot4");

// Next/previous controls
function plusSlides(n, slidesClass, dotsClass) {
  if (slidesClass === "mySlides1") {
    showSlides(slideIndex1 += n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides2") {
    showSlides(slideIndex2 += n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides3") {
    showSlides(slideIndex3 += n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides4") {
    showSlides(slideIndex4 += n, slidesClass, dotsClass);
  }
}

// Thumbnail controls
function currentSlide(n, slidesClass, dotsClass) {
  if (slidesClass === "mySlides1") {
    showSlides(slideIndex1 = n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides2") {
    showSlides(slideIndex2 = n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides3") {
    showSlides(slideIndex3 = n, slidesClass, dotsClass);
  } else if (slidesClass === "mySlides4") {
    showSlides(slideIndex4 = n, slidesClass, dotsClass);
  }
}

// Main show function
function showSlides(n, slidesClass, dotsClass) {
  let i;
  let slides = document.getElementsByClassName(slidesClass);
  let dots = document.getElementsByClassName(dotsClass);

  // Pick the right index tracker
  let slideIndex;
  if (slidesClass === "mySlides1") slideIndex = slideIndex1;
  else if (slidesClass === "mySlides2") slideIndex = slideIndex2;
  else if (slidesClass === "mySlides3") slideIndex = slideIndex3;
  else if (slidesClass === "mySlides4") slideIndex = slideIndex4;

  // Wrap around
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Save index back
  if (slidesClass === "mySlides1") slideIndex1 = slideIndex;
  else if (slidesClass === "mySlides2") slideIndex2 = slideIndex;
  else if (slidesClass === "mySlides3") slideIndex3 = slideIndex;
  else if (slidesClass === "mySlides4") slideIndex4 = slideIndex;
}
