import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Trophy } from "lucide-react";
import heroBg from "@/assets/benzona.png";

const Hero = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
              src={heroBg}
              alt="Modern tech workspace"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Minion <span className="text-primary">Software</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              More than just code — a place to learn, share, and grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                  variant="hero"
                  size="lg"
                  onClick={scrollToApply}
                  className="text-lg px-8 py-4"
              >
                Join Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-lg px-8 py-4 border-primary/20 hover:border-primary/40"
              >
                Learn More
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center shadow-card">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-gray-400 font-bold">
                Real-World Experience
              </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center shadow-card">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-gray-400 font-bold">
                Collaborative Growth
              </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center shadow-card">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-gray-400 font-bold">
                Paid Opportunities
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
