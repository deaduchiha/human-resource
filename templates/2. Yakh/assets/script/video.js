function openFullscreen() {
  const videoSrc = "../../common/video/pizza.mp4"; // New video source
  const videoType = "video/mp4"; // New video type

  const $video = $("#myvideo");
  $video.empty(); // Clear existing source elements

  const $source = $("<source>");
  $source.attr("src", videoSrc);
  $source.attr("type", videoType);

  $video.append($source);

  const elem = document.getElementById("myvideo");
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
      $(this).css("display", "none");
    });
  });
});
