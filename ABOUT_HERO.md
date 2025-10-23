# About Page Hero Component

## Overview
The About Page Hero Section is a visually inspiring, modern, and trustworthy hero banner that introduces EduHope's mission, vision, and values in a professional yet heartfelt manner.

## Features
- Full-width hero banner positioned at the top of the About Page
- High-quality background image representing education and community empowerment
- Semi-transparent overlay gradient for depth and legibility
- Centered content with responsive design
- "Building Hope Through Knowledge" main heading
- Supporting text about EduHope's dedication to education
- Two call-to-action buttons ("Our Mission" and "Meet the Team")
- Scroll-down indicator with bounce animation
- Responsive design that works on all device sizes
- Accessible with proper ARIA labels and keyboard navigation

## Implementation Details

### HTML Structure
- Uses semantic HTML with appropriate heading hierarchy
- Full-width section with responsive container
- Background image with overlay gradient
- Centered content using Bootstrap utility classes
- SVG icon for EduHope branding
- Two CTA buttons with distinct styling
- Scroll indicator with animated arrow
- Proper ARIA attributes for accessibility

### CSS Styling
- Custom styles in `<style>` tag within the component
- Responsive design using Bootstrap classes
- Background image with cover positioning
- Overlay gradient for text readability
- Text shadow for improved visibility
- Button styling with hover effects
- Bounce animation for scroll indicator
- Consistent with EduHope's color palette:
  - Primary blue (#1D4ED8) for buttons and overlay
  - Accent yellow (#FBBF24) for the EduHope icon
  - White text for overlay content
  - Purple (#9333EA) as secondary accent

### JavaScript Functionality
- Bounce animation for scroll indicator using CSS keyframes
- Responsive behavior for all device sizes
- Hover effects for interactive elements

## Content
- **Headline**: "Building Hope Through Knowledge"
- **Subtitle**: "EduHope is dedicated to empowering underserved communities by providing access to quality education, resources, and lifelong learning opportunities."
- **CTA Buttons**:
  - Primary: "Our Mission" (solid blue button)
  - Secondary: "Meet the Team" (outline white button)
- **Scroll Indicator**: "Explore Our Story" with animated arrow

## Integration
Include in templates with:
```django
{% include 'components/about_hero.html' %}
```

## Dependencies
- Bootstrap 5 CSS
- Custom CSS in style tag
- SVG icons from Bootstrap Icons