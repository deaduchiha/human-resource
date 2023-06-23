import { foodList } from "./data.js";

$(document).ready(function () {
  $(document).on("click", "#openBtn", function () {
    // Get the index of the selected item
    const selectedIndex = $(this).index();

    // Get the corresponding food object from the foodList
    const selectedFood = foodList[selectedIndex];

    // Set the details in the popup
    $("#popup .popup-image img").attr("src", selectedFood.image);
    $("#popup .popup-info span:first-child").text(selectedFood.name);
    $("#popup .popup-info span:last-child").text(
      selectedFood.price.toLocaleString("fa-IR") + " تومان"
    );

    // Clear the existing sizes and add new sizes based on the selected food
    const sizesContainer = $("#popup .sizes");
    sizesContainer.empty();

    selectedFood.sizes.forEach((size, index) => {
      const sizeElement = `
        <div data-index="${index}">
          <div class="sizes__image">
            <img src="assets/images/bucket.svg" alt="" />
          </div>
          <span>${size.title}</span>
        </div>
      `;
      sizesContainer.append(sizeElement);
    });

    $("#popup .popup__description").text(selectedFood.description);

    // Show the popup
    $("#popup").fadeIn();
  });

  // Add event listener to closeBtn inside the popup using event delegation
  $(document).on("click", "#closeBtn", function () {
    // Hide the popup
    $("#popup").fadeOut();
  });

  $(document).on("click", "#popup .sizes div", function () {
    const selectedSizeIndex = $(this).data("index");
    const selectedIndex = $("#openBtn").index();
    const selectedFood = foodList[selectedIndex];
    const selectedSize = selectedFood.sizes[selectedSizeIndex];

    // Remove active class from all size elements
    $("#popup .sizes div").removeClass("active-size");

    // Remove active class from all sizes__image elements
    $("#popup .sizes__image").removeClass("active-size-image");

    // Check if selectedSize is defined before accessing its properties
    if (selectedSize) {
      const selectedSizePrice =
        selectedSize.price.toLocaleString("fa-IR") + " تومان";
      const selectedSizeImageUrl = "./assets/images/active-bucket.svg"; // Assuming there is an "image" property in the selectedSize object

      $("#popup .popup-info span:last-child").text(selectedSizePrice);

      // Add active class to the selected size element
      $(this).addClass("active-size");

      // Add active class to the corresponding sizes__image element
      $(this).find(".sizes__image").addClass("active-size-image");

      // Change the image URL of the active size element
      $(this).find(".sizes__image img").attr("src", selectedSizeImageUrl);
    } else {
      // Revert to the default image URL
      const defaultImageUrl = "assets/images/bucket.svg";
      $("#popup .sizes__image img").attr("src", defaultImageUrl);
    }
  });
});
