const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath)
  .then(({ foodList }) => {
    $(document).ready(function () {
      const swiperWrapper = $(".foodSwiper .swiper-wrapper");

      foodList.forEach(function (food) {
        const foodSlide = $('<div class="swiper-slide" id="openBtn"></div>');
        const foodImage = $("<img>")
          .attr("src", food.images[0])
          .attr("alt", "image");
        const foodNames = $('<div class="food-names"></div>');
        const foodTitle = $("<p>").text(food.title);
        const foodEnglishTitle = $("<span>").text(food.englishTitle);
        const foodPrice = $("<span>").text(food.price + " تومان");

        foodNames.append(foodTitle, foodEnglishTitle);
        foodSlide.append(foodImage, foodNames, foodPrice);
        swiperWrapper.append(foodSlide);
      });

      new Swiper(".foodSwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        watchSlidesProgress: true,
        initialSlide: 1,
      });
    });
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
