
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface StyleImageProps {
  image: string;
  alt?: string;
}

const StyleImage: React.FC<StyleImageProps> = ({ image, alt = "Estilo de moda" }) => {
  return (
    <div className="max-w-[320px] mx-auto bg-gray-100 rounded-lg overflow-hidden">
      <AspectRatio ratio={9/16} className="bg-gray-100">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default StyleImage;
