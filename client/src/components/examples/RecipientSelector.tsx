import { useState } from 'react';
import RecipientSelector, { Recipient } from '../RecipientSelector';

const mockRecipients: Recipient[] = [
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

export default function RecipientSelectorExample() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <RecipientSelector
      recipients={mockRecipients}
      selectedRecipient={selected}
      onSelect={setSelected}
    />
  );
}
