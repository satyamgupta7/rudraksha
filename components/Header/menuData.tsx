import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "All Rudraksha",
        path: "/breads",
        newTab: false,
      },
      {
        id: 42,
        title: "Exclusive Rudraksha",
        path: "/breads-exclusive",
        newTab: false,
      },
      {
        id: 43,
        title: "Higher Mukhi Rudraksha",
        path: "/breads-higher",
        newTab: false,
      },
      {
        id: 44,
        title: "Siddha Mala",
        path: "/mala",
        newTab: false,
      },
      {
        id: 45,
        title: "Shaligram",
        path: "/gemstone",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
