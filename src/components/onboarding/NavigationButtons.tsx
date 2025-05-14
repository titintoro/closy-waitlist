
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentIndex: number;
  totalItems: number;
  canAdvance: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentIndex,
  totalItems,
  canAdvance,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Anterior
      </Button>

      <Button
        onClick={onNext}
        disabled={!canAdvance}
        className="flex items-center gap-2 bg-closy-pink hover:bg-closy-maroon"
      >
        {currentIndex === totalItems - 1 ? (
          "Finalizar"
        ) : (
          <>
            Siguiente
            <ArrowRight size={16} />
          </>
        )}
      </Button>
    </div>
  );
};

export default NavigationButtons;
