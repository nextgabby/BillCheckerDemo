import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Loader2, ShoppingCart } from 'lucide-react';

export interface ProductOption {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface ProductSelectorProps {
  products: ProductOption[];
  selectedProduct: string | null;
  onSelect: (productId: string) => void;
  isVisible: boolean;
  isLoading: boolean;
}

export default function ProductSelector({ 
  products, 
  selectedProduct, 
  onSelect, 
  isVisible,
  isLoading 
}: ProductSelectorProps) {
  if (!isVisible) return null;

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://www.target.com/c/gift-ideas/-/N-96d2i', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Pick Your Perfect Gift</h2>
        <p className="text-muted-foreground">Choose from these AI-powered recommendations</p>
      </div>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Grok is finding perfect gifts...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => {
            const isSelected = selectedProduct === product.id;
            
            return (
              <Card
                key={product.id}
                data-testid={`card-product-${product.id}`}
                className={`relative transition-all duration-200 hover:shadow-lg p-6 flex flex-col gap-3 ${
                  isSelected ? 'ring-3 ring-primary border-primary' : ''
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                
                <div 
                  className="flex-1 space-y-2 cursor-pointer"
                  onClick={() => onSelect(product.id)}
                >
                  <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <Button
                  data-testid={`button-buy-${product.id}`}
                  variant="default"
                  className="w-full gap-2 mt-2"
                  onClick={handleBuyClick}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Shop at Target
                </Button>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
