// src/app/components/welcome/Welcome.client.jsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel from '../Carousel.client';
import { useRouter } from 'next/navigation';
// import backgroundOne from '@/app/assets/images/background_one.png'


const carouselOne = [
  { 
    title: 'Nova Throne', 
    image: '/assets/image/chair_one.png'
  },
  { 
    title: 'Stellar Vista', 
    image: '/assets/image/sofa_one.png'
  },
  { 
    title: 'Quantum Array', 
    image: '/assets/image/table_one.png'
  },
  { 
    title: 'Nebula Rest', 
    image: '/assets/image/bed_one.png'
  },
  { 
    title: 'Eclipse Lounge', 
    image: '/assets/image/sofa_two.png'
  },
  { 
    title: 'Zenith Table', 
    image: '/assets/image/table_two.png'
  },
];

const carouselTwo = [
  { 
    title: 'Celestial Dream', 
    image: '/assets/image/bed_two.png'
  },
  { 
    title: 'Astro Command', 
    image: '/assets/image/chair_two.png'
  },
  { 
    title: 'Cosmic Dine', 
    image: '/assets/image/table_three.png'
  },
  { 
    title: 'Aurora Comfort', 
    image: '/assets/image/sofa_three.png'
  },
  { 
    title: 'Orbital Rest', 
    image: '/assets/image/bed_three.png'
  },
  { 
    title: 'Vortex Stand', 
    image: '/assets/image/table_four.png'
  },
];

const carouselThree = [
  { 
    title: 'Galaxy Suite', 
    image: '/assets/image/bed_four.png'
  },
  { 
    title: 'Pulsar Seat', 
    image: '/assets/image/chair_three.png'
  },
  { 
    title: 'Solar Gather', 
    image: '/assets/image/table_five.png'
  },
  { 
    title: 'Cosmos Relax', 
    image: '/assets/image/sofa_four.png'
  },
  { 
    title: 'Infinity Rest', 
    image: '/assets/image/sofa_five.png'
  },
  { 
    title: 'Neutron Surface', 
    image: '/assets/image/table_six.png'
  },
];

export default function Welcome() {
  const [mounted, setMounted] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const router = useRouter(); 


  // First useEffect to handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Second useEffect to handle scroll after component is mounted
  useEffect(() => {
    if (!mounted) return;

    const scrollContainer = document.querySelector('.scroll-container');
    console.log('Scroll Container:', scrollContainer);

    const handleScroll = (e) => {
      console.log('Scroll Event:', e);
      const scrollPosition = e.target.scrollTop;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > viewportHeight * 0.3) {
        setIsBlurred(false);
      } else {
        setIsBlurred(true);
      }
    };

    if (scrollContainer) {
      console.log('Adding scroll listener');
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]); // Run when mounted changes

  if (!mounted) return null;

  return (
    // Add scroll snapping container
    <div className="scroll-container w-full h-screen overflow-y-auto snap-mandatory snap-y">
      {/* Header Section - 70vh */}
      <section className="relative h-[70vh] w-full bg-[#0D1F22] overflow-hidden snap-start">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gold gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#edb778]/10 to-transparent"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(13, 31, 34, 0.25) 0%, rgba(13, 31, 34, 0.15) 70%)'
            }}
          />
          {/* Subtle dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-[#0D1F22]/50" />
          </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f8eefd] mb-6
                          drop-shadow-[0_0_10px_rgba(237,183,120,0.3)]">
              SkylineHaven
            </h1>
            <p className="text-xl md:text-2xl text-[#f8eefd]/90 mb-8">
              Where Luxury Meets the Stars
            </p>
            <div className="flex gap-4 justify-center">
                      <button
                onClick={() => router.push('pages/furniture')}
                className="px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
                          hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
                          transition-all duration-300 font-medium"
              >
                Explore Collections
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
     {/* Featured Section - 100vh */}
     <section className="relative min-h-screen w-full bg-[#0D1F22] snap-start overflow-hidden">
        {/* Blur Overlay */}
        <div 
          className="absolute inset-0 z-50 transition-all duration-700 backdrop-blur-md"
          style={{ 
            opacity: isBlurred ? 1 : 0,
            pointerEvents: 'none'
          }}
        />
        
        {/* Top Gradient Fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 z-10"
          style={{
            background: 'linear-gradient(to bottom, #0D1F22 0%, transparent 100%)'
          }}
        />
  {/* Left Container - Trapezoid Shape */}
  <div 
    className="absolute top-0 left-0 h-full w-full"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    }}
  >
    
    
  
    {/* Image Container with set dimensions */}
    <div className="relative w-full h-full " >
    <div 
          className="absolute top-0 left-0 right-0  h-40 z-10"
          style={{
            background: 'linear-gradient(to bottom, #0D1F22 0%, transparent 100%)',
            transform: 'rotate(90deg)',
            height: '110%',
            left: '-40%',
            // background: 'linear-gradient(to bottom, #0D1F22 0%, transparent 100%)'
          }}
      />

      {/* Video Container */}
      <video 
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-auto h-full object-cover"
        style={{ objectPosition: '100% 90%' }}
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => console.error('Video failed to load:', e)}
      >
        <source src="/assets/video/background_one.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F22]/70 to-[#0D1F22]/20" />
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-12">
        <h2 className="text-[#f8eefd] text-5xl font-bold mb-4">
          Stellar Collection
        </h2>
        <p className="text-[#f8eefd]/80 text-xl max-w-md">
          Experience the future of luxury living
        </p>
      </div>
    </div>
  </div>

  {/* Right Container */}
<div className="absolute top-0 right-0 h-full"
  style={{
    width: 'calc(50%)',
    marginLeft: 'auto',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 18% 100%)',
    background: 'linear-gradient(to bottom right, transparent calc(50% - 1px), #edb778 calc(50%), transparent calc(50% + 1px))',
  }}
>
  {/* Content Container */}
  <div className="relative h-full w-full bg-[#0D1F22]">
    {/* Inner Container - Top Half */}
    <div className="absolute bottom-0 right-0 w-full h-[50%] z-20 px-8 py-12">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-[#0D1F22]" />
      
      {/* Content Grid */}
      <div className="relative z-30 h-full grid grid-cols-5 gap-8">
        {/* Left Section - Image (2 columns) */}
        <div className="col-span-2 relative rounded-2xl">
          <Image
            src="/assets/image/chair_three.png"
            alt="Featured Product"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            style={{
              position: 'absolute',
              left: '-10px',
              borderRadius: '20px',
            }}
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F22] via-transparent to-transparent opacity-60" />
        </div>

        {/* Right Section - Content (3 columns) */}
        <div className="col-span-3 flex flex-col justify-center">
          <h3 className="text-[#f8eefd] text-2xl font-bold mb-4">
            Nova Collection
          </h3>
          <p className="text-[#f8eefd]/80 text-md mb-8">
            Discover our latest pieces that blend cutting-edge technology with 
            timeless elegance, crafted for the elite of Nova Metropolis.
          </p>
          <button 
            onClick={() => router.push('/pages/about')}  // Add router import and navigation
            className="w-fit px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
                      hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
                      transition-all duration-300 font-medium"
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  {/* Carousels Container */}
  <div className="h-full grid grid-cols-3 gap-3">
    {/* First Carousel - Down */}
    <div className="h-full">
      <Carousel items={carouselOne} direction="down" speed={725} />
    </div>
    {/* Second Carousel - Up */}
    <div className="h-full">
      <Carousel items={carouselTwo} direction="up" speed={670} />
    </div>
    {/* Third Carousel - Down */}
    <div className="h-full">
      <Carousel items={carouselThree} direction="down" speed={692} />
    </div>
  </div>
</div>


  </div>
</section>
      



      {/* About Section - 90vh */}
      <section className="relative h-[90vh] w-full bg-[#0D1F22] snap-start">
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#edb778]/5 to-transparent"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(237, 183, 120, 0.05) 0%, transparent 70%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 h-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#edb778] mb-8
                          drop-shadow-[0_0_10px_rgba(237,183,120,0.3)]">
              Our Vision
            </h2>
            <p className="text-xl text-[#f8eefd]/90 max-w-3xl leading-relaxed">
              Founded in 2184, SkylineHaven Interiors redefines luxury living for 
              the most discerning residents of Nova Metropolis. Our pieces blend 
              timeless elegance with cutting-edge technology, crafted from rare 
              materials sourced across the galaxy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}