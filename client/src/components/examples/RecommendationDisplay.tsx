import { useState } from 'react';
import RecommendationDisplay from '../RecommendationDisplay';

export default function RecommendationDisplayExample() {
  const [recommendation, setRecommendation] = useState(
    "🎁 Looking for the perfect gift for Mom? Check out the Tree Hut Tropic Glow Whipped Shea Body Butter at Target - luxurious self-care at just $9.99! She'll love the tropical scent. #TargetFinds #GiftIdeas"
  );

  return (
    <RecommendationDisplay
      recommendation={recommendation}
      isVisible={true}
      onEdit={setRecommendation}
    />
  );
}
