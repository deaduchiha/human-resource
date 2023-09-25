const categories = [
  {
    id: 1,
    category: "آسیایی",
    icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
  },
  {
    id: 2,
    category: "نودل",
    icon: "../rhino templates/fake data/sahel/foods-icon/2.svg",
  },
  {
    id: 3,
    category: "سوپ",
    icon: "../rhino templates/fake data/sahel/foods-icon/3.svg",
  },
  {
    id: 4,
    category: "غذای اصلی",
    icon: "../rhino templates/fake data/sahel/foods-icon/2.svg",
  },
  {
    id: 5,
    category: "نوشیدنی",
    icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
  },
];

const foods = [
  {
    id: 1,
    title: "سالاد تابستانه",
    englishTitle: "Summer Salad",
    category: "نودل",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 3.webp",
      "../rhino templates/fake data/shabnam/test 4.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "سالاد استفناج ساده",
    englishTitle: "Spinach Salad",
    category: "نودل",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 3.webp",
      "../rhino templates/fake data/shabnam/test 4.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "سالاد آووکادو",
    englishTitle: "Avocado Salad",
    category: "نودل",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/test 3.webp",
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 4.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "سالاد فصل",
    englishTitle: "Season Salad",
    category: "آسیایی",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/test 4.webp",
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 3.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "سالاد توت‌فرنگی",
    englishTitle: "strawberry salad",
    category: "آسیایی",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 3.webp",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 4.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "سالاد سزار",
    englishTitle: "cezar salad",
    category: "نوشیدنی",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/test 3.webp",
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 4.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 7,
    title: "سالاد تابستانه",
    englishTitle: "سالاد تابستانه",
    category: "نودل",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "یک نفره", price: 25000 },
      { size: "دو نفره", price: 45000 },
      { size: "خانوادگی", price: 65000 },
    ],
    images: [
      "../rhino templates/fake data/shabnam/test 4.webp",
      "../rhino templates/fake data/shabnam/image test.png",
      "../rhino templates/fake data/shabnam/test 2.jpg",
      "../rhino templates/fake data/shabnam/test 3.webp",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foods };
