# Design Guidelines: Grok Target Wish List

## Design Approach
**Reference-Based Approach** - Drawing from Target's established brand identity combined with modern AI-powered web experiences. The design merges Target's recognizable retail aesthetic with X/Twitter's social platform elements, creating a unique campaign landing page that feels both familiar and innovative.

## Core Design Principles
1. **Brand Authenticity**: Honor Target's iconic red and white color scheme while modernizing for a tech-forward AI experience
2. **Guided Journey**: Clear visual progression from selection → generation → sharing
3. **Social Integration**: Seamless connection to X platform with recognizable social sharing patterns
4. **Accessible Interaction**: Large, touch-friendly targets for recipient selection with clear visual feedback

---

## Color Palette

### Light Mode
- **Primary Brand Red**: 0 100% 40% (Target's signature red)
- **Secondary Red**: 0 85% 35% (darker variant for hover states)
- **Accent White**: 0 0% 100%
- **Background Gray**: 0 0% 98%
- **Text Dark**: 0 0% 15%
- **Border Light**: 0 0% 90%
- **Success Green**: 142 70% 45% (for generated state)

### Dark Mode
- **Primary Red**: 0 90% 50%
- **Background Dark**: 0 0% 10%
- **Surface Dark**: 0 0% 15%
- **Text Light**: 0 0% 95%
- **Border Dark**: 0 0% 25%

### X/Twitter Integration
- **X Black**: 0 0% 0%
- **X Gray**: 0 0% 51%

---

## Typography

**Font Stack**: 
- Primary: 'Inter', system-ui, -apple-system, sans-serif
- Accent: 'Plus Jakarta Sans' for headings (optional via Google Fonts)

**Hierarchy**:
- Hero Title: 4xl - 5xl (bold, 600-700 weight)
- Section Headers: 2xl - 3xl (semibold, 600 weight)
- Body Text: base - lg (normal, 400 weight)
- Recipient Cards: lg (medium, 500 weight)
- Buttons: base - lg (medium, 500-600 weight)
- Generated Text: base (normal, 400 weight, line-height 1.6)

---

## Layout System

**Spacing Units**: Consistent use of 4, 8, 12, 16, 24, 32, and 48 (px-4, py-8, gap-12, etc.)

**Container Strategy**:
- Max width: 1280px (max-w-7xl) for main content
- Hero section: Full width with centered inner content (max-w-4xl)
- Recipient grid: max-w-5xl
- Generation area: max-w-3xl

**Grid System**:
- Recipient cards: 2 columns mobile, 3-4 columns tablet, 4-6 columns desktop
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## Component Library

### Hero Section
- **Full-width colored background** with Target red gradient (subtle, top-to-bottom)
- **Large hero title**: "Grok Target Wish List" with AI badge/indicator
- **Tagline**: "AI-Powered Gift Recommendations from Target"
- **Background pattern**: Subtle gift box icons or Target bullseye pattern at 5% opacity
- **Height**: 60vh minimum, centered content vertically

### Recipient Selection Grid
- **Card Design**: Rounded corners (rounded-2xl), white/dark surface, subtle shadow
- **Icon/Image**: Large emoji or illustration for each recipient type (Mom 👩, Dad 👨, etc.)
- **Label**: Clear text beneath icon
- **States**: Default, hover (lift effect with shadow), selected (red border, 3px, with checkmark)
- **Grid Layout**: Responsive grid with consistent gaps (gap-4 to gap-6)

**Recipient Categories** (12 total):
1. Mom, 2. Dad, 3. Wife, 4. Husband, 5. Son, 6. Daughter, 7. Friend, 8. Teacher, 9. Coworker, 10. Boss, 11. Grandparent, 12. Sibling

### Generation Section
- **"Generate with Grok" button**: Large, prominent, Target red background, white text, rounded-xl
- **Loading state**: Animated pulse/spinner with "Grok is thinking..." message
- **Button position**: Centered below recipient selection

### Recommendation Display
- **Container**: Large text area/display box with light background (bg-gray-50 in light mode)
- **Typography**: Readable font size (text-lg), generous line height
- **Edit functionality**: Contenteditable div or textarea with subtle edit indicator
- **Character count**: Display remaining characters for X post (280 limit consideration)

### Share to X Button
- **Design**: X/Twitter black background, white X logo, "Share on X" text
- **Position**: Below recommendation box, right-aligned or centered
- **Behavior**: Opens X intent URL in new tab with pre-filled recommendation text

### Footer
- **Minimal design**: Target logo, campaign info, legal disclaimers
- **Links**: Target.com, Privacy Policy, Terms
- **Social**: X/Twitter handle for the campaign

---

## Images

### Hero Section
**Large hero image/graphic** featuring:
- AI/technology theme merged with gift-giving imagery
- Target shopping bags, gift boxes, or product collage with digital/AI overlay
- Dimensions: 1920x800px minimum for full-width hero
- Position: Background image with overlay for text readability, OR side-by-side layout (image right, content left on desktop)
- Style: Modern, bright, aspirational with Target products visible

### Recipient Card Icons
- Large emoji or simple illustrations (128x128px minimum)
- Consistent style across all categories
- Can use emoji natively or icon library (Heroicons for supplementary icons)

### Grok Branding
- X AI/Grok logo where appropriate (small badge near generation button)
- Subtle integration, not competing with Target branding

---

## Interaction States & Animations

**Minimal, purposeful animations**:
- Card hover: Slight lift (translateY -2px) with shadow increase (transition 200ms)
- Button hover: Slight brightness increase, no transform
- Loading: Gentle pulse or spinner (duration 1s, repeat)
- Selection: Quick scale-in animation for checkmark (duration 150ms)

**No excessive animations** - keep focus on functionality and brand clarity

---

## Accessibility
- Color contrast ratio 4.5:1 minimum for text
- Focus indicators on all interactive elements (red outline)
- ARIA labels for icon-only buttons
- Keyboard navigation support throughout
- Semantic HTML structure (proper heading hierarchy)
- Alt text for all images

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column hero with stacked elements
- 2-column recipient grid
- Full-width buttons
- Reduced padding (py-12 instead of py-24)

**Tablet (768px - 1024px)**:
- 3-column recipient grid
- Balanced hero layout
- Moderate spacing (py-16 to py-20)

**Desktop (> 1024px)**:
- 4-6 column recipient grid
- Full hero treatment
- Generous spacing (py-24 to py-32)
- Max-width containers for optimal reading

---

## Unique Features

1. **Progressive Disclosure**: Show generation section only after recipient selection
2. **Real-time Preview**: Display formatted X post preview before sharing
3. **Copy to Clipboard**: Quick copy button for recommendation text
4. **Multiple Recommendations**: Option to generate another recommendation without losing the first

This design creates a cohesive, branded experience that bridges Target's retail identity with modern AI capabilities and social sharing, optimized for conversion and user engagement.