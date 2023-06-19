import { foodCategory } from "./data.js";

// loop foodCategory data
foodCategory.forEach(function (category) {
  // create a swiper-slide
  const swiperSlide = $("<div>").addClass("swiper-slide");

  // create swiper-image-holder and append image
  const imageHolder = $("<div>").addClass("swiper-image-holder");
  const image = $("<img>").attr("src", category.image).attr("alt", "image");
  imageHolder.append(image);

  // create span and category name
  const span = $("<span>").text(category.text);

  // append image and category name to swiper-slide
  swiperSlide.append(imageHolder, span);

  // append swiper-slide to swiper-wrapper
  $(".zomorodSwiper .swiper-wrapper").append(swiperSlide);
});

// initialize swiper after
new Swiper(".zomorodSwiper", {
  // swiper configuration options
  slidesPerView: 4,
  slideToClickedSlide: true,
});
