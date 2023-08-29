// Get the current URL path
const currentPath = window.location.pathname;

// Split the path using '/' as the separator
const pathParts = currentPath.split("/");

// Get the last part of the path (which should be "ivaan.html" in your example)
const lastPart = pathParts[pathParts.length - 1];

// Remove the ".html" extension from the last part
const fileNameWithoutExtension = lastPart.split(".")[0];

console.log(fileNameWithoutExtension); // This will log "ivaan"

// Construct the import path using dynamic import
const importPath = `../../../../rinho/${fileNameWithoutExtension}.js`;

import(importPath)
  .then(({ categories, foodsData }) => {
    // Your code that uses categories and foodsData
    $(document).ready(() => {
      // categories
      new Swiper(".categories", {
        slidesPerView: "auto",
        spaceBetween: 22,
      });

      const subCategoriesSwiper = new Swiper(".subCategory", {
        slidesPerView: "auto",
        spaceBetween: 15,
      });

      const swiperWrapper = $(".categories .swiper-wrapper");
      const subCategoriesSwiperWrapper = $(".subCategory .swiper-wrapper");
      const foods = $(".foods");

      function populateSubCategories(subCategoryData) {
        subCategoriesSwiperWrapper.empty();

        if (subCategoryData) {
          subCategoryData.map((subCategory) => {
            const subCategorySwiperSlide = createSwiperSlide(subCategory);
            subCategoriesSwiperWrapper.append(subCategorySwiperSlide);
            subCategorySwiperSlide.on("click", () => {
              $(".swiper-slide").removeClass("active-sub-category");
              subCategorySwiperSlide.addClass("active-sub-category");
              filterFoodsByCategory(null, subCategory);
            });
          });
          subCategoriesSwiper.update();
        }
      }

      categories.map((data) => {
        const swiperSlide = createSwiperSlide(data.category);

        swiperSlide.on("click", () => {
          filterFoodsByCategory(data.category);
          $(".swiper-slide").removeClass("active-category");
          swiperSlide.addClass("active-category");
          populateSubCategories(data.subCategory);
        });

        swiperWrapper.append(swiperSlide);
      });

      function filterFoodsByCategory(category, subCategory) {
        foods.empty();
        const filteredFoods = category
          ? foodsData.filter((food) => food.category == category)
          : foodsData.filter((food) => food.subCategory == subCategory);

        filteredFoods.map((data) => {
          const food = $("<div>").addClass("items");
          food.attr("data-food-id", data.id);
          food.attr("id", "openBtn");

          const foodImage = $("<img>")
            .attr("src", data.images[0])
            .attr("alt", data.title);

          const foodTitle = $("<p>").addClass("title").text(data.title);
          const foodPrice = $("<p>")
            .addClass("price")
            .text(data.sizes[0].price);
          const foodDescription = $("<p>")
            .addClass("description")
            .text(data.description);

          food.append(foodImage, foodTitle, foodPrice, foodDescription);
          foods.append(food);
        });
      }

      // Simulate a click on the first category to populate its subcategories
      $(".categories .swiper-slide:first-child").trigger("click");
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });

// create a swiper slide
function createSwiperSlide(text) {
  return $("<div>").addClass("swiper-slide").append($("<span>").text(text));
}
