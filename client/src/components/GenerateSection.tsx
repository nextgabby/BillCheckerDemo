import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';

interface GenerateSectionProps {
  isVisible: boolean;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function GenerateSection({ isVisible, isGenerating, onGenerate }: GenerateSectionProps) {
  if (!isVisible) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col items-center gap-4">
        <Button
          data-testid="button-generate"
          size="lg"
          className="text-lg px-8 py-6 gap-3"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
              <span>Grok is thinking...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span>Use GROK to Get a Discount</span>
            </>
          )}
        </Button>
        
        {isGenerating && (
          <p className="text-sm text-muted-foreground animate-pulse">
            Generating the perfect share to get a great discount...
          </p>
        )}
      </div>
    </div>
  );
}
