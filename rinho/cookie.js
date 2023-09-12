const categories = [
  {
    id: 1,
    text: "قهوه گرم",
    icon: "../rhino templates/fake data/cookie/foods-icon/1.svg",
  },
  {
    id: 2,
    text: "قهوه سرد",
    icon: "../rhino templates/fake data/cookie/foods-icon/2.svg",
  },
  {
    id: 3,
    text: "شیرینی",
    icon: "../rhino templates/fake data/cookie/foods-icon/3.svg",
  },
  {
    id: 4,
    text: "کیک",
    icon: "../rhino templates/fake data/cookie/foods-icon/2.svg",
  },
  {
    id: 5,
    text: "دیگر",
    icon: "../rhino templates/fake data/cookie/foods-icon/1.svg",
  },
];

const foods = [
  {
    id: 1,
    title: "آفوگاتو",
    englishTitle: "Afogato",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "قهوه سرد",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "لوتوس",
    englishTitle: "lotus",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "لاته",
    englishTitle: "latte",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "قهوه گرم",
    sizes: [
      { size: "کوچک", price: 45000 },
      { size: "متوسط", price: 55000 },
      { size: "بزرگ", price: 65000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "آیس کارامل",
    englishTitle: "ice caramel",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "قهوه سرد",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "مارشملو",
    englishTitle: "marshmello",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "قهوه گرم",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "تیرامیسو",
    englishTitle: "tiramiso",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "دیگر",
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 7,
    title: "موکا",
    englishTitle: "moca",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "قهوه گرم",
    price: 85000,
    sizes: [
      { size: "کوچک", price: 75000 },
      { size: "متوسط", price: 85000 },
      { size: "بزرگ", price: 95000 },
    ],
    popupBackground: "../rhino templates/fake data/cookie/popup-background.png",
    image: "../rhino templates/fake data/cookie/1.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foods };
