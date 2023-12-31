import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero></Hero>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}
