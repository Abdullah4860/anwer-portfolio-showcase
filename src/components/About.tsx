

import { GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const certifications = [
    {
      name: "Certified ScrumMaster (CSM®)",
      issuer: "Scrum Alliance",
      issued: "Sep 2024"
    },
    {
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy",
      issued: "May 2024"
    },
    {
      name: "Fundamentals of Accelerated Computing with CUDA Python",
      issuer: "NVIDIA",
      issued: "Jul 2023"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      issued: ""
    },
    {
      name: "Intermediate SQL",
      issuer: "DataCamp",
      issued: ""
    },
    {
      name: "Introduction to SQL",
      issuer: "DataCamp",
      issued: ""
    },
    {
      name: "Understanding Data Engineering",
      issuer: "DataCamp",
      issued: ""
    }
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1jpjZM8Fytq7HniDq1ZZzH4dCkVDzldDN', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Product Owner with a Computer Science background from IBA Karachi, 
              currently driving impactful digital product integrations at Simpaisa. I specialize in 
              translating business goals into technical roadmaps through agile methodologies, API 
              integrations, and data-driven decision-making.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With hands-on experience at high-impact companies like Simpaisa, Daraz (Alibaba Group), 
              and integrations with global giants like Tencent, Yango, and Temu, I bridge the gap 
              between stakeholders and developers to deliver high-ROI features on time.
            </p>
            <Button 
              onClick={handleResumeDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
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
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-orange-400">Certifications</span>
            </h3>
            <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-slate-700 border-slate-600 hover:border-orange-400 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 leading-tight break-words">{cert.name}</h4>
                    <p className="text-orange-400 font-medium mb-1">{cert.issuer}</p>
                    {cert.issued && (
                      <p className="text-gray-400 text-sm">
                        Issued {cert.issued}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

