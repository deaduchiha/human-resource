export function openPopup(food) {
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

  //   details
  $(".popup_details p").text(food.description);
  //video
  const videoHolder = $(".popup-video_holder");
  let isVideoOpen = false;
  $(".videoHolder").css("display", "none");
  $(".videoHolder video").attr("src", food.videoUrl);
  videoHolder.on("click", () => {
    isVideoOpen = !isVideoOpen;
    if (isVideoOpen) {
      $(".videoHolder").css("display", "block");

      $("html, body, .popup-container, .popup-content").animate(
        { scrollTop: $(document).height() },
        "slow"
      );

      $(".popup-video_holder span").text("بستن ویدیو");
    } else {
      $(".videoHolder").css("display", "none");

      $(".popup-video_holder span").text("نمایش ویدیو");
    }
  });

  $("#popup").fadeIn();
}
