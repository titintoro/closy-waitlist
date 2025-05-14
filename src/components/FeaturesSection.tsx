import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Inspo diaria",
    description: "Te inspiro a saber qué ponerte cada día.",
    imageSrc: "/lovable-uploads/27154f23-7875-4a27-9d76-90962d69145c.png",
  },
  {
    id: 2,
    title: "Compras personalizadas",
    description: "Te ayudo a comprar solo lo que encaja contigo.",
    imageSrc: "/lovable-uploads/f4b3e227-1243-4d0b-81a3-ba7f270464de.png",
  },
  {
    id: 3,
    title: "Organiza y planifica tus outfits",
    description: "Programa tus looks para toda la semana y nunca más te quedarás sin saber qué ponerte.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Explora tu estilo visualmente",
    description: "Descubre moodboards personalizados que reflejan y amplían tu estilo único.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Compra de forma personalizada",
    description: "Encuentra prendas que realmente combinen con tu estilo y tu armario actual.",
    imageSrc: "/placeholder.svg",
  },
];

const FeaturesSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section 
      id="features" 
      className="section-container bg-closy-pink relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="title-castio text-white text-center mb-16">¿Qué hace Closy?</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Mobile mockup */}
          <div className="w-full lg:w-1/2 h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl relative mx-auto lg:mx-0" style={{ maxWidth: '300px' }}>
            {/* Phone frame */}
            <div className="absolute inset-0 border-8 border-gray-800 rounded-3xl pointer-events-none">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
            </div>
            
            {/* Content on screen */}
            <div className="h-full w-full p-2 pt-8 overflow-hidden">
              <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden transition-all duration-500 transform">
                <img 
                  src={features[currentFeature].imageSrc} 
                  alt={features[currentFeature].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Feature description */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-castio text-3xl">{currentFeature + 1}. {features[currentFeature].title}</h3>
              </div>
              
              <p className="body-space text-white/90 mb-10">
                {features[currentFeature].description}
              </p>
              
              {/* Navigation controls */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevFeature}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Indicators */}
                <div className="flex items-center space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentFeature ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={nextFeature}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
