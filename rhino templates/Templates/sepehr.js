const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath).then(({ categories, foods }) => {
  const categorySwiperWrapper = $(".categorySwiper .swiper-wrapper");
  const foodsHolder = $(".foods-holder");

  categories.map((data) => {
    const categorySwiperSlide = $("<div>").addClass("swiper-slide");
    const categoryIcon = $("<div>").addClass("slide-icon");
    const icon = $("<svg>").attr("stroke", "currentColor");
    categoryIcon.append(icon);
    const categoryText = $("<span>").text(data.category);

    $.ajax({
      url: data.icon, // URL to the SVG file
      dataType: "xml", // Set the data type to XML
      success: function (svgData) {
        icon.html(svgData.documentElement);
      },
      error: function () {
        console.error("Error loading SVG content");
      },
    });

    categorySwiperSlide.on("click", () => {
      $(".categorySwiper .swiper-slide").removeClass("active-category");
      categorySwiperSlide.addClass("active-category");
      const selectedCategory = data.category;

      filterFoods(selectedCategory);
    });

    categorySwiperSlide.append(categoryIcon, categoryText);
    categorySwiperWrapper.append(categorySwiperSlide);
  });

  function filterFoods(selectedCategory) {
    const filteredFoodsByCategory = foods.filter(
      (data) => data.category === selectedCategory
    );
    foodsHolder.empty();

    filteredFoodsByCategory.map((data) => {
      const item = $("<div>").addClass("item");
      item.attr("data-food-id", data.id);
      item.attr("id", "openBtn");

      const foodImageHolder = $("<div>").addClass("item-image");
      const image = $("<img>")
        .attr("src", data.images[0])
        .attr("alt", data.englishTitle);
      foodImageHolder.append(image);

      const itemDetails = $("<div>").addClass("item-details");
      const title = $("<h2>").text(data.title);
      const englishTitle = $("<h3>").text(data.englishTitle);
      const price = $("<span>").text(data.sizes[0].price);
      itemDetails.append(title, englishTitle, price);
      item.append(foodImageHolder, itemDetails);
      foodsHolder.append(item);
    });
  }

  // Trigger the click event for the first category slide to initialize subcategories
  $(".swiper-slide:first-child").trigger("click");
});
