'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext.client';

const CartContext = createContext(null);

// Cart reducer for state management
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(
        item => 
          item.id === action.payload.id && 
          JSON.stringify(item.selectedOptions) === JSON.stringify(action.payload.selectedOptions)
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item === existingItem
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => !(
          item.id === action.payload.id && 
          JSON.stringify(item.selectedOptions) === JSON.stringify(action.payload.selectedOptions)
        )),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id &&
          JSON.stringify(item.selectedOptions) === JSON.stringify(action.payload.selectedOptions)
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from localStorage on mount and when user changes
  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem(
        user ? `cart_${user.id}` : 'cart_guest'
      );
      if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
      }
    };

    loadCart();
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      user ? `cart_${user.id}` : 'cart_guest',
      JSON.stringify(state.items)
    );
  }, [state.items, user]);

  // Calculate totals
  const cartTotals = {
    itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
    total: state.items.reduce(
      (sum, item) => sum + (item.finalPrice * item.quantity), 
      0
    ),
  };

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (item, quantity) => {
    if (quantity < 1) {
      removeFromCart(item);
      return;
    }
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { ...item, quantity } 
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      cart: state.items,
      cartTotals,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};