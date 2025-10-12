import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  sizes?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // tamanho selecionado

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-coral-sunset text-coral-sunset"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-elegant border-border bg-card overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[currentIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />

        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 text-black hover:bg-white"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 text-black hover:bg-white"
            >
              →
            </button>
          </>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-medium text-lg text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex gap-2 mb-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border rounded cursor-pointer ${
                  selectedSize === size
                    ? "bg-coral-sunset text-white border-coral-sunset"
                    : "text-ocean-deep border-ocean-deep"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {}
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {}
        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-semibold text-ocean-deep">
            {product.price}
          </span>
        </div>

        {}
        <Button
          onClick={() => addToCart({ ...product, selectedSize })}
          className="w-full bg-coral-sunset hover:bg-coral-sunset/90 text-white mt-4"
          disabled={!selectedSize}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
