import { foodList } from "./data.js";
import { openPopup, destroyPopupSwiper } from "./utils.js";

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    const foodIndex = $(this).index();
    const food = foodList[foodIndex];

    openPopup(food);
  });

  $(document).on("click", "#closeBtn", function () {
    $("#popup").fadeOut();
    destroyPopupSwiper(); // Destroy the Swiper instance when closing the popup
  });
});
