const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath).then(({ categories, subCategories }) => {
  new Swiper(".category-swiper", {
    slidesPerView: "auto",
  });
  new Swiper(".sub-category-swiper", {
    slidesPerView: 5,
  });
  const categorySwiperWrapper = $(".category-swiper .swiper-wrapper");
  const subCategoryWrapper = $(".sub-category-swiper .swiper-wrapper");

  // Define a function to update subcategories
  function updateSubcategories(selectedCategory) {
    subCategoryWrapper.empty();
    const filteredSubCategories = subCategories.filter(
      (subData) => subData.category === selectedCategory
    );
    filteredSubCategories.forEach((subCat) => {
      const subSwiperSlide = $("<div>")
        .addClass("swiper-slide")
        .text(subCat.subCategory);
      subCategoryWrapper.append(subSwiperSlide);
    });
    // Initialize the sub-category swiper for the new content
    new Swiper(".sub-category-swiper", {
      slidesPerView: 5,
    });
  }

  categories.forEach((data) => {
    const categorySwiperSlide = $("<div>").addClass("swiper-slide");
    const categoryIcon = $("<div>").addClass("category-icon");
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
      $(".category-swiper .swiper-slide").removeClass("active-category");
      categorySwiperSlide.addClass("active-category");
      const selectedCategory = data.category;

      // Update subcategories based on the selected category
      updateSubcategories(selectedCategory);
    });

    categorySwiperSlide.append(categoryIcon, categoryText);
    categorySwiperWrapper.append(categorySwiperSlide);
  });

  // Trigger the click event for the first category slide to initialize subcategories
  $(".swiper-slide:first-child").trigger("click");
});
