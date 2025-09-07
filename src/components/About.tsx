import { Card } from "@/components/ui/card";
import { Building2, Target, Users2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Minion Software</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Part of Apartium Development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Organization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Minion Software is a dynamic and growing arm of Apartium Development, 
                    dedicated to helping our sub-projects grow and mature.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border/50 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We create an environment where both new and experienced developers can 
                    thrive, learn, and contribute to meaningful projects while building 
                    their careers in tech.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border/50 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join a collaborative community of passionate developers who believe 
                    in growth, mentorship, and creating innovative solutions together.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-card-gradient p-8 rounded-xl border border-border/50 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why We Exist</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In today's fast-paced tech industry, finding the right balance between 
                learning and practical experience can be challenging. We bridge that gap 
                by offering real-world opportunities in a supportive environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're just starting your development journey or looking to expand 
                your skills, Minion Software provides the platform and community you need 
                to succeed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Active Developers</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;