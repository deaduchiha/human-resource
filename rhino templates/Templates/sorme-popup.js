import { openPopup } from "./sorme-utils.js";

const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foodList }) => {
    $(document).ready(function () {
      $(document).on("click", "#openBtn", function () {
        const foodIndex = $(this).index();
        const food = foodList[foodIndex];

        openPopup(food);
      });

      $(document).on("click", "#closeBtn", function () {
        $("#popup").fadeOut();
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });

$(document).on("click", "#closeBtn", function () {
  $("#popup").fadeOut();
});
