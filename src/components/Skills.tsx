import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Settings, 
  Users,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "C/C++","SQL"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS","React.js", "Redux", "Tailwind CSS"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Django","FastAPI","Node.js","Express.js","RESTful APIs"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Vector Database"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      title: "DevOps & CI/CD",
      icon: <Target className="w-6 h-6" />,
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD Pipeline", "Google Cloud Platform"],
      color: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git/GitHub","OpenAI API", "PostHog", "Postman", "Gemini API"],
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
    }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "450+ DSA problems solved"
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-5 h-5" />,
      description: "Working with Cloud Computing Cell"
    },
    {
      title: "Time Management",
      icon: <Clock className="w-5 h-5" />,
      description: "Thriving in both academic and career"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive skill set covering full-stack development, with a focus on backend technologies and system optimization.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;