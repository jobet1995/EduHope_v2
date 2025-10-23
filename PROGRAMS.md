# Programs Section Component

## Overview
The Programs Section showcases EduHope's main educational initiatives in an inspiring, easy-to-scan layout that invites visitors to explore or support each program.

## Features
- Responsive grid layout (3-4 cards)
- Educational-themed SVG icons
- Clean, uplifting design with EduHope's branding
- Subtle interactive effects:
  - Fade-in animation on scroll
  - Gentle hover elevation on program cards
  - Button color transition for interactivity
- Accessible design with proper contrast and focus states

## Implementation Details

### HTML Structure
- Uses semantic HTML with appropriate heading hierarchy
- Each program is contained in a Bootstrap card component
- SVG icons for visual representation of each program
- "Learn More" buttons for each program

### CSS Styling
- Custom styles in `style.css` for:
  - Card hover effects (elevation and shadow)
  - Button transitions
  - Fade-in animations
- Responsive design using Bootstrap grid classes
- Consistent with EduHope's color palette

### JavaScript Functionality
- Fade-in animations triggered on scroll
- Elements appear as they enter the viewport
- Smooth transitions for enhanced user experience

## Program Cards
1. **Literacy Outreach**
   - Bringing reading and writing education to remote communities to open the doors of opportunity for every child.

2. **STEM Learning Labs**
   - Equipping schools with modern tools and workshops to spark curiosity and innovation in young learners.

3. **Teacher Empowerment**
   - Supporting educators through training and mentorship, ensuring quality education for all.

4. **Scholarship Assistance**
   - Providing financial aid to bright students who aspire to continue their studies despite hardship.

5. **Community Learning Centers**
   - Establishing accessible learning spaces in underserved communities to provide educational resources and support.

6. **Digital Literacy Program**
   - Teaching essential digital skills to bridge the technology gap and empower individuals in the modern world.

## Integration
Include in templates with:
```django
{% include 'components/programs.html' %}
```

## Dependencies
- Bootstrap 5 CSS and JS
- Custom CSS in `style.css`
- Custom JavaScript in `script.js`