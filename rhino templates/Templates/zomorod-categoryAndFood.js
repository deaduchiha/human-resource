const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foodCategory, foodList }) => {
    // Create a function to initialize the swiper
    const mySwiper = new Swiper(".zomorodSwiper", {
      slidesPerView: 4,
      slideToClickedSlide: true,
    });

    // Create a function to filter food items based on category
    function filterFoodItems(category) {
      // Clear the food container
      $(".swiper-wrapper.zomorod-items__container").empty();

      // Filter the foodList based on the selected category
      const filteredFoodList = foodList.filter(function (food) {
        return food.category === category;
      });

      // Iterate through the filtered foodList array
      filteredFoodList.forEach(function (food) {
        // Create the HTML structure using template literals
        const html = `
      <div class="swiper-slide zomorod-items" id="openBtn">
        <div class="items__image">
          <img src="${food.image}" alt="image" />
        </div>
        <span>${food.name}</span>
        <span>${food.price} تومان</span>
      </div>
    `;

        // Append the HTML to the food container
        $(".swiper-wrapper.zomorod-items__container").append(html);
      });

      // Remove the red border from all swiper-image-holder elements
      $(".swiper-image-holder").css("border", "none");

      // Add the red border to the selected category
      $(`.swiper-image-holder[data-category="${category}"]`).css(
        "border",
        "3px solid #D2C798"
      );
    }

    // Loop foodCategory data
    foodCategory.forEach(function (category) {
      const swiperSlide = $("<div>").addClass("swiper-slide");
      const imageHolder = $("<div>")
        .addClass("swiper-image-holder")
        .attr("data-category", category.text);
      const image = $("<img>").attr("src", category.image).attr("alt", "image");
      imageHolder.append(image);
      const span = $("<span>").text(category.text);
      swiperSlide.append(imageHolder, span);

      // Add click event listener to each category slide
      swiperSlide.click(function () {
        // Get the category value
        const categoryValue = category.text;
        // Filter food items based on the selected category
        filterFoodItems(categoryValue);
      });

      $(".zomorodSwiper .swiper-wrapper").append(swiperSlide);
    });

    // Add event listener to update the margin top
    mySwiper.on("slideChange", function () {
      const activeIndex = mySwiper.activeIndex;
      const swiperContainer = $(".zomorodSwiper");

      if (activeIndex === 1 || activeIndex === 2) {
        swiperContainer.addClass("swiper-with-margin");
      } else {
        swiperContainer.removeClass("swiper-with-margin");
      }
    });

    // Create food list
    $(document).ready(function () {
      const foodContainer = $(".swiper-wrapper.zomorod-items__container");

      // Clear the food container
      foodContainer.empty();

      // Iterate through the foodList array
      foodList.forEach(function (food) {
        const html = `
      <div class="swiper-slide zomorod-items" id="openBtn">
        <div class="items__image">
          <img src="${food.image}" alt="image" />
        </div>
        <span>${food.name}</span>
        <span>${food.sizes[0].price} تومان</span>
      </div>
    `;

        // Append the HTML to the food container
        foodContainer.append(html);
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
