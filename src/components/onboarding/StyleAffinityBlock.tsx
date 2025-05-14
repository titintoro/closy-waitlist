
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { STYLE_QUESTIONS } from './constants';
import StyleImage from './StyleImage';
import QuestionDisplay from './QuestionDisplay';
import RatingOptions from './RatingOptions';
import ProgressDisplay from './ProgressDisplay';
import NavigationButtons from './NavigationButtons';

interface StyleAffinityBlockProps {
  onComplete?: (answers: Record<number, string>) => void;
}

const StyleAffinityBlock: React.FC<StyleAffinityBlockProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = STYLE_QUESTIONS[currentQuestionIndex];
  const totalQuestions = STYLE_QUESTIONS.length;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
    // Automatically move to next question when user selects an answer
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (onComplete) {
      // All questions answered, call onComplete
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
          <StyleImage image={currentQuestion.image} />
          
          <QuestionDisplay 
            style={currentQuestion.style} 
            question={currentQuestion.question} 
          />
          
          <RatingOptions 
            questionId={currentQuestion.id}
            selectedValue={answers[currentQuestion.id]}
            onSelect={handleAnswer}
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

export default StyleAffinityBlock;
