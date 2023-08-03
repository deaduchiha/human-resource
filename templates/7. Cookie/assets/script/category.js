import { foodCategory, foodList } from "./data.js";

$(document).ready(() => {
  // categories slider
  const categorySwiper = new Swiper(".categories", {
    slidesPerView: "auto",
    spaceBetween: 32,
  });

  const swiperWrapper = $(".categories .swiper-wrapper");

  // show categories
  foodCategory.map((data) => {
    const category = $("<div>").addClass("swiper-slide");
    category.attr("category-id", data.id);
    const icon = $("<svg>").attr("stroke", "currentColor").load(data.icon);
    const categoryTitle = $("<span>").text(data.text);

    category.append(icon, categoryTitle);
    swiperWrapper.append(category);
  });
});
