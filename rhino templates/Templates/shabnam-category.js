const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ categories, foods }) => {
    $(document).ready(function () {
      const swiperWrapper = $(".categorySwiper .swiper-wrapper");
      const foodsWrapper = $(".foods");

      // Generate HTML for each category
      categories.forEach((category, index) => {
        const slide = $("<div>")
          .addClass("swiper-slide")
          .text(category.category);
        slide.attr("data-category-id", category.id);

        // Set the first category as active
        if (index === 0) {
          slide.addClass("active-category");
          slide.css({
            color: "#fff",
            transition: "all 0.3s ease",
          });
        }

        swiperWrapper.append(slide);
      });

      new Swiper(".categorySwiper", {
        slidesPerView: "auto",
        spaceBetween: 15,
      });

      // Filter foods based on the first category when the page loads
      filterFoodsByCategory(categories[0].id);

      // Add click event handler to each slide
      const swiperSlides = $(".swiper-slide");
      swiperSlides.on("click", function () {
        // Remove active class from all slides
        swiperSlides.removeClass("active-category");

        // Add active class to the clicked slide
        $(this).addClass("active-category");

        // Apply CSS styles to the clicked category
        swiperSlides.css({
          color: "#959595",
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
        filterFoodsByCategory(categoryId);
      });

      // Function to filter foodList based on the category ID
      function filterFoodsByCategory(categoryId) {
        // Clear existing food items
        foodsWrapper.empty();

        // Get the selected category
        const selectedCategory = categories.find(
          (category) => category.id === categoryId
        );
        console.log(selectedCategory);

        // Generate HTML for each food item of the selected category
        foods.forEach(function (food) {
          if (food.category === selectedCategory.category) {
            const foodSlide = $('<div class="foods-item" id="openBtn" ></div>');
            foodSlide.attr("data-food-id", food.id); // Set the data-food-id attribute

            const foodImageHolder = $('<div class="food-item__image"></div>');
            const foodImage = $("<img>")
              .attr("src", food.images[0])
              .attr("alt", food.title);
            const foodTitle = $("<p>").text(food.title);
            const foodEnglishTitle = $("<span>").text(food.englishTitle);
            const foodPrice = $('<span class="price">').text(
              food.price + " تومان"
            );

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
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
