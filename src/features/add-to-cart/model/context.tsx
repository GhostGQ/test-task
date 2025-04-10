// features/cart/context.tsx
'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';
import {Product} from '@/shared/types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: Record<string, CartItem>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  getProductQuantity: (productId: string) => number;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cartItems, setCartItems] = useState<Record<string, CartItem>>({});

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (err) {
        console.error('Ошибка при загрузке корзины:', err);
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const existing = prev[productId];
      if (!existing) return prev;

      const newQuantity = existing.quantity - 1;
      if (newQuantity <= 0) {
        const {[productId]: _, ...rest} = prev;
        return rest;
      }

      return {
        ...prev,
        [productId]: {
          ...existing,
          quantity: newQuantity,
        },
      };
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [addToCart, removeFromCart]);

  const getProductQuantity = (productId: string) => {
    return cartItems[productId]?.quantity || 0;
  };

  const totalPrice = useMemo(() => {
    return Object.values(cartItems).reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return Object.values(cartItems).reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getProductQuantity,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
