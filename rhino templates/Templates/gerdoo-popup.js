import { openPopup, destroyPopupSwiper } from "./gerdoo-utils.js";

const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foods }) => {
    $(document).ready(function () {
      // Change the event delegation selector to "body" to capture dynamically created elements
      $(document).on("click", ".foods-item", function () {
        const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
        const food = foods.find((item) => item.id === foodId); // Find the corresponding food object

        openPopup(food);
      });

      $(document).on("click", "#closeBtn", function () {
        $("#popup").fadeOut();
        destroyPopupSwiper(); // Destroy the Swiper instance when closing the popup
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
