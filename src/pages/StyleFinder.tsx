
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

// Define our survey steps
interface SurveyStep {
  id: number;
  question: string;
  description: string;
  options: Array<{
    id: string;
    text: string;
    image?: string;
  }>;
}

const surveySteps: SurveyStep[] = [
  {
    id: 1,
    question: "¿Qué estilo te atrae más?",
    description: "Elige la imagen que más te represente o te llame la atención",
    options: [
      { id: "casual", text: "Casual y cómodo", image: "/placeholder.svg" },
      { id: "elegante", text: "Elegante y sofisticado", image: "/placeholder.svg" },
      { id: "bohemio", text: "Bohemio y artístico", image: "/placeholder.svg" },
      { id: "minimalista", text: "Minimalista y funcional", image: "/placeholder.svg" },
    ],
  },
  {
    id: 2,
    question: "¿Qué colores prefieres en tu armario?",
    description: "Selecciona la paleta de colores que más usas",
    options: [
      { id: "neutros", text: "Neutros (blanco, beige, gris)", image: "/placeholder.svg" },
      { id: "vibrantes", text: "Colores vibrantes", image: "/placeholder.svg" },
      { id: "pasteles", text: "Tonos pastel", image: "/placeholder.svg" },
      { id: "oscuros", text: "Tonos oscuros", image: "/placeholder.svg" },
    ],
  },
  {
    id: 3,
    question: "¿Qué siluetas te hacen sentir más cómoda?",
    description: "Elige la forma que mejor te represente",
    options: [
      { id: "ajustado", text: "Ajustado al cuerpo", image: "/placeholder.svg" },
      { id: "oversized", text: "Holgado y oversized", image: "/placeholder.svg" },
      { id: "estructurado", text: "Estructurado y definido", image: "/placeholder.svg" },
      { id: "fluido", text: "Fluido y ligero", image: "/placeholder.svg" },
    ],
  },
  {
    id: 4,
    question: "¿Qué te motiva al vestirte cada día?",
    description: "Selecciona lo que más te identifica",
    options: [
      { id: "comodidad", text: "Comodidad ante todo" },
      { id: "expresion", text: "Expresar mi personalidad" },
      { id: "tendencias", text: "Seguir las tendencias" },
      { id: "ocasion", text: "Adaptarme a la ocasión" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo te gusta combinar tus prendas?",
    description: "Elige tu enfoque preferido",
    options: [
      { id: "basicos", text: "Básicos bien combinados" },
      { id: "statement", text: "Piezas statement que destaquen" },
      { id: "capas", text: "Capas y texturas" },
      { id: "complementos", text: "Complementos y accesorios" },
    ],
  },
];

const StyleFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);

  const handleSelectOption = (optionId: string) => {
    setAnswers({
      ...answers,
      [surveySteps[currentStep].id]: optionId,
    });
  };

  const handleNext = () => {
    if (currentStep < surveySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete the survey
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
  };

  const isOptionSelected = (optionId: string) => {
    return answers[surveySteps[currentStep].id] === optionId;
  };

  const isStepAnswered = () => {
    return answers[surveySteps[currentStep].id] !== undefined;
  };

  const currentProgress = ((currentStep + 1) / surveySteps.length) * 100;

  if (completed) {
    return (
      <div className="min-h-screen bg-closy-offwhite flex flex-col">
        <div className="pt-20 flex-grow flex flex-col items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-closy-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} color="white" />
            </div>
            
            <h1 className="font-castio text-4xl mb-4">¡Análisis completado!</h1>
            
            <p className="font-inter text-gray-600 mb-8">
              Basándonos en tus respuestas, hemos creado un perfil de estilo personalizado para ti. ¡Rose está lista para ayudarte a explorar tu estilo único!
            </p>
            
            <button 
              onClick={handleStartOver}
              className="px-6 py-3 bg-closy-pink text-white font-inter rounded-full hover:bg-closy-maroon transition-colors mr-4"
            >
              Realizar test de nuevo
            </button>
            
            <a 
              href="/onboarding" 
              className="inline-block px-6 py-3 bg-closy-maroon text-white font-inter rounded-full hover:bg-closy-maroon/80 transition-colors"
            >
              ¡Comenzar el onboarding!
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-closy-offwhite flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-closy-pink transition-all duration-300"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
      
      <div className="pt-20 flex-grow flex items-center justify-center px-4 py-10">
        <div className="max-w-4xl w-full">
          {/* Question */}
          <div className="text-center mb-10">
            <h1 className="font-castio text-4xl mb-3">{surveySteps[currentStep].question}</h1>
            <p className="font-inter text-gray-600">{surveySteps[currentStep].description}</p>
          </div>
          
          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surveySteps[currentStep].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`bg-white rounded-xl p-4 border-2 transition-all text-left flex flex-col h-full ${
                  isOptionSelected(option.id)
                    ? 'border-closy-pink shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option.image && (
                  <div className="mb-4 w-full h-40 overflow-hidden rounded-lg">
                    <img 
                      src={option.image} 
                      alt={option.text} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                )}
                
                <div className="flex items-center">
                  <div 
                    className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
                      isOptionSelected(option.id)
                        ? 'bg-closy-pink border-closy-pink'
                        : 'border-gray-300'
                    }`}
                  >
                    {isOptionSelected(option.id) && (
                      <Check size={12} color="white" />
                    )}
                  </div>
                  <span className={`font-space ${isOptionSelected(option.id) ? 'text-closy-maroon font-medium' : 'text-gray-700'}`}>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center px-4 py-2 rounded-full font-inter ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={16} className="mr-2" />
              Anterior
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepAnswered()}
              className={`flex items-center px-6 py-3 rounded-full font-inter ${
                isStepAnswered()
                  ? 'bg-closy-pink text-white hover:bg-closy-maroon'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep < surveySteps.length - 1 ? (
                <>
                  Siguiente
                  <ArrowRight size={16} className="ml-2" />
                </>
              ) : (
                'Completar'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleFinder;
