const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath).then(({ categories, subCategories }) => {
  //   $(document).ready(function () {});
  new Swiper(".category-swiper", {
    slidesPerView: "auto",
  });
  new Swiper(".sub-category-swiper", {
    slidesPerView: 5,
  });
  const categorySwiperWrapper = $(".category-swiper .swiper-wrapper");
  const subCategoryWrapper = $(".sub-category-swiper .swiper-wrapper");

  categories.map((data) => {
    const categorySwiperSlide = $("<div>").addClass("swiper-slide");
    const categoryIcon = $("<div>").addClass("category-icon");
    const icon = $("<svg>").attr("stroke", "currentColor");
    categoryIcon.append(icon);
    const categoryText = $("<span>").text(data.category);
    // Make an AJAX request to fetch the SVG content
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
      //   const selectedCategory = data.category;
      $(".category-swiper .swiper-slide").removeClass("active-category");
      // Add active class to the clicked slide
      categorySwiperSlide.addClass("active-category");

      const selectedCategory = subCategories.filter(
        (subData) => subData.category === data.category
      );

      subCategoryWrapper.empty();
      selectedCategory.map((data) => {
        const subSwiperSlide = $("<div>").addClass("swiper-slide");
        subSwiperSlide.text(data.subCategory);
        subCategoryWrapper.append(subSwiperSlide);

        subSwiperSlide.on("click", () => {
          $(".sub-category-swiper .swiper-slide").removeClass(
            "active-subCategory"
          );
          subSwiperSlide.addClass("active-subCategory");
        });
      });

      $(".sub-category-swiper .swiper-slide:first-child").trigger("click");
    });

    categorySwiperSlide.append(categoryIcon, categoryText);
    categorySwiperWrapper.append(categorySwiperSlide);
  });
  $(".swiper-slide:first-child").trigger("click");
});
