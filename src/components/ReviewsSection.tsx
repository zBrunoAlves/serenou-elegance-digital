import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Ana Carolina",
    rating: 5,
    comment: "Apaixonada pelas peças! A qualidade é incrível e o tecido é super confortável. Já comprei 3 biquínis e pretendo comprar mais!",
    product: "Biquíni Coral Sunset",
  },
  {
    id: 2,
    name: "Marina Silva",
    rating: 5,
    comment: "O maiô Ocean Blue é simplesmente perfeito! Modelo super elegante e o caimento é maravilhoso. Recomendo demais!",
    product: "Maiô Ocean Blue",
  },
  {
    id: 3,
    name: "Beatriz Santos",
    rating: 4,
    comment: "A saída de praia em linho é linda e versatil. Uso tanto na praia quanto para sair. Qualidade excelente!",
    product: "Saída de Praia Linho",
  },
  {
    id: 4,
    name: "Juliana Costa",
    rating: 5,
    comment: "Atendimento excepcional e produtos de alta qualidade. A SERENOU se tornou minha marca favorita de moda praia!",
    product: "Coleção Geral",
  },
];

const ReviewsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "fill-coral-sunset text-coral-sunset"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
            O que dizem nossas clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem já escolheu a SERENOU para seus momentos especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-border bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground mb-1">
                    {review.name}
                  </p>
                  <p className="text-sm text-coral-sunset">
                    {review.product}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer compartilhar sua experiência? Nos marque no Instagram!
          </p>
          <a
            href="https://www.instagram.com/serenoubeach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-ocean text-white px-8 py-3 rounded-md hover:opacity-90 transition-smooth font-medium shadow-elegant"
          >
            @serenoubeach
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;