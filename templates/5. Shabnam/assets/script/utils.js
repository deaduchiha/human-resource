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
  for (let i = 0; i < food.slideImage.length; i++) {
    const slideImage = food.slideImage[i];
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
