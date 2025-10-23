import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

export interface Recipient {
  id: string;
  label: string;
  emoji: string;
}

interface RecipientSelectorProps {
  recipients: Recipient[];
  selectedRecipient: string | null;
  onSelect: (recipientId: string) => void;
}

export default function RecipientSelector({ recipients, selectedRecipient, onSelect }: RecipientSelectorProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Who are you shopping for?</h2>
        <p className="text-muted-foreground">Select a recipient to get personalized gift recommendations</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {recipients.map((recipient) => {
          const isSelected = selectedRecipient === recipient.id;
          
          return (
            <Card
              key={recipient.id}
              data-testid={`card-recipient-${recipient.id}`}
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 p-6 flex flex-col items-center gap-3 ${
                isSelected ? 'ring-3 ring-primary border-primary' : ''
              }`}
              onClick={() => onSelect(recipient.id)}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <div className="text-5xl" role="img" aria-label={recipient.label}>
                {recipient.emoji}
              </div>
              
              <span className="text-sm font-medium text-center">{recipient.label}</span>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
