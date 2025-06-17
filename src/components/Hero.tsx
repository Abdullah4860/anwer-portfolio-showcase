
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  The Product Mindset: Abdullah Anwer's Journey in Tech & Data
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                Product Owner | Data-Driven Innovator | API Integration Specialist
              </div>
              <p className="text-lg text-gray-400 max-w-2xl">
                Bridging business and technology through agile delivery, data insights, 
                and user-centric product development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/q7HN32tV/1737576156275.jpg" 
                    alt="Abdullah Anwer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xs">CSM®</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("#about")}
          className="text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
