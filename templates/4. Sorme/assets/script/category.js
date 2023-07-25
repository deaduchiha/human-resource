import { foodCategory, foodList } from "./data.js";
import { openPopup } from "./utils.js";

$(document).ready(function () {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");
  const foodSwiperWrapper = $(".foodSwiper .swiper-wrapper");
  let foodSwiper;

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
    });

    // Get the selected category ID
    const categoryId = $(this).data("category-id");

    // Check if the selected category has subcategories
    const selectedCategory = foodCategory.find(
      (category) => category.id === categoryId
    );

    // generate subcategories
    if (selectedCategory && selectedCategory.subCategory) {
      // Clear existing subcategories
      $(".subCategory .swiper-wrapper").empty();

      selectedCategory.subCategory.map((cat) => {
        const subSlide = $("<div>").addClass("swiper-slide").text(cat);
        subSlide.attr("data-subcategory", cat);
        $(".subCategory .swiper-wrapper").append(subSlide);
      });

      // Add click event handler to each subcategory slide
      const subSlides = $(".subCategory .swiper-wrapper .swiper-slide");
      subSlides.on("click", function () {
        // Remove active class from all subcategory slides
        subSlides.removeClass("active-subcategory");

        // Add active class to the clicked subcategory slide
        $(this).addClass("active-subcategory");
        const subCategory = $(this).data("subcategory");

        // Function to filter foodList based on the subcategory
        function getFoodListBySubCategory(subCategory) {
          return filteredFoodList.filter(
            (food) => food.subCategoryFood === subCategory
          );
        }
        // Filter foodList based on the selected subcategory
        const filteredFoodList = getFoodListByCategory(categoryId);
        const filteredFoodListBySubCategory =
          getFoodListBySubCategory(subCategory);
        // Clear existing food items
        foodSwiperWrapper.empty();

        // Generate HTML for each food item
        filteredFoodListBySubCategory.forEach(function (food) {
          const foodSlide = $('<div class="swiper-slide"></div>');
          const foodImage = $("<img>")
            .attr("src", food.mainImage)
            .attr("alt", "");
          const foodNames = $('<div class="food-names"></div>');
          const foodTitle = $("<p>").text(food.title);
          const foodEnglishTitle = $("<span>").text(food.englishTitle);
          const foodPrice = $("<span>").text(food.price + " تومان");

          foodNames.append(foodTitle, foodEnglishTitle);
          foodSlide.append(foodImage, foodNames, foodPrice);
          foodSwiperWrapper.append(foodSlide);

          // Add click event handler to the food slide
          foodSlide.on("click", function () {
            const foodId = food.id; // Use the ID or a unique identifier of the food item
            const clickedFood = foodList.find((item) => item.id === foodId);

            // Show the details of the clicked food item
            console.log(clickedFood);
            // Replace the above line with your code to show the details of the clicked food item

            // Open the popup with the details of the clicked food item
            openPopup(clickedFood);
          });
        });
      });
    } else {
      $(".subCategory .swiper-wrapper").empty();
    }

    // Filter foodList based on the selected category
    const filteredFoodList = getFoodListByCategory(categoryId);

    // Clear existing food items
    foodSwiperWrapper.empty();

    // Generate HTML for each food item
    filteredFoodList.forEach(function (food) {
      const foodSlide = $('<div class="swiper-slide"></div>');
      const foodImage = $("<img>").attr("src", food.mainImage).attr("alt", "");
      const foodNames = $('<div class="food-names"></div>');
      const foodTitle = $("<p>").text(food.title);
      const foodEnglishTitle = $("<span>").text(food.englishTitle);
      const foodPrice = $("<span>").text(food.price + " تومان");

      foodNames.append(foodTitle, foodEnglishTitle);
      foodSlide.append(foodImage, foodNames, foodPrice);
      foodSwiperWrapper.append(foodSlide);

      // Add click event handler to the food slide
      foodSlide.on("click", function () {
        const foodId = food.id; // Use the ID or a unique identifier of the food item
        const clickedFood = foodList.find((item) => item.id === foodId);

        // Show the details of the clicked food item
        console.log(clickedFood);
        // Replace the above line with your code to show the details of the clicked food item

        // Open the popup with the details of the clicked food item
        openPopup(clickedFood);
      });
    });

    // Destroy the previous foodSwiper instance if it exists
    if (foodSwiper) {
      foodSwiper.destroy();
    }

    // Initialize the foodSwiper component
    foodSwiper = new Swiper(".foodSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      watchSlidesProgress: true,
      initialSlide: 1,
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
  });

  // Function to filter foodList based on the category ID
  function getFoodListByCategory(categoryId) {
    if (categoryId === 1) {
      // Return all food items
      return foodList;
    } else {
      // Filter food items based on the selected category ID
      const selectedCategory = foodCategory.find(
        (category) => category.id === categoryId
      );
      if (selectedCategory) {
        return foodList.filter(
          (food) => food.category === selectedCategory.text
        );
      } else {
        // Invalid category ID, return an empty array
        return [];
      }
    }
  }
});
