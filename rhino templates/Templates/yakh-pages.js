// swiper
const swiper = new Swiper(".popupSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
});
new Swiper(".foodsSwipper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  nested: true,
  spaceBetween: 15,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
});

$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".first-page__next",
      prevEl: ".second-page__prev",
    },
    allowTouchMove: false, // Disable dragging on touch devices
  });

  const innerSwiper = new Swiper(".menuSwiper", {
    initialSlide: 0,
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    nested: true, // Enable nested swiper
  });

  outerSwiper.controller = innerSwiper;
});
