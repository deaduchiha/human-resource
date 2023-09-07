const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

const categorySwiperWrapper = $(".categorySwiper .swiper-wrapper");

import(importPath)
  .then(({ foods }) => {
    $(document).ready(function () {
      $(document).on("click", "#openBtn", function () {
        const foodId = $(this).data("food-id"); // Get the data-food-id attribute from the clicked food item
        const food = foods.find((item) => item.id === foodId); // Find the corresponding food object

        // title
        $(".food-details__heading").text(food.title);
        $(".food-details__heading-english").text(food.englishTitle);
        // images slider
        const imageSwiperWrapper = $(".popupSwiper .swiper-wrapper");
        imageSwiperWrapper.empty();
        food.images.map((data) => {
          const imageSwiperSlide = $("<div>").addClass("swiper-slide");
          const image = $("<img>").attr("src", data);
          imageSwiperSlide.append(image);
          imageSwiperWrapper.append(imageSwiperSlide);
        });
        // description
        $(".food-details__details").text(food.details);
        $(".food-details__price").text(food.price + " تومان ");
        $("#popup").fadeIn();
      });

      $(document).on("click", "#closeBtn", function () {
        $("#popup").fadeOut();
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
