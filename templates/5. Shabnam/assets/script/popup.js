import { foodList } from "./data.js";
import { openPopup } from "./utils.js";

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    const foodIndex = $(this).index();
    const food = foodList[foodIndex];

    openPopup(food);
  });

  $(document).on("click", "#closeBtn", function () {
    $("#popup").fadeOut();
  });

  // Function to open the popup with food details
  openPopup;
});

$(document).on("click", "#closeBtn", function () {
  $("#popup").fadeOut();
});
