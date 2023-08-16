const baseCategory = [
  { id: 1, text: "غذا" },
  { id: 2, text: "نوشیدنی" },
];

const foodCategory = [
  {
    id: 1,
    base: "غذا",
    text: "همبرگر",
    icon: "assets/images/foods-icon/1.svg",
  },
  {
    id: 2,
    base: "غذا",
    text: "پیتزا",
    icon: "assets/images/foods-icon/2.svg",
  },
  {
    id: 3,
    base: "غذا",
    text: "شیرینی",
    icon: "assets/images/foods-icon/3.svg",
  },
  {
    id: 4,
    base: "نوشیدنی",
    text: "قهوه گرم",
    icon: "assets/images/foods-icon/2.svg",
  },
  {
    id: 5,
    base: "نوشیدنی",
    text: "قهوه سرد",
    icon: "assets/images/foods-icon/1.svg",
  },
];

const foodList = [
  {
    id: 1,
    title: "برگر کلاسیک",
    category: "همبرگر",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
    ],
    images: [
      "assets/images/foods/burger.jpg",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "چیز برگر",
    category: "همبرگر",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
    ],
    images: [
      "assets/images/foods/cheeseburger.jpg",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "دوبل برگر",
    category: "همبرگر",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 45000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 55000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 65000,
        icon: "assets/images/foods-icon/1.svg",
      },
    ],
    images: [
      "assets/images/foods/double burger.jpg",
      "assets/images/foods/2.png",
      "assets/images/foods/3.png",
      "assets/images/foods/4.png",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "آیس آمریکانو",
    category: "قهوه سرد",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
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
    title: "اسپرسو",
    category: "قهوه گرم",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
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
    title: "پیتزا مخصوص",
    category: "پیتزا",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
    ],
    images: [
      "assets/images/foods/pizza.webp",
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
    category: "قهوه گرم",
    sizes: [
      {
        size: "کوچک",
        sizePrice: 75000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "متوسط",
        sizePrice: 85000,
        icon: "assets/images/foods-icon/1.svg",
      },
      {
        size: "بزرگ",
        sizePrice: 95000,
        icon: "assets/images/foods-icon/1.svg",
      },
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

export { foodCategory, foodList, baseCategory };
