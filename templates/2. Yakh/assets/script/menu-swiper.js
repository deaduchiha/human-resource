$(document).ready(function () {
  const outerSwiper = new Swiper(".mySwiper", {});

  const innerSwiper = new Swiper(".yakhSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    nested: true,
    spaceBetween: 15,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 1,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },
  });

  outerSwiper.controller = innerSwiper;
});

var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

$(document).ready(function () {
  $(".food-details__video").click(function () {
    $(".food-details video").css("display", "inherit");
    $(".food-details video").on("ended webkitendfullscreen", function () {
      $(".food-details video").css("display", "none");
    });
  });
});
