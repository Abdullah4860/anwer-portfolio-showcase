
import { Code, Database, BarChart, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "SQL", "HTML/CSS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cog,
      title: "Tools & Technologies",
      skills: ["Node.js", "React", "MongoDB", "Express.js", "Git"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart,
      title: "Data & Analytics",
      skills: ["Power BI", "Tableau", "KNIME", "Data Mining", "Statistics"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Core Concepts",
      skills: ["OOP", "Data Structures", "Algorithms", "Web Development", "API Design"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-orange-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-slate-800 border-slate-700 hover:border-orange-400 transition-all duration-300 group">
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-slate-700 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-slate-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
