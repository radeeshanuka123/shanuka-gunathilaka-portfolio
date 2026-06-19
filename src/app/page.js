import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Teaching from "@/components/sections/Teaching";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Teaching />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
