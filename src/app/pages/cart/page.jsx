// src/app/pages/cart/page.jsx
'use client';

import { motion } from 'framer-motion';
import CartSteps from './CartSteps.client';
import CartList from './CartList.client';
import CartSummary from './CartSummary.client';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/contexts/CartContext.client';

export default function CartPage() {
  const router = useRouter();
  const { cartTotals } = useCart();

  if (cartTotals.itemCount === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center 
                    bg-background text-primary">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-secondary mb-8">Explore our collections to find the perfect piece.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/pages/furniture')}
          className="px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
                    hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
                    transition-all duration-300 font-medium"
        >
          View Collections
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Steps */}
      <div className="border-b border-tertiary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CartSteps currentStep={1} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <CartList />
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}