import { categories, foodsData } from "./data.js";

$(document).ready(() => {
  // categories slider
  new Swiper(".categories", {
    slidesPerView: "auto",
    spaceBetween: 22,
  });

  // sub categories slider
  new Swiper(".subCategory", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  const swiperWrapper = $(".categories .swiper-wrapper");
  const subCategoriesSwiperWrapper = $(".subCategory .swiper-wrapper");
  // const foodsWrapper = $(".foods");

  categories.map((data, index) => {
    const swiperSlide = $("<div>").addClass("swiper-slide");
    const category = $("<span>").text(data.category);

    // active first category
    index === 0 && swiperSlide.addClass("active-category");

    // update active category
    swiperSlide.on("click", () => {
      subCategoriesSwiperWrapper.empty();

      $(".swiper-slide").removeClass("active-category");
      swiperSlide.addClass("active-category");

      // check category for subCategory
      if (data.hasOwnProperty("subCategory")) {
        data.subCategory.map((subCategory) => {
          const subCategorySwiperSlide = $("<div>").addClass("swiper-slide");
          const subCategorySpan = $("<span>").text(subCategory);

          subCategorySwiperSlide.append(subCategorySpan);
          subCategoriesSwiperWrapper.append(subCategorySwiperSlide);
        });

        console.log("Has subCategory:", data.subCategory);
      } else {
        console.log("Does not have subCategory");
      }
    });

    swiperSlide.append(category);
    swiperWrapper.append(swiperSlide);
  });
});
