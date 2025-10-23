# EduHope Website Layout Documentation

This document describes the fully responsive website layout for EduHope, a non-profit educational organization. The layout follows modern web design principles with a mobile-first approach and Bootstrap 5 integration.

## Overall Structure

The website follows a component-based architecture using Django templates:

```
EduHope/
├── template/
│   ├── base.html (main layout template)
│   ├── home.html (homepage template)
│   └── components/
│       ├── navbar.html (navigation component)
│       └── footer.html (footer component)
└── static/
    ├── css/
    │   └── style.css (custom styles)
    └── js/
        └── script.js (custom JavaScript)
```

## Key Components

### 1. Base Template (`base.html`)
- Contains the overall HTML structure
- Includes the navbar and footer components
- Defines content blocks for pages to extend
- Implements accessibility features including skip links

### 2. Navbar (`components/navbar.html`)
**Desktop Features:**
- Sticky header with subtle shadow on scroll
- Horizontal layout with logo on left, navigation in center, "Donate Now" button on right
- Heart icon with bold "EduHope" text branding
- Navigation links: Home, About, Programs, Events, News, Contact
- Active page highlighting in primary color (#1D4ED8)
- Dropdown menus for Programs and Events
- Smooth hover transitions for all interactive elements

**Mobile Features:**
- Collapsible hamburger menu with smooth slide-in animation
- Full-width "Donate Now" button inside mobile menu
- Touch-friendly navigation links
- Backdrop blur effect when scrolled

**Accessibility:**
- ARIA labels for all interactive elements
- Keyboard navigable
- Screen reader friendly with current page indicators
- Sufficient color contrast

### 3. Content Area
- Dynamic content block: `{% block content %}{% endblock %}`
- Flexible container system using Bootstrap 5 grid
- Ready for hero sections, featured content, testimonials, etc.
- Consistent spacing and alignment across all sections

### 4. Footer (`components/footer.html`)
**Layout:**
- Multi-column design (4 columns on desktop, stacked on mobile)
- Sections: About, Quick Links, Contact, Newsletter Signup
- Bottom bar with copyright and legal links

**Features:**
- Social media icons with brand-specific hover colors
- Newsletter signup form with email validation
- Quick navigation links
- Contact information with clickable phone and email links
- Responsive design that adapts to all screen sizes

**Styling:**
- Light background (#F8FAFC)
- Muted gray text (#6B7280)
- Primary color accents (#1D4ED8)
- Smooth hover transitions for all interactive elements

## Color Palette

- **Primary:** #1D4ED8 (blue) - used for buttons, links, and highlights
- **Secondary:** #9333EA (purple accent) - used for special elements
- **Background:** #F8FAFC (light) - main background color
- **Text:** #1F2937 (dark gray) - primary text color
- **Muted Text:** #6B7280 (gray) - secondary text and links

## Responsive Behavior

### Breakpoints:
- **Extra Small (<576px):** Mobile portrait
- **Small (576px-767px):** Mobile landscape
- **Medium (768px-991px):** Tablet
- **Large (992px-1199px):** Desktop
- **Extra Large (≥1200px):** Large desktop

### Adaptations:
- Navbar collapses to hamburger menu on small screens
- Footer columns stack vertically on mobile
- Content sections adjust column counts based on screen size
- Touch-friendly button sizes for mobile users
- Appropriate spacing and font sizing for all devices

## Bootstrap 5 Integration

The layout makes extensive use of Bootstrap 5 features:

- **Grid System:** Containers, rows, and columns for responsive layouts
- **Components:** Navbar, buttons, forms, cards, and utilities
- **Utilities:** Spacing, flexbox, display, and sizing classes
- **JavaScript Plugins:** Collapse, dropdown, and modal components
- **Accessibility:** Built-in ARIA attributes and keyboard navigation

## Implementation Guidelines

### For Django Developers:
1. Extend the base template: `{% extends 'base.html' %}`
2. Override content block: `{% block content %}...{% endblock %}`
3. Add page-specific CSS: `{% block extra_css %}...{% endblock %}`
4. Add page-specific JavaScript: `{% block extra_js %}...{% endblock %}`

### For Designers/Content Creators:
1. Use the existing color palette for consistency
2. Follow the established typography hierarchy
3. Maintain the responsive behavior in new components
4. Ensure all new elements are accessible

## Accessibility Features

- **Keyboard Navigation:** Full tab navigation support
- **Screen Reader Support:** ARIA labels and semantic HTML
- **Color Contrast:** WCAG AA compliance for all text
- **Focus Indicators:** Visible focus states for interactive elements
- **Skip Links:** "Skip to main content" link for keyboard users
- **Responsive Text:** Scalable text for zoom functionality

## Performance Considerations

- **Optimized Assets:** Minified CSS and JavaScript
- **Efficient Layout:** Minimal DOM structure
- **Lazy Loading:** Image optimization (when implemented)
- **Caching:** Static file caching through Django

## Browser Support

The layout works in all modern browsers:
- Chrome 79+
- Firefox 70+
- Safari 13+
- Edge 79+

Internet Explorer is not supported.