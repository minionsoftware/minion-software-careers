import {Mail, Github, ExternalLink, Phone} from "lucide-react";
import logo from "../assets/MillennialSoftwaresLogo.png";


const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                    src={logo}
                    alt="Minion Software Logo"
                    className="h-full w-full object-contain"
                    loading="eager"
                    decoding="async"
                />
              </div>
              <span className="text-lg font-bold text-foreground">Minion Software</span>
            </div>
            <p className="text-sm text-muted-foreground">
              More than just code — a place to learn, share, and grow.
            </p>
            <p className="text-xs text-muted-foreground">
              Part of Apartium Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "What We Offer", id: "services" },
                { label: "Why Join Us", id: "why-join" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("apply")}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  How to Apply
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="https://discord.gg/AqE4Q9tfAx"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  Send Application
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://discord.gg/AqE4Q9tfAx" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="h-4 w-4" />
                Join our Discord
              </a>
              <a
                href="https://github.com/PoweredByApartium" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="h-4 w-4" />
                GitHub Organization
              </a>
              <a
                href="https://apartium.net/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <ExternalLink className="h-4 w-4" />
                Apartium Development
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Minion Software. Part of Apartium Development. All rights reserved.
            <br />
            Designed by{" "}
            <a
                href="https://elays.design"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Elay Sasy
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;