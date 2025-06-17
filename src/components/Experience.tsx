
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Simpaisa",
      role: "Product Owner",
      period: "June 2024 – Present",
      location: "Pakistan",
      achievements: [
        "Leading product ownership for critical B2B integrations with global partners: Tencent, Temu, Yango",
        "Rolled out high-impact Remittance and Compliance APIs",
        "Implemented Agile workflows across tech teams, boosting delivery velocity by 40%",
        "Spearheaded successful launches of Mastercard Gateway, Aamarpay, Paycenter, and more"
      ],
      color: "orange"
    },
    {
      company: "Daraz (Alibaba Group)",
      role: "Product Manager",
      period: "May 2023 – Mar 2024",
      location: "Pakistan",
      achievements: [
        "Managed large-scale Google Workspace migrations for 500+ users",
        "Created real-time performance dashboards using BI tools",
        "Reduced operational overhead by 35% through process automation",
        "Collaborated with cross-functional teams across multiple countries"
      ],
      color: "blue"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-orange-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-slate-800 border-slate-700 hover:border-orange-400 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="bg-orange-500 p-4 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-xl text-orange-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
