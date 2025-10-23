# Call-to-Action / Get Involved Section Component

## Overview
The CTA Section inspires visitors to take action and become part of EduHope's mission. This full-width section features a strong motivational message, vibrant visuals, and clear buttons for user engagement.

## Features
- Full-width section with centered content and balanced padding
- Gradient overlay background (blue to purple - #1D4ED8 → #9333EA)
- Soft image background of students learning with opacity overlay
- Responsive design: stacked layout on mobile, centered content on desktop
- Strong motivational headline and supportive subtext
- Three clear CTAs with distinct styling:
  - Primary Button: "Donate Now" (solid white with blue text)
  - Secondary Button: "Volunteer" (outline white)
  - Tertiary Link: "Partner With Us" (text link with arrow)
- Subtle hover animations for all interactive elements
- Fade-in animation on scroll for text content

## Implementation Details

### HTML Structure
- Uses semantic HTML with appropriate heading hierarchy
- Full-width section with responsive container
- Centered content using Bootstrap utility classes
- Three CTA buttons with distinct styling and icons
- Background image with gradient overlay for visual appeal
- Proper z-index management for layering

### CSS Styling
- Custom styles in `style.css` for:
  - Gradient background using linear-gradient
  - Background image with opacity overlay
  - Button styling with hover effects
  - Text styling with white color for contrast
  - Responsive design using Bootstrap classes
- Consistent with EduHope's color palette:
  - Primary blue (#1D4ED8) for gradient and button text
  - Purple (#9333EA) for gradient
  - White (#FFFFFF) for text and primary button background
  - Yellow (#FBBF24) as accent color (used in other sections)

### JavaScript Functionality
- Fade-in animation triggered on scroll
- Elements appear as they enter the viewport
- Smooth transitions for enhanced user experience

## Content
- **Headline**: "Together, We Build Brighter Futures"
- **Subtext**: "Your support helps provide quality education to children in need. Join our mission today!"
- **CTA Buttons**:
  - Primary: "Donate Now" with heart icon
  - Secondary: "Volunteer" with thumbs up icon
  - Tertiary: "Partner With Us" with arrow icon

## Integration
Include in templates with:
```django
{% include 'components/cta.html' %}
```

## Dependencies
- Bootstrap 5 CSS and JS
- Custom CSS in `style.css`
- Custom JavaScript in `script.js`
- Bootstrap Icons (bi) for button icons