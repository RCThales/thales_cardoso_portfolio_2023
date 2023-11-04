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
    "1": "https://batour.vercel.app/",
    "2": "https://burgerburger.vercel.app/",
    "3": "https://thalescardris.com/",
  };

  const cardInfo: any = {
    "0": {
      overview:
        "ThalesBoy is my brainchild—a recreation of the iconic Game Boy Color using Typescript and CSS. It boasts a 300x300 resolution, allowing it to run web-based games seamlessly. Plus, it's mobile-friendly, with button signals transmitted from the parent page to the child iframe component. The animation when the videogame is turned on is a gif animation created by myself using Adobe After Effects.",
      tech: ["Javascript | Typescript", "CSS"],
      goals:
        "Make it available for people to create their own games and push to the project's GITHUB repository.",
      repo: "https://github.com/RCThales/ThalesBoy",
      roles: ["Development", "Design"],
    },

    "1": {
      overview:
        "Batour: A homemade e-commerce project with a mission. The goal of this start-up (it was a real company that unfortunately was discontinued by the owner) was to provide exquisite Afghan dried fruits and empower women in Taliban-affected areas. Every purchase would support jobs and independence.",
      tech: [
        "Javascript | Typescript",
        "REACT",
        "Next.JS",
        "Stripe's API",
        "CSS MODULES | SASS",
        "Firebase",
        "Typesense (Not on the demo due to the cluster costs)",
      ],
      roles: ["Development", "Design"],
      goals:
        "Through Batour, I independently crafted a robust e-commerce website, showcasing my proficiency in web development, UI/UX design, and database management. The platform prioritizes security, performance, and scalability. For potential hiring companies, Batour demonstrates my end-to-end development skills, problem-solving abilities, and a commitment to leveraging technology for social impact.",
      repo: "https://github.com/RCThales/Batour-Official-Website",
    },
    "2": {
      overview:
        "BurgerBurger, is my showcase of sleek web development (It serves as the official website for BURGER BURGER, a company located in London, Ontario). With an intuitive UI and responsive design (created by the designer Ray Ruas), it's more than a menu—it's a snapshot of my frontend proficiency. Efficient backend? Check. Smooth transactions? Absolutely. BurgerBurger demonstrates my commitment to top-notch user experiences and cutting-edge tech.",
      tech: ["Javascript | Typescript", "REACT", "Next.JS", "Tailwind", "S3"],
      roles: ["Development"],
      goals:
        "With BurgerBurger, I achieved the creation of a seamless web application hosted on Vercel. This project showcases my technical prowess in frontend development, highlighting an intuitive UI and responsive design. Under the hood, the backend efficiently manages orders and transactions. BurgerBurger is a concise representation of my ability to deliver high-quality user experiences while leveraging the latest technologies for optimal performance.",
      repo: "https://github.com/RCThales/burgerburger_website",
    },
    "3": {
      overview:
        "ThalesCardris is my musical side hustle portfolio—an online testament to my skills in web design and development. With a sleek layout and seamless user experience, it showcases my commitment to excellence in both music and digital craftsmanship. Check it out for a blend of creativity and technical precision.",
      tech: ["Javascript | Typescript", "REACT", "Next.JS", "Tailwind", "S3"],
      roles: ["Development", "Design"],
      goals:
        "ThalesCardris features a sleek sidebar design that enhances both functionality and aesthetics. Carefully curated for quick navigation, it seamlessly integrates with the overall modern and polished look of the site. The sidebar is not just a navigation tool; it's a deliberate design choice that reflects my attention to detail and commitment to a seamless user experience.",
      repo: "https://github.com/RCThales/cardrisportfolio",
    },
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
        <DeviceDemo
          cardInfo={cardInfo[params?.id]}
          title={title[params?.id]}
          url={url[params?.id]}
        ></DeviceDemo>
      </section>
    </main>
  );
}
