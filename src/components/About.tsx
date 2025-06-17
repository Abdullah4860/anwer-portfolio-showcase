
import { GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const certifications = [
    {
      name: "Certified ScrumMaster (CSM®)",
      issuer: "Scrum Alliance",
      credentialId: "001691148",
      issued: "Sep 2024"
    },
    {
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy",
      credentialId: "1034423",
      issued: "May 2024"
    },
    {
      name: "Fundamentals of Accelerated Computing with CUDA Python",
      issuer: "NVIDIA",
      credentialId: "554d48803b6a4149969bb40d757d0263",
      issued: "Jul 2023"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      credentialId: "MV4XWG8VWYQE",
      issued: ""
    },
    {
      name: "Intermediate SQL",
      issuer: "DataCamp",
      credentialId: "a3e1454e168429351210a508600786e41acb764c",
      issued: ""
    },
    {
      name: "Introduction to SQL",
      issuer: "DataCamp",
      credentialId: "a1fd6a58e3edd8d72169755adf49fe2e5143574b",
      issued: ""
    },
    {
      name: "Understanding Data Engineering",
      issuer: "DataCamp",
      credentialId: "26532cc5078338b0d81cb64284eaf7e8d94e42f4",
      issued: ""
    }
  ];

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
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.name}</h4>
                    <p className="text-orange-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-1">
                      Credential ID: {cert.credentialId}
                    </p>
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
