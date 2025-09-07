import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/MillennialSoftwaresLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "What We Offer", id: "services" },
    { label: "Why Join Us", id: "why-join" },
    { label: "How to Apply", id: "apply" },
    { label: "Contact", id: "contact" },
  ];

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2">
              {/* Replaced MS cube with the real logo */}
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                    src={logo}
                    alt="Minion Software Logo"
                    className="h-full w-full object-contain"
                    loading="eager"
                    decoding="async"
                />
              </div>
              <span className="text-xl font-bold text-foreground">Minion Software</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {item.label}
                  </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                      <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-left text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {item.label}
                      </button>
                  ))}
                </div>
              </nav>
          )}
        </div>
      </header>
  );
};

export default Header;
