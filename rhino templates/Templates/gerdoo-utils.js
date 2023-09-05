export let popupSwiper; // Declare a global variable to hold the Swiper instance

export function openPopup(food) {
  // Update the popup content with the details of the clicked food item
  $("#popup .food-name p").text(food.title);
  $("#popup .food-name span").text(food.englishTitle);
  $("#popup .food-information span").text(food.description);

  const foodSizes = $("#popup .food-size");
  const sizesTitle = $("<p>").text("اندازه");
  const sizesDiv = $("<div>").addClass("sizes");
  const sizesPrice = $("<span>");

  // Set the default price to the first item's sizePrice
  sizesPrice.text(food.sizes[0].price);

  food.sizes.map((data, index) => {
    // Create a div to hold the size options
    const sizeOption = $("<span>").text(data.size);

    if (index === 0) {
      sizeOption.addClass("active-size");
    }

    // Add click event listener to each size option
    sizeOption.on("click", () => handleSizeClick(data.price, sizeOption));

    sizesDiv.append(sizeOption);
  });

  // handle click event on size options price
  function handleSizeClick(price, sizeOption) {
    // Remove the "active-size" class from all size options
    sizesDiv.find("span").removeClass("active-size");

    // Add the "active-size" class to the clicked size option
    sizeOption.addClass("active-size");
    sizesPrice.text(price);
  }

  foodSizes.empty().append(sizesTitle, sizesDiv, sizesPrice);

  // Create swiper slides dynamically
  const swiperWrapper = $(".popupSlider .swiper-wrapper");
  swiperWrapper.empty(); // Clear existing slides

  // Loop through slideImage array and create swiper-slide elements
  for (let i = 0; i < food.images.length; i++) {
    const slideImage = food.images[i];
    const swiperSlide = $("<div>").addClass("swiper-slide");

    // Create img tag and set the source from slideImage array
    const img = $("<img>")
      .attr("src", slideImage)
      .attr("alt", "")
      .data("index", i); // Set the data-index attribute with the slide index

    swiperSlide.append(img);
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

// Function to destroy the Swiper instance
export function destroyPopupSwiper() {
  if (popupSwiper) {
    popupSwiper.destroy();
    popupSwiper = null;
  }
}
