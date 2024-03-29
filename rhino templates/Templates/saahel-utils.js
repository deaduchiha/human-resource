export function openPopup(food, isVideoOpen, popupBottomHolder, video) {
  // const popupContainer = $(".popup-container");
  const swiper = $(".popupImages .swiper-wrapper");
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
      handleSizeClick(data.sizePrice, sizeHolder);
    }

    $.ajax({
      url: data.icon,
      dataType: "xml", // Set the data type to xml
      success: function (svgContent) {
        // Create an <svg> element and append the fetched SVG content
        const sizeIcon = $(svgContent.documentElement);
        sizeIcon.attr("stroke", "currentColor");

        sizeHolder.on("click", () =>
          handleSizeClick(data.sizePrice, sizeHolder)
        );

        sizeHolder.append(sizeIcon, sizeText);
        sizes.append(sizeHolder);
      },
      error: function () {
        console.error("Error loading SVG");
      },
    });
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

  showVideoButton.click(function () {
    isVideoOpen = !isVideoOpen;
    if (isVideoOpen) {
      spanText.text("بستن ویدیو");
      popupBottomHolder.css({
        height: "68vh",
        zIndex: 20,
      });
      $(".popup_price").css({
        margin: "0 0 10px",
      });

      const videoSrc = food.videoUrl;
      const videoType = "video/mp4";

      video.empty();
      const source = $("<source>");
      source.attr("src", videoSrc);
      source.attr("type", videoType);

      video.append(source);
      video.css({
        display: "block",
        marginBottom: "10px",
      });
      video.get(0).play();

      popupBottomHolder.append(video);
    } else {
      spanText.text("نمایش ویدیو");
      popupBottomHolder.css({
        height: "40vh",
      });

      video.css("display", "none");
      video.get(0).pause(); // Pause the video
      video.get(0).currentTime = 0;
      video.remove();
    }
  });

  // Show the popup
  $("#popup").fadeIn();
}

export const popupSwiper = new Swiper(".popupImages", {
  pagination: {
    el: ".swiper-pagination",
  },
});

export function closePopup() {
  isVideoOpen = false; // Reset isVideoOpen to default
}
