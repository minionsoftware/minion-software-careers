import { Card } from "@/components/ui/card";
import { GraduationCap, DollarSign, Users, BookOpen, Zap, Award } from "lucide-react";

const Services = () => {
  const offerings = [
    {
      icon: GraduationCap,
      title: "Internships",
      description: "Real-world experience, mentorship, and skill development",
      features: [
        "Hands-on project experience",
        "One-on-one mentorship",
        "Skill development workshops",
        "Portfolio building opportunities"
      ],
      accent: "text-blue-400"
    },
    {
      icon: DollarSign,
      title: "Paid Positions",
      description: "For skilled game developers to earn through commissions",
      features: [
        "Commission-based earnings",
        "Flexible working hours",
        "Project ownership",
        "Performance bonuses"
      ],
      accent: "text-green-400"
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "A supportive environment for both junior and senior devs",
      features: [
        "Cross-team collaboration",
        "Knowledge sharing sessions",
        "Peer code reviews",
        "Team building activities"
      ],
      accent: "text-primary"
    }
  ];

  const benefits = [
    { icon: BookOpen, title: "Learning Resources", description: "Access to premium courses and materials" },
    { icon: Zap, title: "Cutting-edge Tech", description: "Work with the latest technologies and frameworks" },
    { icon: Award, title: "Recognition", description: "Get recognized for your contributions and achievements" }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Multiple pathways to grow your development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <offering.icon className={`h-8 w-8 ${offering.accent}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{offering.title}</h3>
                <p className="text-muted-foreground mb-6">{offering.description}</p>
                
                <ul className="space-y-3 w-full">
                  {offering.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;