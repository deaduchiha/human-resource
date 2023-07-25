import { foodCategory, foodList } from "./data.js";

$(document).ready(function () {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");
  const foodSwiperWrapper = $(".foodSwiper .swiper-wrapper");
  let foodSwiper = null; // Declare the foodSwiper variable

  // Generate HTML for each category
  foodCategory.forEach((category) => {
    const slide = $("<div>").addClass("swiper-slide").text(category.text);
    slide.attr("data-category-id", category.id);

    swiperWrapper.append(slide);
  });

  // Initialize the Swiper component
  const mySwiper = new Swiper(".categorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  // Add click event handler to each slide
  const swiperSlides = $(".swiper-slide");
  swiperSlides.on("click", function () {
    // Remove active class from all slides
    swiperSlides.removeClass("active-category");

    // Add active class to the clicked slide
    $(this).addClass("active-category");

    // Apply CSS styles to the clicked category
    swiperSlides.css({
      color: "#7b7b7b",
      background: "none",
      padding: "10px",
      transition: "all 0.3s ease",
    });
    $(this).css({
      color: "#222222",
      background: "#FAFAFA",
      "border-top-right-radius": "12px",
      "border-top-left-radius": "12px",
      transition: "all 0.3s ease",
    });

    // Get the selected category ID
    const categoryId = $(this).data("category-id");

    // Filter foodList based on the selected category
    const filteredFoodList = getFoodListByCategory(categoryId);

    // Clear existing food items
    foodSwiperWrapper.empty();

    // Generate HTML for each food item
    filteredFoodList.forEach(function (food) {
      const foodSlide = $('<div class="swiper-slide"></div>');
      const foodImage = $("<img>").attr("src", food.mainImage).attr("alt", "");
      const foodNames = $('<div class="food-names"></div>');
      const foodTitle = $("<p>").text(food.title);
      const foodEnglishTitle = $("<span>").text(food.englishTitle);
      const foodPrice = $("<span>").text(food.price + " تومان");

      foodNames.append(foodTitle, foodEnglishTitle);
      foodSlide.append(foodImage, foodNames, foodPrice);
      foodSwiperWrapper.append(foodSlide);

      // Add click event handler to the food slide
      foodSlide.on("click", function () {
        const foodId = food.id; // Use the ID or a unique identifier of the food item
        const clickedFood = foodList.find((item) => item.id === foodId);

        // Show the details of the clicked food item
        console.log(clickedFood);
        // Replace the above line with your code to show the details of the clicked food item

        // Open the popup with the details of the clicked food item
        openPopup(clickedFood);
      });
    });

    // Function to open the popup with food details
    function openPopup(food) {
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

    // Destroy the previous foodSwiper instance if it exists
    if (foodSwiper) {
      foodSwiper.destroy();
    }

    // Initialize the foodSwiper component
    foodSwiper = new Swiper(".foodSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      watchSlidesProgress: true,
      initialSlide: 1,
    });
  });

  // Set "همه" category as active by default
  const defaultCategory = swiperSlides.first();
  defaultCategory.addClass("active-category");
  defaultCategory.css({
    color: "#222222",
    background: "#FAFAFA",
    "border-top-right-radius": "12px",
    "border-top-left-radius": "12px",
  });

  // Function to filter foodList based on the category ID
  function getFoodListByCategory(categoryId) {
    if (categoryId === 1) {
      // Return all food items
      return foodList;
    } else {
      // Filter food items based on the selected category ID
      const selectedCategory = foodCategory.find(
        (category) => category.id === categoryId
      );
      if (selectedCategory) {
        return foodList.filter(
          (food) => food.category === selectedCategory.text
        );
      } else {
        // Invalid category ID, return an empty array
        return [];
      }
    }
  }
});
