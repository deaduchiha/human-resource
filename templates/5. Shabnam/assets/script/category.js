import { foodCategory, foodList } from "./data.js";
import { openPopup } from "./utils.js";

$(document).ready(function () {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");
  const foodsWrapper = $(".foods");
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
      color: "#fff",
      padding: "10px",
      transition: "all 0.3s ease",
    });
    $(this).css({
      color: "#fff",
      transition: "all 0.3s ease",
    });

    // Get the selected category ID
    const categoryId = $(this).data("category-id");

    // Filter foodList based on the selected category
    const filteredFoodList = getFoodListByCategory(categoryId);

    // Clear existing food items
    foodsWrapper.empty();

    // Generate HTML for each food item
    filteredFoodList.forEach(function (food) {
      const foodSlide = $('<div class="foods-item" id="openBtn"></div>'); // Fixed class name to "foods-item"
      const foodImageHolder = $('<div class="food-item__image"></div>');
      const foodImage = $("<img>")
        .attr("src", food.mainImage)
        .attr("alt", food.title); // Use food title as alt text
      const foodTitle = $("<p>").text(food.title);
      const foodEnglishTitle = $("<span>").text(food.englishTitle);
      const foodPrice = $('<span class="price">').text(food.price + " تومان");

      foodImageHolder.append(foodImage);
      foodSlide.append(foodImageHolder, foodTitle, foodEnglishTitle, foodPrice); // Fixed the order of appended elements
      foodsWrapper.append(foodSlide);

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
    color: "#fff",
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
