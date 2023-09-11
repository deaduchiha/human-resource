const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ categories, foodList }) => {
    $(document).ready(function () {
      const swiperWrapper = $(".categorySwiper .swiper-wrapper");
      const foodsWrapper = $(".foods");

      // Loop through the categories array
      categories.forEach((category, index) => {
        // Create a new swiper slide div with the category text and icon
        const slide = $("<div>").addClass("swiper-slide");
        slide.attr("data-category-id", category.id);

        const img = $("<svg>").attr("stroke", "currentColor");

        $.ajax({
          url: category.icon,
          dataType: "xml",
          success: function (svgData) {
            img.html(svgData.documentElement);
          },
          error: function () {
            console.log("Error loading svg content");
          },
        });

        const span = $("<span>").text(category.category);

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
      filterFoodsByCategory(categories[0].id);

      // Add click event handler to each slide
      const swiperSlides = $(".second-page .swiper-slide");
      swiperSlides.on("click", function () {
        // Only do something if the clicked slide is not already active
        if (!$(this).hasClass("active-category")) {
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
        }
      });

      // Function to filter foodList based on the category ID
      function filterFoodsByCategory(categoryId) {
        // Clear existing food items
        foodsWrapper.empty();

        // Get the selected category
        const selectedCategory = categories.find(
          (category) => category.id === categoryId
        );

        // Generate HTML for each food item of the selected category
        foodList.forEach(function (food) {
          if (food.category === selectedCategory.category) {
            const foodSlide = $('<div class="foods-item" id="openBtn"></div>');
            foodSlide.attr("data-food-id", food.id); // Set the data-food-id attribute
            const foodImageHolder = $('<div class="food-item__image"></div>');
            const foodImage = $("<img>")
              .attr("src", food.images[0])
              .attr("alt", food.title);
            const foodNameAndPriceHolder = $(
              '<div class="food-item_price_holder"></div>'
            );
            const foodTitle = $("<p>").text(food.title);
            const foodEnglishTitle = $("<span>").text(food.englishTitle);
            const foodPrice = $('<span class="price">').text(
              food.sizes[0].price
            );

            foodImageHolder.append(foodImage);
            foodNameAndPriceHolder.append(foodTitle, foodPrice);
            foodSlide.append(
              foodImageHolder,
              foodNameAndPriceHolder,
              foodEnglishTitle
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
