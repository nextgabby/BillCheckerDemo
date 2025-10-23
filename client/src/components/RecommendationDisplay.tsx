import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SiX } from 'react-icons/si';
import { Copy, Edit3, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RecommendationDisplayProps {
  recommendation: string;
  isVisible: boolean;
  onEdit: (newText: string) => void;
}

const MAX_TWEET_LENGTH = 280;

export default function RecommendationDisplay({ recommendation, isVisible, onEdit }: RecommendationDisplayProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(recommendation);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    setEditedText(recommendation);
  }, [recommendation]);

  if (!isVisible) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied to clipboard",
        description: "Gift recommendation copied successfully",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedText);
  };

  const handleShareToX = () => {
    const tweetText = encodeURIComponent(editedText);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
  };

  const charCount = editedText.length;
  const isOverLimit = charCount > MAX_TWEET_LENGTH;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Share to unlock your discount</h3>
          <div className="flex items-center gap-2">
            <Button
              data-testid="button-copy"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            {!isEditing && (
              <Button
                data-testid="button-edit"
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="gap-2"
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </Button>
            )}
          </div>
        </div>

        <Card className="p-6">
          {isEditing ? (
            <div className="space-y-3">
              <textarea
                ref={textareaRef}
                data-testid="textarea-recommendation"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="w-full min-h-[150px] p-4 rounded-md border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Edit your recommendation..."
              />
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {charCount} / {MAX_TWEET_LENGTH} characters
                </span>
                <Button
                  data-testid="button-save"
                  size="sm"
                  onClick={handleSave}
                  disabled={isOverLimit}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-lg leading-relaxed whitespace-pre-wrap" data-testid="text-recommendation">
              {editedText}
            </p>
          )}
        </Card>

        <div className="flex justify-center">
          <Button
            data-testid="button-share-x"
            size="lg"
            className="bg-[#000000] hover:bg-[#1a1a1a] text-white gap-3 px-8 text-center"
            onClick={handleShareToX}
          >
            <SiX className="w-5 h-5 flex-shrink-0" />
            <span>Share the experience in X to unlock a discount for you and friends</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
