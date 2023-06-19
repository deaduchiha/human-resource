$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {});

  const innerSwiper = new Swiper(".yakhSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    nested: true,
    spaceBetween: 15,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 1,
      depth: 10,
      modifier: 1,
      slideShadows: true,
    },
  });

  outerSwiper.controller = innerSwiper;
});
