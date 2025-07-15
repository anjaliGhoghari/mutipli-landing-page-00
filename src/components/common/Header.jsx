import React, { useState } from 'react'
import logo from "../../assets/icons/logo.svg";
import Button from '../Button';

 const navLinks = [
  { 
    id: "home",
    title: "Home",
  },
  {
    id: "partners",
    title: "Partners",
  },

  {
    id: "podcast",
    title: "Podcast",
  },
  {
    id: "careers",
    title: "Careers",
  },
  {
      id: "contact",
      title: "Contact",
    },
  
];
function Header() {
  const [active, setActive] = useState("Home");
  return (
    <header className="sticky z-50 bg-[#F5F5F5] top-0 font-saans ">
        <div className="container">
        <div className="flex justify-between w-full  py-6 sm:py-10 items-center ">
              <img src={logo} alt="logo" className="max-w-[120px]" />
              <nav>
                <ul className="text-[#797979] hidden lg:flex leading-7 text-[16px] font-[380] gap-8 cursor-pointer">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <button
                      onClick={() => setActive(nav)}
                        className={`hover:text-[#A66CFF] ${
                          active === nav ? "nav-item" : ""
                        }`}
                      >
                        <a href={`#${nav.id}`} className="py-4 px-2">
                          {nav.title}
                        </a>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button/>
            </div>
        </div>
        </header>
  )
}

export default Header