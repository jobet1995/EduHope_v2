# EduHope Impact Section Component

A visually inspiring, fully responsive Impact/Statistics section for showcasing EduHope's measurable achievements and community impact.

## Features

### Layout & Structure
- Full-width section positioned below the Hero area
- Center-aligned section title and subtitle at the top
- Grid layout displaying four key statistics in a balanced design
- Responsive design adapting from four columns on large screens to two on tablets and one on mobile
- Consistent vertical and horizontal spacing with generous padding

### Visual Theme & Background
- Soft, uplifting background with a light gradient (white to pale blue)
- Clean, open look with harmonious color tones reflecting hope and progress
- Educational-themed icons for visual reinforcement

### Section Title & Subtitle
- Main Heading: "Our Impact in Numbers" in large, bold text
- Subheading: "Each number represents a life changed, a dream realized, and a future built through education."
- Clean, modern sans-serif fonts
- Primary color (#1D4ED8) for titles, muted gray for subtitles

### Statistics Display
Four key statistics representing EduHope's impact areas:
1. "10,000+ Students Empowered" with people icon
2. "150+ Partner Schools" with building icon
3. "500+ Active Volunteers" with thumbs up icon
4. "300+ Scholarships Awarded" with award icon

Each metric displayed in an individual card with:
- Large, bold numeric value as the focal point
- Supporting label or short description
- Educational-themed icon above the number
- Center-aligned elements within each card
- Soft shadows, rounded corners, and hover animations

### Color Palette
- Primary Color: #1D4ED8 (Blue) - trust and education
- Accent Colors: #FBBF24 (Yellow) and #9333EA (Purple) for highlights
- Background: Light gradient (#F9FAFB to pale blue)
- Text: Dark gray (#1F2937) or muted gray (#4B5563)

### Typography & Iconography
- Large, bold numeric fonts to emphasize scale
- Clean, geometric icons matching EduHope's branding
- Subtle hover animations for interactive feel

### Call-to-Action (CTA)
- Optional CTA button: "See More Stories"
- Styled with EduHope's primary blue and rounded edges
- Hover transitions for enhanced interaction

### Responsiveness & Accessibility
- Fully responsive across desktop, tablet, and mobile
- Adequate spacing between cards for touch devices
- Descriptive ARIA labels and accessible color contrast
- Legible typography and icons at all screen sizes

## Integration

### Usage
Include the component in any template that extends `base.html`:

```django
{% block content %}
  {% include 'components/impact.html' %}
  <!-- Other content -->
{% endblock %}
```

### Customization
To customize the statistics or styling, modify the component file directly:
- Update the numbers and labels in the HTML
- Modify colors in the CSS section
- Change icons by replacing the SVG code

## Dependencies
- Bootstrap 5 CSS and JS
- Django template engine