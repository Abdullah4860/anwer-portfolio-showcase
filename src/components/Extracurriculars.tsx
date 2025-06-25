
import { Trophy, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Extracurriculars = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });

  const activities = [
    {
      category: "Leadership & Societies",
      icon: Trophy,
      items: [
        "Executive roles at IBA Marketing Society",
        "Public Speaking Society leadership",
        "Computer Science Society involvement",
        "Event organization and team management"
      ]
    },
    {
      category: "Personal Interests",
      icon: Heart,
      items: [
        "Travel and cultural exploration",
        "Cooking and culinary experiments",
        "Hiking and outdoor adventures",
        "Swimming and fitness activities",
        "Cricket and team sports"
      ]
    }
  ];

  return (
    <section id="extracurriculars" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            Beyond <span className="text-orange-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const { elementRef, animationClasses } = useScrollAnimation({ 
              direction: 'up', 
              delay: 200 + (index * 200) 
            });
            
            return (
              <div key={index} ref={elementRef} className={animationClasses}>
                <Card className="p-8 bg-slate-800 border-slate-700 hover:border-orange-400 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-4 rounded-lg">
                      <activity.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{activity.category}</h3>
                      <ul className="space-y-3">
                        {activity.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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

export default Extracurriculars;
