import { foodList } from "./data.js";
import { openPopup } from "./utils.js";

const popupWrapper = $(".popup__info");
const prices = $("<div>").addClass("popup-food_priceHolder__price");
const priceHolder = $("<div>").addClass("popup-food_priceHolder");

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
    const food = foodList.find((item) => item.id === foodId); // Find the corresponding food object

    openPopup(food, popupWrapper, prices, priceHolder);
  });

  $(document).on("click", "#closeBtn", function () {
    popupWrapper.empty();
    prices.empty();
    priceHolder.empty();
    $("#popup").fadeOut();
  });
});
