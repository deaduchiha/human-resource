const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

import(importPath).then(({ categories, foods }) => {
  //   $(document).ready(function () {});
  new Swiper(".category-swiper", {
    slidesPerView: "auto",
  });
  const categorySwiperWrapper = $(".category-swiper .swiper-wrapper");
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
      $(".category-swiper .swiper-slide").removeClass("active-category");

      // Add active class to the clicked slide
      categorySwiperSlide.addClass("active-category");
    });

    categorySwiperSlide.append(categoryIcon, categoryText);
    categorySwiperWrapper.append(categorySwiperSlide);

    $(".swiper-slide:first-child").trigger("click");
  });
});
