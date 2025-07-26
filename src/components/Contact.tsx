import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code2, 
  Send,
  MapPin 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ak.adityakumar4211@gmail.com",
      href: "mailto:ak.adityakumar4211@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9336366708",
      href: "tel:+919336366708"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ak-aditya"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ak-aditya"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/ak-aditya"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gradient-primary/10 p-3 rounded-lg text-primary group-hover:bg-gradient-primary group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      {link.icon}
                      <span className="ml-2 hidden sm:inline">{link.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
                <p className="opacity-90">
                  Whether you have a project in mind, need technical consultation, or just want to connect, 
                  I'd love to hear from you. Let's turn your ideas into reality!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or how I can help..."
                    required
                    rows={5}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-200 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;