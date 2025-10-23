import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Hero from '@/components/Hero';
import RecipientSelector, { Recipient } from '@/components/RecipientSelector';
import BudgetSelector, { BudgetRange } from '@/components/BudgetSelector';
import ProductSelector, { ProductOption } from '@/components/ProductSelector';
import GenerateSection from '@/components/GenerateSection';
import RecommendationDisplay from '@/components/RecommendationDisplay';

const RECIPIENTS: Recipient[] = [
  { id: 'mom', label: 'Mom', emoji: '👩' },
  { id: 'dad', label: 'Dad', emoji: '👨' },
  { id: 'wife', label: 'Wife', emoji: '👰' },
  { id: 'husband', label: 'Husband', emoji: '🤵' },
  { id: 'son', label: 'Son', emoji: '👦' },
  { id: 'daughter', label: 'Daughter', emoji: '👧' },
  { id: 'friend', label: 'Friend', emoji: '🤝' },
  { id: 'teacher', label: 'Teacher', emoji: '👩‍🏫' },
  { id: 'coworker', label: 'Coworker', emoji: '💼' },
  { id: 'boss', label: 'Boss', emoji: '👔' },
  { id: 'grandparent', label: 'Grandparent', emoji: '👴' },
  { id: 'sibling', label: 'Sibling', emoji: '👫' },
];

const BUDGETS: BudgetRange[] = [
  { id: 'under25', label: 'Under $25', range: '$0 - $25' },
  { id: '25to50', label: '$25 - $50', range: '$25 - $50' },
  { id: '50to100', label: '$50 - $100', range: '$50 - $100' },
  { id: 'over100', label: '$100+', range: '$100+' },
];

export default function Home() {
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductOption[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<string>('');
  const [showRecommendation, setShowRecommendation] = useState(false);
  const { toast } = useToast();

  const productsMutation = useMutation({
    mutationFn: async ({ recipient, budget }: { recipient: string; budget: string }) => {
      const response = await apiRequest('POST', '/api/product-suggestions', { recipient, budget });
      const data = await response.json();
      return data as { products: ProductOption[] };
    },
    onSuccess: (data) => {
      setProducts(data.products);
    },
    onError: () => {
      toast({
        title: "Failed to load products",
        description: "Unable to get product suggestions. Please try again.",
        variant: "destructive",
      });
    },
  });

  const generateMutation = useMutation({
    mutationFn: async ({ recipient, budget, productName, productPrice }: { 
      recipient: string; 
      budget: string;
      productName: string;
      productPrice: string;
    }) => {
      const response = await apiRequest('POST', '/api/generate-recommendation', { 
        recipient, 
        budget,
        productName,
        productPrice
      });
      const data = await response.json();
      return data as { recommendation: string };
    },
    onSuccess: (data) => {
      setRecommendation(data.recommendation);
      setShowRecommendation(true);
    },
    onError: () => {
      toast({
        title: "Generation failed",
        description: "Unable to generate recommendation. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (selectedRecipient && selectedBudget && products.length === 0) {
      productsMutation.mutate({ recipient: selectedRecipient, budget: selectedBudget });
    }
  }, [selectedRecipient, selectedBudget]);

  const handleSelectRecipient = (recipientId: string) => {
    setSelectedRecipient(recipientId);
    setSelectedBudget(null);
    setProducts([]);
    setSelectedProduct(null);
    setShowRecommendation(false);
    setRecommendation('');
  };

  const handleSelectBudget = (budgetId: string) => {
    setSelectedBudget(budgetId);
    setProducts([]);
    setSelectedProduct(null);
    setShowRecommendation(false);
    setRecommendation('');
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProduct(productId);
    setShowRecommendation(false);
    setRecommendation('');
  };

  const handleGenerate = () => {
    if (!selectedRecipient || !selectedBudget || !selectedProduct) return;
    
    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;

    generateMutation.mutate({ 
      recipient: selectedRecipient, 
      budget: selectedBudget,
      productName: product.name,
      productPrice: product.price
    });
  };

  const handleEditRecommendation = (newText: string) => {
    setRecommendation(newText);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <RecipientSelector
        recipients={RECIPIENTS}
        selectedRecipient={selectedRecipient}
        onSelect={handleSelectRecipient}
      />
      
      <BudgetSelector
        budgets={BUDGETS}
        selectedBudget={selectedBudget}
        onSelect={handleSelectBudget}
        isVisible={selectedRecipient !== null && !showRecommendation}
      />
      
      <ProductSelector
        products={products}
        selectedProduct={selectedProduct}
        onSelect={handleSelectProduct}
        isVisible={selectedRecipient !== null && selectedBudget !== null}
        isLoading={productsMutation.isPending}
      />
      
      <GenerateSection
        isVisible={selectedRecipient !== null && selectedBudget !== null && selectedProduct !== null && !showRecommendation}
        isGenerating={generateMutation.isPending}
        onGenerate={handleGenerate}
      />
      
      <RecommendationDisplay
        recommendation={recommendation}
        isVisible={showRecommendation}
        onEdit={handleEditRecommendation}
      />
      
      <footer className="border-t mt-auto py-8"></footer>
    </div>
  );
}
