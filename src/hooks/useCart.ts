import { useState, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem('serenou-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Persistência
  useEffect(() => {
    localStorage.setItem('serenou-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: { id: number; name: string; price: string; image: string }) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Incrementa baseado no estado atual, não no localStorage
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems(prevItems =>
      prevItems
        .map(item => (item.id === id ? { ...item, quantity } : item))
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotalItems = () =>
    items.reduce((total, item) => total + item.quantity, 0);

  const checkout = () => {
    if (items.length === 0) return;
    const message = encodeURIComponent(
      "Olá, gostaria de comprar:\n" +
      items.map(i => `- ${i.quantity}x ${i.name}`).join("\n")
    );
    window.open(`https://wa.me/5511984487394?text=${message}`, "_blank");
  };

  return { items, addToCart, updateQuantity, removeFromCart, getTotalItems, checkout };
};
