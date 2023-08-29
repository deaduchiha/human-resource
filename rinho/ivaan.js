const categories = [
  {
    id: 1,
    category: "پیش غذا",
    subCategory: ["حمص", "سوپ"],
  },
  { id: 2, category: "غذای اصلی", subCategory: ["کباب"] },
  { id: 3, category: "سالاد" },
  {
    id: 4,
    category: "دسر",
  },
  {
    id: 5,
    category: "نوشیدنی",
    subCategory: ["اسموتی", "سرد", "دلستر"],
  },
];

const foodsData = [
  {
    id: 1,
    title: "حمص اسفناج",
    videoUrl: "../../common/video/pizza.mp4",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 25000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/one.svg",
      },
      {
        size: "دو نفره",
        price: 45000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/two.svg",
      },
      {
        size: "خانوادگی",
        price: 70000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/family.svg",
      },
    ],
    images: [
      "../templates/9. Ivaan/assets/images/foods/esfenaj.jpg",
      "../templates/9. Ivaan/assets/images/foods/esfenaj 1.jpeg",
      "../templates/9. Ivaan/assets/images/foods/esfenaj 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "حمص قارچ",
    videoUrl: "../../common/video/pizza.mp4",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 35000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/one.svg",
      },
      {
        size: "دو نفره",
        price: 45000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/two.svg",
      },
      {
        size: "خانوادگی",
        price: 55000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/family.svg",
      },
    ],
    images: [
      "../templates/9. Ivaan/assets/images/foods/gharch.jpg",
      "../templates/9. Ivaan/assets/images/foods/gharch 2.jpeg",
      "../templates/9. Ivaan/assets/images/foods/gharch 3.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "سوپ جو",
    videoUrl: "../../common/video/pizza.mp4",
    category: "پیش غذا",
    subCategory: "سوپ",
    sizes: [
      {
        size: "یک نفره",
        price: 50000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/one.svg",
      },
      {
        size: "دو نفره",
        price: 65000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/two.svg",
      },
      {
        size: "خانوادگی",
        price: 110000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/family.svg",
      },
    ],
    images: [
      "../templates/9. Ivaan/assets/images/foods/soop jo.jpg",
      "../templates/9. Ivaan/assets/images/foods/soop jo 1.jpg",
      "../templates/9. Ivaan/assets/images/foods/soop jo 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "چلو کوبیده",
    videoUrl: "../../common/video/pizza.mp4",
    category: "غذای اصلی",
    subCategory: "کباب",
    sizes: [
      {
        size: "یک نفره",
        price: 70000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/one.svg",
      },
      {
        size: "دو نفره",
        price: 90000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/two.svg",
      },
      {
        size: "خانوادگی",
        price: 120000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/family.svg",
      },
    ],
    images: [
      "../templates/9. Ivaan/assets/images/foods/koobide.jpg",
      "../templates/9. Ivaan/assets/images/foods/koobide 1.jpg",
      "../templates/9. Ivaan/assets/images/foods/koobide.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "نوشابه",
    videoUrl: "../../common/video/pizza.mp4",
    category: "نوشیدنی",
    subCategory: "سرد",
    sizes: [
      {
        size: "کوچیک",
        price: 10000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/one.svg",
      },
      {
        size: "بزرگ",
        price: 20000,
        icon: "../templates/9. Ivaan/assets/images/icons/size/family.svg",
      },
    ],
    images: ["../templates/9. Ivaan/assets/images/foods/coca.png"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foodsData };
