// src/app/pages/cart/CartSummary.client.jsx
'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/app/contexts/CartContext.client';
import { useRouter } from 'next/navigation';

export default function CartSummary() {
  const { cartTotals } = useCart();
  const router = useRouter();
  
  const shippingCost = cartTotals.total >= 10000 ? 0 : 500; // Free shipping over $10,000
  const tax = cartTotals.total * 0.08; // 8% tax
  const finalTotal = cartTotals.total + shippingCost + tax;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background border border-tertiary/20 rounded-xl p-6 
                sticky top-24"
    >
      <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-secondary">
          <span>Subtotal</span>
          <span>${cartTotals.total.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-secondary">
          <span>Shipping</span>
          <span>
            {shippingCost === 0 ? (
              <span className="text-[#edb778]">FREE</span>
            ) : (
              `$${shippingCost.toLocaleString()}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-secondary">
          <span>Estimated Tax</span>
          <span>${tax.toLocaleString()}</span>
        </div>

        <div className="border-t border-tertiary/20 pt-4">
          <div className="flex justify-between text-primary">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">
              ${finalTotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {cartTotals.total >= 10000 && (
        <div className="mt-4 p-3 rounded-lg bg-[#edb778]/10 text-[#edb778] text-sm">
          🌟 Free shipping on orders over $10,000
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push('/pages/cart/summary')}
        className="w-full mt-6 py-4 bg-[#edb778] text-[#0D1F22] rounded-xl
                  font-bold hover:shadow-[0_0_20px_rgba(237,183,120,0.3)]
                  transition-shadow duration-300"
      >
        Continue to Summary
      </motion.button>

      <p className="text-xs text-tertiary text-center mt-4">
        Taxes and shipping calculated at checkout
      </p>
    </motion.div>
  );
}
