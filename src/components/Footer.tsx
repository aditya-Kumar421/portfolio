import { Github, Linkedin, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/ak-aditya",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ak-aditya",
      label: "GitHub"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      href: "https://leetcode.com/ak-aditya",
      label: "LeetCode"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
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

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Aditya Kumar. Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
              and lots of ☕
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with React, Tailwind CSS, and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;