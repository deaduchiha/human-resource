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

  const priceHolder = $("<div>").addClass("popup-food_priceHolder");
  const prices = $("<div>").addClass("popup-food_priceHolder__price");

  food.sizes.map((data, index) => {
    // Create a div to hold the size options
    const sizeOption = $("<span>").text(data.size);

    // if (index === 0) {
    //   sizeOption.addClass("active-size");
    // }

    // Add click event listener to each size option
    // sizeOption.on("click", () => handleSizeClick(data.sizePrice, sizeOption));

    prices.append(sizeOption);
  });

  priceHolder.append(prices);

  popupContainer.append(priceHolder);
  popupWrapper.append(title, englishTitle, description);

  // Show the popup
  $("#popup").fadeIn();
}
