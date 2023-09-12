const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;
import { openPopup } from "./ivaan-utils.js";

const swiper = $(".popupImages .swiper-wrapper");
const sizes = $(".popup_sizes");

import(importPath)
  .then(({ foods }) => {
    // Your code that uses categories and foodsData
    $(document).ready(function () {
      $(document).on("click", "#openBtn", function () {
        const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
        const food = foods.find((item) => item.id === foodId); // Find the corresponding food object

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
