# Latest News / Blog Highlight Section Component

## Overview
The News Section showcases EduHope's latest initiatives, success stories, and community impact. This section keeps visitors informed about the organization's ongoing work and achievements through featured articles with engaging visuals.

## Features
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Clean, professional design using EduHope's color palette
- Subtle interactive effects:
  - Fade-in animation on scroll
  - Gentle hover elevation on news cards
  - Image scaling effect on hover
  - Button color transition for interactivity
- Accessible design with proper contrast and focus states
- Featured images with SVG placeholders
- Category tags with color coding
- Publication dates for articles
- "View All News" call-to-action button

## Implementation Details

### HTML Structure
- Uses semantic HTML with appropriate heading hierarchy
- Each news item is contained in a Bootstrap card component
- SVG placeholders for featured images
- Category tags with Bootstrap badge components
- Publication dates for articles
- "Read More" links for each article
- "View All News" button linking to full blog/archive

### CSS Styling
- Custom styles in `style.css` for:
  - Card hover effects (elevation and shadow)
  - Image scaling on hover
  - CTA button styling
  - Fade-in animations
- Responsive design using Bootstrap grid classes
- Consistent with EduHope's color palette:
  - Primary blue (#1D4ED8) for headings and primary buttons
  - Accent yellow (#FBBF24) for warning badges
  - White backgrounds with soft shadows

### JavaScript Functionality
- Fade-in animations triggered on scroll
- Elements appear as they enter the viewport
- Smooth transitions for enhanced user experience

## News Articles
1. **New Learning Hubs Open Across Rural Areas**
   - EduHope expands access to education by launching new community learning centers in underserved villages.
   - Category: Community
   - Date: May 15, 2023

2. **Scholarship Program Empowers 500 More Students**
   - The EduHope Scholarship Program continues to change lives, offering financial support to promising young learners.
   - Category: Scholarship
   - Date: April 28, 2023

3. **Teachers Unite for Innovation Workshop**
   - Educators from all over the region joined EduHope's training event to share creative classroom techniques.
   - Category: Events
   - Date: April 12, 2023

## Integration
Include in templates with:
```django
{% include 'components/news.html' %}
```

## Dependencies
- Bootstrap 5 CSS and JS
- Custom CSS in `style.css`
- Custom JavaScript in `script.js`