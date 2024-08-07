// Carousel Rotating Function (Drag & Button Click)

document.addEventListener("DOMContentLoaded", () => {
    // Slider Begin
    const Carousel = document.querySelector('.carousel');

    const CarouselSlider = new MicroSlider(Carousel,{sliderClass: 'carousel',
    sliderItemClass: 'card', padding: 90})
});

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

