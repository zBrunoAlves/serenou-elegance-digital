import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a peça perfeita. 
            Fale conosco através dos nossos canais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-ocean-deep mb-6">
                Fale Conosco
              </h3>
              
              <div className="space-y-6">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-elegant py-6 text-lg"
                >
                  <a
                    href="https://wa.me/5511984487394"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Fale conosco no WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-ocean-deep text-ocean-deep hover:bg-ocean-deep hover:text-white py-6 text-lg shadow-soft"
                >
                  <a
                    href="https://www.instagram.com/serenoubeach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Instagram className="w-6 h-6" />
                    Visite nosso Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Store Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-ocean-deep mb-6">
                Nossa Loja
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-coral-sunset mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Rua Samuel Laurence 177<br />
                      Parque Maria Fernandes<br />
                      São Paulo, Brazil 04858370
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-coral-sunset mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Terça à Sexta: 11:00 às 19:00<br />
                      Sábado: 11:00 às 15:00<br />
                      Domingo e Segunda: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-soft">
          <h4 className="text-xl font-semibold text-ocean-deep mb-3">
            Dúvidas sobre Tamanhos ou Modelos?
          </h4>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para te ajudar a escolher a peça ideal!
          </p>
          <p className="text-sm text-coral-sunset font-medium">
            Consultoria personalizada via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;