'use client';

// src/app/pages/furniture/page.jsx
import FurnitureViewPage from '../../components/FurnitureViewPage';


const furniture = [
    {
      id: 1,
      name: 'Nova Throne',
      type: 'chair',
      basePrice: 4999,
      description: 'Cutting-edge anti-gravity chair with posture-perfect technology',
      image: '/assets/image/chair_one.png',
      options: {
        colors: [
          { id: 'cosmic-black', name: 'Cosmic Black', priceModifier: 0 },
          { id: 'stellar-white', name: 'Stellar White', priceModifier: 200 },
          { id: 'aurora-blue', name: 'Aurora Blue', priceModifier: 300 },
          { id: 'nebula-purple', name: 'Nebula Purple', priceModifier: 300 }
        ]
      }
    },
    {
      id: 2,
      name: 'Stellar Vista',
      type: 'sofa',
      basePrice: 7999,
      description: '...',
      image: '/assets/image/sofa_one.png',
      options: {
        colors: [
          { id: 'quantum-grey', name: 'Quantum Grey', priceModifier: 0 },
          { id: 'cosmic-black', name: 'Cosmic Black', priceModifier: 300 },
          { id: 'nova-gold', name: 'Nova Gold', priceModifier: 500 }
        ]
      }
    },
    {
      id: 3,
      name: 'Quantum Array',
      type: 'table',
      basePrice: 9499,
      description: '...',
      image: '/assets/image/table_one.png',
      options: {
        materials: [
          { id: 'quantum-glass', name: 'Quantum Glass', priceModifier: 0 },
          { id: 'stellar-metal', name: 'Stellar Metal', priceModifier: 1500 }
        ]
      }
    },
    {
      id: 4,
      name: 'Nebula Rest',
      type: 'bed',
      basePrice: 12999,
      description: '...',
      image: '/assets/image/bed_one.png',
      options: {
        sizes: [
          { id: 'queen', name: 'Queen', priceModifier: 0 },
          { id: 'king', name: 'King', priceModifier: 2000 }
        ]
      }
    },
    {
        id: 5,
        name: 'Eclipse Lounge',
        type: 'sofa',
        basePrice: 8999,
        description: 'Floating sofa with integrated holographic display and zero-gravity cushioning',
        image: '/assets/image/sofa_two.png',
        options: {
          colors: [
            { id: 'midnight-blue', name: 'Midnight Blue', priceModifier: 0 },
            { id: 'solar-gold', name: 'Solar Gold', priceModifier: 400 },
            { id: 'martian-red', name: 'Martian Red', priceModifier: 350 }
          ]
        }
      },
      {
        id: 6,
        name: 'Zenith Table',
        type: 'table',
        basePrice: 6499,
        description: 'Multi-dimensional storage solution with quantum-locked drawers',
        image: '/assets/image/table_two.png',
        options: {
          materials: [
            { id: 'nano-crystal', name: 'Nano Crystal', priceModifier: 0 },
            { id: 'dark-matter', name: 'Dark Matter', priceModifier: 2000 }
          ]
        }
      },
      {
        id: 7,
        name: 'Astro Command',
        type: 'chair',
        basePrice: 5499,
        description: 'Premium gaming chair with biometric feedback and atmosphere control',
        image: '/assets/image/chair_two.png',
        options: {
          colors: [
            { id: 'stealth-black', name: 'Stealth Black', priceModifier: 0 },
            { id: 'arctic-white', name: 'Arctic White', priceModifier: 250 },
            { id: 'plasma-blue', name: 'Plasma Blue', priceModifier: 300 }
          ]
        }
      },
      {
        id: 8,
        name: 'Celestial Dream',
        type: 'bed',
        basePrice: 11999,
        description: 'Smart-fabric bedding with sleep optimization and dream enhancement',
        image: '/assets/image/bed_two.png',
        options: {
          sizes: [
            { id: 'queen', name: 'Queen', priceModifier: 0 },
            { id: 'king', name: 'King', priceModifier: 2500 }
          ]
        }
      },
      {
        id: 9,
        name: 'Orbital Rest',
        type: 'sofa',
        basePrice: 9299,
        description: 'Modular sofa with adaptive comfort and mood-sensing illumination',
        image: '/assets/image/sofa_three.png',
        options: {
          colors: [
            { id: 'cosmic-grey', name: 'Cosmic Grey', priceModifier: 0 },
            { id: 'nebula-purple', name: 'Nebula Purple', priceModifier: 450 },
            { id: 'stellar-beige', name: 'Stellar Beige', priceModifier: 300 }
          ]
        }
      },
      {
        id: 10,
        name: 'Quantum Dining',
        type: 'table',
        basePrice: 8799,
        description: 'Expandable dining table with holographic surface customization',
        image: '/assets/image/table_three.png',
        options: {
          materials: [
            { id: 'quantum-glass', name: 'Quantum Glass', priceModifier: 0 },
            { id: 'astral-wood', name: 'Astral Wood', priceModifier: 1800 }
          ]
        }
      }
  ]

export default function FurniturePageWrapper() {
  return <FurnitureViewPage furniture={furniture} />;
}