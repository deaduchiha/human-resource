const baseCategory = [
  { id: 1, text: "غذا" },
  { id: 2, text: "نوشیدنی" },
];

const categories = [
  {
    id: 1,
    base: "غذا",
    category: "همبرگر",
    icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
  },
  {
    id: 2,
    base: "غذا",
    category: "پیتزا",
    icon: "../rhino templates/fake data/sahel/foods-icon/2.svg",
  },
  {
    id: 3,
    base: "غذا",
    category: "شیرینی",
    icon: "../rhino templates/fake data/sahel/foods-icon/3.svg",
  },
  {
    id: 4,
    base: "نوشیدنی",
    category: "قهوه گرم",
    icon: "../rhino templates/fake data/sahel/foods-icon/2.svg",
  },
  {
    id: 5,
    base: "نوشیدنی",
    category: "قهوه سرد",
    icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
  },
];

const foodList = [
  {
    id: 1,
    title: "برگر کلاسیک",
    category: "همبرگر",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/burger.jpg",
      "../rhino templates/fake data/sahel/2.png",
      "../rhino templates/fake data/sahel/3.png",
      "../rhino templates/fake data/sahel/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "چیز برگر",
    category: "همبرگر",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/cheeseburger.jpg",
      "../rhino templates/fake data/sahel/2.png",
      "../rhino templates/fake data/sahel/3.png",
      "../rhino templates/fake data/sahel/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "دوبل برگر",
    category: "همبرگر",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 45000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 55000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 65000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/double burger.jpg",
      "../rhino templates/fake data/sahel/2.png",
      "../rhino templates/fake data/sahel/3.png",
      "../rhino templates/fake data/sahel/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "آیس آمریکانو",
    category: "قهوه سرد",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/6.png",
      "../rhino templates/fake data/sahel/5.png",
      "../rhino templates/fake data/sahel/4.png",
      "../rhino templates/fake data/sahel/3.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "اسپرسو",
    category: "قهوه گرم",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/3.png",
      "../rhino templates/fake data/sahel/6.png",
      "../rhino templates/fake data/sahel/5.png",
      "../rhino templates/fake data/sahel/2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    title: "پیتزا مخصوص",
    category: "پیتزا",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/pizza.webp",
      "../rhino templates/fake data/sahel/1.png",
      "../rhino templates/fake data/sahel/4.png",
      "../rhino templates/fake data/sahel/6.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 7,
    title: "موکا",
    category: "قهوه گرم",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "../rhino templates/fake data/sahel/foods-icon/1.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/sahel/6.png",
      "../rhino templates/fake data/sahel/1.png",
      "../rhino templates/fake data/sahel/5.png",
      "../rhino templates/fake data/sahel/2.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foodList, baseCategory };
