import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { Mail, MapPin, Phone } from "lucide-react";
import Resume from "../assets/Aditya_Kumar-Resume.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/5 dark:bg-background/75"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-in duration-1000">
            Aditya Kumar
          </h1>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-6"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-in duration-1000 delay-200">
            Backend Developer & Full-Stack Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed animate-in duration-1000 delay-300">
            Building scalable backend services and AI-powered applications. 
            Passionate about optimizing performance and creating efficient solutions.
          </p>
          <p className="text-sm md:text-md text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            <Mail className="inline w-5 h-4 mr-1 text-primary" /> <span className="pr-12">ak.adityakumar421@gmail.com</span>    <Phone className="inline w-5 h-4 mr-1 text-primary" /> <span className="pr-12">+91 9336366708</span>  <MapPin className="inline w-5 h-4 mr-1 text-primary" /> Ghaziabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in duration-1000 delay-500">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-md transition-all duration-300 hover:scale-105"
            >
              Get to Know Me
            </Button>
            <a
              href={Resume}
              download
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 inline-flex items-center justify-center px-4 py-2 rounded-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-primary hover:text-primary-hover transition-colors duration-200"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;