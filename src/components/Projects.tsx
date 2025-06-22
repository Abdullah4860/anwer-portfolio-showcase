import { ExternalLink, Github, FileText, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Data Engineering Project (AWS | ETL | Serverless)",
      year: "2024",
      description: "A complete cloud-native data engineering pipeline built on AWS. This project ingests and transforms trending YouTube video data using services like AWS Lambda, Glue, S3, and Athena. The final dataset is visualized using Amazon QuickSight for actionable insights.",
      techStack: ["AWS S3", "Lambda", "Glue", "Athena", "QuickSight"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/tree/main/youtube-data-engineering",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Property Price Prediction",
      year: "2022",
      description: "Machine learning model for real estate price prediction using regression algorithms and feature engineering.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "Kaggle Competition",
          url: "https://www.kaggle.com/competitions/property-price-predicting",
          icon: Trophy,
          variant: "default"
        }
      ]
    },
    {
      title: "E-commerce Platform",
      year: "2023",
      description: "Full-stack e-commerce solution built with user authentication, payment processing, and admin dashboard.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/TutorSpace/tree/main",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Customer Segmentation Analytics",
      year: "2022",
      description: "Clustering-based data mining project for identifying customer segments and enabling targeted marketing.",
      techStack: ["Python", "KNIME", "Tableau", "SQL", "Clustering"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "Report & Dashboard (PDF)",
          url: "https://drive.google.com/drive/folders/184MqZBJ2qjuSa4IT1UacJDnUBreyu8pl?usp=sharing",
          icon: FileText,
          variant: "default"
        },
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/blob/main/DataCleaning%20Customer%20Segmentation.ipynb",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Disease Diagnosis Clustering",
      year: "2022",
      description: "Healthcare analytics project using unsupervised learning to identify disease diagnosis patterns.",
      techStack: ["Python", "KNIME", "Data Mining", "Healthcare Analytics"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/blob/main/Disease%20Diagnosis.ipynb",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Document Categorization using Term-Frequency and Cosine Similarity",
      year: "2023",
      description: "NLP project that categorizes documents using term-frequency analysis and cosine similarity.",
      techStack: ["Python", "NLP", "Scikit-learn", "Pandas", "Cosine Similarity"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "PDF Report",
          url: "https://drive.google.com/file/d/1wByCk73jcRsYRfnYSL24-3u-w1seK1tR/view?usp=sharing",
          icon: FileText,
          variant: "default"
        },
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/blob/main/Document%20Categorization%20using%20Term-Frequency%20and%20Cosine%20Similarity.ipynb",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Amazon Web Scraping",
      year: "2023",
      description: "Web scraping project extracting product data, prices, and ratings from Amazon using Python.",
      techStack: ["Python", "BeautifulSoup", "Requests", "Pandas", "Web Scraping"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/blob/main/Amazon%20Web%20Scraping.ipynb",
          icon: Github,
          variant: "outline"
        }
      ]
    },
    {
      title: "Automate Crypto API Extraction",
      year: "2023",
      description: "Python automation that extracts and organizes real-time cryptocurrency data from public APIs.",
      techStack: ["Python", "API", "Requests", "Pandas", "Automation"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&h=300",
      buttons: [
        {
          label: "GitHub Code",
          url: "https://github.com/Abdullah4860/Portfolioprojects/blob/main/Automate%20Crypto%20API%20Extraction.ipynb",
          icon: Github,
          variant: "outline"
        }
      ]
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
                
                <div className="flex flex-wrap gap-3">
                  {project.buttons.map((button, buttonIndex) => {
                    const IconComponent = button.icon;
                    return (
                      <Button 
                        key={buttonIndex}
                        size="sm" 
                        variant={button.variant as "default" | "outline"}
                        className={button.variant === "default" 
                          ? "bg-orange-500 hover:bg-orange-600 text-white" 
                          : "border-gray-600 text-gray-300 hover:bg-gray-600"
                        }
                        onClick={() => window.open(button.url, '_blank')}
                      >
                        <IconComponent className="mr-2" size={16} />
                        {button.label}
                      </Button>
                    );
                  })}
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
