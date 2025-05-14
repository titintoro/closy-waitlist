import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const StyleDiscoverySection = () => {
  const isMobile = useIsMobile();
  
  return <section id="style-discovery" className="section-container bg-closy-green">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl tracking-tight text-white text-center mb-4 md:mb-10">Descubre el estilo que te hace única</h2>
        
        {/* Visual collage */}
        <div className="relative w-full h-[600px] md:h-[800px] mb-6 md:mb-12">
          {/* Basic style */}
          <div className="absolute top-[10%] left-[15%] w-[280px] md:w-[500px] bg-white/90 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 transform rotate-[-2deg]">
            <img src="/lovable-uploads/21714ab3-18cd-4535-bfab-336c44d3a45e.png" alt="Estilo Basic List" className="w-full h-full object-contain animate-float-slow" />
          </div>
          
          {/* TV Girl style mood */}
          <div className="absolute bottom-[15%] right-[10%] w-[250px] md:w-[450px] bg-white/90 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 transform rotate-[3deg]">
            <img src="/lovable-uploads/e01528c9-8b95-475f-876d-7e85315c7fef.png" alt="TV Girl Style Mood" className="w-full h-full object-contain animate-float-diagonal" />
          </div>
        </div>
        
        {/* Text and CTA */}
        <div className="max-w-2xl mx-auto text-center text-white space-y-3 md:space-y-6">
          <p className="body-inter text-white/90 text-xl">
            A veces no sabemos nuestro estilo individual, en 5 minutos vas a descubrir cómo conectar tu personalidad con tu identidad fashion.
          </p>
        </div>
      </div>
    </section>;
};
export default StyleDiscoverySection;
