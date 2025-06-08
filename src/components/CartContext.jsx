import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{item, quantity}]

  const updateItem = (item, quantity) => {
    setCart(prev => {
      const exists = prev.find(i => i.item.name === item.name);
      if (exists) {
        if (quantity === 0) {
          return prev.filter(i => i.item.name !== item.name);
        }
        return prev.map(i =>
          i.item.name === item.name ? { ...i, quantity } : i
        );
      } else if (quantity > 0) {
        return [...prev, { item, quantity }];
      }
      return prev;
    });
  };

  const getSubtotal = () => cart.reduce((sum, i) => sum + parseInt(i.item.price.replace(/[^0-9]/g, '')) * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, updateItem, getSubtotal }}>
      {children}
    </CartContext.Provider>
  );
} 