const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foods }) => {
    const popupWrapper = $(".popup__info");
    const prices = $("<div>").addClass("popup-food_priceHolder__price");
    const priceHolder = $("<div>").addClass("popup-food_priceHolder");

    $(document).ready(function () {
      $(document).on("click", "#openBtn", function () {
        const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
        const food = foods.find((item) => item.id === foodId); // Find the corresponding food object

        openPopup(food, popupWrapper, prices, priceHolder);
      });

      $(document).on("click", "#closeBtn", function () {
        popupWrapper.empty();
        prices.empty();
        priceHolder.empty();
        videoHolder.empty();
        $("#popup").fadeOut();
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });

import { openPopup, videoHolder } from "./cookie-utils.js";
