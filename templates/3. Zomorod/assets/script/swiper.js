const swiper = new Swiper(".zomorod__slider", {
  watchSlidesProgress: true,
  slidesPerView: "auto",
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
