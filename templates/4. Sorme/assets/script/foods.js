import { foodList } from "./data.js";

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
