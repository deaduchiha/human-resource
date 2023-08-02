import { foodList } from "./data.js";
import { openPopup, destroyPopupSwiper } from "./utils.js";

$(document).ready(function () {
  // Change the event delegation selector to "body" to capture dynamically created elements
  $(document).on("click", ".foods-item", function () {
    const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
    const food = foodList.find((item) => item.id === foodId); // Find the corresponding food object

    openPopup(food);
  });

  $(document).on("click", "#closeBtn", function () {
    $("#popup").fadeOut();
    destroyPopupSwiper(); // Destroy the Swiper instance when closing the popup
  });
});
