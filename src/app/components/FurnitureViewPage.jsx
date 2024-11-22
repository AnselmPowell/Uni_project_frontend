'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/contexts/CartContext.client';
import { toast } from '@/app/components/ui/Toast.client';

// Shimmer loading effect component
const ShimmerCard = () => (
  <div className="relative overflow-hidden bg-[#0D1F22]/50 rounded-xl h-[400px]">
    <div className="absolute inset-0">
      <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#edb778]/10 to-transparent" />
    </div>
  </div>
);

// Filter button variants for animation
const filterVariants = {
  selected: {
    backgroundColor: '#edb778',
    color: '#0D1F22',
    scale: 1.05,
  },
  unselected: {
    backgroundColor: '#0D1F22',
    color: '#f8eefd',
    scale: 1,
  },
};

// Update the cardVariants
const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing function for smooth motion
      }
    },
    hover: {
      y: -6, // Reduced movement
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };



// Modal animation variants
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    backdropFilter: 'blur(20px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.3,
    }
  }
};


const OptionSelector = ({ type, options, selected, onChange }) => {
    return (
      <div className="mb-6">
        <h3 className="text-sm text-[#edb778] mb-3 uppercase">{type}</h3>
        <div className="flex gap-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                        ${selected === option.id 
                          ? 'bg-[#edb778] text-[#0D1F22]' 
                          : 'border border-[#edb778]/20 text-[#f8eefd]'}`}
            >
              {option.name}
              {option.priceModifier > 0 && ` (+$${option.priceModifier})`}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default function FurnitureViewPage({ furniture }) {
    const cart = useCart();

  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedOptions, setSelectedOptions] = useState({
    color: null,
    material: null,
    size: null
  });


  const calculateFinalPrice = (item, options) => {
    let finalPrice = item.basePrice;
    
    if (options.color && item.options?.colors) {
      finalPrice += item.options.colors.find(c => c.id === options.color)?.priceModifier || 0;
    }
    if (options.material && item.options?.materials) {
      finalPrice += item.options.materials.find(m => m.id === options.material)?.priceModifier || 0;
    }
    if (options.size && item.options?.sizes) {
      finalPrice += item.options.sizes.find(s => s.id === options.size)?.priceModifier || 0;
    }
    
    return finalPrice;
  };
  
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filter and sort furniture items
  const filteredAndSortedFurniture = useMemo(() => {
    let filtered = furniture;
    
    if (filterType !== 'all') {
      // Change from category to type
      filtered = furniture.filter(item => item.type === filterType);
    }
    
    return filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  }, [furniture, filterType, sortOrder]);

  

  const handleAddToCart = () => {
    const cartItem = {
      id: selectedFurniture.id,
      name: selectedFurniture.name,
      description: selectedFurniture.description,
      image: selectedFurniture.image,
      selectedOptions: selectedOptions,
      finalPrice: calculateFinalPrice(selectedFurniture, selectedOptions)
    };
  
    cart.addToCart(cartItem);
    toast.success('Added to cart');
    setSelectedFurniture(null);
  };

  return (
    <div className="min-h-screen bg-[#0D1F22] text-[#f8eefd] overflow-x-hidden">
      {/* Filter Bar */}
      <motion.div 
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0D1F22]/80"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Category Filters */}
            <div className="flex gap-4">
            {['all', 'bed', 'sofa', 'chair', 'table'].map((type) => ( // Updated to match your type values
                <motion.button
                    key={type}
                    onClick={() => setFilterType(type)}
                    variants={filterVariants}
                    initial="unselected"
                    animate={filterType === type ? 'selected' : 'unselected'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full border border-[#edb778]/20
                            transition-all duration-500 ease-out"
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
                ))}
            </div>

            {/* Sort Toggle */}
            <motion.button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-full
                        border border-[#edb778]/20 text-[#edb778]
                        hover:border-[#edb778]/40 transition-all duration-300"
            >
              Price {sortOrder === 'asc' ? '↑' : '↓'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Furniture Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {loading ? (
            // Shimmer loading states
            [...Array(6)].map((_, i) => <ShimmerCard key={i} />)
          ) : (
            // Furniture cards
            filteredAndSortedFurniture.map((item) => (

                
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover="hover"
                className="relative group cursor-pointer"
                onClick={() => setSelectedFurniture(item)}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden
              transform-gpu transition-all duration-1000 ease-out // Increased duration
              border border-[#edb778]/10
              group-hover:border-[#edb778]/30
              group-hover:shadow-[0_8px_30px_rgba(237,183,120,0.15)]">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-all duration-1000 ease-out // Increased duration
                            group-hover:scale-105"
                />
                  
                  {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-[#0D1F22] via-[#0D1F22]/50 to-transparent 
                                opacity-60 group-hover:opacity-90 
                                transition-opacity duration-1000 ease-out" /> // Increased duration
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 
                                bg-gradient-to-t from-[#0D1F22] to-transparent">
                    <h3 className="text-2xl font-bold mb-3 text-[#edb778] 
                                transform transition-transform duration-800 ease-out // Adjusted duration
                                group-hover:translate-y-0">
                    {item.name}
                    </h3>
                    <p className="text-[#f8eefd] text-sm leading-relaxed mb-4 
                                transform transition-all duration-800 ease-out // Adjusted duration
                                opacity-0 group-hover:opacity-100 
                                translate-y-4 group-hover:translate-y-0">
                    {item.description}
                    </p>
                    <div className="flex justify-between items-center 
                                transform transition-all duration-800 ease-out // Adjusted duration
                                translate-y-4 group-hover:translate-y-0">
                    <p className="text-xl font-bold text-[#edb778]">
                        ${(item.basePrice || item.price || 0).toLocaleString()}
                    </p>
                    <motion.span
                        className="text-[#edb778] opacity-0 group-hover:opacity-100 
                                transition-opacity duration-800 ease-out" // Adjusted duration
                        whileHover={{ scale: 1.05 }}
                    >
                        View Details →
                    </motion.span>
                    </div>
                </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFurniture && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0D1F22]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFurniture(null)}
            />

           {/* Modal Content */}
<motion.div
  className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D1F22] 
            rounded-2xl overflow-hidden border border-[#edb778]/20 
            shadow-[0_0_50px_rgba(237,183,120,0.1)]"
>
  <div className="flex flex-col md:flex-row h-[80vh]">
    {/* Image Section */}
    <div className="relative w-full md:w-1/2 h-[40vh] md:h-full">
      <Image
        src={selectedFurniture.image}
        alt={selectedFurniture.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r 
                    from-transparent to-[#0D1F22] opacity-50" />
      
      {/* Floating Price Badge */}
      <div className="absolute top-6 right-6 bg-[#0D1F22]/90 backdrop-blur-sm
                    px-6 py-3 rounded-full border border-[#edb778]/30">
        <p className="text-xl font-bold text-[#edb778]">
          ${calculateFinalPrice(selectedFurniture, selectedOptions).toLocaleString()}
        </p>
      </div>
    </div>

    {/* Content Section */}
    <div className="relative w-full md:w-1/2 p-8 overflow-y-auto">
            <motion.h2
                className="text-3xl font-bold mb-4 text-[#edb778]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {selectedFurniture.name}
            </motion.h2>

            <motion.p
                className="text-[#f8eefd]/70 text-base leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {selectedFurniture.description}
            </motion.p>

            {/* Options Section */}
            <motion.div
                className="space-y-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {selectedFurniture.options?.colors && (
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-[#edb778]">Select Color</h3>
                    <div className="grid grid-cols-2 gap-3">
                    {selectedFurniture.options.colors.map((option) => (
                        <button
                        key={option.id}
                        onClick={() => setSelectedOptions(prev => ({...prev, color: option.id}))}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                            selectedOptions.color === option.id
                            ? 'bg-[#edb778] text-[#0D1F22]'
                            : 'bg-[#0D1F22] border border-[#edb778]/20 text-[#f8eefd]'
                        }`}
                        >
                        <div className="flex flex-col items-start gap-2">
                            <span className="font-medium">{option.name}</span>
                            {option.priceModifier > 0 && (
                            <span className="text-sm opacity-80">
                                +${option.priceModifier.toLocaleString()}
                            </span>
                            )}
                        </div>
                        </button>
                    ))}
                    </div>
                </div>
                )}

                {selectedFurniture.options?.materials && (
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-[#edb778]">Select Material</h3>
                    <div className="grid grid-cols-2 gap-3">
                    {selectedFurniture.options.materials.map((option) => (
                        <button
                        key={option.id}
                        onClick={() => setSelectedOptions(prev => ({...prev, material: option.id}))}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                            selectedOptions.material === option.id
                            ? 'bg-[#edb778] text-[#0D1F22]'
                            : 'bg-[#0D1F22] border border-[#edb778]/20 text-[#f8eefd]'
                        }`}
                        >
                        <div className="flex flex-col items-start gap-2">
                            <span className="font-medium">{option.name}</span>
                            {option.priceModifier > 0 && (
                            <span className="text-sm opacity-80">
                                +${option.priceModifier.toLocaleString()}
                            </span>
                            )}
                        </div>
                        </button>
                    ))}
                    </div>
                </div>
                )}

                {selectedFurniture.options?.sizes && (
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-[#edb778]">Select Size</h3>
                    <div className="grid grid-cols-2 gap-3">
                    {selectedFurniture.options.sizes.map((option) => (
                        <button
                        key={option.id}
                        onClick={() => setSelectedOptions(prev => ({...prev, size: option.id}))}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                            selectedOptions.size === option.id
                            ? 'bg-[#edb778] text-[#0D1F22]'
                            : 'bg-[#0D1F22] border border-[#edb778]/20 text-[#f8eefd]'
                        }`}
                        >
                        <div className="flex flex-col items-start gap-2">
                            <span className="font-medium">{option.name}</span>
                            {option.priceModifier > 0 && (
                            <span className="text-sm opacity-80">
                                +${option.priceModifier.toLocaleString()}
                            </span>
                            )}
                        </div>
                        </button>
                    ))}
                    </div>
                </div>
                )}
            </motion.div>

            {/* Add to Cart Button */}
            <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#edb778] text-[#0D1F22] rounded-xl
                            font-bold hover:shadow-[0_0_20px_rgba(237,183,120,0.3)]
                            transition-shadow duration-300"
                >
                Add to Cart
                </motion.button>
            </div>

            {/* Close Button */}
            <motion.button
            className="absolute top-4 right-4 text-[#f8eefd]/60 hover:text-[#f8eefd]
                        transition-colors duration-300 z-50"
            onClick={() => setSelectedFurniture(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </motion.button>
        </div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
