import { foodCategory } from "./data.js"; // Import the foodCategory array

// Function to generate the swiper slides
function generateSwiperSlides() {
  const swiperWrapper = $(".categorySwiper .swiper-wrapper");

  // Loop through the foodCategory array
  foodCategory.forEach((category) => {
    // Create a new swiper slide div with the category text and icon
    const slide = $("<div>").addClass("swiper-slide");
    const img = $("<img>").attr("src", category.icon).attr("alt", "icon");
    const span = $("<span>").text(category.text);

    // Append the image and span to the slide
    slide.append(img).append(span);

    // Append the slide to the swiper wrapper
    swiperWrapper.append(slide);
  });

  // Initialize the Swiper component after adding all the slides
  const mySwiper = new Swiper(".categorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
  });
}

// Call the function to generate the swiper slides
generateSwiperSlides();
