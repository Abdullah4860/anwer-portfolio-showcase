
import { Users, Code, BarChart3, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });

  const services = [
    {
      icon: Users,
      title: "Product Ownership & Scrum Coaching",
      description: "Leading cross-functional teams through agile product development, backlog management, and stakeholder alignment to deliver impactful solutions.",
      features: ["Agile Methodology", "Sprint Planning", "Stakeholder Management", "Product Roadmap"]
    },
    {
      icon: Code,
      title: "API Integration & Web Development",
      description: "Building robust web applications and integrating complex APIs to create seamless user experiences and efficient business processes.",
      features: ["RESTful APIs", "Full-Stack Development", "Database Design", "System Integration"]
    },
    {
      icon: BarChart3,
      title: "Data Visualization & Business Insights",
      description: "Transforming raw data into actionable insights through interactive dashboards and comprehensive analytics solutions.",
      features: ["Power BI Dashboards", "Tableau Visualizations", "KPI Tracking", "Performance Analytics"]
    },
    {
      icon: Workflow,
      title: "Agile Workflow Optimization",
      description: "Streamlining development processes and implementing best practices to improve team productivity and product delivery.",
      features: ["Process Automation", "Workflow Design", "Team Coordination", "Continuous Improvement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            Services I <span className="text-orange-400">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const { elementRef, animationClasses } = useScrollAnimation({ 
              direction: 'up', 
              delay: 200 + (index * 150) 
            });
            
            return (
              <div key={index} ref={elementRef} className={animationClasses}>
                <Card className="p-8 bg-slate-700 border-slate-600 hover:border-orange-400 transition-all duration-300 group h-full">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
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

export default Services;
