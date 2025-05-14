
import React from 'react';

interface QuestionDisplayProps {
  style?: string;
  question: string;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ style, question }) => {
  return (
    <div className="text-center">
      {style && (
        <h3 className="font-castio text-2xl mb-2">{style}</h3>
      )}
      <p className="text-gray-600 text-xl">{question}</p>
    </div>
  );
};

export default QuestionDisplay;
