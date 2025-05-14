
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface ProgressDisplayProps {
  current: number;
  total: number;
}

const ProgressDisplay: React.FC<ProgressDisplayProps> = ({ current, total }) => {
  const progressPercentage = ((current + 1) / total) * 100;
  
  return (
    <div className="w-full">
      <Progress value={progressPercentage} className="h-2" />
      <p className="text-sm text-gray-500 mt-2 text-right">
        {current + 1} de {total}
      </p>
    </div>
  );
};

export default ProgressDisplay;
