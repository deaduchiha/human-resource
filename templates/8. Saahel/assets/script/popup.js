import { foodList } from "./data.js";
import { openPopup } from "./utils.js";

const swiper = $(".popupImages .swiper-wrapper");
const sizes = $(".popup_sizes");
let isVideoOpen = false;
const showVideoText = $(".video-button span ");
const popupBottomHolder = $(".popup_bottom-holder ");

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
    const food = foodList.find((item) => item.id === foodId); // Find the corresponding food object

    openPopup(food, isVideoOpen, popupBottomHolder);
  });

  $(document).on("click", "#closeBtn", function () {
    swiper.empty();
    sizes.empty();
    isVideoOpen = false;
    popupBottomHolder.css({
      height: "40vh",
    });
    showVideoText.text("نمایش ویدیو");
    $("#popup").fadeOut();
  });
});
