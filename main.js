let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides(slideIndex1, "mySlides1", "dot1");
showSlides(slideIndex2, "mySlides2", "dot2");

// Next/previous controls
function plusSlides(n, slidesClass, dotsClass) {
  if(slidesClass === "mySlides1") {
    showSlides(slideIndex1 += n, slidesClass, dotsClass);
  } else if(slidesClass === "mySlides2") {
    showSlides(slideIndex2 += n, slidesClass, dotsClass);
  }
}

// Thumbnail image controls
function currentSlide(n, slidesClass, dotsClass) {
  if(slidesClass === "mySlides1") {
    showSlides(slideIndex1 = n, slidesClass, dotsClass);
  } else if(slidesClass === "mySlides2") {
    showSlides(slideIndex2 = n, slidesClass, dotsClass);
  }
}

function showSlides(n, slidesClass, dotsClass) {
  let i;
  let slides = document.getElementsByClassName(slidesClass);
  let dots = document.getElementsByClassName(dotsClass);
  let slideIndex = slidesClass === "mySlides1" ? slideIndex1 : slideIndex2;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(slidesClass === "mySlides1") {
    slideIndex1 = slideIndex;
  } else if(slidesClass === "mySlides2") {
    slideIndex2 = slideIndex;
  }
}



