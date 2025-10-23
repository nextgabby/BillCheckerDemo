import { useState } from 'react';
import GenerateSection from '../GenerateSection';

export default function GenerateSectionExample() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <GenerateSection
      isVisible={true}
      isGenerating={isGenerating}
      onGenerate={handleGenerate}
    />
  );
}
