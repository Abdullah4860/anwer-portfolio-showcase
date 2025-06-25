
import { GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });
  const { elementRef: contentRef, animationClasses: contentClasses } = useScrollAnimation({ direction: 'left', delay: 200 });
  const { elementRef: educationRef, animationClasses: educationClasses } = useScrollAnimation({ direction: 'right', delay: 300 });
  const { elementRef: certsHeaderRef, animationClasses: certsHeaderClasses } = useScrollAnimation({ direction: 'up', delay: 400 });

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
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div ref={contentRef} className={contentClasses}>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I help businesses build and scale data-driven products that simplify payments, drive automation, and ensure compliance — especially in fast-moving fintech environments.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With hands-on experience at Simpaisa and Daraz (Alibaba Group), I've worked on launching remittance products, automating lead qualification using AI, and improving decision-making through real-time analytics. From managing global API integrations to implementing PCI DSS and AML-compliance systems, I enjoy solving complex product challenges at the intersection of data, payments, and technology.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My work combines product thinking, process automation, and data intelligence — whether it's reducing manual workflows by 50%, launching a product that captures 10% market share, or enabling fraud detection through Power BI + Python.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I love working with cross-functional teams, asking the right questions, and delivering measurable outcomes that move the business forward.
            </p>
            <Button 
              onClick={handleResumeDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          <div ref={educationRef} className={`space-y-6 ${educationClasses}`}>
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
          <div ref={certsHeaderRef} className={`text-center mb-12 ${certsHeaderClasses}`}>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-orange-400">Certifications</span>
            </h3>
            <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const { elementRef, animationClasses } = useScrollAnimation({ 
                direction: 'up', 
                delay: 100 + (index * 100) 
              });
              
              return (
                <div key={index} ref={elementRef} className={animationClasses}>
                  <Card className="p-6 bg-slate-700 border-slate-600 hover:border-orange-400 transition-all duration-300 h-full">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
