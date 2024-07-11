import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TechFlag from "../techflag/TechFlag";

const DemoItems = ({ title, websitePic, delayNum, id, techs }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayNum }}
    >
      <Link
        href={"/item/" + id}
        className="h-auto flex flex-col justify-start relative shadow-md dark:shadow-black shadow-zinc-400 hover:bg-white dark:hover:bg-black transition-all items-center lg:aspect-video w-[80vw]
         lg:w-[35vw] max-w-[90vw] bg-zinc-100 dark:bg-zinc-950 rounded-md"
      >
        <div className="border-2 border-black rounded-md h-[100%] z-[-1] w-[100%] absolute left-[-15px] top-[-15px] opacity-25 dark:border-gray-50"></div>
        <div className="border-2 border-black rounded-md h-[20px] w-[20px]  absolute right-[-10px] bottom-[50px] opacity-10 dark:border-gray-50"></div>
        <div className="border-2 border-black rounded-md h-[20px] w-[20px]  z-[-1] absolute right-[-10px] bottom-[20px] opacity-10 dark:border-gray-50"></div>
        <div className="border-2 border-black rounded-md h-[20px] w-[20px] absolute right-[15px] bottom-[30px] opacity-10 dark:border-gray-50"></div>
        <h3 className="text-3xl text-zinc-900 dark:text-zinc-50 text-center uppercase p-10">
          {" "}
          {title}
        </h3>

        <Image
          alt="Picture of the website"
          width={1500}
          height={1500}
          src={websitePic}
          className="w-[90%] lg:w-[80%] h-auto  rounded-tl-lg rounded-br-lg"
        ></Image>

        <div className="flex flex-wrap justify-center items-center pt-2 max-w-[80%]">
          {techs.map((techName: string, index: number) => {
            return (
              <TechFlag key={"techName_" + index} name={techName}></TechFlag>
            );
          })}
        </div>

        {/*
        <p className="text-center p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni unde enim cumque placeat ad repellendus beatae iusto distinctio inventore.</p>
         */}
        <br />
      </Link>
    </motion.div>
  );
};

export default DemoItems;
