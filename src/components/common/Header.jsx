import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/icons/logo.svg";
import Button from "../Button";

const navItems = [
  {
    id: "docs",
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
  return (
    <header className="sticky z-50 bg-[#F5F5F5] bg-white/70 backdrop-blur-[45px] top-0 font-saans ">
      <div className="container">
        <div className="flex justify-between w-full  py-6 sm:py-10 items-center ">
          <img src={logo} alt="logo" className="max-w-[120px]" />
          
          <nav className="relative">
            <div className="relative flex gap-8">
              {/* Sliding Box */}
              <div
                className="absolute bottom-[0px] h-8 bg-black rounded-[32px] transition-all duration-300"
                style={{
                  width: `${boxStyle.width}px`,
                  left: `${boxStyle.left}px`,
                }}
              ></div>

              {/* Nav Items */}
              {navItems.map((item, index) => (
                <a href={`#${item.id}`}
                  key={index}
                  ref={(el) => (navRefs.current[index] = el)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative z-10  hidden lg:flex text-[16px] font-[380] cursor-pointer py-1 px-2 transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-white"
                      : "text-[#797979] hover:text-bgBlack"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
          <Button title="Deploy assets " />
          
        </div>
      </div>
    </header>
  );
}

export default Header;
