import { foodCategory, foodList } from "./data.js";

$(document).ready(() => {
  // categories slider
  const categorySwiper = new Swiper(".categories", {
    slidesPerView: "auto",
    spaceBetween: 32,
  });

  const swiperWrapper = $(".categories .swiper-wrapper");

  // show categories
  foodCategory.map((data, index) => {
    const category = $("<div>").addClass("swiper-slide");
    category.attr("category-id", data.id);
    const iconHolder = $("<div>").addClass("icon-holder");
    const icon = $("<svg>").attr("stroke", "currentColor").load(data.icon);
    iconHolder.append(icon);
    const categoryTitle = $("<span>").text(data.text);

    category.append(iconHolder, categoryTitle);
    swiperWrapper.append(category);

    if (index === 0) {
      category.addClass("active-category");
    }

    category.on("click", () => handleCategoryClick(category));
  });

  // handle click event on category
  const handleCategoryClick = (clickedCategory) => {
    // Remove the "active-category" class from all categories
    const categories = $(".categories .swiper-slide");
    categories.removeClass("active-category");

    // Add the "active-category" class to the clicked category
    clickedCategory.addClass("active-category");
  };
});
