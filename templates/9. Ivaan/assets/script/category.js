import { categories, foodsData } from "./data.js";

// create a swiper slide
function createSwiperSlide(text) {
  return $("<div>").addClass("swiper-slide").append($("<span>").text(text));
}

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
      });

      subCategoriesSwiper.update();
      // console.log("Has subCategory:", subCategoryData);
    } else {
      // console.log("Does not have subCategory");
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
      const foodPrice = $("<p>").addClass("price").text(data.sizes[0].price);
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
