// Create the swiper wrapper element
const swiperWrapper = $("<div>").addClass("swiper-wrapper");

// Create the swiper slide elements
const swiperSlides = [
  { text: "پیتزا", image: "assets/images/pitza.png" },
  { text: "برگر", image: "assets/images/burgur.jpg" },
  { text: "مرغ سوخاری", image: "assets/images/chicken.png" },
  { text: "سالاد", image: "assets/images/salad.png" },
  { text: "پیش غذا", image: "assets/images/appetizer.png" },
];

swiperSlides.forEach(function (slide, index) {
  const swiperSlide = $("<span>")
    .addClass("swiper-slide")
    .text(slide.text)
    .click(function () {
      // Remove active class from all other slides
      $(".swiper-slide").removeClass("active");

      // Add active class to the clicked slide
      $(this).addClass("active");

      // Update the active index text
      $(".second-template__food h2").text(slide.text);

      // Update the image source based on the active index
      $(".second-template__food img").attr("src", slide.image);
    });

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
