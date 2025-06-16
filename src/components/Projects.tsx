
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      year: "2023",
      description: "Full-stack e-commerce solution built with modern web technologies, featuring user authentication, payment processing, and admin dashboard.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&h=300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Property Price Prediction",
      year: "2022",
      description: "Machine learning model for real estate price prediction using regression algorithms and feature engineering techniques.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&h=300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Segmentation Analytics",
      year: "2022",
      description: "Data mining project using clustering algorithms to identify customer segments for targeted marketing strategies.",
      techStack: ["Python", "KNIME", "Tableau", "SQL", "Clustering"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Disease Diagnosis Clustering",
      year: "2022",
      description: "Healthcare analytics project using unsupervised learning to identify patterns in medical diagnosis data.",
      techStack: ["Python", "KNIME", "Data Mining", "Healthcare Analytics"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&h=300",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-orange-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 overflow-hidden hover:border-orange-400 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-600 text-orange-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
