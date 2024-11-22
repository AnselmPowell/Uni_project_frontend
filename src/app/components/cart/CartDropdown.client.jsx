'use client';

import { useCart } from '@/app/contexts/CartContext.client';
import { motion } from 'framer-motion';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartDropdown({ onClose }) {
  const { cart, cartTotals, updateQuantity, removeFromCart } = useCart();
  const router = useRouter(); 

  if (cart.length === 0) {
    return (
      <div className="w-96 bg-background border border-tertiary/20 rounded-xl shadow-xl p-6">
        <div className="text-center text-secondary py-8">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 bg-background border border-tertiary/20 rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-tertiary/20">
        <h3 className="ml-4 text-lg font-semibold text-primary">Shopping Cart</h3>
      </div>

      {/* Cart Items */}
      <div className="max-h-96 overflow-y-auto">
        {cart.map((item) => (
          <motion.div
            key={`${item.id}-${JSON.stringify(item.selectedOptions)}`}
            layout
            className="flex items-center gap-4 p-4 border-b border-tertiary/10"
          >
            {/* Product Image */}
            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h4 className="text-primary font-medium">{item.name}</h4>
              
              {/* Selected Options */}
              <div className="text-xs text-tertiary mt-1">
                {item.selectedOptions?.color && (
                  <span>Color: {item.selectedOptions.color}</span>
                )}
                {item.selectedOptions?.material && (
                  <span> • Material: {item.selectedOptions.material}</span>
                )}
                {item.selectedOptions?.size && (
                  <span> • Size: {item.selectedOptions.size}</span>
                )}
              </div>

              {/* Price */}
              <div className="text-sm font-medium text-primary mt-1">
                ${item.finalPrice.toLocaleString()}
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item, item.quantity - 1)}
                className="p-1 hover:bg-tertiary/10 rounded-full transition-colors"
              >
                <Minus className="h-4 w-4 text-tertiary" />
              </button>
              
              <span className="w-8 text-center text-secondary">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item, item.quantity + 1)}
                className="p-1 hover:bg-tertiary/10 rounded-full transition-colors"
              >
                <Plus className="h-4 w-4 text-tertiary" />
              </button>

              <button
                onClick={() => removeFromCart(item)}
                className="p-1 hover:bg-tertiary/10 rounded-full transition-colors ml-2"
              >
                <X className="h-4 w-4 text-tertiary" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-tertiary/20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-secondary">Total</span>
          <span className="text-lg font-bold text-primary">
            ${cartTotals.total.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => router.push('/pages/cart')}
          className="w-full py-3 bg-[#edb778] text-[#0D1F22] rounded-lg
                    font-medium hover:shadow-[0_0_20px_rgba(237,183,120,0.3)]
                    transition-shadow duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}