import { foodsData } from "./data.js";
import { openPopup } from "./utils.js";

const swiper = $(".popupImages .swiper-wrapper");
const sizes = $(".popup_sizes");

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
