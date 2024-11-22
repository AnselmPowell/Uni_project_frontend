// components/Carousel.client.jsx
'use client';
import Image from 'next/image';

const Carousel = ({ items, direction = 'down', speed = 30 }) => {
  const containerClass = direction === 'down' ? 'animate-scroll-down' : 'animate-scroll-up';

  return (
    <div className="relative  h-full w-full">
      <div 
        className={`flex flex-col gap-4 ${containerClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-48 h-60 rounded-2xl bg-[#0D1F22]/5  
                      border-2 border-[#edb778]/20 
                      transition-all duration-300 transform 
                      shadow-[0_4px_20px_rgba(237,183,120,0.15)]
                      overflow-hidden
                      
                      "
          >
            {/* Image Container */}
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index < 4}
                sizes="256px"
                className="object-fill"
              />
              {/* Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1F22] p-3">
                <h3 className="text-[#f8eefd] text-lg font-medium text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;