
// src/app/pages/cart/components/ItemOptions.client.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '@/app/contexts/CartContext.client';
import Image from 'next/image';

export default function ItemOptions({ isOpen, onClose, item }) {
  const { updateItemOptions } = useCart();
  const [selectedOptions, setSelectedOptions] = useState(item.selectedOptions || {});
  const [originalPrice] = useState(item.basePrice || item.finalPrice);

  const calculateNewPrice = (options) => {
    let newPrice = originalPrice;
    
    if (item.options?.colors) {
      const colorOption = item.options.colors.find(c => c.id === options.color);
      newPrice += colorOption?.priceModifier || 0;
    }
    if (item.options?.materials) {
      const materialOption = item.options.materials.find(m => m.id === options.material);
      newPrice += materialOption?.priceModifier || 0;
    }
    if (item.options?.sizes) {
      const sizeOption = item.options.sizes.find(s => s.id === options.size);
      newPrice += sizeOption?.priceModifier || 0;
    }
    
    return newPrice;
  };

  const handleSave = () => {
    const updatedItem = {
      ...item,
      selectedOptions,
      finalPrice: calculateNewPrice(selectedOptions)
    };
    updateItemOptions(item, updatedItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-background border border-tertiary/20 
                  rounded-2xl shadow-2xl overflow-hidden z-50"
      >
        {/* Header */}
        <div className="p-6 border-b border-tertiary/20">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary">Edit Options</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-tertiary/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-tertiary" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Preview */}
          <div className="flex gap-6">
            <div className="relative w-32 h-32 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium text-primary">{item.name}</h4>
              <p className="text-sm text-tertiary mt-1">{item.description}</p>
              <p className="text-lg font-bold text-[#edb778] mt-4">
                ${calculateNewPrice(selectedOptions).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-6">
            {item.options?.colors && (
              <div className="space-y-3">
                <h4 className="text-sm text-tertiary uppercase tracking-wider">Color</h4>
                <div className="grid grid-cols-2 gap-3">
                  {item.options.colors.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOptions(prev => ({
                        ...prev,
                        color: option.id
                      }))}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        selectedOptions.color === option.id
                          ? 'bg-[#edb778] text-[#0D1F22]'
                          : 'bg-background border border-tertiary/20 text-primary hover:border-[#edb778]/30'
                      }`}
                    >
                      <div className="flex flex-col items-start gap-1">
                        <span>{option.name}</span>
                        {option.priceModifier > 0 && (
                          <span className="text-xs opacity-80">
                            +${option.priceModifier.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {item.options?.materials && (
              <div className="space-y-3">
                <h4 className="text-sm text-tertiary uppercase tracking-wider">Material</h4>
                <div className="grid grid-cols-2 gap-3">
                  {item.options.materials.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOptions(prev => ({
                        ...prev,
                        material: option.id
                      }))}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        selectedOptions.material === option.id
                          ? 'bg-[#edb778] text-[#0D1F22]'
                          : 'bg-background border border-tertiary/20 text-primary hover:border-[#edb778]/30'
                      }`}
                    >
                      <div className="flex flex-col items-start gap-1">
                        <span>{option.name}</span>
                        {option.priceModifier > 0 && (
                          <span className="text-xs opacity-80">
                            +${option.priceModifier.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {item.options?.sizes && (
              <div className="space-y-3">
                <h4 className="text-sm text-tertiary uppercase tracking-wider">Size</h4>
                <div className="grid grid-cols-2 gap-3">
                  {item.options.sizes.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOptions(prev => ({
                        ...prev,
                        size: option.id
                      }))}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        selectedOptions.size === option.id
                          ? 'bg-[#edb778] text-[#0D1F22]'
                          : 'bg-background border border-tertiary/20 text-primary hover:border-[#edb778]/30'
                      }`}
                    >
                      <div className="flex flex-col items-start gap-1">
                        <span>{option.name}</span>
                        {option.priceModifier > 0 && (
                          <span className="text-xs opacity-80">
                            +${option.priceModifier.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-tertiary/20">
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-tertiary/20 
                       text-secondary hover:border-tertiary 
                       transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#edb778] text-[#0D1F22] rounded-full 
                       hover:shadow-[0_0_20px_rgba(237,183,120,0.3)]
                       transition-shadow duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
