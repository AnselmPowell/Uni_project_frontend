// src/app/pages/cart/CartSteps.client.jsx
'use client';

import { motion } from 'framer-motion';

const steps = [
  { id: 1, name: 'Shopping Cart', description: 'Review and edit items' },
  { id: 2, name: 'Order Summary', description: 'Confirm your selections' },
  { id: 3, name: 'Checkout', description: 'Complete your purchase' }
];

export default function CartSteps({ currentStep }) {
  return (
    <div className="relative">
      {/* Progress Bar */}
      <div 
        className="absolute top-5 left-0 w-full h-0.5 bg-tertiary/20"
        aria-hidden="true"
      >
        <motion.div 
          className="h-full bg-[#edb778]"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Steps */}
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={`flex flex-col items-center ${
              step.id === currentStep
                ? 'opacity-100'
                : step.id < currentStep
                ? 'opacity-75'
                : 'opacity-50'
            }`}
          >
            {/* Step Circle */}
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center
                        border-2 ${
                          step.id <= currentStep
                            ? 'border-[#edb778] bg-background'
                            : 'border-tertiary/40 bg-background'
                        }`}
              animate={{
                scale: step.id === currentStep ? 1.1 : 1,
                borderWidth: step.id === currentStep ? '3px' : '2px'
              }}
            >
              {step.id < currentStep ? (
                <svg
                  className="w-6 h-6 text-[#edb778]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span className={`text-sm font-medium ${
                  step.id === currentStep ? 'text-[#edb778]' : 'text-tertiary'
                }`}>
                  {step.id}
                </span>
              )}
            </motion.div>

            {/* Step Text */}
            <div className="mt-4 text-center">
              <p className={`text-sm font-medium ${
                step.id === currentStep ? 'text-primary' : 'text-secondary'
              }`}>
                {step.name}
              </p>
              <p className="text-xs text-tertiary mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}