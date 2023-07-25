// Function to open the popup with food details
export function openPopup(food) {
  // Update the popup content with the details of the clicked food item
  $("#popup .popup-header p").text(food.title);
  $("#popup .popup-header span").text(food.englishTitle);
  $("#popup .popup-information .price").text(food.price + " تومان");
  $("#popup .popup-information .description span").text(food.description);

  // Set the src attribute of the img tag inside popup-image__holder
  const popupImageHolder = $(".popup-image__holder");
  const activeImageSrc = food.slideImage[0];
  popupImageHolder.find("img").attr("src", activeImageSrc);

  // Create swiper slides dynamically
  const swiperWrapper = $(".verticalSwiper .swiper-wrapper");
  swiperWrapper.empty(); // Clear existing slides

  // Loop through slideImage array and create swiper-slide elements
  for (let i = 0; i < food.slideImage.length; i++) {
    const slideImage = food.slideImage[i];
    const swiperSlide = $("<div>").addClass("swiper-slide");

    // Create img tag and set the source from slideImage array
    const img = $("<img>")
      .attr("src", slideImage)
      .attr("alt", "")
      .data("index", i); // Set the data-index attribute with the slide index

    // Add click event handler to the image
    img.on("click", function () {
      const clickedIndex = $(this).data("index");

      // Update the active index and set the corresponding image src
      const activeImageSrc = food.slideImage[clickedIndex];
      popupImageHolder.find("img").attr("src", activeImageSrc);

      // Activate the corresponding swiper-slide
      verticalSwiper.slideTo(clickedIndex);
    });

    swiperSlide.append(img);
    swiperWrapper.append(swiperSlide);
  }

  // Initialize the swiper after dynamically creating the slides
  const verticalSwiper = new Swiper(".verticalSwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 35,
    initialSlide: 0,
    navigation: {
      nextEl: ".nextEl",
    },
  });

  // Show the popup
  $("#popup").fadeIn();
}
