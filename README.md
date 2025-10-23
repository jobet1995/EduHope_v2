# EduHope Components

This directory contains reusable UI components for the EduHope website.

## Available Components

### [about_hero.html](file:///d:/Django/EduHope/EduHope/template/components/about_hero.html)
The hero section for the About page with background image and introductory content.

### [core_values.html](file:///d:/Django/EduHope/EduHope/template/components/core_values.html)
Displays the core values of EduHope in a responsive card layout.

### [cta.html](file:///d:/Django/EduHope/EduHope/template/components/cta.html)
Call-to-action section with gradient background and donation/volunteer buttons.

### [footer.html](file:///d:/Django/EduHope/EduHope/template/components/footer.html)
Site footer with navigation links, social media icons, and newsletter signup.

### [hero.html](file:///d:/Django/EduHope/EduHope/template/components/hero.html)
Main hero section for the homepage with headline and call-to-action buttons.

### [impact.html](file:///d:/Django/EduHope/EduHope/template/components/impact.html)
Impact section showcasing key statistics and achievements.

### [impact_statistics.html](file:///d:/Django/EduHope/EduHope/template/components/impact_statistics.html)
Enhanced impact statistics section with animated counters and gradient background.

### [leadership_team.html](file:///d:/Django/EduHope/EduHope/template/components/leadership_team.html)
Leadership team section displaying key team members with profile images and roles.

### [mission_vision.html](file:///d:/Django/EduHope/EduHope/template/components/mission_vision.html)
Displays EduHope's mission and vision statements in a two-column layout.

### [navbar.html](file:///d:/Django/EduHope/EduHope/template/components/navbar.html)
Responsive navigation bar with logo, menu items, and donate button.

### [news.html](file:///d:/Django/EduHope/EduHope/template/components/news.html)
News section displaying recent articles and updates.

### [our_story.html](file:///d:/Django/EduHope/EduHope/template/components/our_story.html)
Timeline-based section showcasing EduHope's history and milestones.

### [partners_sponsors.html](file:///d:/Django/EduHope/EduHope/template/components/partners_sponsors.html)
Partners and sponsors section displaying organizational logos and names.

### [programs.html](file:///d:/Django/EduHope/EduHope/template/components/programs.html)
Programs section displaying EduHope's educational initiatives.

### [testimonials.html](file:///d:/Django/EduHope/EduHope/template/components/testimonials.html)
Testimonials section featuring quotes from students, parents, and volunteers.

## Usage

To include any component in a template, use Django's `{% include %}` tag:

```django
{% include 'components/component_name.html' %}
```

For example, to include the CTA component:

```django
{% include 'components/cta.html' %}
```

## Component Structure

Each component is a self-contained HTML file that includes:
- Semantic HTML structure
- Bootstrap 5 classes for responsive design
- Custom styles when needed (included in the component file)
- Accessibility features

## Styling

Components use:
- EduHope's color palette: 
  - Primary Blue: #1D4ED8
  - Secondary Purple: #9333EA
  - Accent Yellow: #FBBF24
- Bootstrap 5 utility classes
- Custom CSS when necessary (included in component files)

## JavaScript Functionality

Some components include JavaScript for interactive features:
- Fade-in animations on scroll
- Animated counters
- Tooltip initialization
- Form handling

These are implemented in the main [script.js](file:///d:/Django/EduHope/EduHope/static/js/script.js) file.