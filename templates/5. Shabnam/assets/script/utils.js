export let popupSwiper; // Declare a global variable to hold the Swiper instance

export function openPopup(food) {
  // Update the popup content with the details of the clicked food item
  $("#popup .food-name p").text(food.title);
  $("#popup .food-name span").text(food.englishTitle);
  $("#popup .food-information span").text(food.description);
  $("#popup .food-price span").text(food.price + " تومان");

  // Create swiper slides dynamically
  const swiperWrapper = $(".popupSlider .swiper-wrapper");
  swiperWrapper.empty(); // Clear existing slides

  // Loop through slideImage array and create swiper-slide elements
  for (let i = 0; i < food.images.length; i++) {
    const slideImage = food.images[i];
    const swiperSlide = $("<div>").addClass("swiper-slide");
    const imageShadow = $("<div>").addClass("sliderShadow");

    // Create img tag and set the source from slideImage array
    const img = $("<img>")
      .attr("src", slideImage)
      .attr("alt", "")
      .data("index", i); // Set the data-index attribute with the slide index

    swiperSlide.append(img);
    swiperSlide.append(imageShadow);
    swiperWrapper.append(swiperSlide);
  }

  $(".food-details__video").click(function () {
    const videoSrc = "../../common/video/pizza.mp4"; // New video source
    const videoType = "video/mp4"; // New video type

    const $video = $("#myvideo");
    $video.empty(); // Clear existing source elements

    const $source = $("<source>");
    $source.attr("src", videoSrc);
    $source.attr("type", videoType);

    $video.append($source);
    $video.css("display", "inherit");
    $video.get(0).play(); // Start playing the video

    $video.on("ended", function () {
      $(this).css("display", "none");
    });
  });

  // Initialize the swiper after dynamically creating the slides
  popupSwiper = new Swiper(".popupSlider", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Show the popup
  $("#popup").fadeIn();
}

export function destroyPopupSwiper() {
  if (popupSwiper) {
    popupSwiper.destroy();
    popupSwiper = null;
  }
}
