import { useEffect, useState } from "react";


//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLinkItem({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Web Design",
      title: "golden-movies",
      img: "./images/works/golden-movies.png",
      imgSmall: "./images/works/golden-movies.png",
      bg: "#FFF0F0",
      client: "-------",
      langages: "React , Sass , Bootstrap",
      link: "https://golden-movie-w78l.vercel.app/",
      linkText: "کلیک کنید",
      description:
          "سایت گلدن موویز دارای تم تاریک و روشن ، صفحات اختصاصی دانلود فیلم و سریال ، مدیریت پنل ، پنل کاربری ، ثبت نام و ورود",
    },
    {
      id: "2",
      tag: "Web Design",
      title: "سایت شخصی",
      img: "./images/works/portfolio.png",
      imgSmall: "./images/works/portfolio.png",
      bg: "#FFF0F0",
      client: "---------",
      langages: "React , Css",
      link: "/",
      linkText: "کلیک کنید",
      description: "سایت شخصی برای مشاهده رزومه و نمونه کار ها"
    },
        {
      id: "3",
      tag: "Logo",
      title: "coffee-shop-aramesh",
      img: "./images/works/coffee-shop.png",
      imgSmall: "./images/works/coffee-shop.png",
      bg: "#FFF3FC",
      client: "-------",
      langages: "ّNext.js , Css , Bootstrap",
      link: "https://website-coffee-shop.vercel.app/",
      linkText: "کلیک کنید",
      description: "سایت کافی شاپ آرامش دارای بک ان اختصاصی باقابلیت API Route in Next.js "
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "خانه",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "درباره",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "03",
      name: "رزومه",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "04",
      name: "کارها",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "06",
      name: "تماس",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
    {
      id: "06",
      name: "وبلاگ",
      link: "/blogs",
      icon: <FaBlogger />,
    },
  ];

  // Menu items for Homepage Two


  // Slider image for Clients
  const sliderImg = [
  ];

  // serviceArray items for about page
  const serviceArray = [
  ];

  // educationArray items for Resume page
  const educationArray = [
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
  ];
  // awardsArray items for Resume page
  const awardsArray = [
  ];

  // Working Skills items for Resume page
  const lineArray = [
  ];

  // Personal information for contact pages
  const contactArray = [
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLinkItem,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
