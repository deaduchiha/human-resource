// Create the swiper slide elements
const swiperSlides = [
  { text: "پیتزا", image: "../../common/images/pizza.png" },
  { text: "برگر", image: "../../common/images/burger.jpg" },
  { text: "مرغ سوخاری", image: "../../common/images/pizza.png" },
  { text: "سالاد", image: "../../common/images/burger.jpg" },
  { text: "پیش غذا", image: "../../common/images/pizza.png" },
];
// Create a function to generate the HTML structure for each food item
function createFoodItemHTML(item) {
  // Create the HTML structure using template literals
  const html = `
    <div class="food-list" id="openBtn">
      <div class="food-list__image">
        <img src="${item.imageSrc}" alt="${item.imageAlt}">
      </div>
      <h3>${item.headingText}</h3>
      <div>
        <span>${item.priceValue}</span>
        <span>${item.priceCurrency}</span>
      </div>
    </div>
  `;

  const $tempContainer = $(html);
  return $tempContainer[0];
}

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
  const filteredFoodList = foodItems.filter((item) => {
    return item.category === selectedCategory;
  });

  // Generate the food list HTML based on the filtered list
  const filteredFoodListHTML = filteredFoodList.map(createFoodItemHTML);

  // Clear the existing food list
  $(".foods-list-container").empty();

  // Append the generated food list HTML to the desired element in the document
  $(".foods-list-container").append(filteredFoodListHTML);
}

// Generate the food list HTML for the initial category
const initialCategory = swiperSlides[0].text;
const initialFilteredFoodList = foodItems.filter((item) => {
  return item.category === initialCategory;
});
const initialFilteredFoodListHTML =
  initialFilteredFoodList.map(createFoodItemHTML);
$(".foods-list-container").append(initialFilteredFoodListHTML);

// Create the swiper wrapper element
const swiperWrapper = $("<div>").addClass("swiper-wrapper");

// Create the swiper slide elements
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

// Trigger click event on the first slide
$(".swiper-slide:first-child").trigger("click");
