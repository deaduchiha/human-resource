import { foodCategory, foodList } from "./data.js"; // Import the foodCategory array

// Function to generate the swiper slides
$(document).ready(function () {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");
  const foodsWrapper = $(".foods");

  // Loop through the foodCategory array
  foodCategory.forEach((category, index) => {
    // Create a new swiper slide div with the category text and icon
    const slide = $("<div>").addClass("swiper-slide");
    slide.attr("data-category-id", category.id);

    const img = $("<img>").attr("src", category.icon).attr("alt", "icon");
    const span = $("<span>").text(category.text);

    // Append the image and span to the slide
    slide.append(img).append(span);

    // Append the slide to the swiper wrapper
    swiperWrapper.append(slide);

    // Set the first category as active
    if (index === 0) {
      slide.addClass("active-category");
      slide.css({
        backgroundColor: "#B46A2A",
        color: "#fff",
        transition: "all 0.3s ease",
      });
    }
  });

  // Initialize the Swiper component after adding all the slides
  const mySwiper = new Swiper(".categorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
  });

  // Filter foods based on the first category when the page loads
  filterFoodsByCategory(foodCategory[0].id);

  // Add click event handler to each slide
  const swiperSlides = $(".second-page .swiper-slide");
  swiperSlides.on("click", function () {
    // Remove active class from all slides
    swiperSlides.removeClass("active-category");

    // Add active class to the clicked slide
    $(this).addClass("active-category");

    // Apply CSS styles to the clicked category
    swiperSlides.css({
      backgroundColor: "transparent",
      color: "#727272",
      padding: "10px",
      transition: "all 0.3s ease",
    });
    $(this).css({
      backgroundColor: "#B46A2A",
      color: "#fff",
      transition: "all 0.3s ease",
    });

    // Get the selected category ID
    const categoryId = $(this).data("category-id");

    // Filter foodList based on the selected category
    filterFoodsByCategory(categoryId);
  });

  // Function to filter foodList based on the category ID
  function filterFoodsByCategory(categoryId) {
    // Clear existing food items
    foodsWrapper.empty();

    // Get the selected category
    const selectedCategory = foodCategory.find(
      (category) => category.id === categoryId
    );

    // Generate HTML for each food item of the selected category
    foodList.forEach(function (food) {
      if (food.category === selectedCategory.text) {
        const foodSlide = $('<div class="foods-item" id="openBtn" ></div>');
        const foodImageHolder = $('<div class="food-item__image"></div>');
        const foodImage = $("<img>")
          .attr("src", food.mainImage)
          .attr("alt", food.title);
        const foodTitle = $("<p>").text(food.title);
        const foodEnglishTitle = $("<span>").text(food.englishTitle);
        const foodPrice = $('<span class="price">').text(food.price + " تومان");

        foodImageHolder.append(foodImage);
        foodSlide.append(
          foodImageHolder,
          foodTitle,
          foodEnglishTitle,
          foodPrice
        );
        foodsWrapper.append(foodSlide);
      }
    });
  }
});
