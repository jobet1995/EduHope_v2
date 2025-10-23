# EduHope Hero Component

A visually striking, fully responsive hero section for the EduHope homepage.

## Features

### Layout & Structure
- Full-width section at the top of the page
- Background image with semi-transparent overlay for text readability
- Content centered vertically and horizontally
- Responsive padding and spacing for all devices

### Background
- High-quality inspirational image of students and education
- Dark overlay (65% opacity) to enhance text contrast
- Background covers full hero area and maintains aspect ratio

### Typography
- Headline: "Empowering Communities Through Education" in large, bold white text
- Subtitle: Descriptive tagline with smaller text
- Text shadow for improved visibility on various backgrounds

### Call-to-Action Buttons
- Primary CTA: "Donate Now" button with primary color (#1D4ED8)
- Secondary CTA: "Learn More" outline button with white border
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Hover effects with subtle animations

### Additional Elements
- Book icon in a blue circle for visual branding
- Animated scroll indicator with bounce animation
- Full accessibility support with ARIA labels

## Color Scheme
- Primary: #1D4ED8 (blue)
- Background overlay: #000000 (65% opacity)
- Text: #FFFFFF (white)

## Responsive Behavior
- Mobile-first design approach
- Text and buttons resize appropriately for all screen sizes
- Touch-friendly button sizes
- Scroll indicator hidden on mobile devices

## Integration

### Usage
Include the component in any template that extends `base.html`:

```django
{% block content %}
  {% include 'components/hero.html' %}
  <!-- Other content -->
{% endblock %}
```

### Customization
To customize the background image, modify the `background-image` property in the CSS:

```css
.hero-background {
  background-image: url('path/to/your/image.jpg');
}
```

### Accessibility
- All interactive elements have descriptive ARIA labels
- Sufficient color contrast for readability
- Keyboard navigable
- Animated elements respect `prefers-reduced-motion` settings

## Dependencies
- Bootstrap 5 CSS and JS
- Django template engine