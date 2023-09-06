const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

const categorySwiperWrapper = $(".categorySwiper .swiper-wrapper");

import(importPath)
  .then(({ categories }) => {
    $(document).ready(function () {
      // map on categories
      categories.map((data) => {
        const category = $("<div>")
          .addClass("swiper-slide")
          .text(data.category)
          .click(function () {
            // for remove last active category
            categorySwiperWrapper
              .find(".swiper-slide")
              .removeClass("active-category");

            $(this).addClass("active-category");
            $(".selected-category-holder span").text(data.category);
            $(".selected-category-holder img").attr("src", data.image);
          });
        categorySwiperWrapper.append(category);
      });

      $(".swiper-slide:first-child").trigger("click");
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
