"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [updateTheme, setUpdateTheme] = useState(theme);
  const navbarToggle = useRef<any>();
  const navbarWrapper = useRef<any>();

  const toggleNavbar = () => {
    const navbarClasses = navbarToggle.current.classList;
    if (navbarClasses.contains("navbar_animatedOut")) {
      navbarClasses.remove("hiddenNav");
      navbarClasses.remove("navbar_animatedOut");
      navbarClasses.add("navbar_animatedIn");
      return;
    }
    navbarClasses.remove("navbar_animatedIn");
    navbarClasses.add("navbar_animatedOut");
    setTimeout(() => {
      navbarClasses.add("hiddenNav");
    }, 200);
  };

  const toggleNavbarOut = () => {
    const navbarClasses = navbarToggle.current.classList;

    navbarClasses.remove("navbar_animatedIn");
    navbarClasses.add("navbar_animatedOut");
    navbarClasses.add("hiddenNav");
  };

  useEffect(() => {
    const navbarClasses = navbarWrapper?.current?.classList;
    if (theme === "system") {
      if (navbarClasses.contains("darkNavBarColor")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
    if (theme === "dark") {
      navbarClasses?.add("darkNavBarColor");
      navbarClasses?.remove("navBarColor");
    } else {
      navbarClasses?.add("navBarColor");
      navbarClasses?.remove("darkNavBarColor");
    }
  }, [theme]);

  useEffect(() => {
    const changeNavbar = () => {
      const navbarClasses = navbarWrapper?.current?.classList;

      if (window?.scrollY >= window?.innerHeight) {
        navbarClasses?.add("show");
      } else {
        navbarClasses?.remove("show");
      }
    };

    window?.addEventListener("scroll", changeNavbar);

    return () => {
      window?.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  useEffect(() => {
    const changeNavbarWithResize = () => {
      if (window?.innerWidth >= 768) {
        toggleNavbarOut();
      }
    }; // Debounced for efficiency

    window?.addEventListener("resize", changeNavbarWithResize);

    return () => {
      window?.removeEventListener("resize", changeNavbarWithResize);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, translateY: -10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0 }}
        ref={navbarWrapper}
        className="fixed top-0 w-full z-[999999] hero_fixed"
      >
        <div className="max-w-screen-xl flex flex-wrap h-full items-center justify-between mx-auto p-4 ">
          <a href="/" className="flex items-center">
            <span className="self-center text-lg text-center hover:scale-105 uppercase transition-all font-semibold whitespace-nowrap dark:text-white">
              T h a l e s <br /> Cardoso
            </span>
          </a>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="text-2xl" />
          </button>
          <div
            className="w-full md:block md:w-auto hiddenNav navbar_animatedOut"
            id="navbar-default"
            ref={navbarToggle}
          >
            <ul
              className="font-medium h-[85vh] md:h-[70px] items-center flex flex-col
           justify-evenly p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row text-lg
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-200 dark:bg-zinc-950 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
            >
              <li>
                <a
                  href="/"
                  onClick={toggleNavbar}
                  className="block py-2 pl-3 pr-4 text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded md:bg-transparent hover:md:text-red-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleNavbar}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:md:text-red-500 transition-all text-zync-950 dark:text-gray-100 md:p-0 "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleNavbar}
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:md:text-red-500 transition-all text-zync-950 dark:text-gray-100 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
