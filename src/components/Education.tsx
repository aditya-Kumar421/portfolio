import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, Users } from "lucide-react";

const Education = () => {
  const education = {
    degree: "B.Tech in Computer Science",
    institution: "Ajay Kumar Garg Engineering College",
    location: "Ghaziabad",
    duration: "2022 – Present",
    cgpa: "8.5",
    status: "Currently Pursuing"
  };

  const certifications = [
    "AWS Cloud Practitioner Essentials",
    "Problem Solving (600+ DSA problems on LeetCode, GFG)",
    "3-star CodeChef (Max Rating: 1610)"
  ];

  const leadership = {
    role: "Co-ordinator & Web Developer",
    organization: "Cloud Computing Cell",
    duration: "Nov 2023 – Present",
    achievements: [
      "Led 42 students in cloud computing initiatives",
      "Improved deployment efficiency by 18%",
      "Organized 8+ tech events and workshops"
    ]
  };

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
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg text-white mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                  <Badge variant="outline" className="border-primary text-primary mt-1">
                    {education.status}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {education.degree}
                  </h4>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-muted-foreground">{education.location}</p>
                  <p className="text-muted-foreground">{education.duration}</p>
                </div>
                
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {education.cgpa}
                    </div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg text-white mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Leadership</h3>
                  <Badge variant="outline" className="border-primary text-primary mt-1">
                    Active Role
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {leadership.role}
                  </h4>
                  <p className="text-primary font-medium">{leadership.organization}</p>
                  <p className="text-muted-foreground">{leadership.duration}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {leadership.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <div className="text-2xl font-bold text-primary">600+</div>
                  <div className="text-xs text-muted-foreground">DSA Problems</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">1610</div>
                  <div className="text-xs text-muted-foreground">CodeChef Rating</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">42</div>
                  <div className="text-xs text-muted-foreground">Students Led</div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">8+</div>
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