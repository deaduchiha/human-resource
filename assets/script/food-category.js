// Create the swiper wrapper element
const swiperWrapper = $("<div>").addClass("swiper-wrapper");

// Create the swiper slide elements
const swiperSlides = ["پیتزا", "برگر", "مرغ سوخاری", "سالاد", "پیش غذا"];

swiperSlides.forEach(function (slideText, index) {
  const swiperSlide = $("<span>")
    .addClass("swiper-slide")
    .text(slideText)
    .click(function () {
      // Remove active class from all other slides
      $(".swiper-slide").removeClass("active");

      // Add active class to the clicked slide
      $(this).addClass("active");
    });

  // Set the first slide as active by default
  if (index === 0) {
    swiperSlide.addClass("active");
  }

  swiperWrapper.append(swiperSlide);
});

// Append the swiper wrapper to the menuSwiper element
$(".menuSwiper").append(swiperWrapper);
