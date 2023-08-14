export let popupSwiper; // Declare a global variable to hold the Swiper instance

export function openPopup(food, popupWrapper) {
  const popupContainer = $(".popup-container");

  const title = $("<p>").addClass("popup-food_title").text(food.title);
  const englishTitle = $("<p>")
    .addClass("popup-food_english-title")
    .text(food.englishTitle);
  const description = $("<span>")
    .addClass("popup-food_description")
    .text(food.description);

  const video = $("<div>").addClass("popup-food_priceHolder");

  popupContainer.append(video);
  popupWrapper.append(title, englishTitle, description);

  // Show the popup
  $("#popup").fadeIn();
}
