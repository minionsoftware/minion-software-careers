import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, ExternalLink, Users, Clock, MapPin } from "lucide-react";
import discordLogo from "../assets/discordlogo.webp";


const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you get started.
            </p>
          </div>

          {/* GRID עם כרטיס אחד שנפרס על כל העמודות */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-8 bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Join our Discord</h3>
                <p className="text-muted-foreground mb-6">
                  Join our community discussions and ask questions
                </p>
                <Button
                    variant="outline"
                    onClick={() => window.open("https://discord.com/invite/AqE4Q9tfAx", "_blank")}
                    className="w-auto inline-flex"
                >
                  Join our discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 border border-border/50 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a complete beginner or an experienced developer looking for
                  new opportunities, we'd love to hear from you. Let's build something amazing
                  together.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                    Response time: Within 48 hours
                  </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Remote-first organization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Part of Apartium Development</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3">
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Do I need prior experience?</p>
                      <p className="text-muted-foreground">
                        No! We welcome developers at all skill levels.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Is this remote work?</p>
                      <p className="text-muted-foreground">
                        Yes, we're a fully remote organization.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">What technologies do you use?</p>
                      <p className="text-muted-foreground">
                        We work with modern web technologies and game development tools.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                    variant="hero"
                    size="lg"
                    className="w-auto inline-flex"
                    onClick={() =>
                        window.open(
                            "https://discord.gg/AqE4Q9tfAx"
                        )
                    }
                >
                  <img
                      src={discordLogo}
                      alt="Discord Logo"
                      className="ml-2 h-5 w-auto"
                  />

                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
