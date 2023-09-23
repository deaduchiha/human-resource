const outerSwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".first-page__next",
    prevEl: ".second-page__prev",
  },
});

const innerSwiper = new Swiper(".menuSwiper", {
  initialSlide: 0,
  watchSlidesProgress: true,
  slidesPerView: "auto",
  spaceBetween: 45,
  nested: true, // Enable nested swiper
});

outerSwiper.controller = innerSwiper;
