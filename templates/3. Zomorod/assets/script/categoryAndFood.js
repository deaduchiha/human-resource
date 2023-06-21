import { foodCategory, foodList } from "./data.js";

// Create a function to filter food items based on category
function filterFoodItems(category) {
  // Clear the food container
  $(".swiper-wrapper.zomorod-items__container").empty();

  // Iterate through the foodList array
  foodList.forEach(function (food) {
    // Check if the food item belongs to the selected category
    if (food.category === category) {
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
    }
  });

  // Initialize swiper after filtering
  new Swiper(".zomorodSwiper", {
    slidesPerView: 4,
    slideToClickedSlide: true,
  });
}

// Loop foodCategory data
foodCategory.forEach(function (category) {
  const swiperSlide = $("<div>").addClass("swiper-slide");
  const imageHolder = $("<div>").addClass("swiper-image-holder");
  const image = $("<img>").attr("src", category.image).attr("alt", "image");
  imageHolder.append(image);
  const span = $("<span>").text(category.text);
  swiperSlide.append(imageHolder, span);

  // Add click event listener to each category slide
  swiperSlide.click(function () {
    // Get the category value
    const categoryValue = category.text; // Use "category.text" instead of "category.value"
    // Filter food items based on the selected category
    filterFoodItems(categoryValue);
  });

  $(".zomorodSwiper .swiper-wrapper").append(swiperSlide);
});

// Initialize swiper initially
new Swiper(".zomorodSwiper", {
  slidesPerView: 4,
  slideToClickedSlide: true,
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
        <span>${food.price} تومان</span>
      </div>
    `;

    // Append the HTML to the food container
    foodContainer.append(html);
  });
});
