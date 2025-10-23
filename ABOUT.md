# About Page Component

## Overview
The About Page tells EduHope's story in a visually compelling and emotionally resonant way. It communicates the organization's mission, vision, impact, and team while maintaining trustworthiness and emotional connection with visitors.

## Features
- Full-width responsive layout with Bootstrap 5 styling
- Hero banner with inspiring background image and overlay gradient
- Mission & Vision section with two-column layout
- Core Values section with icon cards in a responsive grid
- Impact/Statistics section with animated counters
- Our Story section with timeline layout
- Leadership/Team section with profile cards
- Partners/Sponsors section with logo grid
- Call-to-Action section with gradient background
- Interactive features:
  - Animated number counters for statistics
  - Scroll-triggered fade-in animations for sections
  - Tooltip functionality for partner logos
  - Responsive design for all device sizes

## Implementation Details

### HTML Structure
- Uses semantic HTML with appropriate heading hierarchy
- Responsive grid layouts using Bootstrap classes
- SVG icons for visual elements
- Proper ARIA attributes for accessibility
- Breadcrumb navigation for SEO context

### CSS Styling
- Custom styles in `<style>` tag within the template
- Responsive design using Bootstrap utility classes
- Consistent with EduHope's color palette:
  - Primary blue (#1D4ED8) for headings and interactive elements
  - Accent yellow (#FBBF24) for highlights
  - Light backgrounds with subtle shadows for cards
- Hover effects for cards and interactive elements
- Timeline layout for story section
- Gradient background for CTA section

### JavaScript Functionality
- Count-up animations for statistics using data-target attributes
- Fade-in animations triggered on scroll
- Tooltip initialization for partner logos
- Smooth scrolling and responsive behavior

## Sections

1. **Hero Banner**
   - Full-width header with inspiring background image
   - Overlay gradient for readability
   - Centered headline and tagline

2. **Mission & Vision**
   - Two-column layout using Bootstrap's grid
   - Strong typography with highlighted key phrases

3. **Core Values**
   - 3x2 grid layout with icon cards
   - SVG icons representing each value
   - Short descriptions for each value

4. **Impact / Statistics**
   - Eye-catching numerical data in counter cards
   - Animated count-up on scroll
   - Responsive grid layout

5. **Our Story**
   - Timeline-style layout showing organization growth
   - Major milestones and achievements
   - Responsive alternating rows for visual flow

6. **Leadership / Team**
   - Grid layout with profile cards
   - Placeholder images with SVG icons
   - LinkedIn icons for team members
   - Hover effects on cards

7. **Partners & Sponsors**
   - Logo grid of supporting institutions
   - Tooltips for partner names
   - Hover effects on logos

8. **Call-to-Action**
   - Closing message encouraging engagement
   - "Donate Now" and "Become a Volunteer" buttons
   - Gradient background with overlay image

## Integration
The About page is a standalone template that extends the base template:
```django
{% extends 'base.html' %}
```

## Dependencies
- Bootstrap 5 CSS and JS
- Custom CSS in style tag
- Custom JavaScript in script.js
- SVG icons from Bootstrap Icons