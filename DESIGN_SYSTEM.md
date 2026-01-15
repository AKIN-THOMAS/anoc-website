# Design & Style Improvements

## Color Palette

### Primary Colors

- **Orange**: `#f97316` (orange-500) - Used for accents, active states, CTAs
- **Dark Slate**: `#0f172a` (slate-900) - Dark backgrounds
- **Light Slate**: `#f1f5f9` (slate-50) - Light backgrounds
- **Medium Slate**: `#334155` (slate-700) - Text

### Gradient Backgrounds

- **Dark Gradient**: `from-slate-900 to-slate-800` - Used on Services and Contact pages
- **Light Gradient**: `from-slate-50 to-white` - Used on Team page
- **Orange Gradient**: `from-orange-50 to-white` - Used for content boxes

## Typography

### Headings

- **Page Title**: `text-4xl md:text-5xl font-bold` - Hero-level headings
- **Section Title**: `text-2xl md:text-3xl font-bold` - Section headings
- **Card Title**: `text-lg md:text-xl font-semibold` - Card/item titles

### Body Text

- **Regular**: `text-base` with `leading-relaxed` - Main content
- **Small**: `text-sm` - Secondary information
- **Tiny**: `text-xs` - Meta information

### Line Heights

- `leading-relaxed` (1.625) - Main body text
- `leading-tight` - Headings

## Component Styles

### Cards

```css
/* Standard Card */
.rounded-xl
.border border-slate-200
.shadow-lg
.p-6 md:p-8
.hover:border-orange-500
.transition-colors

/* Dark Card (Services, Contact) */
.bg-white/10
.backdrop-blur
.border border-white/20
.rounded-xl
.hover:bg-white/20
.transition-all

/* Gradient Card */
.bg-gradient-to-br from-orange-50 to-white
.border border-orange-200
.rounded-xl
.p-8
```

### Buttons

```css
/* Primary Button */
.bg-gradient-to-r from-orange-500 to-orange-600
.hover:from-orange-600 hover:to-orange-700
.text-white
.font-semibold
.py-3
.rounded-lg
.transition-all transform
.hover:scale-105
.shadow-lg

/* Secondary Button */
.px-6 py-2
.rounded-full
.border-2
.transition-all
.font-semibold
.focus:outline-none focus:ring-2
.focus:ring-offset-2 focus:ring-orange-400
```

### Input Fields

```css
.w-full
.rounded-lg
.border border-slate-300
.px-4 py-3
.text-slate-800 text-sm
.focus:outline-none
.focus:ring-2 focus:ring-orange-500
.focus:border-transparent
.transition
```

### Icons

- **Size**: `w-6 h-6` for icons
- **Color**: `text-orange-400` on dark backgrounds, `text-orange-500` on light
- **Background**: `bg-orange-500/20` or `bg-white/8` for icon containers

## Layout Patterns

### Hero Section

```
Title (4xl-5xl bold)
↓
Subtitle (lg-xl regular)
↓
Hero Content
```

### Two-Column Grid

```
[Image/Content] | [Content/Form]
    50%         |      50%
```

### Three-Column Grid

```
[Card] | [Card] | [Card]
 33%   |  33%   |  33%
```

### Four-Column Grid (Team)

```
[Card] | [Card] | [Card] | [Card]
 25%   |  25%   |  25%   |  25%
```

## Responsive Breakpoints

- **Mobile**: `< 640px` - Single column
- **Tablet**: `640px - 1024px` - Two columns
- **Desktop**: `> 1024px` - Three/Four columns

## Hover Effects

### Cards

- `hover:border-orange-500` - Border color change
- `hover:shadow-2xl` - Shadow increase
- `transform hover:-translate-y-2` - Lift effect

### Buttons

- `hover:scale-105` - Scale up
- `group-hover:opacity-100` - Fade in overlay

### Images

- `group-hover:scale-110` - Zoom in
- `transition-transform duration-500` - Smooth animation

## Spacing System

### Padding

- `p-4`, `p-6`, `p-8` - Card padding
- `px-4 py-3` - Input padding
- `px-6 py-2` - Button padding

### Margins

- `mt-4`, `mt-6`, `mt-16`, `mt-20` - Top margins
- `mb-4`, `mb-6`, `mb-12`, `mb-16` - Bottom margins
- `gap-4`, `gap-6`, `gap-8`, `gap-12` - Grid gaps

### Borders

- `rounded-lg` - Standard (8px)
- `rounded-xl` - Large (12px)
- `rounded-2xl` - Extra large (16px)
- `rounded-full` - Circular (9999px)

## Shadow System

- `shadow-md` - Subtle
- `shadow-lg` - Medium
- `shadow-xl` - Large
- `shadow-2xl` - Extra large

## Opacity & Transparency

- `bg-white/5` - Very transparent
- `bg-white/10` - More transparent
- `bg-white/20` - Semi-transparent
- `opacity-0` to `opacity-100` - Fade effects

## Animation Classes

```css
.transition           /* Basic transition */
/* Basic transition */
.transition-all       /* All properties */
.duration-300         /* 300ms duration */
.duration-500         /* 500ms duration */
.ease-in              /* Easing function */
.transform            /* Enable transforms */
.scale-105            /* Scale to 105% */
.-translate-y-2; /* Move up 2px */
```

## Mobile Optimization

All pages use:

- `hidden md:flex` - Hide on mobile, show on desktop
- `flex-col md:flex-row` - Stack on mobile, row on desktop
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive columns
- `max-w-6xl mx-auto` - Content constraint
- `px-4 md:px-6` - Responsive padding

---

## Key Design Principles Applied

1. **Consistency**: Same colors, fonts, spacing across all pages
2. **Hierarchy**: Clear visual hierarchy with heading sizes
3. **Accessibility**: High contrast ratios, focus states
4. **Responsiveness**: Mobile-first approach
5. **Performance**: Minimal animations, smooth transitions
6. **Professional**: Clean, modern aesthetic

---

This design system ensures a professional, cohesive look across the entire website while maintaining excellent usability and accessibility.
