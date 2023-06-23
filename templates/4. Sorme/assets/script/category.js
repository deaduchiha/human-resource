import { foodCategory } from "./data.js";

$(document).ready(function () {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");

  // Generate HTML for each category
  foodCategory.forEach((category) => {
    const slide = $("<div>").addClass("swiper-slide").text(category.text);
    slide.attr("data-category-id", category.id);

    swiperWrapper.append(slide);
  });

  // Initialize the Swiper component
  const mySwiper = new Swiper(".categorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  // Add click event handler to each slide
  const swiperSlides = $(".swiper-slide");
  swiperSlides.on("click", function () {
    // Remove active class from all slides
    swiperSlides.removeClass("active-category");

    // Add active class to the clicked slide
    $(this).addClass("active-category");

    // Apply CSS styles to the clicked category
    swiperSlides.css({
      color: "#7b7b7b",
      background: "none",
      padding: "10px",
      transition: "all 0.3s ease",
    });
    $(this).css({
      color: "#222222",
      background: "#FAFAFA",
      "border-top-right-radius": "12px",
      "border-top-left-radius": "12px",
      transition: "all 0.3s ease",
      // padding: "10px",
    });
  });

  // Set "همه" category as active by default
  const defaultCategory = swiperSlides.first();
  defaultCategory.addClass("active-category");
  defaultCategory.css({
    color: "#222222",
    background: "#FAFAFA",
    "border-top-right-radius": "12px",
    "border-top-left-radius": "12px",
    // padding: "10px",
  });
});
