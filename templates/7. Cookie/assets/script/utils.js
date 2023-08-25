export const videoHolder = $("<div>").addClass("videoHolder");

export function openPopup(food, popupWrapper, prices, priceHolder) {
  let isVideoOpen = false;
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

  const video = $("<video>", {
    width: "100%",
    controls: true,
    id: "myvideo",
  });

  const videoLogo = $("<img>")
    .attr("src", "assets/images/icons/video.svg")
    .attr("alt", "video");

  const showVideo = $("<span>").text("نمایش ویدئو");

  videoHolder.append(videoLogo, showVideo);

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

  videoHolder.on("click", () => handleVideo());

  function setInitialPosition() {
    const windowHeight = $(window).height();
    const initialBottom = windowHeight <= 741 ? "17vh" : "30vh";
    videoHolder.css("bottom", initialBottom);
  }

  function handleVideo() {
    if (!isVideoOpen) {
      isVideoOpen = true;
      videoLogo.removeAttr("src").removeAttr("alt");
      showVideo.text("بستن ویدئو");

      const videoSrc = "../../common/video/pizza.mp4";
      const videoType = "video/mp4";

      video.empty();
      const source = $("<source>");
      source.attr("src", videoSrc);
      source.attr("type", videoType);

      video.append(source);
      video.css("visibility", "visible");
      video.get(0).play(); // Start playing the video

      setInitialPosition(); // Call to set the initial position

      // Listen for video end event
      video.on("ended", function () {
        video.css("visibility", "hidden");
        showVideo.text("نمایش ویدئو");
        videoLogo
          .attr("src", "assets/images/icons/video.svg")
          .attr("alt", "video");
        isVideoOpen = false;
      });
    } else {
      isVideoOpen = false;
      videoHolder.css("bottom", "30vh");
      showVideo.text("نمایش ویدئو");
      videoLogo
        .attr("src", "assets/images/icons/video.svg")
        .attr("alt", "video");
      video.get(0).pause(); // Pause the video
      video.css("visibility", "hidden");
      video.get(0).currentTime = 0;
    }

    priceHolder.css({
      visibility: isVideoOpen ? "hidden" : "visible",
    });
    video.on("ended", function () {
      $(this).css("visibility", "hidden");

      videoHolder.css("bottom", "30vh");

      priceHolder.css({
        visibility: "visible",
      });
    });
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
  popupWrapper.append(title, englishTitle, description, video, videoHolder);

  $(window).trigger("resize");

  // Show the popup
  $("#popup").fadeIn();
}
