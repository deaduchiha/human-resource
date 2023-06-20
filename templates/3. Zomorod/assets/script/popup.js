$(document).ready(function () {
  // Add event listener to openBtn using event delegation
  $(document).on("click", "#openBtn", function () {
    // Show the popup
    $("#popup").fadeIn();
  });

  // Add event listener to closeBtn inside the popup using event delegation
  $(document).on("click", "#closeBtn", function () {
    // Hide the popup
    $("#popup").hide();
  });
});
