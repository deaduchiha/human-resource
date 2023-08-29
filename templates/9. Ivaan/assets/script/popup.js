// Get the current URL path
const currentPath = window.location.pathname;

// Split the path using '/' as the separator
const pathParts = currentPath.split("/");

// Get the last part of the path (which should be "ivaan.html" in your example)
const lastPart = pathParts[pathParts.length - 1];

// Remove the ".html" extension from the last part
const fileNameWithoutExtension = lastPart.split(".")[0];

console.log(fileNameWithoutExtension); // This will log "ivaan"

// Construct the import path using dynamic import
const importPath = `../../../../rinho/${fileNameWithoutExtension}.js`;

import { openPopup } from "./utils.js";

const swiper = $(".popupImages .swiper-wrapper");
const sizes = $(".popup_sizes");

import(importPath)
  .then(({ foodsData }) => {
    // Your code that uses categories and foodsData
    $(document).ready(function () {
      $(document).on("click", "#openBtn", function () {
        const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
        const food = foodsData.find((item) => item.id === foodId); // Find the corresponding food object

        openPopup(food);
      });

      $(document).on("click", "#closeBtn", function () {
        swiper.empty();
        sizes.empty();
        $("#myVideo").get(0).pause();
        $("#myVideo").get(0).currentTime = 0;
        $("#myVideo").css({
          display: "none",
        });
        $(".video-button span").text("نمایش ویدیو");
        $("#popup").fadeOut();
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
