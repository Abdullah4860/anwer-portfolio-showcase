
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Extracurriculars from "@/components/Extracurriculars";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Extracurriculars />
      <Contact />
    </div>
  );
};

export default Index;
