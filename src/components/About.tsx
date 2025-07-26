import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                <img
                  src={profileImage}
                  alt="Aditya Kumar - Profile"
                  className="relative w-80 h-80 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Hello! I'm Aditya
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      I'm a passionate Backend Developer and Computer Science student at 
                      Ajay Kumar Garg Engineering College with a strong focus on building 
                      scalable and efficient systems.
                    </p>
                    <p className="leading-relaxed">
                      Currently working as a Backend Developer Intern at HLSR Technologies, 
                      where I've built scalable backend services for AI-powered e-learning 
                      products and improved performance by 30% through PostgreSQL optimization 
                      and Redis caching.
                    </p>
                    <p className="leading-relaxed">
                      With expertise in JavaScript, Python, React.js, Node.js, and various 
                      databases, I enjoy solving complex problems and creating innovative 
                      solutions. I've solved 600+ DSA problems and maintain a 3-star rating 
                      on CodeChef.
                    </p>
                    <p className="leading-relaxed">
                      When I'm not coding, I'm leading tech events as a Co-ordinator at the 
                      Cloud Computing Cell, helping fellow students grow their technical skills.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">600+</div>
                    <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">8.5</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;