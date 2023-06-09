$(document).ready(function () {
  // Use event delegation for the click event on a static parent element
  $(".foods-list-container").on("click", ".food-list", function () {
    // Get the index of the clicked element
    const index = $(this).index();

    // Get the corresponding food item from the foodItems array
    const filteredFoodList = foodItems.filter(
      (item) => item.category === $(".second-template__food h2").text()
    );
    const foodItem = filteredFoodList[index];

    // Update the popup content with the food item details
    $("#popup .food-details__heading").text(foodItem.headingText);
    $("#popup .food-details__image").attr("src", foodItem.imageSrc);
    $("#popup .food-details__details").text(foodItem.details);
    $("#popup .food-details__price").text(
      foodItem.priceValue + " " + foodItem.priceCurrency
    );

    // Show the popup
    $("#popup").fadeIn();
  });

  $("#closeBtn").click(function () {
    $("#popup").fadeOut();
  });
});

// swiper
const swiper = new Swiper(".popupSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {});

  const innerSwiper = new Swiper(".menuSwiper", {
    initialSlide: 0,
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    nested: true, // Enable nested swiper
  });

  outerSwiper.controller = innerSwiper;
});
