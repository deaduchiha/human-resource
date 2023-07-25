import { foodList } from "./data.js";

$(document).ready(function () {
  const foodsWrapper = $(".foods");

  foodList.forEach(function (food) {
    const foodSlide = $('<div class="foods-item" id="openBtn"></div>'); // Fixed class name to "foods-item"
    const foodImageHolder = $('<div class="food-item__image"></div>');
    const foodImage = $("<img>")
      .attr("src", food.mainImage)
      .attr("alt", food.title); // Use food title as alt text
    const foodTitle = $("<p>").text(food.title);
    const foodEnglishTitle = $("<span>").text(food.englishTitle);
    const foodPrice = $('<span class="price">').text(food.price + " تومان");

    foodImageHolder.append(foodImage);
    foodSlide.append(foodImageHolder, foodTitle, foodEnglishTitle, foodPrice); // Fixed the order of appended elements
    foodsWrapper.append(foodSlide);
  });
});
