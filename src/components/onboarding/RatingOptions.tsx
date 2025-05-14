
import React from 'react';
import { RATING_OPTIONS } from './constants';

interface RatingOptionsProps {
  questionId: number;
  selectedValue?: string;
  onSelect: (value: string) => void;
}

const RatingOptions: React.FC<RatingOptionsProps> = ({ questionId, selectedValue, onSelect }) => {
  return (
    <div className="grid gap-3">
      {RATING_OPTIONS.map((option) => (
        <div
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all ${
            selectedValue === option.value
              ? "border-closy-pink bg-closy-pink/5"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex-1 font-space flex items-center gap-3">
            <span className="text-xl">{option.emoji}</span>
            <span>{option.label}</span>
          </div>
          <input
            type="radio"
            name={`rating-${questionId}`}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onSelect(option.value)}
            className="sr-only"
          />
        </div>
      ))}
    </div>
  );
};

export default RatingOptions;
