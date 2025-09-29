import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
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

  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-elegant border-border bg-card overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
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

        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-semibold text-ocean-deep">
            {product.price}
          </span>
        </div>

        <Button 
          onClick={() => addToCart(product)}
          className="w-full bg-coral-sunset hover:bg-coral-sunset/90 text-white mt-4"
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;