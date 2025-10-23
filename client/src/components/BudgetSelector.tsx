import { Card } from '@/components/ui/card';
import { Check, DollarSign } from 'lucide-react';

export interface BudgetRange {
  id: string;
  label: string;
  range: string;
}

interface BudgetSelectorProps {
  budgets: BudgetRange[];
  selectedBudget: string | null;
  onSelect: (budgetId: string) => void;
  isVisible: boolean;
}

export default function BudgetSelector({ budgets, selectedBudget, onSelect, isVisible }: BudgetSelectorProps) {
  if (!isVisible) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">What's your budget?</h2>
        <p className="text-muted-foreground">Select a price range for your gift</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {budgets.map((budget) => {
          const isSelected = selectedBudget === budget.id;
          
          return (
            <Card
              key={budget.id}
              data-testid={`card-budget-${budget.id}`}
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 p-6 flex flex-col items-center gap-3 ${
                isSelected ? 'ring-3 ring-primary border-primary' : ''
              }`}
              onClick={() => onSelect(budget.id)}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <DollarSign className="w-8 h-8 text-primary" />
              
              <div className="text-center">
                <div className="text-sm font-semibold">{budget.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{budget.range}</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
