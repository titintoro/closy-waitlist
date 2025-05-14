
import React from 'react';
import { Check } from 'lucide-react';

interface ImageOption {
  id: string;
  image: string;
}

interface ImageGridProps {
  options: ImageOption[];
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ options, selectedOptionId, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
            selectedOptionId === option.id
              ? 'ring-4 ring-closy-pink ring-offset-2'
              : 'hover:opacity-90'
          }`}
        >
          <img
            src={option.image}
            alt="Opción de outfit"
            className="w-full h-full object-cover"
          />
          
          {selectedOptionId === option.id && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-closy-pink rounded-full p-2">
                <Check size={24} className="text-white" />
              </div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ImageGrid;
