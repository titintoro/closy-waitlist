
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProgressDisplay from './ProgressDisplay';
import NavigationButtons from './NavigationButtons';

interface StylePreferencesBlockProps {
  onComplete?: (data: {
    favoriteMarks: string[];
    lookFocus: string;
    focusPreference: string;
    styleReference: string;
  }) => void;
}

// Marcas de ejemplo (se reemplazarán más adelante)
const BRAND_OPTIONS = [
  { id: "brand1", name: "Zara" },
  { id: "brand2", name: "Mango" },
  { id: "brand3", name: "H&M" },
  { id: "brand4", name: "Massimo Dutti" },
  { id: "brand5", name: "Bershka" },
];

// Opciones de foco de look
const LOOK_FOCUS_OPTIONS = [
  { id: "shoes", label: "Zapatos", image: "/placeholder.svg" },
  { id: "accessories", label: "Accesorios", image: "/placeholder.svg" },
  { id: "base", label: "Base (prenda principal)", image: "/placeholder.svg" },
  { id: "jacket", label: "Chaqueta o capa exterior", image: "/placeholder.svg" },
];

// Preguntas condicionales y opciones para la pantalla 3
const CONDITIONAL_QUESTIONS: Record<string, { 
  question: string, 
  options: Array<{ id: string, label: string, image: string }>
}> = {
  "shoes": {
    question: "¿Qué tipo de calzado no puede faltar en tu armario?",
    options: [
      { id: "shoes1", label: "Opción 1", image: "/placeholder.svg" },
      { id: "shoes2", label: "Opción 2", image: "/placeholder.svg" },
      { id: "shoes3", label: "Opción 3", image: "/placeholder.svg" },
    ]
  },
  "accessories": {
    question: "¿Qué accesorio eleva cualquier outfit para ti?",
    options: [
      { id: "acc1", label: "Opción 1", image: "/placeholder.svg" },
      { id: "acc2", label: "Opción 2", image: "/placeholder.svg" },
      { id: "acc3", label: "Opción 3", image: "/placeholder.svg" },
    ]
  },
  "base": {
    question: "¿Cuál es tu prenda base ideal para sentirte tú?",
    options: [
      { id: "base1", label: "Opción 1", image: "/placeholder.svg" },
      { id: "base2", label: "Opción 2", image: "/placeholder.svg" },
      { id: "base3", label: "Opción 3", image: "/placeholder.svg" },
    ]
  },
  "jacket": {
    question: "¿Qué tipo de capa exterior define más tu estilo?",
    options: [
      { id: "jacket1", label: "Opción 1", image: "/placeholder.svg" },
      { id: "jacket2", label: "Opción 2", image: "/placeholder.svg" },
      { id: "jacket3", label: "Opción 3", image: "/placeholder.svg" },
    ]
  }
};

// Opciones de referentes de estilo
const STYLE_REFERENCES = [
  { id: "ref1", label: "Referente 1", image: "/placeholder.svg" },
  { id: "ref2", label: "Referente 2", image: "/placeholder.svg" },
  { id: "ref3", label: "Referente 3", image: "/placeholder.svg" },
];

const StylePreferencesBlock: React.FC<StylePreferencesBlockProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState<number>(1); // 1, 2, 3 o 4
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedLookFocus, setSelectedLookFocus] = useState<string>('');
  const [selectedFocusPreference, setSelectedFocusPreference] = useState<string>('');
  const [selectedStyleReference, setSelectedStyleReference] = useState<string>('');
  
  const totalScreens = 4;

  // Maneja la selección de marcas
  const handleBrandToggle = (brandId: string) => {
    setSelectedBrands(prev => {
      // Si ya está seleccionada, quitarla
      if (prev.includes(brandId)) {
        return prev.filter(id => id !== brandId);
      }
      // Si ya hay 3 seleccionadas, no hacer nada
      if (prev.length >= 3) {
        return prev;
      }
      // Agregar la marca
      return [...prev, brandId];
    });
  };

  // Verifica si se pueden avanzar en cada pantalla
  const canAdvance = () => {
    switch (currentScreen) {
      case 1: 
        return selectedBrands.length >= 2 && selectedBrands.length <= 3;
      case 2:
        return !!selectedLookFocus;
      case 3:
        return !!selectedFocusPreference;
      case 4:
        return !!selectedStyleReference;
      default:
        return false;
    }
  };

  // Maneja el avance a la siguiente pantalla
  const handleNext = () => {
    if (currentScreen < totalScreens) {
      setCurrentScreen(prev => prev + 1);
    } else if (onComplete) {
      onComplete({
        favoriteMarks: selectedBrands,
        lookFocus: selectedLookFocus,
        focusPreference: selectedFocusPreference,
        styleReference: selectedStyleReference
      });
    }
  };

  // Maneja el retroceso a la pantalla anterior
  const handlePrevious = () => {
    if (currentScreen > 1) {
      setCurrentScreen(prev => prev - 1);
    }
  };

  // Renderiza la pantalla actual según el estado
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return renderBrandsScreen();
      case 2:
        return renderLookFocusScreen();
      case 3:
        return renderConditionalQuestionScreen();
      case 4:
        return renderStyleReferenceScreen();
      default:
        return null;
    }
  };

  // Pantalla 1: Selección de marcas favoritas - ahora en formato vertical
  const renderBrandsScreen = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-castio text-center">
          ¿Con qué marcas te identificas más?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Elige tus dos o tres favoritas.
        </p>

        <div className="flex flex-col space-y-3">
          {BRAND_OPTIONS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandToggle(brand.id)}
              className={`
                py-3 px-4 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-center
                ${selectedBrands.includes(brand.id)
                  ? "border-closy-pink bg-closy-pink/5"
                  : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <span className="font-space text-lg">{brand.name}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Seleccionadas: {selectedBrands.length}/3 (mínimo 2)
        </p>
      </div>
    );
  };

  // Pantalla 2: Foco del look
  const renderLookFocusScreen = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-castio text-center">
          ¿Qué parte del look es más importante para ti?
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {LOOK_FOCUS_OPTIONS.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedLookFocus(option.id)}
              className={`
                flex flex-col items-center border-2 rounded-lg p-3 cursor-pointer transition-all duration-200
                ${selectedLookFocus === option.id
                  ? "border-closy-pink bg-closy-pink/5"
                  : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <div className="h-32 w-full mb-2 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-space text-center">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Pantalla 3: Pregunta condicional basada en la respuesta anterior
  const renderConditionalQuestionScreen = () => {
    if (!selectedLookFocus || !CONDITIONAL_QUESTIONS[selectedLookFocus]) {
      return <div>Por favor regresa y selecciona una opción.</div>;
    }

    const questionData = CONDITIONAL_QUESTIONS[selectedLookFocus];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-castio text-center">
          {questionData.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {questionData.options.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedFocusPreference(option.id)}
              className={`
                flex flex-col items-center border-2 rounded-lg p-3 cursor-pointer transition-all duration-200
                ${selectedFocusPreference === option.id
                  ? "border-closy-pink bg-closy-pink/5"
                  : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <div className="h-40 w-full mb-2 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-space text-center">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Pantalla 4: Selección de referentes/influencers
  const renderStyleReferenceScreen = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-castio text-center">
          ¿Con cuál de estas personas conectas más a nivel de estilo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STYLE_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              onClick={() => setSelectedStyleReference(ref.id)}
              className={`
                flex flex-col items-center border-2 rounded-lg p-3 cursor-pointer transition-all duration-200
                ${selectedStyleReference === ref.id
                  ? "border-closy-pink bg-closy-pink/5"
                  : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <div className="h-48 w-full mb-2 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={ref.image}
                  alt={ref.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-space text-center">{ref.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <ProgressDisplay current={currentScreen - 1} total={totalScreens} />

      <Card className="border-none shadow-lg">
        <CardContent className="p-6 space-y-6">
          {renderCurrentScreen()}
        </CardContent>
      </Card>

      <NavigationButtons
        currentIndex={currentScreen - 1}
        totalItems={totalScreens}
        canAdvance={canAdvance()}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default StylePreferencesBlock;
