import { foodCategory } from "./data.js";

// Loop through the foodCategory array
foodCategory.forEach(function (category) {
  // Create a new swiper-slide element
  const swiperSlide = $("<div>").addClass("swiper-slide");

  // Create the swiper-image-holder element and append the image
  const imageHolder = $("<div>").addClass("swiper-image-holder");
  const image = $("<img>").attr("src", category.image).attr("alt", "image");
  imageHolder.append(image);

  // Create the span element and set its text
  const span = $("<span>").text(category.text);

  // Append the image holder and span to the swiper-slide element
  swiperSlide.append(imageHolder, span);

  // Append the swiper-slide element to the swiper-wrapper
  $(".zomorodSwiper .swiper-wrapper").append(swiperSlide);
});

// Initialize the swiper after appending all the swiper-slide elements
new Swiper(".zomorodSwiper", {
  // swiper configuration options
  slidesPerView: 4,
  slideToClickedSlide: true,
});
