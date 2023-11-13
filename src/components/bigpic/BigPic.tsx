"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from 'react-swipeable';

const BigPic = ({ pics, id, triggerPic, previous, next }: any) => {
    const handleSwipe = useSwipeable({
        onSwipedRight: () => {
            previous(id);
        },
        onSwipedLeft: () => {
            next(id);
        },
    });

      
  return (
    <AnimatePresence>

            <motion.div   
            {...handleSwipe}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0 }} className="fixed  left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] z-[999999]  w-screen h-screen">
            
                {/* OVERLAY */}
                <button onClick={triggerPic} className="fixed left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] bg-black min-h-[100vh] min-w-[200vw] max-h-[90vh] rounded-lg opacity-75"></button>
                {/* BIG PIC */}
                <div className="fixed flex justify-center items-center left-0 gap-0 lg:gap-2 top-1/2 translate-x-[5%] translate-y-[-50%] shadow-black shadow-md bg-zinc-200 dark:bg-zinc-900 h-auto lg:h-[1200px] max-h-[80vh] lg:max-h-[80vh] py-20 w-[90vw]  rounded-lg">    
                    <button onClick={() => previous(id)} className=" w-[8%] hidden lg:flex  max-w-[90px] hover:scale-[1.2] transition-all pointer-events-auto z-[99999999999] dark:invert">
                        <Image className="rounded-xl pointer-events-none" src={"https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-left.svg"} width={1500} height={1500} alt="Mockup of the project"></Image>
                    </button>   
                
                    <Image className="rounded-xl w-auto h-[80%] lg:h-[100%]   pointer-events-none" src={pics[id]} width={1500} height={1500} alt="Mockup of the project"></Image>
                    <button onClick={() => next(id)} className="hover:scale-[1.2] hidden lg:flex  w-[8%] max-w-[90px] transition-all pointer-events-auto z-[99999999999] dark:invert">
                        <Image className="rounded-xl pointer-events-none" src={"https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-right.svg"} width={1500} height={1500} alt="Mockup of the project"></Image>
                    </button>  
                    <div className="border-2 border-black rounded-md h-[104%]  w-[103%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-25 dark:border-gray-50"></div>

                </div>
            </motion.div>

    </AnimatePresence>
    
  );
}

export default BigPic


