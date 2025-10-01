
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });

  const experiences = [
    {
      company: "Simpaisa",
      role: "Product Owner",
      period: "June 2024 – Present",
      location: "Karachi (Hybrid)",
      description: "As a Product Owner at Simpaisa, I work at the intersection of fintech, data automation, and product development.",
      achievements: [
        "Reduced merchant integration time by 30% by managing global API integrations (Tencent, Temu, Paycenter, etc.)",
        "Built an AML monitoring system using Python + Power BI, improving fraud detection by 45%",
        "Helped expand into Bangladesh, Iraq, and Nepal by adapting products to each country's KYC/AML regulations",
        "Launched a remittance product aligned with SBP incentives, resulting in a 25% increase in transaction volume",
        "Led PCI DSS 4.0 and ISO 27001 implementation to improve platform security and reduce compliance risk by 30%",
        "Automated reconciliation and reporting for finance and support, cutting manual tasks by 50%",
        "Managed pay-in/payout products that improved monthly volume by 6%",
        "Contributed to a new fintech product that gained 10% market share in the first year",
        "Used JIRA and Agile practices to improve delivery speed and sprint coordination",
        "Built data dashboards to support product decisions, improving tracking accuracy by 15%"
      ],
      skills: "Product Management, Fintech, API Integrations, AML/Compliance, Python, Power BI, PCI DSS, Jira, Agile, Remittance"
    },
    {
      company: "Daraz (Alibaba Group)",
      role: "Product Manager",
      period: "May 2023 – March 2024",
      location: "Karachi",
      description: "I worked on digital transformation, automation, and internal product development across 5+ countries.",
      achievements: [
        "Migrated 6,000+ employees to Google Workspace with 0% downtime",
        "Integrated workforce attendance systems to enable performance tracking, saving 40% manual effort",
        "Built an internal IT chatbot that reduced support costs by 30% and improved response time by 50%",
        "Improved regional operational efficiency by 35% by optimizing digital workflows",
        "Managed third-party tech vendors and internal developers to launch automation solutions",
        "Wrote PDDs, handled UAT, and led go-lives for internal RPA and automation tools",
        "Negotiated vendor contracts that resulted in 15% cost savings",
        "Created dashboards for internal teams, cutting manual reporting time by 60%"
      ],
      skills: "Digital Transformation, Automation, RPA, Google Workspace, IT Chatbots, Product Delivery, Dashboards, Vendor Management, Internal Tools"
    },
    {
      company: "HomeEasy",
      role: "Automation Engineer (Contract)",
      period: "Apr 2024 – May 2024",
      location: "Remote/Hybrid",
      description: "Built and managed an AI chatbot for lead qualification targeting the Chicago market.",
      achievements: [
        "Designed a chatbot to qualify leads before handing them to the sales team",
        "Reduced manual lead screening effort by 75%",
        "Helped improve client engagement and automate top-of-funnel outreach"
      ],
      skills: "AI Chatbots, Automation, Lead Qualification, NLP, Python, Sales Funnel Optimization"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-orange-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const { elementRef, animationClasses } = useScrollAnimation({ 
              direction: 'up', 
              delay: 200 + (index * 200) 
            });
            
            return (
              <div key={index} ref={elementRef} className={animationClasses}>
                <Card className="p-8 bg-slate-800 border-slate-700 hover:border-orange-400 transition-all duration-300">
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
                      
                      <p className="text-gray-300 mb-4 italic">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-3 bg-slate-700 rounded-lg">
                        <p className="text-sm text-gray-400 mb-1">Skills:</p>
                        <p className="text-gray-300 text-sm">{exp.skills}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
