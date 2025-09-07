import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Github, Mail, User, FileText, Clock } from "lucide-react";

const Apply = () => {
  const steps = [
    {
      icon: Github,
      title: "Share Your Work",
      description: "Send your GitHub profile or portfolio link to showcase your coding skills and projects.",
      color: "text-purple-400"
    },
    {
      icon: FileText,
      title: "Write Your Introduction",
      description: "Tell us why you want to join, what you're currently learning, and what excites you about development.",
      color: "text-blue-400"
    },
    {
      icon: Send,
      title: "Send Your Application",
      description: "Email everything to lior@apartium.net and we'll get back to you within 48 hours.",
      color: "text-primary"
    }
  ];

  const tips = [
    "Include your best 2-3 projects in your portfolio",
    "Be authentic about your current skill level",
    "Show us what you're passionate about learning",
    "Mention any collaborative projects or open source contributions"
  ];

  return (
    <section id="apply" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to <span className="text-primary">Apply</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your journey with us? Here's how to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div className="text-lg font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-card-gradient border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Application Tips</h3>
            </div>
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-card-gradient border-border/50 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email Address</h4>
                <p className="text-primary font-medium text-lg">lior@apartium.net</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">What to Include</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GitHub or portfolio link</li>
                  <li>• Short introduction about yourself</li>
                  <li>• Why you want to join us</li>
                  <li>• What you're currently learning</li>
                  <li>• What excites you about development</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>We respond within 48 hours</span>
              </div>

              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('mailto:lior@apartium.net?subject=Application to Minion Software', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Application
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Apply;