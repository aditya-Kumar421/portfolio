import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Ajay Kumar Garg Engineering College",
      location: "Ghaziabad",
      duration: "2022 - 2026",
      cgpa: "8.5",
      status: "Currently Pursuing",
      method:"CGPA"
    },
    {
      degree: "Intermediate (XII)",
      institution: "Saraswati Shishu Mandir Inter College",
      location: "Barabanki",
      duration: "2019 - 2021",
      cgpa: "90",
      status: "Passed",
      method: "Percentage"
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner Essentials",
    "Problem Solving (450+ DSA problems on LeetCode, GFG)",
    "3-star CodeChef (Max Rating: 1610)"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg text-white mr-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <Badge variant="outline" className="border-primary text-primary mt-1">
                      {edu.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                    <p className="text-muted-foreground">{edu.duration}</p>
                  </div>
                  
                  <div className="bg-gradient-primary/10 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {edu.cgpa}
                      </div>
                      <div className="text-sm text-muted-foreground">{edu.method}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Certifications & Achievements
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-primary/10 rounded-lg p-6 group-hover:bg-gradient-primary/20 transition-colors duration-200">
                      <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-sm text-foreground font-medium">{cert}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">450+</div>
                  <div className="text-xs text-muted-foreground">DSA Problems</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">1610</div>
                  <div className="text-xs text-muted-foreground">CodeChef Rating</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">27</div>
                  <div className="text-xs text-muted-foreground">Students Led</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Events Organized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;