// src/app/pages/cart/components/QuantityControl.client.jsx
'use client';

import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/app/contexts/CartContext.client';

export default function QuantityControl({ item }) {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center gap-3 bg-background/50 border border-tertiary/20 
                    rounded-full p-1">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => updateQuantity(item, item.quantity - 1)}
        className="p-2 hover:bg-tertiary/10 rounded-full transition-colors"
        disabled={item.quantity <= 1}
      >
        <Minus className={`w-4 h-4 ${
          item.quantity <= 1 ? 'text-tertiary/40' : 'text-tertiary'
        }`} />
      </motion.button>
      
      <motion.span
        key={item.quantity}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-8 text-center font-medium text-primary"
      >
        {item.quantity}
      </motion.span>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => updateQuantity(item, item.quantity + 1)}
        className="p-2 hover:bg-tertiary/10 rounded-full transition-colors"
      >
        <Plus className="w-4 h-4 text-tertiary" />
      </motion.button>
    </div>
  );
}
