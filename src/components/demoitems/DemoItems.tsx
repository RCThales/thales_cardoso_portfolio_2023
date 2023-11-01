import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DemoItems = ({ title, websitePic, delayNum, id }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayNum }}
    >
      <Link
        href={"/item/" + id}
        className="h-auto flex flex-col justify-start  shadow-md dark:shadow-black shadow-zinc-400 hover:scale-[1.01] transition-all items-center lg:aspect-video w-[80vw] lg:w-[35vw] max-w-[90vw] bg-orange-600 rounded-md"
      >
        <h3 className="text-3xl text-zinc-200 uppercase p-10"> {title}</h3>
        <Image
          alt="Picture of the website"
          width={1000}
          height={1000}
          src={websitePic}
          className="w-[95%] lg:w-[80%] h-auto rounded-lg"
        ></Image>
        <div className="pb-16" />
      </Link>
    </motion.div>
  );
};

export default DemoItems;
