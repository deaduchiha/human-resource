const foodItems = [
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (1).png",
    imageAlt: "pizza 1",
    headingText: "مخصوص فرسکو",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (2).png",
    imageAlt: "pizza 2",
    headingText: "سیر و استیک",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
  },
];

// Create a function to generate the HTML structure for each food item
function createFoodItemHTML(item) {
  // Create the parent container
  const foodListContainer = $("<div>").addClass("food-list");

  // Create the image container
  const imageContainer = $("<div>").addClass("food-list__image");

  // Create the image element
  const image = $("<img>")
    .attr("src", item.imageSrc)
    .attr("alt", item.imageAlt);

  // Append the image element to the image container
  imageContainer.append(image);

  // Create the heading element
  const heading = $("<h3>").text(item.headingText);

  // Create the price container
  const priceContainer = $("<div>");

  // Create the price elements
  const priceValue = $("<span>").text(item.priceValue);
  const priceCurrency = $("<span>").text(item.priceCurrency);

  // Append the price elements to the price container
  priceContainer.append(priceValue, priceCurrency);

  // Append all elements to the parent container
  foodListContainer.append(imageContainer, heading, priceContainer);

  // Return the generated HTML structure
  return foodListContainer;
}

// Map through the array and create HTML structure for each food item
const foodListHTML = foodItems.map(createFoodItemHTML);

// Append the generated HTML structures to the desired element in the document
$(".foods-list-container").append(foodListHTML);
