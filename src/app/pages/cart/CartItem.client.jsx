// src/app/pages/cart/components/CartItem.client.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Pencil, Trash } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext.client';
import QuantityControl from './QuantityControl.client';
import ItemOptions from './ItemOptions.client';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();
  const [isEditingOptions, setIsEditingOptions] = useState(false);

  return (
    <div className="relative bg-background border border-tertiary/20 rounded-xl p-6
                    hover:border-[#edb778]/30 transition-colors duration-300">
      <div className="flex gap-6">
        {/* Image */}
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-primary">{item.name}</h3>
              <p className="text-sm text-tertiary mt-1">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-[#edb778]">
                ${item.finalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-secondary">
            {item.selectedOptions?.color && (
              <div>Color: <span className="text-primary">{item.selectedOptions.color}</span></div>
            )}
            {item.selectedOptions?.material && (
              <div>Material: <span className="text-primary">{item.selectedOptions.material}</span></div>
            )}
            {item.selectedOptions?.size && (
              <div>Size: <span className="text-primary">{item.selectedOptions.size}</span></div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <QuantityControl item={item} />
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsEditingOptions(true)}
                className="p-2 hover:bg-tertiary/10 rounded-full transition-colors"
              >
                <Pencil className="w-5 h-5 text-tertiary hover:text-primary" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeFromCart(item)}
                className="p-2 hover:bg-tertiary/10 rounded-full transition-colors"
              >
                <Trash className="w-5 h-5 text-tertiary hover:text-primary" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Options Modal */}
      <ItemOptions
        isOpen={isEditingOptions}
        onClose={() => setIsEditingOptions(false)}
        item={item}
      />
    </div>
  );
}
