import ProductCard from "./ProductCard";
import bikiniCoralTop from "@/assets/products/bikini-coral-top.jpg";
import swimsuitOceanBlue from "@/assets/products/swimsuit-ocean-blue.jpg";
import coverupLinenBeige from "@/assets/products/coverup-linen-beige.jpg";
import shortsSandLight from "@/assets/products/shorts-sand-light.jpg";

const products = [
  {
    id: 1,
    name: "Biquíni Coral Sunset",
    price: "R$ 189,90",
    description: "Top biquíni em tom coral suave, ideal para dias ensolarados na praia. Tecido de secagem rápida.",
    image: bikiniCoralTop,
    rating: 5,
    reviews: 24,
  },
  {
    id: 2,
    name: "Maiô Ocean Blue",
    price: "R$ 249,90",
    description: "Maiô elegante em azul oceano, com corte moderno e confortável. Perfeito para look sofisticado.",
    image: swimsuitOceanBlue,
    rating: 5,
    reviews: 18,
  },
  {
    id: 3,
    name: "Saída de Praia Linho",
    price: "R$ 159,90",
    description: "Saída de praia em linho natural bege, leve e fluida. Versatilidade para praia e cidade.",
    image: coverupLinenBeige,
    rating: 4,
    reviews: 31,
  },
  {
    id: 4,
    name: "Short Casual Areia",
    price: "R$ 129,90",
    description: "Short casual em tom areia, tecido leve e respirável. Conforto para o dia todo.",
    image: shortsSandLight,
    rating: 5,
    reviews: 12,
  },
];

const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
            Nossa Coleção
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra peças únicas que combinam estilo, conforto e elegância 
            para todos os momentos do seu dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Gostou de alguma peça? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511984487394"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral-sunset text-white px-6 py-3 rounded-md hover:bg-coral-sunset/90 transition-smooth font-medium"
            >
              Consultar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/serenoubeach"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ocean-deep text-ocean-deep px-6 py-3 rounded-md hover:bg-ocean-deep hover:text-white transition-smooth font-medium"
            >
              Ver no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;