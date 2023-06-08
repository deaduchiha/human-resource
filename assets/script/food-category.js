// Function to handle slide click event
function handleSlideClick() {
  const slide = $(this);
  const index = slide.index();

  // Remove active class from all other slides
  $(".swiper-slide").removeClass("active");

  // Add active class to the clicked slide
  slide.addClass("active");

  // Update the active index text
  const activeText = swiperSlides[index].text;
  $(".second-template__food h2").text(activeText);

  // Update the image source based on the active index
  const activeImage = swiperSlides[index].image;
  $(".second-template__food img").attr("src", activeImage);

  // Filter the food list based on the selected category
  const selectedCategory = swiperSlides[index].text;
  const filteredFoodList = foodItems.filter(
    (item) => item.category === selectedCategory
  );

  // Generate the food list HTML based on the filtered list
  const filteredFoodListHTML = filteredFoodList.map(createFoodItemHTML);

  // Clear the existing food list
  $(".food-list").remove();

  // Append the generated food list HTML to the desired element in the document
  $(".second-template__frame").append(filteredFoodListHTML);
}

// Create the swiper wrapper element
const swiperWrapper = $("<div>").addClass("swiper-wrapper");

// Create the swiper slide elements
const swiperSlides = [
  { text: "پیتزا", image: "assets/images/pitza.png" },
  { text: "برگر", image: "assets/images/burgur.jpg" },
  { text: "مرغ سوخاری", image: "assets/images/pitza.png" },
  { text: "سالاد", image: "assets/images/burgur.jpg" },
  { text: "پیش غذا", image: "assets/images/pitza.png" },
];

swiperSlides.forEach(function (slide, index) {
  const swiperSlide = $("<span>")
    .addClass("swiper-slide")
    .text(slide.text)
    .click(handleSlideClick);

  // Set the first slide as active by default
  if (index === 0) {
    swiperSlide.addClass("active");

    // Set the initial active index text and image
    $(".second-template__food h2").text(slide.text);
    $(".second-template__food img").attr("src", slide.image);
  }

  swiperWrapper.append(swiperSlide);
});

// Append the swiper wrapper to the menuSwiper element
$(".menuSwiper").append(swiperWrapper);
