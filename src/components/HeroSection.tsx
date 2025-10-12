import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach-scene.jpg";

const HeroSection = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById("catalogo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-wider drop-shadow-lg">
            SERENOU
          </h1>

          {}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/95 tracking-wide">
            Moda Praia e Casual
          </h2>

          {}
          <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Peças leves e confortáveis para todas ocasiões
          </p>

          {}
          <div className="pt-8">
            <Button
              onClick={scrollToCatalog}
              size="lg"
              className="bg-white/90 text-ocean-deep hover:bg-white border-0 shadow-elegant px-8 py-6 text-lg font-medium tracking-wide transition-smooth"
            >
              Explorar Coleção
            </Button>
          </div>
        </div>
      </div>

      {}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;