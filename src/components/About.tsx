import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/adi_new_dp_hd.jpeg";

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
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Hi, I'm Aditya
                  </h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p className="leading-relaxed">
                      — a passionate developer who loves turning complex ideas into elegant digital solutions.
                    </p>
                    <p className="leading-relaxed">
                      Detail-oriented and impact-driven, I bring hands-on experience across frontend and backend, enabling me to craft scalable, seamless products from end to end. I thrive in collaborative environments, value clean architecture, and never stop learning. My goal is simple: build user-focused software that's not just functional, but future-ready.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;