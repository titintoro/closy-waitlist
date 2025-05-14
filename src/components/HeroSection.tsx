
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="hero" 
      className="section-container bg-closy-offwhite relative overflow-hidden"
    >
      <div className={`max-w-5xl mx-auto ${!isMobile ? 'lg:flex lg:flex-row lg:items-center' : 'flex flex-col items-center'} justify-between gap-4 lg:gap-10`}>
        {/* Fashion Collage with Animation */}
        <div className={`relative w-full ${!isMobile ? 'lg:w-1/2' : 'lg:w-3/4'} overflow-hidden flex items-center justify-center`}>
          <div className="fashion-collage-container relative w-full h-full">
            <img 
              src="/lovable-uploads/9e80e1e4-5b51-4c07-914c-5b13b1fdafe6.png" 
              alt="Collage de moda Closy" 
              className="w-full h-auto object-contain z-10 relative animate-image-motion"
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className={`w-full ${!isMobile ? 'lg:w-1/2' : 'lg:w-3/4'} space-y-4 flex flex-col justify-center`}>
          <div className="space-y-3 max-w-sm mx-auto text-center px-4 lg:text-left lg:mx-0">
            <h1 className="title-castio mb-2 lg:mb-3 animate-fade-in">Hola, soy Rose</h1>
            
            <div className="body-inter text-gray-700 text-sm md:text-base">
              <p className="animate-fade-in my-2" style={{ animationDelay: "100ms" }}>
                Quiero convertirme en tu nueva mejor amiga para ayudarte a decidir qué ponerte,
                a inspirarte cuando no sepas por dónde empezar
                y a convertir el momento de vestirte
                en tu ritual favorito del día.
              </p>
              
              <div className="mt-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="font-bold">¿Mi misión?</p>
                <p>Que te sientas tú.</p>
                <p>Y que te veas increíble mientras lo haces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
