import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#skills",
      title: "Skills",
    },
    {
      id: "#education",
      title: "Education",
    },
    {
      id: "#projects",
      title: "Projects",
    },
    {
      id: "#experience",
      title: "Experience",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];

  return (
    <nav className={"w-full px-5 xl:px-0 py-5 fixed top-0 z-20 bg-primary"}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="w-9 h-9 object-contain " />
          <h2 className="text-white hidden md:block cursor-pointer font-bold text-[18px]">
            Tanvir Hasan Emon
          </h2>
          <h2 className="text-white block md:hidden cursor-pointer font-bold text-[18px]">
            Tanvir Hasan
          </h2>
        </Link>
        <div className="hidden lg:block">
          <ul className="list-none flex gap-5 lg:gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  active === link.title ? "text-violet" : "text-secondary"
                } hover:text-violet font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block lg:hidden ">
          <img
            src={toggle ? close : menu}
            alt=""
            className="object-contain cursor-pointer w-6 h-6"
            onClick={() => setToggle(!toggle)}
          />
          {toggle ? (
            <div className="p-5 absolute top-16 black-gradient right-0 min-w-[50%] mr-5 z-10 rounded-xl">
              <ul className="list-none flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      active === link.title ? "text-violet" : "text-secondary"
                    } hover:text-violet font-medium cursor-pointer pl-2 md:pl-5`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
