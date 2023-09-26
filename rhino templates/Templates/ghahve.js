const currentPath = window.location.pathname;
const pathParts = currentPath.split("/");
const lastPart = pathParts[pathParts.length - 1];
const urlName = lastPart.split(".")[0];
const importPath = `../../rinho/${urlName}.js`;

new Swiper(".category-swiper", {
  slidesPerView: "auto",
});
new Swiper(".sub-category-swiper", {
  slidesPerView: 5,
});

// Initialize the main foodsSwiper instance
let foodsSwiper = new Swiper(".foodsSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  initialSlide: 1,
});

import(importPath).then(({ categories, subCategories, foods }) => {
  const categorySwiperWrapper = $(".category-swiper .swiper-wrapper");
  const subCategoryWrapper = $(".sub-category-swiper .swiper-wrapper");
  const foodsWrapper = $(".foodsSwiper .swiper-wrapper");

  function updateSubcategories(selectedCategory) {
    subCategoryWrapper.empty();
    foodsWrapper.empty();

    const filteredSubCategories = subCategories.filter(
      (subData) => subData.category === selectedCategory
    );

    filteredSubCategories.map((subCat) => {
      const subSwiperSlide = $("<div>")
        .addClass("swiper-slide")
        .text(subCat.subCategory);
      // click on sub category
      subSwiperSlide.on("click", () => {
        $(".sub-category-swiper .swiper-slide").removeClass(
          "active-subCategory"
        );
        subSwiperSlide.addClass("active-subCategory");
        filterFoods(subCat.subCategory);
      });

      subCategoryWrapper.append(subSwiperSlide);
    });

    // Initialize the sub-category swiper for the new content
    new Swiper(".sub-category-swiper", {
      slidesPerView: 5,
    });
  }

  function filterFoods(subCategory) {
    const filteredFoodsBySubCategory = foods.filter(
      (foodData) => foodData.subCategory === subCategory
    );
    foodsWrapper.empty();

    filteredFoodsBySubCategory.map((foodData) => {
      const swiperSlide = $("<div>").addClass("swiper-slide");
      swiperSlide.attr("data-food-id", foodData.id);
      swiperSlide.attr("id", "openBtn");
      const foodImageHolder = $("<div>").addClass("foods-image");
      const image = $("<img>")
        .attr("src", foodData.images[0])
        .attr("alt", foodData.englishTitle);
      foodImageHolder.append(image);
      const titleHolder = $("<div>");
      const title = $("<h3>").text(foodData.title);
      const englishTitle = $("<h2>").text(foodData.englishTitle);
      titleHolder.append(title, englishTitle);
      const price = $("<span>").text(foodData.sizes[0].price);

      swiperSlide.append(foodImageHolder, titleHolder, price);
      foodsWrapper.append(swiperSlide);
    });
    foodsSwiper.update();
    // Initialize the swiper with updated content
    foodsSwiper = new Swiper(".foodsSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1, // Set the initial slide here
    });
  }

  categories.map((data) => {
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
      foodsSwiper.destroy();
      // Initialize the swiper with updated content
      foodsSwiper = new Swiper(".foodsSwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 1, // Set the initial slide here
      });

      $(".category-swiper .swiper-slide").removeClass("active-category");
      categorySwiperSlide.addClass("active-category");
      const selectedCategory = data.category;

      // Update subcategories based on the selected category
      updateSubcategories(selectedCategory);
      $(".sub-category-swiper .swiper-slide:first-child").trigger("click");
    });

    categorySwiperSlide.append(categoryIcon, categoryText);
    categorySwiperWrapper.append(categorySwiperSlide);
  });

  // Trigger the click event for the first category slide to initialize subcategories
  $(".swiper-slide:first-child").trigger("click");
});
