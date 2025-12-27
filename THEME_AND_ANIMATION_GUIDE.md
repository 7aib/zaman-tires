# Theme & Animation Update Guide

## Changes Made

### 1. Color Theme (Red & Black)
Your website theme has been updated from blue to **red and black**:
- **Primary Color**: Red (#dc2626) - Used for main buttons, links, and primary elements
- **Secondary Color**: Black (#1f2937) - Used for backgrounds and secondary elements
- **Accent Color**: Red (#dc2626) - Used for accent elements

All existing components will automatically use the new color scheme.

### 2. Tire Animation Component
A new `TireAnimation` component has been created that you can use anywhere on your site.

#### Usage Examples

##### Basic Usage (Medium spinning tire):
```tsx
import TireAnimation from "@/components/TireAnimation";

export default function MyComponent() {
  return <TireAnimation />;
}
```

##### With Size Options:
```tsx
<TireAnimation size="small" />    {/* 48px tire */}
<TireAnimation size="medium" />   {/* 80px tire */}
<TireAnimation size="large" />    {/* 128px tire */}
```

##### With Different Animations:
```tsx
<TireAnimation animation="spin" />    {/* Continuous rotation */}
<TireAnimation animation="bounce" />  {/* Up and down bounce */}
<TireAnimation animation="pulse" />   {/* Opacity pulse effect */}
```

##### Complete Example:
```tsx
import TireAnimation from "@/components/TireAnimation";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center gap-8">
      <TireAnimation size="large" animation="spin" />
      <div>
        <h1 className="text-3xl font-bold text-red-600">Welcome</h1>
        <p className="text-gray-600">Our new red and black theme!</p>
      </div>
    </div>
  );
}
```

##### Using with Custom Styling:
```tsx
<TireAnimation 
  size="large" 
  animation="bounce"
  className="drop-shadow-lg" 
/>
```

## Where to Add Tire Animations

Consider adding tire animations to:
1. **Hero Section** - Large spinning tire in the background
2. **Services Section** - Animated tires for each service card
3. **Loading States** - Use bounce or spin animation while loading content
4. **CTAs (Call-to-Action)** - Pulse animation to draw attention
5. **Product Cards** - Small spinning tires next to product names

## CSS Classes Available

You can also use these CSS classes directly:
- `.tire-spin` - Rotating animation (2s)
- `.tire-bounce` - Bouncing animation (0.6s)
- `.tire-pulse` - Opacity pulsing animation (2s)
- `.tire-icon` - Base tire styling

Example with raw HTML:
```html
<div class="tire-icon tire-spin"></div>
```

## Browser Support
All animations use standard CSS and are supported in all modern browsers.
