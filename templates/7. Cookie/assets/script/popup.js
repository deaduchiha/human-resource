import { foodList } from "./data.js";
import { openPopup } from "./utils.js";

const popupWrapper = $(".popup__info");

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
    const food = foodList.find((item) => item.id === foodId); // Find the corresponding food object

    openPopup(food, popupWrapper);
  });

  $(document).on("click", "#closeBtn", function () {
    $("#popup").fadeOut();
    popupWrapper.empty();
  });
});
