import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Bot, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Code Reviewer",
      description: "Automated code analysis tool that provides intelligent feedback and suggestions for code improvements, helping developers write better, more efficient code.",
      icon: <Bot className="w-6 h-6" />,
      technologies: ["Node.js", "React.js", "MongoDB", "OpenAI API"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: [
        "Automated code quality analysis",
        "AI-powered suggestions",
        "Multi-language support"
      ]
    },
    {
      title: "GenieSite",
      description: "AI-based webpage generator that creates responsive websites from simple descriptions, leveraging machine learning to understand design requirements.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Django", "REST API", "PostgreSQL", "Redis", "AI/ML"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: [
        "AI-powered website generation",
        "Responsive design automation",
        "Fast deployment pipeline"
      ]
    },
    {
      title: "eCommerce Web App",
      description: "Full-featured eCommerce platform with modern UI, secure authentication, real-time inventory management, and seamless checkout experience.",
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: [
        "Real-time inventory tracking",
        "Secure payment integration",
        "Advanced search & filtering"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating expertise in full-stack development, AI integration, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-primary p-3 rounded-lg text-white">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-accent"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-accent"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/ak-aditya', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;