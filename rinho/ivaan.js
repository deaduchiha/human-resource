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

const foods = [
  {
    id: 1,
    title: "حمص اسفناج",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 25000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-one.svg",
      },
      {
        size: "دو نفره",
        price: 45000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-two.svg",
      },
      {
        size: "خانوادگی",
        price: 70000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-family.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/ivaan/esfenaj.jpg",
      "../rhino templates/fake data/ivaan/esfenaj 1.jpeg",
      "../rhino templates/fake data/ivaan/esfenaj 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    title: "حمص قارچ",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "پیش غذا",
    subCategory: "حمص",
    sizes: [
      {
        size: "یک نفره",
        price: 35000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-one.svg",
      },
      {
        size: "دو نفره",
        price: 45000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-two.svg",
      },
      {
        size: "خانوادگی",
        price: 55000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-family.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/ivaan/gharch.jpg",
      "../rhino templates/fake data/ivaan/gharch 2.jpeg",
      "../rhino templates/fake data/ivaan/gharch 3.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    title: "سوپ جو",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "پیش غذا",
    subCategory: "سوپ",
    sizes: [
      {
        size: "یک نفره",
        price: 50000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-one.svg",
      },
      {
        size: "دو نفره",
        price: 65000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-two.svg",
      },
      {
        size: "خانوادگی",
        price: 110000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-family.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/ivaan/soop jo.jpg",
      "../rhino templates/fake data/ivaan/soop jo 1.jpg",
      "../rhino templates/fake data/ivaan/soop jo 2.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    title: "چلو کوبیده",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "غذای اصلی",
    subCategory: "کباب",
    sizes: [
      {
        size: "یک نفره",
        price: 70000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-one.svg",
      },
      {
        size: "دو نفره",
        price: 90000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-two.svg",
      },
      {
        size: "خانوادگی",
        price: 120000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-family.svg",
      },
    ],
    images: [
      "../rhino templates/fake data/ivaan/koobide.jpg",
      "../rhino templates/fake data/ivaan/koobide 1.jpg",
      "../rhino templates/fake data/ivaan/koobide.jpg",
    ],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    title: "نوشابه",
    videoUrl: "../rhino templates/Shared/pizza.mp4",
    category: "نوشیدنی",
    subCategory: "سرد",
    sizes: [
      {
        size: "کوچیک",
        price: 10000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-one.svg",
      },
      {
        size: "بزرگ",
        price: 20000,
        icon: "../rhino templates/Template Images/Icons/Sizes/ivaan-family.svg",
      },
    ],
    images: ["../rhino templates/fake data/ivaan/coca.png"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export { categories, foods };
