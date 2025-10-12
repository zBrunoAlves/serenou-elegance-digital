import ProductCard from "./ProductCard";
import conjuntoRoma from "@/assets/products/conjuntoRoma.jpg";
import conjuntoRoma2 from "@/assets/products/conjuntoRoma2.jpg";
import conjuntoRoma3 from "@/assets/products/conjuntoRoma3.jpg";
import conjuntoRoma4 from "@/assets/products/conjuntoRoma4.jpg";
import vestidoMaresias from "@/assets/products/vestidoMaresias.jpg";
import vestidoMaresias2 from "@/assets/products/vestidoMaresias2.jpg";
import vestidoMaresias3 from "@/assets/products/vestidoMaresias3.jpg";
import vestidoMaresias4 from "@/assets/products/vestidoMaresias4.jpg";
import vestidoMaresias5 from "@/assets/products/vestidoMaresias5.jpg";
import conjuntoMari from "@/assets/products/conjuntoMari.jpg"
import conjuntoMari2 from "@/assets/products/conjuntoMari2.jpg"
import conjuntoMari3 from "@/assets/products/conjuntoMari3.jpg"
import conjuntoMari4 from "@/assets/products/conjuntoMari4.jpg"
import conjuntoMari5 from "@/assets/products/conjuntoMari5.jpg"
import conjuntoBuzios from "@/assets/products/conjuntoBuzios.jpg"
import macacaoCamburi from "@/assets/products/macacaoCamburi.jpg"
import macacaoCamburi2 from "@/assets/products/macacaoCamburi2.jpg"
import conjuntoThay from "@/assets/products/conjuntoThay.jpg"
import conjuntoThay2 from "@/assets/products/conjuntoThay2.jpg"
import conjuntoThay3 from "@/assets/products/conjuntoThay3.jpg"
import conjuntoThay4 from "@/assets/products/conjuntoThay4.jpg"

const products = [
  {
    id: 1,
    name: "Conjunto Roma",
    price: "R$ 139,00",
    description:
      "Em corte de alfaiataria com shorts-saia e detalhes de botões elegantes, disponível nas cores preto, off white, nude e rosa delicado.(Para adicionar ao carrinho, selecione o tamanho desejado e finalize a escolha corretamente.)",
    images: [conjuntoRoma, conjuntoRoma2, conjuntoRoma3, conjuntoRoma4],
    rating: 5,
    reviews: 24,
    sizes: ["M", "G"],
  },
  {
    id: 2,
    name: "Vestido Maresias",
    price: "R$ 139,00",
    description:
      "No tecido de algodão, alça com regulagem e elástico nas costas para maior conforto, com amarração frontal que faz toda a diferença.\n\n(Para adicionar ao carrinho, selecione o tamanho desejado antes de finalizar a compra.)",
    images: [vestidoMaresias, vestidoMaresias2, vestidoMaresias3, vestidoMaresias4, vestidoMaresias5],
    rating: 5,
    reviews: 18,
    sizes: ["M", "G", "GG"],
  },
  {
    id: 3,
    name: "Conjunto Mari",
    price: "R$ 129,00",
    description:
      "Leve e elegante, modelo frente única com amarração no pescoço, o shorts é shorts-saia, tornando a peça ainda mais única, com elástico na cintura para maior conforto.\n\n(Para adicionar ao carrinho, selecione o tamanho antes.)",
    images: [conjuntoMari, conjuntoMari2, conjuntoMari3, conjuntoMari4, conjuntoMari5],
    rating: 4,
    reviews: 31,
    sizes: ["M", "G"],
  },
  {
    id: 4,
    name: "Short Casual Areia",
    price: "R$ 89,00",
    description:
      "Ou melhor dizendo, o trijunto Búzios acompanha a parte de cima, a de baixo e ainda inclui uma saia de tule, deixando seu look muito mais elegante.\n\n(Para adicionar ao carrinho, selecione o tamanho corretamente antes.)",
    images: [conjuntoBuzios],
    rating: 5,
    reviews: 12,
    sizes: ["P", "M", "G"],
  },
  {
    id: 5,
    name: "Maiô Black Elegance",
    price: "R$ 139,99",
    description:
      "No jeans leve de viscose azul, com caimento perfeito e confortável. Peça indispensável na mala de viagem, perfeita para qualquer ocasião casual ou especial.\n\n(Para adicionar ao carrinho, selecione o tamanho desejado antes de finalizar.)",
    images: [macacaoCamburi, macacaoCamburi2],
    rating: 5,
    reviews: 29,
    sizes: ["M", "G", "GG"],
  },
  {
    id: 6,
    name: "Conjunto Thay",
    price: "R$ 139,99",
    description:
      "Nosso lançamento da semana inclui calça pantalona e cropped com amarração cruzada, deixando seu look mais único, disponível em três cores para arrasar.\n\n(Para adicionar ao carrinho, selecione o tamanho desejado corretamente.)",
    images: [conjuntoThay, conjuntoThay2, conjuntoThay3, conjuntoThay4],
    rating: 4,
    reviews: 22,
    sizes: ["M", "G", "GG"],
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
            Descubra peças únicas que combinam estilo, conforto e elegância para
            todos os momentos do seu dia
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
