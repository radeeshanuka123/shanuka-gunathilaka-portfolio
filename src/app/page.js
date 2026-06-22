import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Teaching from "@/components/sections/Teaching";
import Experience from "@/components/sections/Experience";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import GithubActivity from "@/components/sections/GithubActivity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Process />
        <Projects />
        <Teaching />
        <Education />
        <Certifications />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
