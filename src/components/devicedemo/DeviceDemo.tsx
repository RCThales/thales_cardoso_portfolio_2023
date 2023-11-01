"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const DeviceDemo = ({ url }: any) => {
  const [currentHour, setCurrentHour] = useState(getCurrentHour());
  const [deviceMode1, setDeviceMode1] = useState("mobile");

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

  const setDeviceMode = () => {
    setDeviceMode1((prevMode) =>
      prevMode === "mobile" ? "desktop" : "mobile"
    );
  };

  useEffect(() => {
    const changeNavbarWithResize = () => {
      if (window?.innerWidth <= 1000) {
        setDeviceMode1("mobile");
      }
    }; // Debounced for efficiency

    window?.addEventListener("resize", changeNavbarWithResize);

    return () => {
      window?.removeEventListener("resize", changeNavbarWithResize);
    };
  }, []);

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
      <div className="flex justify-center flex-wrap items-center gap-6 p-14 pb-20 lg:pb-10">
        {/* Buttons for device */}
        <button
          onClick={() => setDeviceMode()}
          className="max-w-[70vw] text-[1.3rem] w-[230px] flex justify-center items-center text-center cursor-pointer bg-gradient-to-r
           from-orange-500 to-orange-600 drop-shadow-lg hover:scale-105 active:scale-95
            active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg
             text-zinc-100 dark:text-zync-950 whitespace-nowrap"
        >
          {deviceMode1 === "desktop" ? "Change to Mobile" : "Change to Desktop"}
        </button>

        <a
          target="_blank"
          href={url}
          className="max-w-[70vw] w-[230px] text-[1.3rem]  flex justify-center items-center text-center cursor-pointer bg-gradient-to-r
           border-orange-500 border-2 drop-shadow-lg hover:scale-105 active:scale-95
            active:shadow-inner transition-all px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg
             text-zinc-800 dark:text-zync-950 whitespace-nowrap dark:text-gray-200"
        >
          Go To Website
        </a>
      </div>

      <div className="demo_wrapper pb-10 flex justify-center items-center">
        {/* PHONE */}
        {deviceMode1 === "mobile" && (
          <div className="mobile_demo bg-gray-900 relative border-gray-300 border-[8px] w-[500px] h-[1000px] shadow-lg shadow-gray-800 flex flex-col justify-center items-center lg:translate-y-[0%] text-black p-4 rounded-[70px]">
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
          </div>
        )}
        {/* DESKTOP */}
        {deviceMode1 === "desktop" && (
          <div className="desktop_demo bg-gray-900 relative border-gray-300 border-[8px] w-[1400px] h-[1080px] shadow-lg shadow-gray-800 flex flex-col justify-center items-center -translate-x-[0] translate-y-[0%]   lg:translate-y-[0%] text-black p-4 rounded-[30px]">
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
          </div>
        )}
      </div>

      {/* CARD */}
      <div className="m-10 flex flex-wrap justify-center items-center gap-10 mb-20">
        <div className="bg-orange-500 max-w-[95vw]  lg:max-w-[90vw] w-[900px] h-auto shadow-lg flex flex-col relative justify-start lg:justify-center items-center text-gray-800 p-10 rounded-xl">
          <h2 className="text-gray-800 dark:text-zinc-200  font-semibold uppercase text-3xl pb-10">
            Thales Boy
          </h2>

          <ol className="p-10 bg-zinc-100 w-[90vw] md:w-[90%] lg:w-[90%] dark:bg-zinc-800 dark:text-zinc-200 rounded-lg shadow-zinc-600 dark:shadow-black shadow-md">
            <li className=" text-[1rem] list-disc p-4">
              <span className="font-semibold uppercase">Project Overview</span>
              <br />
              ThalesBoy is my brainchild—a recreation of the iconic Game Boy
              Color using Typescript and CSS. It boasts a 300x300 resolution,
              allowing it to run web-based games seamlessly. Plus, it&apos;s
              mobile-friendly, with button signals transmitted from the parent
              page to the child iframe component. The animation when the
              videogame is turned on is a gif animation created by myself using
              Adobe After Effects.
            </li>
            <li className="text-[1rem] list-disc p-4">
              <span className="font-semibold uppercase">Tech used</span>
              <br />
              <ol className="">
                <li className="">- Javascript | Typescript</li>
                <li className="">- CSS</li>
              </ol>
            </li>
            <li className=" text-[1rem] list-disc p-4">
              <span className="font-semibold uppercase">Future Goals</span>
              <br />
              Make it available for people to create their own games and push to
              the project&apos;s GITHUB repository.
            </li>
          </ol>
          <br />
          <span className="font-semibold uppercase text-2xl dark:text-zinc-200 ">
            Links
          </span>
          <br />
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <Link
              className="bg-zinc-200 dark:bg-zinc-800 w-[150px] shadow-md shadow-zinc-600 dark:shadow-black rounded-lg p-2 flex justify-center items-center hover:scale-[1.02] transition-all"
              target="_blank"
              href={"https://github.com/RCThales/ThalesBoy"}
            >
              <p className="dark:text-zinc-200 ">Github</p>
              <LiaGithub
                className={"text-[5rem] dark:text-zinc-200 "}
              ></LiaGithub>
            </Link>{" "}
            <Link
              className="bg-zinc-200 w-[150px] dark:bg-zinc-800 shadow-md shadow-zinc-600 dark:shadow-black rounded-lg p-2 flex justify-center items-center hover:scale-[1.02] transition-all"
              target="_blank"
              href={"https://thalesboycolor.netlify.app/"}
            >
              <p className="dark:text-zinc-200">Demo</p>
              <MdOutlineVideogameAsset
                className={"text-[5rem] pl-2 dark:text-zinc-200 "}
              ></MdOutlineVideogameAsset>
            </Link>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default DeviceDemo;
