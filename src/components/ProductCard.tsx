import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          <span className="text-sm text-muted-foreground">
            Consulte disponibilidade
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;