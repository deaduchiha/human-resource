// popup
$(document).ready(function () {
  $(".openBtn").click(function () {
    // Get the index of the clicked element
    const index = $(this).index();

    // Get the corresponding food item from the foodItems array
    const foodItem = foodItems[index];

    // Update the popup content with the food item details
    $("#popup .food-details__heading").text(foodItem.headingText);
    $("#popup .food-details__image").attr("src", foodItem.imageSrc);
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
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 45,
    nested: true, // Enable nested swiper
  });

  outerSwiper.controller = innerSwiper; // Set outerSwiper as controller of innerSwiper
});
