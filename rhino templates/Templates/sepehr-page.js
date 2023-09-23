const outerSwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".first-page_next",
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
