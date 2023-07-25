const foodCategory = [
  { id: 1, text: "همه" },
  {
    id: 2,
    text: "سوشی",
    subCategory: ["سبزیجات", "گیاهی", "تند", "خرچنگ"],
  },
  { id: 3, text: "رامن" },
  { id: 4, text: "کیمچی" },
  {
    id: 6,
    text: "نوشیدنی",
    subCategory: ["اسموتی", "سرد", "دلستر"],
  },
];

const foodList = [
  {
    id: 1,
    title: "دراگون رول",
    englishTitle: "Dragon roll",
    category: "سوشی",
    subCategoryFood: "سبزیجات",
    price: 75000,
    mainImage: "assets/images/foods/dragon roll.png",
    slideImage: [
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/kimchi.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "دراگون رول2",
    englishTitle: "Dragon roll 2",
    category: "سوشی",
    subCategoryFood: "رامن",
    price: 75000,
    mainImage: "assets/images/foods/dragon roll.png",
    slideImage: [
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/dragon roll.png",
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/ramen 2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "دراگون رول3",
    englishTitle: "Dragon roll 3",
    category: "سوشی",
    subCategoryFood: "رامن",
    price: 75000,
    mainImage: "assets/images/foods/dragon roll.png",
    slideImage: [
      "assets/images/foods/ramen 2.png",
      "assets/images/foods/ramen.png",
      "assets/images/foods/ramen 2.png",
      "assets/images/foods/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "رامن اسپاگتی",
    englishTitle: "Spagethi Ramen",
    category: "رامن",
    subCategoryFood: "غذای دوم",
    price: 75000,
    mainImage: "assets/images/foods/ramen 2.png",
    slideImage: [
      "assets/images/foods/ramen.png",
      "assets/images/foods/ramen 2.png",
      "assets/images/foods/ramen.png",
      "assets/images/foods/ramen 2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "رامن تخم مرغ",
    englishTitle: "Ramen",
    category: "رامن",
    subCategoryFood: "غذای دوم",
    price: 75000,
    mainImage: "assets/images/foods/ramen.png",
    slideImage: [
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/ramen.png",
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "کیمچی",
    englishTitle: "kimchi",
    category: "کیمچی",
    subCategoryFood: "غذای دوم",
    price: 75000,
    mainImage: "assets/images/foods/kimchi.jpg",
    slideImage: [
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/ramen.png",
      "assets/images/foods/kimchi.jpg",
      "assets/images/foods/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { foodCategory, foodList };
