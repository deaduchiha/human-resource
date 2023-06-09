const foodItems = [
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (1).png",
    imageAlt: "pizza 1",
    headingText: "مخصوص فرسکو",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza.jpg",
    imageAlt: "pizza 2",
    headingText: "سیر و استیک",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "1سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "2سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "3سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "assets/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "4سبزیجات",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "برگر",
    imageSrc: "assets/images/burgur.jpg",
    imageAlt: "burgur",
    headingText: "برگر ذغالی",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
];

// Create a function to generate the HTML structure for each food item
function createFoodItemHTML(item, index) {
  const html = `
    <div class="food-list" id="openBtn" data-index="${index}">
      <!-- Rest of the HTML structure -->
    </div>
  `;
  const $tempContainer = $(html);
  return $tempContainer[0];
}

// Map through the array and create HTML structure for each food item
const foodListHTML = foodItems.map(createFoodItemHTML);

// Append the generated HTML structures to the desired element in the document
$(".foods-list-container").append(foodListHTML);
