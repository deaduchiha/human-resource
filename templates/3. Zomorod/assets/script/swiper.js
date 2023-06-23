const swiper = new Swiper(".zomorod__slider", {
  watchSlidesProgress: true,
  slidesPerView: "auto",
  centeredSlides: true,

  breakpoints: {
    500: {
      slidesPerView: 2,
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    update: function () {
      this.slideTo(Math.floor(this.slides.length / 2), 0, false);
    },
  },
});

swiper.init();
