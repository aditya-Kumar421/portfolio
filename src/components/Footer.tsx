import { Github, Linkedin, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/aditya-kumar421/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/aditya-kumar421",
      label: "GitHub"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      href: "https://leetcode.com/u/aditya-Kumar421/",
      label: "LeetCode"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-4 pt-8 pb-1">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Aditya Kumar
            </button>
            <p className="text-muted-foreground mt-2">
              Backend Developer & Full-Stack Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                onClick={() => window.open(link.href, '_blank')}
                aria-label={link.label}
              >
                {link.icon}
              </Button>
            ))}
          </div>

          

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;