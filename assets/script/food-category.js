// Create the swiper wrapper element
const swiperWrapper = $("<div>").addClass("swiper-wrapper");

// Create the swiper slide elements
const swiperSlides = ["پیتزا", "برگر", "مرغ سوخاری", "سالاد", "پیش غذا"];

swiperSlides.forEach(function (slideText) {
  const swiperSlide = $("<span>").addClass("swiper-slide").text(slideText);
  swiperWrapper.append(swiperSlide);
});

// Append the swiper wrapper to the menuSwiper element
$(".menuSwiper").append(swiperWrapper);
