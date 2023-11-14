"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import BigPic from "../bigpic/BigPic";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeviceDemo = ({ url, title, cardInfo, pics }: any) => {
  const [currentHour, setCurrentHour] = useState(getCurrentHour());
  const [deviceMode, setDeviceMode] = useState("mobile");
  const [bicBigPictureOpen, setBigPictureOpen] = useState(false);
  const [pictureId, setPictureId] = useState(0);

  function getCurrentHour() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHour(getCurrentHour());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const changeDeviceMode = () => {
    setDeviceMode((prevMode) =>
      prevMode === "mobile" ? "desktop" : "mobile"
    );
  };

  useEffect(() => {
    const changeNavbarWithResize = () => {
      if (window?.innerWidth <= 1000) {
        setDeviceMode("mobile");
      }
    }; 

    window?.addEventListener("resize", changeNavbarWithResize);

    return () => {
      window?.removeEventListener("resize", changeNavbarWithResize);
    };


  }, []);

  const triggerBigPicture = (id : number = 0) =>{
      setPictureId(id);
      setBigPictureOpen(!bicBigPictureOpen);
  }

  const nextPicture = (id : number) =>{
    if(id === pics.length-1){
      setPictureId(0);
    }
    else{
      setPictureId(pictureId + 1);
    }
  }

  const previousPicture = (id : number) =>{
    console.log(id)
    if(id === 0){
      setPictureId(pics.length-1);
    }
    else{
      setPictureId(pictureId - 1);
    }
  }

  const copyText = async (text : string) => {
    try {
      await navigator.clipboard.writeText(text);
        toast.success('Information copied!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, 
        });

    } catch (error) {
      await navigator.clipboard.writeText(text);
      toast.error('Unable to copy text!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, 
      });
    }
  };


  return (
    <>
      <nav className="z-50 fixed top-4 left-4 ">
        <Link
          href={"/#projects"}
          className="bg-blue-500 h-fit shadow-md shadow-zinc-600 dark:shadow-black text-center z-50 text-2xl desktop_mockup rounded-xl w-fit p-3 text-[1.2rem] text-gray-200 dark:text-zync-950 transition-all hover:scale-105 active:scale-95 flex justify-center items-center"
        >
          <AiOutlineArrowLeft />
        </Link>
      </nav>
      
      {bicBigPictureOpen && <BigPic pics={pics} id={pictureId} triggerPic={triggerBigPicture} next={nextPicture} previous={previousPicture}></BigPic>}

      {title === "Batour" &&     
      <motion.div         
      initial={{ opacity: 0,  translateY: -30 }}
      whileInView={{ opacity: 1,  translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      className="flex w-fit flex-col justify-center items-center max-w-[90vw] gap-4 bg-zinc-300 dark:bg-zinc-900 p-5 rounded-tl-3xl shadow-zinc-500 dark:shadow-black shadow-md rounded-br-3xl">
       <h3 className="text-xl bg-red-600 rounded-xl p-4 max-w-[95vw] text-zinc-50">PS: You can only test the PURCHASE feature on the actual website, not on the demo below!</h3>
       <p className="text-xl max-w-[85vw] text-zinc-950 dark:text-zinc-50">🤑To test it for free use this DEMO CREDIT CARD (click on the numbers to copy)</p>
       <div className="w-[300px] max-w-[90vw] flex justify-center flex-col items-center shadow-gray-900 shadow-md bg-gradient-to-r from-orange-300  via-orange-500 to-orange-600 rounded-md aspect-video">     
          <h3 onClick={() => copyText("4242424242424242")} className="m-auto font-bold text-xl cursor-pointer hover:scale-[1.05] text-zinc-950  transition-all">4242 4242 4242 4242</h3>
          <div className="flex justify-evenly w-full">
            <p onClick={() => copyText("10/50")} className="cursor-pointer hover:scale-[1.05] font-semibold text-zinc-950  transition-all">10/50</p>
            <p onClick={() => copyText("999")} className="cursor-pointer hover:scale-[1.05] font-semibold text-zinc-950 transition-all">999</p>
          </div>
          <span className="h-[50px] w-full bg-gradient-to-r from-gray-600  via-gray-800 to-gray-900 mb-6 mt-2"></span>
        </div>   
      </motion.div>
      }

      {/* INTERACTIVE DEMOS */}
      <div className="flex flex-col items-center justify-center w-screen  pb-20 py-10 lg:pb-10 relative">
        
        <h2 className="responsive_title_normal py-10">INTERACTIVE DEMOS</h2>
        <p className="max-w-[70vw] text-center text-xl font-nromal">
            PS: This device ACTUALLY works and was made by me with TAILWIND! <br /><br />  You can also go to the actual webiste clicking the button below =)
        </p>
        <div className="flex justify-center flex-wrap items-center gap-6 p-14 pb-20 lg:pb-10">
          {/* Buttons for device */}
          <motion.button
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            onClick={() => changeDeviceMode()}
            className="max-w-[70vw] text-[1.3rem] w-[230px] lg:flex justify-center items-center text-center cursor-pointer bg-gradient-to-r
            from-orange-500 to-orange-600 drop-shadow-lg hover:scale-105 active:scale-95
              active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg
              text-zinc-100 dark:text-zync-950 whitespace-nowrap hidden"
          >
            {deviceMode === "desktop" ? "Change to Mobile" : "Change to Desktop"}
          </motion.button>

        

          <motion.a
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            target="_blank"
            href={url}
            className="max-w-[70vw] w-[230px] text-[1.3rem]  flex justify-center items-center text-center cursor-pointer bg-gradient-to-r
            border-orange-500 border-2 drop-shadow-lg hover:scale-105 active:scale-95
              active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg
              text-zinc-800 dark:text-zync-950 whitespace-nowrap dark:text-gray-200 hover:bg-orange-500 hover:dark:text-black"
          >
            Go To Website
          </motion.a>
        </div>

   

        {/* DEVICE DEMOS */}
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className="demo_wrapper pb-10 flex justify-center items-center relative"
        >
          <p className="text-3xl absolute top-[-40px] z-50 lg:top-10 font-semibold">TRY ME ↓</p>
          {/* PHONE */}
          {deviceMode === "mobile" && (
            <motion.div
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mobile_demo bg-gray-900 relative border-gray-300 border-[8px]  w-[500px] h-[1000px] shadow-lg shadow-gray-800 flex flex-col justify-center items-center lg:translate-y-[0%] text-black p-4 rounded-[70px]"
            >
              <div className="h-[30px] w-[20%] bg-black rounded-full absolute top-[25px]"></div>
              <span className="absolute top-[25px] left-[20%]">
                {currentHour}
              </span>
              <Image
                className="absolute top-[25px] right-[30%]"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/phone+signal.png"
                }
                alt="Phone signal icon"
                width={20}
                height={20}
              ></Image>
              <Image
                className="absolute top-[25px] right-[22%]"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/wifi.png"
                }
                alt="Phone wifi icon"
                width={20}
                height={20}
              ></Image>
              <Image
                className="absolute top-[25px] right-[15%]"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/batery.png"
                }
                alt="Phone battery icon"
                width={20}
                height={20}
              ></Image>
              <div className="h-[120px] w-[100%] bg-white rounded-t-[70px]">
                <div className="h-[35px] w-[80%] bg-gray-200 rounded-full absolute top-[65px] right-[50%] translate-x-[50%] flex justify-center">
                  <span className="flex justify-center items-center">{url}</span>
                </div>
              </div>
              <iframe src={url} className="w-[100%] h-[100%]"></iframe>
              <div className="h-[70px] w-[100%] bg-gray-100 rounded-b-[70px] relative">
                <Image
                  className="h-[30px] w-[30px]  absolute left-[10%] top-[10px] opacity-[0.5]"
                  src={
                    "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-left.svg"
                  }
                  alt="Phone battery icon"
                  width={20}
                  height={20}
                ></Image>
                <Image
                  className="h-[30px] w-[30px] absolute left-[28%] top-[10px] opacity-[0.5]"
                  src={
                    "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-right.svg"
                  }
                  alt="Phone battery icon"
                  width={20}
                  height={20}
                ></Image>

                <div className="h-[30px] w-[30px] bg-gray-300 rounded-full absolute right-[50%] translate-x-[50%] top-[10px] text-3xl text-gray-500 flex justify-center items-center">
                  +
                </div>

                <div className="h-[30px] w-[30px] bg-0 border-[3px] border-gray-500 rounded-xl absolute right-[28%] top-[10px] text-sm text-gray-500 flex justify-center items-center">
                  2
                </div>
                <div className=" absolute right-[12%] top-[0px] text-3xl text-gray-500 flex justify-center items-center">
                  ...
                </div>
              </div>
            </motion.div>
          )}
          {/* DESKTOP */}
          {deviceMode === "desktop" && (
            <motion.div
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="desktop_demo bg-gray-900 relative border-gray-300 border-[8px] w-[1400px] h-[1080px] shadow-lg shadow-gray-800 flex flex-col justify-center items-center -translate-x-[0] translate-y-[0%]   lg:translate-y-[0%] text-black p-4 rounded-[30px]"
            >
              <div className="h-[30px] w-[20%] bg-gray-900 rounded-full absolute top-[0px]"></div>
              <span className="absolute top-[40px] left-[3%] rounded-full bg-red-500 h-[20px] w-[20px]"></span>
              <span className="absolute top-[40px] left-[5%] rounded-full bg-yellow-500 h-[20px] w-[20px]"></span>
              <span className="absolute top-[40px] left-[7%] rounded-full bg-green-500 h-[20px] w-[20px]"></span>
              <Image
                className="absolute top-[40px] left-[12%] rounded-full h-[20px] w-[20px] opacity-30"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-left.svg"
                }
                alt="Phone battery icon"
                width={20}
                height={20}
              ></Image>
              <Image
                className="absolute top-[40px] left-[15%] rounded-full h-[20px] w-[20px] opacity-30"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-right.svg"
                }
                alt="Phone battery icon"
                width={20}
                height={20}
              ></Image>
              <div className="absolute top-[12px] right-[2%] w-[20px] h-[20px] text-[2rem]">
                +
              </div>
              <Image
                className="absolute top-[25px] right-[4%] rotate-90 border-gray-600 rounded-full border-[3px]"
                src={
                  "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/arrow-right.svg"
                }
                alt="Phone wifi icon"
                width={20}
                height={20}
              ></Image>

              {/* TOP OF THE BROWSER */}
              <div className="h-[100px] w-[100%] bg-gray-300 rounded-t-[20px]">
                <div className="h-[35px] w-[60%] bg-gray-200 rounded-xl absolute top-[45px] right-[50%] translate-x-[50%] flex justify-center">
                  <span className="flex justify-center items-center">{url}</span>
                </div>
              </div>

              <iframe
                src={url}
                className="w-[100%] h-[100%] rounded-b-[2%] overflow-y-auto loading_bg"
              ></iframe>
            </motion.div>
          )}
        </motion.div>

        <div className="h-[5px] bg-zinc-300 dark:bg-zinc-900  absolute bottom-[-4px] w-screen"></div>
        <div className="absolute bottom-0 w-screen overflow-hidden leading-0 transform rotate-180 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[38px]"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="fill-current text-zinc-300 dark:text-zinc-900"
              xmlns="http://www.w3.org/2000/svg"
            ></path>
          </svg>
        </div>
      <div className="py-20 lg:py-0"></div>
      </div>

      {/* GALLERY */}

      <div className="flex flex-col justify-center items-center w-full py-10 pb-40 lg:pb-40 z-[0] relative bg-zinc-300 dark:bg-zinc-900">
        <h2 className="responsive_title_normal py-10 text-center">GALLERY</h2>
        <div className="flex justify-center items-center gap-10 w-full flex-wrap relative ">
          {pics?.map((picUrl : string, index : number) => {
            return (
              <motion.button     
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index/10 }}
              key={"proj_pic_gallery"+index} className="relative w-[80%] lg:w-[40%] aspect-video min-w-[300px] max-h-[300px] h-auto max-w-[90vw] hover:scale-[1.01] transition-all" onClick={() => triggerBigPicture(index)}>
                <div className="border-2 border-black rounded-md h-[100%] aspect-video z-[-1] w-[100%] absolute left-[-15px] top-[-15px] opacity-25 dark:border-gray-50"></div>
                <div className="border-2 border-black rounded-md h-[20px] w-[20px]  absolute right-[-10px] bottom-[50px] opacity-25 dark:border-gray-50"></div>
                <div className="border-2 border-black rounded-md h-[20px] w-[20px]  z-[-1] absolute right-[-10px] bottom-[20px] opacity-25 dark:border-gray-50"></div>
                <div className="border-2 border-black rounded-md h-[20px] w-[20px] absolute right-[15px] bottom-[30px] opacity-25 dark:border-gray-50"></div>
                <Image className="rounded-xl w-full h-auto z-[1]" src={picUrl} width={1500} height={1500} alt="Mockup of the project"></Image>
              </motion.button>
            )
          })}
        </div>
       
     
      </div>



      {/* PROJECT INFO */}    
      <div className="flex flex-col items-center justify-center w-screen relative py-10">
    
        <h2 className="responsive_title_normal  py-10 pt-20">PROJECT INFORMATION</h2>
        <div className="h-[5px] bg-zinc-300 dark:bg-zinc-900  absolute top-[-4px] w-screen"></div>
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
                className="fill-current text-zinc-300 dark:text-zinc-900"
                xmlns="http://www.w3.org/2000/svg"
              ></path>
            </svg>
        </div>
        {/* CARD */}
        <div className="m-10 flex flex-wrap justify-center items-center gap-10 mb-20">
          <div className="bg-orange-500 max-w-[95vw]  lg:max-w-[90vw] w-[900px] h-auto shadow-lg flex flex-col relative justify-start lg:justify-center items-center text-gray-800 p-10 rounded-xl">

            <ol className="p-10 bg-zinc-100 w-[90vw] md:w-[90%] lg:w-[90%] dark:bg-zinc-900 dark:text-zinc-300 rounded-lg shadow-zinc-600 dark:shadow-black shadow-md">
              <motion.li
                initial={{ opacity: 0, translateY: -30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className=" text-[1rem] list-disc p-4"
              >
                <span className="font-semibold uppercase">Project Overview</span>
                <br />
                {cardInfo.overview}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateY: -30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="text-[1rem] list-disc p-4"
              >
                <span className="font-semibold uppercase">My Roles</span>
                <br />
                <ol>
                  {cardInfo.roles.map((i: string) => {
                    return <li key={"roles_"+url}>- {i}</li>;
                  })}
                </ol>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateY: -30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="text-[1rem] list-disc p-4"
              >
                <span className="font-semibold uppercase">Tech used</span>
                <br />
                <ol>
                  {cardInfo.tech.map((i: string) => {
                    return (
                      <li key={"tech" + url}>
                        - {i}
                      </li>
                    );
                  })}
                </ol>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateY: -30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className=" text-[1rem] list-disc p-4"
              >
                <span className="font-semibold uppercase">What I Achieved</span>
                <br />
                {cardInfo.goals}
              </motion.li>
            </ol>
            <br />
            <motion.span
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="font-semibold uppercase text-2xl dark:text-zinc-300 "
            >
              Links
            </motion.span>
            <br />
            <motion.div
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex justify-center items-center gap-10 flex-wrap"
            >
              <Link
                className="bg-zinc-300 dark:bg-zinc-900 w-[150px] shadow-md shadow-zinc-600 dark:shadow-black rounded-lg p-2 flex justify-center items-center hover:scale-[1.02] transition-all"
                target="_blank"
                href={cardInfo.repo}
              >
                <p className="dark:text-zinc-300 ">Github</p>
                <LiaGithub
                  className={"text-[5rem] dark:text-zinc-300 "}
                ></LiaGithub>
              </Link>{" "}
              <Link
                className="bg-zinc-300 w-[150px] dark:bg-zinc-900 shadow-md shadow-zinc-600 dark:shadow-black rounded-lg p-2 flex justify-center items-center hover:scale-[1.02] transition-all"
                target="_blank"
                href={url}
              >
                <p className="dark:text-zinc-300">Demo</p>
                <MdOutlineVideogameAsset
                  className={"text-[5rem] pl-2 dark:text-zinc-300 "}
                ></MdOutlineVideogameAsset>
              </Link>
            </motion.div>

            <br />

            
            <div className="border-2 border-black rounded-md h-[100%] z-[-1] w-[100%] absolute left-[-15px] top-[-15px] opacity-25 dark:border-gray-50"></div>
            <div className="border-2 border-black rounded-md h-[20px] w-[20px]  absolute right-[-10px] bottom-[50px] opacity-25 dark:border-gray-50"></div>
            <div className="border-2 border-black rounded-md h-[20px] w-[20px]  z-[-1] absolute right-[-10px] bottom-[20px] opacity-25 dark:border-gray-50"></div>
            <div className="border-2 border-black rounded-md h-[20px] w-[20px] absolute right-[15px] bottom-[30px] opacity-25 dark:border-gray-50"></div>
          </div>
        </div>

      </div>
 
    </>
  );
};

export default DeviceDemo;
