
import { createContext, useState, useEffect, useContext, ReactNode, FC } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  selectedSize?: string;
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: {
    id: number;
    name: string;
    price: string;
    images: string[];
    selectedSize?: string;
  }) => void;
  updateQuantity: (id: number, selectedSize: string | undefined, quantity: number) => void;
  removeFromCart: (id: number, selectedSize?: string) => void;
  getTotalItems: () => number;
  checkout: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("serenou-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("serenou-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: {
    id: number;
    name: string;
    price: string;
    images: string[];
    selectedSize?: string;
  }) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (existingIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += 1;
        return updatedItems;
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          selectedSize: product.selectedSize,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id: number, selectedSize: string | undefined, quantity: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number, selectedSize?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.selectedSize === selectedSize)
      )
    );
  };

  const getTotalItems = () =>
    items.reduce((total, item) => total + item.quantity, 0);

  const checkout = () => {
    if (items.length === 0) return;
    const message = encodeURIComponent(
      "Olá, gostaria de comprar:\n" +
        items
          .map(
            (i) =>
              `- ${i.quantity}x ${i.name}${i.selectedSize ? ` (Tamanho: ${i.selectedSize})` : ""
              }`
          )
          .join("\n")
    );
    window.open(`https://wa.me/5511984487394?text=${message}`, "_blank");
  };

  const value = {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
