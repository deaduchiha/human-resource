const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import { openPopup } from "./ghahve-utils.js";

import(importPath)
  .then(({ foods }) => {
    new Swiper(".popup-images-swiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
      },
    });
    $(document).on("click", "#openBtn", function () {
      const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
      const food = foods.find((item) => item.id === foodId); // Find the corresponding food object

      openPopup(food);
    });

    $(document).on("click", "#closeBtn", function () {
      $("#popup").fadeOut();
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
