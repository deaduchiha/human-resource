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

$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {});

  const innerSwiper = new Swiper(".menuSwiper", {
    initialSlide: 0,
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    nested: true, // Enable nested swiper
  });

  outerSwiper.controller = innerSwiper;
});
