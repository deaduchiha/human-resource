const categories = [
  { id: 1, category: "صبحانه" },
  { id: 2, category: "سالاد" },
  { id: 3, category: "سوپ" },
  { id: 4, category: "غذای اصلی" },
  { id: 5, category: "نوشیدنی" },
];

const foods = [
  {
    id: 1,
    title: "سالاد تابستانه",
    englishTitle: "Summer Salad",
    category: "سالاد",
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
    category: "سالاد",
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
    category: "سالاد",
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
    category: "صبحانه",
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
    category: "صبحانه",
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
    category: "سالاد",
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
