const outerSwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".first-page_next",
    prevEl: ".second-page__prev",
  },
  allowTouchMove: false, // Disable dragging on touch devices
});

const innerSwiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  nested: true, // Enable nested swiper
});

outerSwiper.controller = innerSwiper;
