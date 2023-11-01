"use client";

import React from 'react'
import {MdOutlineEmail} from "react-icons/md"
import { PiLinkedinLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id={"contact"}
      className="flex justify-center py-40 items-center flex-col gap-6 flex-wrap h-full w-screen z-[999999999] bg-zinc-200 dark:bg-zinc-900"
    >
      <motion.h4
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="responsive_title"
      >
        Talk to me
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="dark:text-gray-100 text-zync-950 hero_h2 text-center p-9 w-screen lg:w-[80%] pointer-events-none z[999] font-light"
      >
        Reach out and let&apos;s chat! Find my contact details below and drop me
        a line.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-10"
      >
        {" "}
        <a
          href="mailto:canadathales@gmail.com"
          className="max-w-[70vw] w-auto text-[3rem] mt-10 text-center cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg drop-shadow-lg hover:scale-105 active:scale-95 active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg text-gray-100 dark:text-zync-950 whitespace-nowrap"
        >
          <MdOutlineEmail />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thalesrodriguescardoso/"
          className="max-w-[70vw] w-auto text-[3rem] mt-10 text-center cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg drop-shadow-lg hover:scale-105 active:scale-95 active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg text-gray-100 dark:text-zync-950 whitespace-nowrap"
        >
          <PiLinkedinLogoBold />
        </a>
      </motion.div>
      <br />
      <br />
    </div>
  );
}

export default Contact