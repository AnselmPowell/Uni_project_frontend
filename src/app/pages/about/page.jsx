// // src/app/pages/about/page.jsx
// 'use client';

// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';

// export default function AboutPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-[#0D1F22] text-[#f8eefd]">
//       {/* Hero Section */}
//       <section className="relative h-[50vh] overflow-hidden">
//         {/* Background Effect */}
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 bg-gradient-to-b from-[#edb778]/10 to-transparent"
//             style={{
//               backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(13, 31, 34, 0.25) 0%, rgba(13, 31, 34, 0.15) 70%)'
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             className="text-center px-4"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-[#edb778] mb-6
//                           drop-shadow-[0_0_10px_rgba(237,183,120,0.3)]">
//               Our Vision
//             </h1>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="relative py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-16">
//             {/* Vision Section */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//               className="space-y-6"
//             >
//               <h2 className="text-2xl font-bold text-[#edb778]">
//                 Redefining Luxury Living
//               </h2>
//               <p className="text-[#f8eefd]/90 leading-relaxed">
//                 Founded in 2184, SkylineHaven Interiors emerged as a visionary response to 
//                 the evolving needs of Nova Metropolis' most discerning residents. Our pieces 
//                 blend timeless elegance with cutting-edge technology, crafted from rare 
//                 materials sourced across the galaxy.
//               </p>
//               <p className="text-[#f8eefd]/90 leading-relaxed">
//                 Each piece in our collection represents a harmonious fusion of artisanal 
//                 craftsmanship and quantum engineering, creating living spaces that transcend 
//                 traditional boundaries of comfort and sophistication.
//               </p>
//             </motion.div>

//             {/* Values Section */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="space-y-8"
//             >
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-[#edb778]">Innovation</h3>
//                 <p className="text-[#f8eefd]/80">
//                   Pioneering the integration of quantum materials and anti-gravity technology 
//                   into everyday luxury furniture.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-[#edb778]">Craftsmanship</h3>
//                 <p className="text-[#f8eefd]/80">
//                   Merging traditional artisanal techniques with advanced fabrication methods 
//                   to create pieces of unparalleled quality.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-[#edb778]">Sustainability</h3>
//                 <p className="text-[#f8eefd]/80">
//                   Utilizing eco-conscious quantum recycling and zero-point energy in our 
//                   manufacturing process.
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Return Home Button */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="text-center mt-20"
//           >
//             <button
//               onClick={() => router.push('/')}
//               className="px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
//                         hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
//                         transition-all duration-300 font-medium"
//             >
//               Return Home
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// ################################################################################################################################
// ################################################################################################################################
// ################################################################################################################################
// ################################################################################################################################
// ################################################################################################################################
// // src/app/pages/about/page.jsx
// 'use client';

// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import Image from 'next/image';
// import { useInView } from 'react-intersection-observer';

// // Principles Applied:
// // 1. Subtle animations to guide user's eye
// // 2. Create atmosphere of calm authority
// // 3. Card components with sophisticated depth
// // 4. Smooth hover effects for information
// // 5. Interactive components showcase
// // 6. Purposeful interactions
// // 7. Elegant transitions
// // 8. Strategic negative space

// export default function AboutPage() {
//   const router = useRouter();
//   const [hoveredValue, setHoveredValue] = useState(null);

//   // Use multiple ref points for scroll animations
//   const [heroRef, heroInView] = useInView({ threshold: 0.5, triggerOnce: true });
//   const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true });
//   const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });

//   const values = [
//     {
//       title: "Innovation",
//       description: "Pioneering quantum materials and anti-gravity technology integration.",
//       image: "/assets/image/innovation.jpg"
//     },
//     {
//       title: "Craftsmanship",
//       description: "Merging traditional techniques with advanced fabrication methods.",
//       image: "/assets/image/craftsmanship.jpg"
//     },
//     {
//       title: "Sustainability",
//       description: "Utilizing eco-conscious quantum recycling and zero-point energy.",
//       image: "/assets/image/sustainability.jpg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0D1F22] text-[#f8eefd] overflow-hidden">
//       {/* Hero Section with Parallax */}
//       <motion.section 
//         ref={heroRef}
//         className="relative h-[70vh] overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={heroInView ? { opacity: 1 } : {}}
//         transition={{ duration: 1.2 }}
//       >
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div 
//             className="absolute inset-0 bg-gradient-to-b from-[#edb778]/10 to-transparent"
//             animate={{ 
//               backgroundPosition: ['0% 0%', '100% 100%'],
//               backgroundSize: ['100%', '120%']
//             }}
//             transition={{ 
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//           {/* Floating particles effect */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-[#edb778]/20 rounded-full"
//                 initial={{ 
//                   x: Math.random() * 100 + '%',
//                   y: Math.random() * 100 + '%'
//                 }}
//                 animate={{ 
//                   y: ['-100%', '200%'],
//                   opacity: [0, 1, 0]
//                 }}
//                 transition={{ 
//                   duration: Math.random() * 10 + 10,
//                   repeat: Infinity,
//                   delay: Math.random() * 5
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <motion.div
//             className="text-center px-4 max-w-4xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={heroInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold text-[#edb778] mb-6
//                           drop-shadow-[0_0_10px_rgba(237,183,120,0.3)]">
//               Crafting Tomorrow's Legacy
//             </h1>
//             <p className="text-xl md:text-2xl text-[#f8eefd]/80">
//               Where Innovation Meets Timeless Elegance
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Vision Section with Hover Effects */}
//       <motion.section 
//         ref={visionRef}
//         className="relative py-32 px-4"
//         initial={{ opacity: 0 }}
//         animate={visionInView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.7 }}
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             className="grid md:grid-cols-2 gap-16 items-center"
//             initial={{ x: -50 }}
//             animate={visionInView ? { x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             {/* Vision Text */}
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-[#edb778]">Our Vision</h2>
//               <p className="text-[#f8eefd]/90 leading-relaxed text-lg">
//                 Founded in 2184, SkylineHaven Interiors emerged as a visionary response 
//                 to the evolving needs of Nova Metropolis' most discerning residents.
//               </p>
//             </div>

//             {/* Interactive Image Gallery */}
//             <div className="relative h-[400px] rounded-xl overflow-hidden">
//               <Image
//                 src="/assets/image/vision.jpg"
//                 alt="Vision"
//                 fill
//                 className="object-cover transform hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Values Section with Interactive Cards */}
//       <motion.section 
//         ref={valuesRef}
//         className="relative py-32 px-4 bg-[#0D1F22]/50"
//         initial={{ opacity: 0 }}
//         animate={valuesInView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.7 }}
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-[#edb778] text-center mb-16">Our Values</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 className="relative group"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={valuesInView ? { y: 0, opacity: 1 } : {}}
//                 transition={{ duration: 0.7, delay: index * 0.2 }}
//                 onHoverStart={() => setHoveredValue(value.title)}
//                 onHoverEnd={() => setHoveredValue(null)}
//               >
//                 <div className="relative h-[400px] rounded-xl overflow-hidden">
//                   <Image
//                     src={value.image}
//                     alt={value.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F22] to-transparent" />
//                   <div className="absolute inset-0 flex flex-col justify-end p-6">
//                     <h3 className="text-2xl font-bold text-[#edb778] mb-2">
//                       {value.title}
//                     </h3>
//                     <p className="text-[#f8eefd]/80">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Return Home Button */}
//       <motion.div
//         className="text-center py-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.4 }}
//       >
//         <button
//           onClick={() => router.push('/')}
//           className="group px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
//                     hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
//                     transition-all duration-300"
//         >
//           <span className="relative inline-flex items-center">
//             Return Home
//             <motion.span
//               className="ml-2"
//               animate={{ x: [0, 5, 0] }}
//               transition={{ 
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//             >
//               →
//             </motion.span>
//           </span>
//         </button>
//       </motion.div>
//     </div>
//   );
// }




// src/app/pages/about/page.jsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Principles Applied:
// 1. Subtle animations to guide user's eye
// 2. Create atmosphere of calm authority
// 3. Card components with sophisticated depth
// 4. Smooth hover effects for information
// 5. Interactive components showcase
// 6. Purposeful interactions
// 7. Elegant transitions
// 8. Strategic negative space

export default function AboutPage() {
  const router = useRouter();
  const [hoveredValue, setHoveredValue] = useState(null);

  // Use multiple ref points for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      title: "Innovation",
      description: "Pioneering quantum materials and anti-gravity technology integration.",
      image: "/assets/image/chair_one.png"
    },
    {
      title: "Craftsmanship",
      description: "Merging traditional techniques with advanced fabrication methods.",
      image: "/assets/image/sofa_one.png"
    },
    {
      title: "Sustainability",
      description: "Utilizing eco-conscious quantum recycling and zero-point energy.",
      image: "/assets/image/bed_one.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1F22] text-[#f8eefd] overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-[#edb778]/10 to-transparent"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100%', '120%']
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#edb778]/20 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%'
                }}
                animate={{ 
                  y: ['-100%', '200%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-4xl"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#edb778] mb-6
                          drop-shadow-[0_0_10px_rgba(237,183,120,0.3)]">
              Crafting Tomorrow's Legacy
            </h1>
            <p className="text-xl md:text-2xl text-[#f8eefd]/80">
              Where Innovation Meets Timeless Elegance
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section with Hover Effects */}
      <motion.section 
        ref={visionRef}
        className="relative py-32 px-4"
        initial={{ opacity: 0 }}
        animate={visionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ x: -50 }}
            animate={visionInView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Vision Text */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#edb778]">Our Vision</h2>
              <p className="text-[#f8eefd]/90 leading-relaxed text-lg">
                Founded in 2184, SkylineHaven Interiors emerged as a visionary response 
                to the evolving needs of Nova Metropolis' most discerning residents.
              </p>
            </div>

            {/* Interactive Image Gallery */}
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/assets/image/table_one.png"
                alt="Vision"
                fill
                priority
                sizes="256px"
                className="object-fill"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section with Interactive Cards */}
      <motion.section 
        ref={valuesRef}
        className="relative py-32 px-4 bg-[#0D1F22]/50"
        initial={{ opacity: 0 }}
        animate={valuesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#edb778] text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                onHoverStart={() => setHoveredValue(value.title)}
                onHoverEnd={() => setHoveredValue(null)}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    priority={index < 4}
                    sizes="256px"
                    className="object-fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F22] to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-[#edb778] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[#f8eefd]/80">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Return Home Button */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <button
          onClick={() => router.push('/')}
          className="group px-8 py-3 bg-[#edb778] text-[#0D1F22] rounded-full 
                    hover:shadow-[0_0_15px_rgba(237,183,120,0.5)]
                    transition-all duration-300"
        >
          <span className="relative inline-flex items-center">
            Return Home
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              →
            </motion.span>
          </span>
        </button>
      </motion.div>
    </div>
  );
}













