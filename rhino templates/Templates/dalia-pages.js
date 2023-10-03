// swiper
const swiper = new Swiper(".popupSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
});
new Swiper(".imagesSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".nextIMG",
    prevEl: ".prevIMG",
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
