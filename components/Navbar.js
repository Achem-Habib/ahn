/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import NavContextProvider from "@/context/NavContext";
import navLinks from "@/lib/data/navLinks";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MenuOpenButton from "./MenuOpenButton";
import MobileNavbar from "./MobileNavbar";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavContextProvider>
      <div
        className={`w-full bg-neutral-100 dark:bg-neutral-900 shadow-md fixed  z-30 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" w-full px-4 mx-auto max-w-6xl sm:px-6  xl:px-0">
          <MobileNavbar />
          <nav className="relative py-4 flex flex-wrap items-center justify-between mx-auto ">
            {/* Logo  */}

            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <Image
                src={`${
                  currentTheme === "light"
                    ? "/logo-light.svg"
                    : "/logo-dark.svg"
                }`}
                width={120}
                height={120}
                priority
                alt="logo"
              />
            </ScrollLink>

            {/* menu item */}
            <div className="flex gap-x-8">
              <div className="hidden text-center lg:flex lg:items-center">
                <ul className="lg:flex md:gap-x-8 w-full lg:justify-between">
                  {navLinks.map((menu, index) => (
                    <li className="mr-3 nav__item" key={index}>
                      <ScrollLink
                        offset={-50}
                        spy={true}
                        activeClass="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                        to={menu.href}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-lg font-semibold hover:bg-gray-200  dark:hover:bg-gray-600 px-3 py-1.5 rounded-md"
                      >
                        {menu.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-x-3 mr-3 space-x-4 md:flex nav__item">
                <span className="my-auto">
                  <ThemeSwitcher />
                </span>
                <span className="lg:hidden my-auto">
                  <MenuOpenButton />
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </NavContextProvider>
  );
};

export default Navbar;
