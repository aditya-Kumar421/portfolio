import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Backend Developer Intern",
    company: "HLSR Technologies",
    location: "Remote",
    duration: "June 2024 – Present",
    achievements: [
      "Built scalable backend services for an AI-powered e-learning product",
      "Improved performance by 30% using PostgreSQL optimization and Redis caching",
      "Designed and deployed 15+ REST APIs with JWT Auth; handling 10K+ daily requests",
      "Used PostHog for retention/session analysis"
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "JWT", "PostHog", "REST APIs"]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-2">
                    {experience.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.duration}
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  Current Role
                </Badge>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Key Achievements
                </h5>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-foreground mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Experience Highlight */}
          <Card className="mt-8 bg-gradient-primary text-white">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Performance Impact</h4>
              <p className="text-lg opacity-90">
                Improved system performance by <span className="font-bold">30%</span> and 
                handle <span className="font-bold">10K+ daily requests</span> through optimization
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;