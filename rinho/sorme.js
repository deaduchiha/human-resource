const categories = [
  { id: 1, category: "همه" },
  {
    id: 2,
    category: "سوشی",
    subCategory: ["سبزیجات", "گیاهی", "تند", "خرچنگ"],
  },
  { id: 3, category: "رامن" },
  { id: 4, category: "کیمچی" },
  {
    id: 6,
    category: "نوشیدنی",
    subCategory: ["اسموتی", "سرد", "دلستر"],
  },
];

const foods = [
  {
    id: 1,
    title: "دراگون رول",
    englishTitle: "Dragon roll",
    category: "سوشی",
    subCategoryFood: "سبزیجات",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "دراگون رول2",
    englishTitle: "Dragon roll 2",
    category: "سوشی",
    subCategoryFood: "سبزیجات",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/dragon roll.png",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/ramen 2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "دراگون رول3",
    englishTitle: "Dragon roll 3",
    category: "سوشی",
    subCategoryFood: "گیاهی",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/ramen.png",
      "../rhino templates/fake data/sorme/ramen 2.png",
      "../rhino templates/fake data/sorme/ramen 2.png",
      "../rhino templates/fake data/sorme/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "رامن اسپاگتی",
    englishTitle: "Spagethi Ramen",
    category: "رامن",
    subCategoryFood: "تند",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/ramen 2.png",
      "../rhino templates/fake data/sorme/ramen.png",
      "../rhino templates/fake data/sorme/ramen.png",
      "../rhino templates/fake data/sorme/ramen 2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "رامن تخم مرغ",
    englishTitle: "Ramen",
    category: "رامن",
    subCategoryFood: "خرچنگ",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/ramen.png",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "کیمچی",
    englishTitle: "kimchi",
    category: "نوشیدنی",
    subCategoryFood: "اسموتی",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/ramen.png",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 7,
    title: "کیمچی",
    englishTitle: "kimchi",
    category: "سوشی",
    subCategoryFood: "تند",
    price: 75000,
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    images: [
      "../rhino templates/fake data/sorme/dragon roll.png",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/kimchi.jpg",
      "../rhino templates/fake data/sorme/ramen.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foods };
