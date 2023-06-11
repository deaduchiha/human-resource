const foodItems = [
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pizza.jpg",
    imageAlt: "pizza 1",
    headingText: "مخصوص فرسکو",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pizza.jpg",
    imageAlt: "pizza 2",
    headingText: "سیر و استیک",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pitza/pitza (1).png",
    imageAlt: "pizza 3",
    headingText: "1سبزیجات",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pitza/pitza (2).png",
    imageAlt: "pizza 3",
    headingText: "2سبزیجات",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pitza/pitza (3).png",
    imageAlt: "pizza 3",
    headingText: "3سبزیجات",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "پیتزا",
    imageSrc: "../../common/images/pitza/pitza (4).png",
    imageAlt: "pizza 3",
    headingText: "4سبزیجات",
    headingTextEnglish: "Fresko",
    priceValue: "۱۸۵٬۰۰۰ ",
    priceCurrency: "تومان",
    details:
      "سس مارینارا، پنیر موتزارلا، پنیر پارمزان، روغن زیتون فرابکر، قارچ، چیپس کدو سبز، بادمجان کبابی، بازیل",
  },
  {
    category: "برگر",
    imageSrc: "../../common/images/burger.jpg",
    imageAlt: "burgur",
    headingText: "برگر ذغالی",
    headingTextEnglish: "Fresko",
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
