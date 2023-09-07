const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

const categorySwiperWrapper = $(".categorySwiper .swiper-wrapper");

import(importPath)
  .then(({ categories, foods }) => {
    $(document).ready(function () {
      const foodsHolder = $(".foods-holder");

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
            $(".selected-category-holder span").text(data.category);
            $(".selected-category-holder img").attr("src", data.image);

            filterFoodsByCategory(data.category);
          });
        categorySwiperWrapper.append(category);
      });

      function filterFoodsByCategory(category) {
        foodsHolder.empty();

        const selectedCategory = foods.filter(
          (data) => data.category === category
        );

        selectedCategory.map((data) => {
          const food = $("<div>").addClass("item");
          const image = $("<img>")
            .attr("src", data.images[0])
            .attr("alt", data.title);
          const title = $("<p>").text(data.title);
          const price = $("<span>").text(data.price);

          food.append(image, title, price);
          foodsHolder.append(food);
        });
      }

      $(".swiper-slide:first-child").trigger("click");
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
