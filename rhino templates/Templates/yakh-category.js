const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

const categorySwiperWrapper = $(".categorySwiper .swiper-wrapper");

import(importPath)
  .then(({ categories, foods }) => {
    $(document).ready(function () {
      const foodsWrapper = $(".foodsSwipper .swiper-wrapper");

      // map on categories
      categories.map((data) => {
        const category = $("<div>")
          .addClass("swiper-slide")
          .text(data.category)
          .click(function () {
            // for remove last active category
            categorySwiperWrapper
              .find(".swiper-slide")
              .removeClass("active-category");

            $(this).addClass("active-category");

            filterFoodsByCategory(data.category);
          });
        categorySwiperWrapper.append(category);
      });

      function filterFoodsByCategory(category) {
        foodsWrapper.empty();

        const selectedCategory = foods.filter(
          (data) => data.category === category
        );

        selectedCategory.map((data) => {
          const swiperSlide = $("<div>")
            .addClass("swiper-slide")
            .attr("data-food-id", data.id)
            .attr("id", "openBtn");
          const imageHolder = $("<div>").addClass("food-image-holder");
          const image = $("<img>").attr("src", data.images[0]);
          imageHolder.append(image);

          const title = $("<h3>").text(data.title);
          const englishTitle = $("<p>").text(data.englishTitle);
          const price = $("<span>").text(data.price);

          swiperSlide.append(imageHolder, title, englishTitle, price);
          foodsWrapper.append(swiperSlide);
        });
      }

      $(".swiper-slide:first-child").trigger("click");
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
