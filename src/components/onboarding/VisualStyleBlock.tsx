
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { VISUAL_STYLE_QUESTIONS } from './constants';
import ProgressDisplay from './ProgressDisplay';
import NavigationButtons from './NavigationButtons';
import ImageGrid from './ImageGrid';

interface VisualStyleBlockProps {
  onComplete: (data: Record<number, string>) => void;
}

const VisualStyleBlock: React.FC<VisualStyleBlockProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = VISUAL_STYLE_QUESTIONS[currentQuestionIndex];
  const totalQuestions = VISUAL_STYLE_QUESTIONS.length;

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // All questions answered, proceed to next section
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <ProgressDisplay 
        current={currentQuestionIndex} 
        total={totalQuestions} 
      />

      <Card className="border-none shadow-lg">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-castio text-center">
            {currentQuestion.question}
          </h2>
          
          <ImageGrid 
            options={currentQuestion.options}
            selectedOptionId={answers[currentQuestion.id] || null}
            onSelect={handleSelect}
          />
        </CardContent>
      </Card>

      <NavigationButtons 
        currentIndex={currentQuestionIndex}
        totalItems={totalQuestions}
        canAdvance={!!answers[currentQuestion.id]}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default VisualStyleBlock;
