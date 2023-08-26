const categories = [
  {
    id: 1,
    category: "پیش غذا",
    subCategory: ["حمص", "سوپ"],
  },
  { id: 2, text: "غذای اصلی" },
  { id: 3, text: "سالاد" },
  {
    id: 4,
    text: "دسر",
    subCategory: ["اسموتی", "سرد", "دلستر"],
  },
  {
    id: 5,
    text: "نوشیدنی",
    subCategory: ["اسموتی", "سرد", "دلستر"],
  },
];

const foodsData = [
  {
    id: 1,
    title: "حمص اسفناج",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 25000,
      },
      {
        size: "دو نفره",
        price: 45000,
      },
      {
        size: "خانوادگی",
        price: 70000,
      },
    ],
    slideImage: [
      "esfenaj.jpg",
      "assets/images/foods/kimchi.jpg",
      "esfenaj 1.jpeg",
      "esfenaj 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "حمص قارچ",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 35000,
      },
      {
        size: "دو نفره",
        price: 45000,
      },
      {
        size: "خانوادگی",
        price: 55000,
      },
    ],
    slideImage: [
      "assets/images/foods/gharch.jpg",
      "assets/images/foods/gharch 2.jpeg",
      "assets/images/foods/gharch 3.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "سوپ جو",
    category: "پیش غذا",
    subCategory: "سوپ",
    sizes: [
      {
        size: "یک نفره",
        price: 50000,
      },
      {
        size: "دو نفره",
        price: 65000,
      },
      {
        size: "خانوادگی",
        price: 110000,
      },
    ],
    slideImage: [
      "assets/images/foods/soop jo.jpg",
      "assets/images/foods/soop jo 1.jpg",
      "assets/images/foods/soop jo 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "چلو کوبیده",
    category: "غذای اصلی",
    sizes: [
      {
        size: "یک نفره",
        price: 70000,
      },
      {
        size: "دو نفره",
        price: 90000,
      },
      {
        size: "خانوادگی",
        price: 120000,
      },
    ],
    slideImage: [
      "assets/images/foods/koobide.jpg",
      "assets/images/foods/koobide 1.jpg",
      "assets/images/foods/koobide.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "نوشابه",
    category: "نوشیدنی",
    subCategory: "سرد",
    sizes: [
      {
        size: "کوچیک",
        price: 10000,
      },
      {
        size: "بزرگ",
        price: 20000,
      },
    ],
    slideImage: ["assets/images/foods/coca.png"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foodsData };
