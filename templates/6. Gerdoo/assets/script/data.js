const foodCategory = [
  { id: 1, text: "قهوه گرم", icon: "assets/images/foods-icon/1.svg" },
  { id: 2, text: "قهوه سرد", icon: "assets/images/foods-icon/2.svg" },
  { id: 3, text: "شیرینی", icon: "assets/images/foods-icon/3.svg" },
  { id: 4, text: "کیک", icon: "assets/images/foods-icon/2.svg" },
  { id: 5, text: "دیگر", icon: "assets/images/foods-icon/1.svg" },
];

const foodList = [
  {
    id: 1,
    title: "آفوگاتو",
    englishTitle: "Afogato",
    category: "قهوه سرد",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    images: [
      "assets/images/foods/1.png",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "لوتوس",
    englishTitle: "lotus",
    category: "قهوه سرد",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    images: [
      "assets/images/foods/1.png",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "لاته",
    englishTitle: "latte",
    category: "قهوه گرم",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 45000 },
      { size: "متوسط", price: 55000 },
      { size: "بزرگ", price: 65000 },
    ],
    images: [
      "assets/images/foods/1.png",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "آیس کارامل",
    englishTitle: "ice caramel",
    category: "قهوه سرد",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],

    images: [
      "assets/images/foods/6.png",
      "assets/images/foods/5.png",
      "assets/images/foods/4.png",
      "assets/images/foods/3.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "مارشملو",
    englishTitle: "marshmello",
    category: "قهوه گرم",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    images: [
      "assets/images/foods/3.png",
      "assets/images/foods/6.png",
      "assets/images/foods/5.png",
      "assets/images/foods/2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "تیرامیسو",
    englishTitle: "tiramiso",
    category: "دیگر",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    images: [
      "assets/images/foods/2.png",
      "assets/images/foods/1.png",
      "assets/images/foods/4.png",
      "assets/images/foods/6.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 7,
    title: "موکا",
    englishTitle: "moca",
    category: "قهوه گرم",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    images: [
      "assets/images/foods/6.png",
      "assets/images/foods/1.png",
      "assets/images/foods/5.png",
      "assets/images/foods/2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { foodCategory, foodList };
