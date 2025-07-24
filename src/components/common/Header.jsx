import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import Button from "../Button";

const navItems = [
  {
    id: "https://docs.multipli.fi/",
    title: "Docs",
  },
  {
    id: "blogs",
    title: "Blogs",
  },

  {
    id: "ecosystem",
    title: "Ecosystem",
  },

  {
    id: "contact",
    title: "Contact",
  },
];
function Header() {
  const [toggle, setToggle] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [boxStyle, setBoxStyle] = useState({});
  const navRefs = useRef([]);

  useEffect(() => {
    const current = navRefs.current[activeIndex];
    if (current) {
      setBoxStyle({
        width: current.offsetWidth,
        left: current.offsetLeft,
      });
    }
  }, [activeIndex]);

  // const [isScrolled, setIsScrolled] = useState(false);
  
    // useEffect(() => {
    //   const onScroll = () => {
    //     setIsScrolled(window.scrollY > 50);
    //   };
    //   window.addEventListener("scroll", onScroll);
    //   return () => window.removeEventListener("scroll", onScroll);
    // }, []);
  return (
    <header className="relative z-20 font-saans   ">
    {/* <header className="sticky z-50 bg-[#F5F5F5]  top-0 font-saans "> */}
      <div className= {`mx-auto transition-all duration-300 sm:py-10 py-6 container`}>
        {/* <div className= {`mx-auto transition-all duration-300 ${
          isScrolled ? `sm:px-[8.5rem] px-[1.5rem] max-w-[1444px] py-6` : "sm:py-10 py-6 container"
        }`}> */}
        <div className="flex justify-between w-full items-center ">
          <a href="#"><img src={logo}  alt="logo" className="sm:w-[120px] w-full " /></a>
          
          <nav className="relative">
            <div className="relative flex gap-2">
              {/* Sliding Box */}
              <div
                className="absolute bottom-[0px] hidden lg:block h-8 bg-white rounded-[32px] transition-all duration-300"
                style={{
                  width: `${boxStyle.width}px`,
                  left: `${boxStyle.left}px`,
                }}
              ></div>

              {/* Nav Items */}
              {navItems.map((item, index) => (
                <a  href={item.id.startsWith("http") ? item.id : `#${item.id}`}
                  key={index}
                  ref={(el) => (navRefs.current[index] = el)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative z-10 hidden lg:flex text-[16px] font-[380] cursor-pointer py-1 px-[12px] transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-black"
                      : "text-white hover:text-white/65"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex sm:hidden">
        <img
          src={toggle ? close : menu}
          className="size-[28px] object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setToggle((prev) => !prev)}
        />
         <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-10 right-0 rounded-xl my-2 min-w-[140px] sidebar`}
      >
        <ul className=" list-none flex justify-end flex-col flex-1 items-left">
          {navItems.map((item, index) => (
            <a  data-aos="zoom-in" href={item.id.startsWith("http") ? item.id : `#${item.id}`}
                  key={index}
                  className={`relative z-10 cursor-pointer  text-[16px] font-[380] py-1 px-[12px] transition-colors active:text-gray-800 duration-300 text-white "
                  }`}
                >
                  {item.title}
                </a>
          ))}
        </ul>
      </div>
      </div>
          </nav>
          <div className="hidden sm:block">
          <Button  title="Deploy assets " />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
