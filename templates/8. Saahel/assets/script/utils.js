export function openPopup(food) {
  // const popupContainer = $(".popup-container");
  const swiper = $(".popupImages .swiper-wrapper");
  const foodDetails = $(".popup_food-details");

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
  food.sizes.map((data) => {
    const sizeHolder = $("<div>").addClass("size-holder");
    const sizeIcon = $("<svg>").attr("stroke", "currentColor").load(data.icon);
    const sizeText = $("<span>").text(data.size);

    sizeHolder.append(sizeIcon, sizeText);
    sizes.append(sizeHolder);
  });

  $(".popup_price").text(food.sizes[0].sizePrice);

  // Show the popup
  $("#popup").fadeIn();
}

export const popupSwiper = new Swiper(".popupImages", {
  pagination: {
    el: ".swiper-pagination",
  },
});
