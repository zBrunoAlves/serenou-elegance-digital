import ProductCard from "./ProductCard";
import bikiniCoralTop from "@/assets/products/bikini-coral-top.jpg";
import swimsuitOceanBlue from "@/assets/products/swimsuit-ocean-blue.jpg";
import coverupLinenBeige from "@/assets/products/coverup-linen-beige.jpg";
import shortsSandLight from "@/assets/products/shorts-sand-light.jpg";
import swimsuitBlackElegant from "@/assets/products/swimsuit-black-elegant.jpg";
import bikiniWhiteTropical from "@/assets/products/bikini-white-tropical.jpg";
import dressNavyCover from "@/assets/products/dress-navy-cover.jpg";
import shirtStripedBeach from "@/assets/products/shirt-striped-beach.jpg";
import bikiniMintBottom from "@/assets/products/bikini-mint-bottom.jpg";
import pantsWhiteCasual from "@/assets/products/pants-white-casual.jpg";

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
  {
    id: 5,
    name: "Maiô Black Elegance",
    price: "R$ 279,90",
    description: "Maiô preto clássico com design atemporal. Modelagem que valoriza a silhueta feminina.",
    image: swimsuitBlackElegant,
    rating: 5,
    reviews: 29,
  },
  {
    id: 6,
    name: "Biquíni Tropical White",
    price: "R$ 199,90",
    description: "Biquíni branco com estampa tropical delicada. Peça versátil para todas as ocasiões.",
    image: bikiniWhiteTropical,
    rating: 4,
    reviews: 22,
  },
  {
    id: 7,
    name: "Vestido Navy Cover",
    price: "R$ 179,90",
    description: "Vestido saída de praia em azul marinho, elegante e confortável. Perfeito para pós-praia.",
    image: dressNavyCover,
    rating: 5,
    reviews: 16,
  },
  {
    id: 8,
    name: "Camisa Listrada Beach",
    price: "R$ 139,90",
    description: "Camisa listrada estilo náutico, ideal para looks casuais de praia. Tecido leve e fresco.",
    image: shirtStripedBeach,
    rating: 4,
    reviews: 19,
  },
  {
    id: 9,
    name: "Biquíni Mint Fresh",
    price: "R$ 169,90",
    description: "Calcinha de biquíni em tom mint refrescante. Combina com diversos tops da coleção.",
    image: bikiniMintBottom,
    rating: 5,
    reviews: 15,
  },
  {
    id: 10,
    name: "Calça Casual White",
    price: "R$ 149,90",
    description: "Calça branca casual em tecido fluido. Versatilidade para praia e cidade com muito estilo.",
    image: pantsWhiteCasual,
    rating: 4,
    reviews: 27,
  },
  {
    id: 11,
    name: "Biquíni Coral Clássico",
    price: "R$ 179,90",
    description: "Conjunto completo em coral vibrante. Design clássico com toque moderno e confortável.",
    image: bikiniCoralTop,
    rating: 5,
    reviews: 33,
  },
  {
    id: 12,
    name: "Maiô Ocean Premium",
    price: "R$ 289,90",
    description: "Versão premium do maiô azul oceano com detalhes exclusivos e acabamento superior.",
    image: swimsuitOceanBlue,
    rating: 5,
    reviews: 21,
  },
  {
    id: 13,
    name: "Saída Linho Natural",
    price: "R$ 169,90",
    description: "Peça em linho 100% natural, cor bege neutra. Leveza e sofisticação para o verão.",
    image: coverupLinenBeige,
    rating: 4,
    reviews: 25,
  },
  {
    id: 14,
    name: "Short Areia Premium",
    price: "R$ 139,90",
    description: "Short premium em tom areia com modelagem aprimorada. Conforto e estilo únicos.",
    image: shortsSandLight,
    rating: 5,
    reviews: 18,
  },
  {
    id: 15,
    name: "Maiô Black Edition",
    price: "R$ 299,90",
    description: "Edição especial do maiô preto com detalhes dourados. Luxo e elegância em uma peça.",
    image: swimsuitBlackElegant,
    rating: 5,
    reviews: 14,
  },
  {
    id: 16,
    name: "Biquíni Tropical Print",
    price: "R$ 209,90",
    description: "Estampa tropical exclusiva em base branca. Conjunto completo para looks únicos.",
    image: bikiniWhiteTropical,
    rating: 4,
    reviews: 28,
  },
  {
    id: 17,
    name: "Vestido Navy Luxe",
    price: "R$ 199,90",
    description: "Vestido saída de praia luxe em azul marinho. Tecido nobre e caimento perfeito.",
    image: dressNavyCover,
    rating: 5,
    reviews: 20,
  },
  {
    id: 18,
    name: "Camisa Náutica Strips",
    price: "R$ 159,90",
    description: "Camisa náutica com listras clássicas. Estilo atemporal para looks de verão.",
    image: shirtStripedBeach,
    rating: 4,
    reviews: 23,
  },
  {
    id: 19,
    name: "Biquíni Mint Collection",
    price: "R$ 189,90",
    description: "Peça da coleção mint com modelagem especial. Frescor e modernidade em uma só peça.",
    image: bikiniMintBottom,
    rating: 5,
    reviews: 17,
  },
  {
    id: 20,
    name: "Calça Resort White",
    price: "R$ 169,90",
    description: "Calça resort branca em alfaiataria leve. Elegância casual para todos os momentos.",
    image: pantsWhiteCasual,
    rating: 4,
    reviews: 26,
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