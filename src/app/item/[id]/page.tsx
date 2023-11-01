import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Image from "next/image";
import DeviceDemo from "@/components/devicedemo/DeviceDemo";
export default function ItemPage({ params }: any) {
  const title: any = {
    "0": "ThalesBoy Color",
    "1": "Batour",
    "2": "Burger Burger",
    "3": "My Music Portfolio",
  };

  const url: any = {
    "0": "https://thalesboycolor.netlify.app/",
    "1": "https://batour.ca/",
    "2": "https://burgerbuger.vercel.app/",
    "3": "https://thalescardris.com/",
  };
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <section
        id="home"
        className="h-auto flex-col pt-10 w-screen flex relative min-h-screen hero_bg
      items-center justify-start"
      >
        <h1 className="responsive_title  text-center text-zinc-950 dark:text-gray-200 z-10 p-10 font-semibold">
          {title[params?.id]}
        </h1>
        <p className="max-w-[70vw] text-center text-xl font-light">
          PS: These interactive demos below were made by me entirely in CSS!
          Have fun testing it out!
        </p>
        <DeviceDemo url={url[params?.id]}></DeviceDemo>
      </section>
    </main>
  );
}
