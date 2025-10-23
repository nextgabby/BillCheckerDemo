import heroImage from '@assets/stock_images/colorful_gift_boxes__9066de96.jpg';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Grok AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Grok Target
              </span>
              <br />
              Wish List
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              AI-Powered Gift Recommendations from Target. Let Grok help you find the perfect gift for everyone on your list.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Target gift shopping with AI" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
