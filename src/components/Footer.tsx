import { MessageCircle, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">SERENOU</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Moda Praia e Casual<br />
              Peças leves e confortáveis para todas ocasiões
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/5511984487394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/serenoubeach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-smooth"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("avaliacoes")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-white/80">WhatsApp: (11) 98448-7394</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Instagram className="w-4 h-4" />
                <span className="text-white/80">@serenoubeach</span>
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Rua Samuel Laurence 177<br />
                  Parque Maria Fernandes<br />
                  São Paulo, Brazil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} SERENOU. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Moda Praia e Casual - São Paulo, Brazil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;