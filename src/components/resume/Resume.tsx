"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegFileWord, FaRegFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <div
      id={"resume"}
      className="flex justify-center relative py-40 items-center flex-col gap-6 flex-wrap h-full w-screen z-[99] bg-zinc-100 dark:bg-zinc-800"
    >
      <div className="h-[5px] bg-zinc-200 dark:bg-zinc-900 absolute top-[-5px] left-0 w-full"></div>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[38px]"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-current text-[rgb(228,228,231)] dark:text-zinc-900"
            xmlns="http://www.w3.org/2000/svg"
          ></path>
        </svg>
      </div>
      <motion.h4
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="responsive_title"
      >
        Resume
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="dark:text-gray-100 text-zync-950 hero_h2 text-center p-9 w-screen lg:w-[80%] pointer-events-none z[999] font-light"
      >
        Get a sneak peek at my skills and experience by grabbing my resume
        below!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center gap-10 flex-wrap pb-20 "
      >
        <a
          download={true}
          target="_blank"
          href="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Thales+Cardoso_Resume+_+Web+Developer.pdf"
          className="max-w-[70vw] w-[200px] text-[1.8rem] mt-10 text-center flex justify-center items-center gap-2 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg drop-shadow-lg hover:scale-105 active:scale-95 active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg text-gray-100 dark:text-zync-950 whitespace-nowrap"
        >
          PDF <FaRegFilePdf></FaRegFilePdf>
        </a>
        <a
          download={true}
          target="_blank"
          href="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Thales+Cardoso_Resume+_+Web+Developer.docx"
          className="max-w-[70vw] w-[200px] text-[1.8rem] flex justify-center items-center gap-2 mt-10 text-center cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg drop-shadow-lg hover:scale-105 active:scale-95 active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg text-gray-100 dark:text-zync-950 whitespace-nowrap"
        >
          DOCx <FaRegFileWord></FaRegFileWord>
        </a>
      </motion.div>
      <div className="h-[5px] bg-zinc-200 dark:bg-zinc-900  absolute bottom-[-4px] left-0 w-full"></div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[38px]"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-current text-[rgb(228,228,231)] dark:text-zinc-900"
            xmlns="http://www.w3.org/2000/svg"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Resume;
