
import React from 'react';

const OutfitRoll = () => {
  const outfitImages = [
    "/lovable-uploads/832ba552-f0ef-4f95-af28-b4d872a4dd64.png",
    "/lovable-uploads/20f27208-2cd1-4ef3-89dc-eb138b8ef17d.png",
    "/lovable-uploads/646e3b77-55ff-4ac1-b7d9-0081b97fb6b7.png",
    "/lovable-uploads/4fa81898-af0e-416d-9b63-89c1a174352f.png",
    "/lovable-uploads/8cbe8ebf-12e4-42f6-b36e-188d2df0dae6.png"
  ];

  return (
    <section className="outfit-roll-section py-8 relative overflow-hidden bg-transparent">
      <div className="outfit-roll-container">
        <div className="outfit-roll-track">
          <div className="outfit-roll-content">
            {outfitImages.map((src, index) => (
              <div key={index} className="outfit-item">
                <img 
                  src={src} 
                  alt={`Outfit Closy ${index + 1}`} 
                  className="h-auto w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutfitRoll;
