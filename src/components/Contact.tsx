
import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation({ direction: 'up', delay: 100 });
  const { elementRef: contactInfoRef, animationClasses: contactInfoClasses } = useScrollAnimation({ direction: 'left', delay: 200 });
  const { elementRef: formRef, animationClasses: formClasses } = useScrollAnimation({ direction: 'right', delay: 300 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullahanwer308@gmail.com",
      href: "mailto:abdullahanwer308@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (267) 301-4768",
      href: "tel:+12673014768"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abdullah-anwer",
      href: "https://linkedin.com/in/abdullah-anwer-91a014192"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-orange-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={contactInfoRef} className={`space-y-6 ${contactInfoClasses}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-slate-700 border-slate-600 hover:border-orange-400 transition-all duration-300">
                <a 
                  href={info.href}
                  className="flex items-center space-x-4 group"
                  target={info.label === "LinkedIn" ? "_blank" : undefined}
                  rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                >
                  <div className="bg-orange-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-orange-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div ref={formRef} className={formClasses}>
            <Card className="p-8 bg-slate-700 border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400 focus:border-orange-400 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="border-t border-slate-600 pt-8">
            <p className="text-gray-400">
              © 2025 Abdullah Anwer. Built with passion and React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
