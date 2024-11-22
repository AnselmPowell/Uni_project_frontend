'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext.client';
import CartDropdown from './CartDropdown.client';

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartTotals } = useCart();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-tertiary/10 rounded-full transition-colors duration-200"
        aria-label="Shopping cart"
      >
        <ShoppingBag className="h-6 w-6 text-secondary hover:text-primary transition-colors" />
        
        {/* Item Count Badge */}
        {cartTotals.itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-3 bg-[#edb778] text-[#0D1F22] 
                      w-4 h-4 rounded-full flex items-center justify-center
                      text-xs font-bold"
          >
            {cartTotals.itemCount}
          </motion.div>
        )}
      </button>

      {/* Cart Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40"
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 z-50"
            >
              <CartDropdown onClose={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}