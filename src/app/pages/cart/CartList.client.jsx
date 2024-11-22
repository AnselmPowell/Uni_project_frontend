// src/app/pages/cart/CartList.client.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/contexts/CartContext.client';
import CartItem from './CartItem.client';

export default function CartList() {
  const { cart } = useCart();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-primary">Shopping Cart</h2>
      
      <div className="space-y-4">
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              key={`${item.id}-${JSON.stringify(item.selectedOptions)}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <CartItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
