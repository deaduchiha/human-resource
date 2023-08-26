export function openPopup(food, isVideoOpen, popupBottomHolder, video) {
  // const popupContainer = $(".popup-container");
  const swiper = $(".popupImages .swiper-wrapper");
  const foodDetails = $(".popup_food-details");

  const showVideoButton = $(".video-button ");
  const spanText = showVideoButton.find("span");

  food.images.map((image) => {
    const swiperSlide = $("<div>").addClass("swiper-slide");
    const swiperSlideImage = $("<img>")
      .attr("src", image)
      .attr("alt", food.title);

    swiperSlide.append(swiperSlideImage);
    swiper.append(swiperSlide);
  });

  $(".popup_food-title").text(food.title);
  $(".popup_food-description").text(food.description);

  const sizes = $(".popup_sizes");
  let price = $(".popup_price");

  food.sizes.map((data, index) => {
    const sizeHolder = $("<div>").addClass("size-holder");

    const sizeText = $("<span>").text(data.size);

    if (index === 0) {
      sizeHolder.addClass("active-size");
      price.text(data.price);
    }
    sizeHolder.on("click", () => handleSizeClick(data.price, sizeHolder));
    sizeHolder.append(sizeText);
    sizes.append(sizeHolder);
  });

  // handle click event on size options price
  function handleSizeClick(sizePrice, sizeHolder) {
    // Remove the "active-size" class from all size options
    sizes.find("div").removeClass("active-size");
    // Add the "active-size" class to the clicked size option
    sizeHolder.addClass("active-size");
    price.text(sizePrice);
  }

  $(".popup_price").text(food.sizes[0].sizePrice);

  // Show the popup
  $("#popup").fadeIn();
}

export const popupSwiper = new Swiper(".popupImages", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 25,
});

export function closePopup() {
  isVideoOpen = false; // Reset isVideoOpen to default
}
