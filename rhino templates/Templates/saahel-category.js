import { foodCategory, foodList, baseCategory } from "../../rinho/saahel.js";

$(document).ready(() => {
  // categories slider
  let mySwiper = new Swiper(".categories", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  const swiperWrapper = $(".categories .swiper-wrapper");
  const foodsWrapper = $(".foods");
  const baseCategoryHolder = $(".second-page__base-category");

  baseCategory.map((base, index) => {
    const baseItems = $("<span>").text(base.text);

    if (index === 0) {
      baseItems.addClass("active-base-category");
      handleBaseCategoryClick(
        base.text,
        baseCategoryHolder.find("span:first-child")
      );
    }

    baseCategoryHolder.append(baseItems);
    baseItems.on("click", () => handleBaseCategoryClick(base.text, baseItems));
  });

  // handle click event on category
  function handleBaseCategoryClick(base, baseItems) {
    baseCategoryHolder
      .find(".active-base-category")
      .removeClass("active-base-category");

    baseItems.addClass("active-base-category");

    // filter foodCategory based on the selected base category
    const filteredFoodCategory = foodCategory.filter(
      (item) => item.base === base
    );
    swiperWrapper.empty();

    filteredFoodCategory.map((data, index) => {
      const category = $("<div>").addClass("swiper-slide");
      category.attr("category-id", data.id);
      const iconHolder = $("<div>").addClass("icon-holder");
      const categoryTitle = $("<span>").text(data.text);

      if (index === 0) {
        category.addClass("active-category");
        filterFoodsByCategory(data.text);
      }

      // Make an AJAX request to fetch the SVG content
      $.ajax({
        url: data.icon,
        dataType: "xml", // Set the data type to xml
        success: function (svgContent) {
          // Create an <svg> element and append the fetched SVG content
          const icon = $(svgContent.documentElement);
          iconHolder.append(icon);

          // Append the category and handle click event as before
          category.append(iconHolder, categoryTitle);
          swiperWrapper.append(category);

          category.on("click", () => handleCategoryClick(category, data.text));
        },
        error: function () {
          console.error("Error loading SVG");
        },
      });
    });

    mySwiper.destroy(); // Destroy the existing Swiper instance
    mySwiper = new Swiper(".categories", {
      slidesPerView: "auto",
      spaceBetween: 32,
    });
  }

  // handle click event on category
  const handleCategoryClick = (clickedCategory, categoryName) => {
    const categories = $(".categories .swiper-slide");
    categories.removeClass("active-category");
    clickedCategory.addClass("active-category");

    filterFoodsByCategory(categoryName);
  };

  //filter foods based category
  function filterFoodsByCategory(categoryName) {
    foodsWrapper.empty();

    const selectedCategory = foodList.filter(
      (data) => data.category === categoryName
    );

    const foodElements = selectedCategory.map((data) => {
      const food = $("<div>").addClass("items");
      food.attr("data-food-id", data.id);
      food.attr("id", "openBtn");

      const foodImage = $("<img>")
        .attr("src", data.images[0])
        .attr("alt", data.title);

      const foodTitle = $("<p>").addClass("title").text(data.title);

      const foodPrice = $("<p>")
        .addClass("price")
        .text(data.sizes[0].sizePrice);

      food.append(foodImage, foodTitle, foodPrice);
      return food;
    });

    foodsWrapper.append(foodElements);
  }

  filterFoodsByCategory(foodCategory[0].text);
});