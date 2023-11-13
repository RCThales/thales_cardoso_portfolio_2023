"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion  } from "framer-motion";

const Hero = () => {
  const [nameImg, setNameImg] = useState<string>(
    ""
  );
  const { theme } = useTheme();
  useEffect(() => {

    const themeName = localStorage.getItem("theme");

    if (themeName === "light") {
      setNameImg(
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thales_name_hero_lightmode.png"
      );
    } else {
      setNameImg(
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thales_name_hero_darkmode.png"
      );
    }
  }, [theme]);

  return (
    <section
      id="home"
      className="h-auto min-h-screen hero_fixed flex-col md:flex-c lg:flex-row translate-y-0 fixed top-0 w-screen  flex
      items-center justify-center bg-cover flex-wrap bg-white bg-opacity-10 hero_bg "
    >
      <div className="flex justify-center items-center flex-wrap w-full lg:w-[80%] ">
        <div className="flex flex-col justify-center items-center translate-y-14 lg:translate-y-0 w-[60%] p-4 z[999] ">
          <motion.div
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-0 z[999] justify-center items-center w-full pointer-events-none"
          >
            {nameImg === "" ? (
              <div className="loader"></div>
            ) : (
              <Image
                className="w-[1500px] max-w-[70vw] md:max-w-[80%]  z[999] "
                width={1500}
                height={1000}
                alt="An image saying 'Hi! I am Thales'."
                src={nameImg}
              ></Image>
            )}

            <br />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="dark:text-gray-100 text-zync-950  text-center text-xl min-w-[280px] lg:text-3xl w-[100%] lg:w-[80%] pointer-events-none z[999]"
          >
            <span className="font-semibold">Front-End Developer</span> crafting{" "}
            <span className="italic">sleek</span>,
            <span className="italic"> user-friendly</span>, and{" "}
            <span className="italic">performant</span> web experiences.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="max-w-[70vw] text-[1.2rem] lg:text-[1.8rem] mt-10 text-center cursor-pointer bg-gradient-to-r
           from-orange-500 to-orange-600 hover:shadow-lg drop-shadow-lg hover:scale-105 active:scale-95
            active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg
             text-gray-100 dark:text-zync-950 whitespace-nowrap"
            href="#projects"
          >
            SEE MY WORK
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="z-[1] w-[50%] flex justify-center items-center lg:w-[40%] pointer-events-none"
        >
          <Image
            className="w-[90vw] lg:w-[900px] max-w-[100%] pt-20 z[999999] rounded-full "
            width={1000}
            height={1000}
            alt="Thales' picture with artistic effects."
            src={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesheropic_notextures.png"
            }
          ></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
