// Carousel Rotating Function (Drag & Button Click)

document.addEventListener("DOMContentLoaded", () => {
  // Slider Begin
  const Carousel = document.querySelector('.carousel');

  const CarouselSlider = new MicroSlider(Carousel,{sliderClass: 'carousel',
  sliderItemClass: 'card', padding: 90})
});

// Start of Swiper Section

var teamSwiper = new Swiper(".teamSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// End of Swiper Section

// Start of Modal Section

var modalBtn = document.querySelectorAll(".team-btn");
var modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
var closeBtn = document.querySelectorAll(".close-btn");
const docBody = document.querySelector("body");


function displayNone() {
  modal.forEach(function(item) {
      item.style.display = "none";
  });
  overlay.style.display = "none";
  docBody.style.overflow = "auto";
}

function displayBlock() {
  overlay.style.display = "block";
  docBody.style.overflow = "hidden";
}

// Modal Button Event Listener
modalBtn.forEach(function(item) {
  const model = item.getAttribute("data-modal"); /* Model = Modal but for Data-Modal ID, Bad at naming sry */
  item.addEventListener("click", function() {
      document.getElementById(model).style.display = "block";
      displayBlock();
  });
});


// Close Button Event Listener
closeBtn.forEach(function(item){
  item.addEventListener("click", function() {
      displayNone();
  });
})


// Overlay Event Listener
overlay.addEventListener("click", function() {
  displayNone();
});


// End of Modal Section



// News Section SwiperJS Slider
const newSwiper = new Swiper(".newsSwiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
      },
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Portfolio Section SwiperJS Slider
const portfolioSwiper = new Swiper(".portfolioSwiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
      },
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

