// popup
$(document).ready(function () {
  $("#openBtn").click(function () {
    $("#popup").fadeIn();
  });

  $("#closeBtn").click(function () {
    $("#popup").fadeOut();
  });
});

// swiper
// const swiper = new Swiper(".mySwiper", {
//   watchSlidesProgress: true,
//   slidesPerView: "auto",
//   spaceBetween: 45,
// });

$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {});

  const innerSwiper = new Swiper(".menuSwiper", {
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    nested: true, // Enable nested swiper
  });

  outerSwiper.controller = innerSwiper; // Set outerSwiper as controller of innerSwiper
});
