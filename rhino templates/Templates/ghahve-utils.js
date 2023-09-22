export function openPopup(food) {
  $(".popup_titles h2").text(food.title);
  $(".popup_titles h3").text(food.englishTitle);
  $(".popup_price span").text(food.sizes[0].price);

  //   sizes
  const sizes = $(".popup_sizes");
  sizes.empty();
  food.sizes.map((sizeData) => {
    const size = $("<div>").text(sizeData.size);
    sizes.append(size);
  });

  // images
  const imagesWrapper = $(".popup-images-swiper .swiper-wrapper");
  imagesWrapper.empty();
  food.images.map((image) => {
    const imgSlide = $("<div>").addClass("swiper-slide");
    const img = $("<img>").attr({
      src: image,
      alt: food.title,
    });
    imgSlide.append(img);
    imagesWrapper.append(imgSlide);
  });
  //   details
  $(".popup_details p").text(food.description);

  $("#popup").fadeIn();
}
