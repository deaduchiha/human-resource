export let popupSwiper; // Declare a global variable to hold the Swiper instance

export function openPopup(food, popupWrapper, prices, priceHolder) {
  const popupContainer = $(".popup-container");

  const title = $("<p>").addClass("popup-food_title").text(food.title);
  const englishTitle = $("<p>")
    .addClass("popup-food_english-title")
    .text(food.englishTitle);
  const description = $("<span>")
    .addClass("popup-food_description")
    .text(food.description);

  // const priceHolder = $("<div>").addClass("popup-food_priceHolder");
  const sizesPrice = $("<span>")
    .addClass("popup-food_price")
    .text(food.sizes[0].sizePrice);
  const toman = $("<p>").addClass("toman").text("تومان");

  food.sizes.map((data, index) => {
    // Create a div to hold the size options
    const sizeOption = $("<span>").text(data.size);
    if (index === 0) {
      sizeOption.addClass("active-size");
    }
    // Add click event listener to each size option
    sizeOption.on("click", () => handleSizeClick(data.sizePrice, sizeOption));

    prices.append(sizeOption);
  });
  // handle click event on size options price
  function handleSizeClick(sizePrice, sizeOption) {
    // Remove the "active-size" class from all size options
    priceHolder.find("span").removeClass("active-size");

    // Add the "active-size" class to the clicked size option
    sizeOption.addClass("active-size");
    sizesPrice.text(sizePrice);
  }

  priceHolder.append(prices, sizesPrice, toman);

  if (food.sizes.length === 3) {
    priceHolder.find("span:first-child").css({
      marginTop: "26px",
    });
    priceHolder.find("span:last-child").css({
      marginTop: "10px",
    });
  } else if (food.sizes.length === 2) {
    priceHolder.find("span:first-child").css({
      marginTop: "16px",
    });
  } else {
    ("");
  }

  popupContainer.append(priceHolder);
  popupWrapper.append(title, englishTitle, description);

  // Show the popup
  $("#popup").fadeIn();
}
