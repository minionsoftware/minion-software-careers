import { Card } from "@/components/ui/card";
import { Rocket, Users2, Lightbulb, TrendingUp, Globe, Heart } from "lucide-react";

const WhyJoin = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Advanced Development Processes",
      description: "Work with cutting-edge methodologies and industry best practices that will accelerate your growth as a developer.",
      highlight: "Industry-leading practices"
    },
    {
      icon: Users2,
      title: "Collaborate with Top-tier Developers",
      description: "Learn directly from experienced professionals who are passionate about sharing knowledge and mentoring the next generation.",
      highlight: "Expert mentorship"
    },
    {
      icon: Lightbulb,
      title: "Learning Culture with Experimentation",
      description: "Embrace a culture that encourages innovation, creativity, and trying new approaches without fear of failure.",
      highlight: "Innovation-first mindset"
    },
    {
      icon: TrendingUp,
      title: "Career Growth Opportunities",
      description: "Clear pathways for advancement with regular feedback, skill assessments, and opportunities to take on leadership roles.",
      highlight: "Clear advancement paths"
    },
    {
      icon: Globe,
      title: "Diverse Project Portfolio",
      description: "Work on a variety of projects across different industries and technologies, broadening your experience and expertise.",
      highlight: "Varied experience"
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Join a tight-knit community where everyone supports each other's success and celebrates achievements together.",
      highlight: "Inclusive environment"
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Join <span className="text-primary">Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover what makes Minion Software the perfect place to grow your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-smooth group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card-gradient rounded-2xl p-8 md:p-12 border border-border/50 shadow-elegant">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Take the Next Step?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join a community of passionate developers who are building the future of software development. 
              Your journey towards becoming an exceptional developer starts here.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">6 Months</div>
                <div className="text-sm text-muted-foreground">Average Skill Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;