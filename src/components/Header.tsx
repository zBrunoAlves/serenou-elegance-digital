import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cart from "./Cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-ocean-deep tracking-wide">
              SERENOU
            </h1>
          </div>

          {}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-ocean-deep transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("catalogo")}
                className="text-foreground hover:text-ocean-deep transition-smooth"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection("avaliacoes")}
                className="text-foreground hover:text-ocean-deep transition-smooth"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-ocean-deep transition-smooth"
              >
                Contato
              </button>
            </nav>
            <Cart />
          </div>

          {}
          <div className="md:hidden flex items-center space-x-2">
            <Cart />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-ocean-deep transition-smooth py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("catalogo")}
                className="text-left text-foreground hover:text-ocean-deep transition-smooth py-2"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection("avaliacoes")}
                className="text-left text-foreground hover:text-ocean-deep transition-smooth py-2"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-ocean-deep transition-smooth py-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;