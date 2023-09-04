const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foodCategory, foodList }) => {
    $(document).ready(() => {
      // categories slider
      new Swiper(".categories", {
        slidesPerView: "auto",
        spaceBetween: 32,
      });

      const swiperWrapper = $(".categories .swiper-wrapper");
      const foodsWrapper = $(".foods");

      // show categories
      foodCategory.map((data, index) => {
        const category = $("<div>").addClass("swiper-slide");
        category.attr("category-id", data.id);
        const iconHolder = $("<div>").addClass("icon-holder");
        const icon = $("<svg>").attr("stroke", "currentColor");
        iconHolder.append(icon);
        const categoryTitle = $("<span>").text(data.text);

        category.append(iconHolder, categoryTitle);
        swiperWrapper.append(category);

        if (index === 0) {
          category.addClass("active-category");
        }

        category.on("click", () => handleCategoryClick(category, data.text));

        // Make an AJAX request to fetch the SVG content
        $.ajax({
          url: data.icon, // URL to the SVG file
          dataType: "xml", // Set the data type to XML
          success: function (svgData) {
            // On success, set the SVG content in the <svg> element
            icon.html(svgData.documentElement);
          },
          error: function () {
            console.error("Error loading SVG content");
          },
        });
      });

      // handle click event on category
      const handleCategoryClick = (clickedCategory, categoryName) => {
        // Remove the "active-category" class from all categories
        const categories = $(".categories .swiper-slide");
        categories.removeClass("active-category");

        // Add the "active-category" class to the clicked category
        clickedCategory.addClass("active-category");

        filterFoodsByCategory(categoryName);
      };

      //filter foods based category
      const filterFoodsByCategory = (categoryName) => {
        // Clear existing food items
        foodsWrapper.empty();

        // Get the selected category
        const selectedCategory = foodList.filter(
          (data) => data.category === categoryName
        );

        const foodElements = selectedCategory.map((data) => {
          const food = $("<div>").addClass("items");
          food.attr("data-food-id", data.id); // Set the data-food-id attribute
          food.attr("id", "openBtn"); // Set the data-food-id attribute

          const foodImage = $("<img>")
            .attr("src", data.image)
            .attr("alt", data.title);
          const foodTitle = $("<p>").addClass("title").text(data.title);
          const foodEnglishTitle = $("<p>")
            .addClass("english-title")
            .text(data.englishTitle);
          const foodPrice = $("<p>")
            .addClass("price")
            .text(data.sizes[0].price);

          food.append(foodImage, foodTitle, foodEnglishTitle, foodPrice);
          return food;
        });

        foodsWrapper.append(foodElements);
      };

      filterFoodsByCategory(foodCategory[0].text); // Pass the category name instead of ID
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
