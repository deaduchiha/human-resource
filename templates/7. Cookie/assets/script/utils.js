export let popupSwiper; // Declare a global variable to hold the Swiper instance

export function openPopup(food, popupWrapper) {
  const title = $("<p>").addClass("popup-food_title").text(food.title);
  const englishTitle = $("<p>")
    .addClass("popup-food_english-title")
    .text(food.englishTitle);
  const description = $("<span>")
    .addClass("popup-food_description")
    .text(food.description);

  const video = $("<p>").addClass("abbas").text("salam");

  popupWrapper.append(title, englishTitle, description, video);

  // Show the popup
  $("#popup").fadeIn();
}
