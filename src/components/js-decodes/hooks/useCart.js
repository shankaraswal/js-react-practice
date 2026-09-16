// hooks/useCart.js
import { useContext } from 'react';
import { CartContext } from '../react-comps/context-provider/CartContext';

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return ctx;
}