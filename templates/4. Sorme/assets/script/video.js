$(document).ready(function () {
  $(".food-details__video").click(function () {
    const videoSrc = "../../common/video/pizza.mp4"; // New video source
    const videoType = "video/mp4"; // New video type

    const $video = $("#myvideo");
    $video.empty(); // Clear existing source elements

    const $source = $("<source>");
    $source.attr("src", videoSrc);
    $source.attr("type", videoType);

    $video.append($source);
    $video.css("display", "inherit");
    $video.get(0).play(); // Start playing the video

    $video.on("ended", function () {
      $(this).css("display", "none");
    });
  });
});
