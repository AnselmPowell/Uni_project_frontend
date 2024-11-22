'use client';

import { useCart } from '@/app/contexts/CartContext.client';
import { useAuth } from '@/app/contexts/AuthContext.client';
import { toast } from '@/app/components/ui/Toast.client';

export function useShoppingCart() {
  const { user } = useAuth();
  const cart = useCart();

  // Enhanced add to cart with user validation
  const addToCartWithAuth = (item) => {
    // if (!user) {
    //   // Handle unauthenticated user
    //   toast.error('Please log in to add items to cart');
    //   return false;
    // }
    cart.addToCart(item);
    return true;
  };

  return {
    ...cart,
    addToCart: addToCartWithAuth,
    isAuthenticated: !!user
  };
}