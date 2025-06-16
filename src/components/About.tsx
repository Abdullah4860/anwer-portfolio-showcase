
import { GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Product Owner with a Computer Science background from IBA Karachi, 
              specializing in bridging the gap between business requirements and technical solutions. 
              My expertise spans across product ownership, agile practices, data visualization, 
              and full-stack development.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With hands-on experience at leading companies like Simpaisa and Daraz (Alibaba Group), 
              I focus on delivering data-driven solutions that create real business impact through 
              agile methodologies and user-centered design.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-slate-700 border-slate-600">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-300">
                    Bachelor's in Computer Science<br />
                    IBA, Karachi (2024) • GPA: 3.48<br />
                    Dean's List & Merit Scholar
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-700 border-slate-600">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
                  <p className="text-gray-300">
                    • Certified ScrumMaster (CSM®)<br />
                    • Microsoft Power Platform Fundamentals (PL-900)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
