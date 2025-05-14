
import React, { useState } from 'react';
import PersonalInfoBlock from '../components/onboarding/PersonalInfoBlock';
import StyleAffinityBlock from '../components/onboarding/StyleAffinityBlock';
import VisualStyleBlock from '../components/onboarding/VisualStyleBlock';
import StylePreferencesBlock from '../components/onboarding/StylePreferencesBlock';

const Onboarding = () => {
  const [currentBlock, setCurrentBlock] = useState<'personal' | 'style' | 'visual' | 'preferences'>('personal');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [styleAnswers, setStyleAnswers] = useState<Record<number, string>>({});
  const [visualStyleAnswers, setVisualStyleAnswers] = useState<Record<number, string>>({});
  const [stylePreferencesAnswers, setStylePreferencesAnswers] = useState<{
    favoriteMarks: string[];
    lookFocus: string;
    focusPreference: string;
    styleReference: string;
  }>({
    favoriteMarks: [],
    lookFocus: '',
    focusPreference: '',
    styleReference: '',
  });

  const handlePersonalInfoComplete = (data: typeof personalInfo) => {
    setPersonalInfo(data);
    setCurrentBlock('style');
  };

  const handleStyleAffinityComplete = (data: Record<number, string>) => {
    setStyleAnswers(data);
    setCurrentBlock('visual');
  };

  const handleVisualStyleComplete = (data: Record<number, string>) => {
    setVisualStyleAnswers(data);
    setCurrentBlock('preferences');
  };

  const handleStylePreferencesComplete = (data: typeof stylePreferencesAnswers) => {
    setStylePreferencesAnswers(data);
    // Here we would typically proceed to the next section or finalize the onboarding
    console.log("Onboarding completed with:", {
      personalInfo,
      styleAnswers,
      visualStyleAnswers,
      stylePreferencesAnswers: data
    });
    // For now we just log the data
  };

  return (
    <div className="min-h-screen bg-closy-offwhite">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {currentBlock === 'personal' ? (
          <PersonalInfoBlock onComplete={handlePersonalInfoComplete} />
        ) : currentBlock === 'style' ? (
          <StyleAffinityBlock onComplete={handleStyleAffinityComplete} />
        ) : currentBlock === 'visual' ? (
          <VisualStyleBlock onComplete={handleVisualStyleComplete} />
        ) : (
          <StylePreferencesBlock onComplete={handleStylePreferencesComplete} />
        )}
      </div>
    </div>
  );
};

export default Onboarding;
