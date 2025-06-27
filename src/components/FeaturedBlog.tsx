
import { ExternalLink, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedBlog = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });
  const { elementRef: cardRef, animationClasses: cardClasses } = useScrollAnimation({ direction: 'up', delay: 300 });

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-orange-400">Blog Post</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={cardRef} className={cardClasses}>
            <Card className="bg-slate-800 border-slate-600 overflow-hidden hover:border-orange-400 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400" 
                  alt="Financial Operations Automation"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <BookOpen size={16} />
                  Blog Post
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  How Automation is Revolutionizing Financial Operations
                </h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  Published on Simpaisa's official blog.
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A deep dive into how automation and data intelligence are transforming reconciliation, 
                  reporting, and financial compliance in fintech companies.
                </p>
                
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3"
                  onClick={() => window.open('https://www.simpaisa.com/blogs/automation-financial-operations', '_blank')}
                >
                  <ExternalLink className="mr-2" size={20} />
                  Read the Blog
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
