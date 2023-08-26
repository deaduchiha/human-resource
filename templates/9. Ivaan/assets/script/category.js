import { categories, foodsData } from "./data.js";

$(document).ready(() => {
  // categories slider
  let mySwiper = new Swiper(".categories", {
    slidesPerView: "auto",
    spaceBetween: 22,
  });

  const swiperWrapper = $(".categories .swiper-wrapper");
  // const foodsWrapper = $(".foods");

  categories.map((data, index) => {
    const swiperSlide = $("<div>").addClass("swiper-slide");
    const category = $("<span>").text(data.category);
    index === 0 && swiperSlide.addClass("active-category");

    swiperSlide.append(category);
    swiperWrapper.append(swiperSlide);
  });
});
