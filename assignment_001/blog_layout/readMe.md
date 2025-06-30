# Responsive Blog Page Layout

A modern, responsive blog layout built with semantic HTML5 elements and CSS Grid/Flexbox. This project demonstrates proper use of HTML structural elements and responsive design principles.

## Assignment Requirements

- [x] Create responsive blog page layout using `<div>`, `<section>`, and `<article>` elements
- [x] Use `<div>` for the main container
- [x] Use `<section>` for different parts (header, main content, footer)
- [x] Use `<article>` for individual blog posts with titles and content
- [x] Add unique `id` attributes to sections
- [x] Add `classes` to style similar articles
- [x] Single file implementation with embedded CSS

## HTML Structure

```
├── div.container (Main Container)
│   ├── section#header (Header Section)
│   ├── nav (Navigation)
│   ├── section#main-content (Main Content)
│   │   └── article.blog-post (Individual Blog Posts)
│   │       ├── article.featured-post#about
│   │       ├── article.python-projects#python-work
│   │       ├── article.flutter-projects#flutter-work
│   │       └── article.developer-philosophy#philosophy
│   └── section#footer (Footer Section)
```

## Features

### Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices first
- **CSS Grid Layout**: Blog posts arranged in a responsive grid
- **Flexible Navigation**: Adapts from horizontal to vertical on smaller screens
- **Breakpoints**:
  - Desktop: 1200px max-width
  - Tablet: 768px and below
  - Mobile: 480px and below

### Visual Elements

- **Gradient Backgrounds**: Modern gradient color schemes
- **Smooth Animations**: Hover effects and transitions
- **Card-Based Design**: Blog posts styled as elevated cards
- **Typography**: Clean, readable font hierarchy
- **Color Scheme**: Professional blue-purple gradient theme

### Semantic HTML

- **Proper Structure**: Meaningful use of HTML5 semantic elements
- **Accessibility**: Screen reader friendly with proper heading hierarchy
- **SEO Optimized**: Semantic markup for better search engine understanding

## Responsive Breakpoints

| Device | Screen Size | Layout Changes |
|--------|-------------|----------------|
| Desktop | > 768px | Multi-column grid, horizontal navigation |
| Tablet | ≤ 768px | Single column grid, smaller text |
| Mobile | ≤ 480px | Stacked layout, vertical navigation |

## Content Structure

### Featured Article

- **About Me**: Main featured post spanning full width
- Highlighted with special gradient background
- Contains personal introduction and project highlights

### Blog Posts

1. **Python Development**: Showcases Python projects and experience
2. **Flutter & Mobile Development**: Highlights mobile app development work
3. **Development Philosophy**: Personal insights and approach to coding

## Technical Implementation

### CSS Features Used

- **CSS Grid**: For responsive blog post layout
- **Flexbox**: For navigation and footer alignment
- **CSS Variables**: Could be easily added for theme customization
- **Media Queries**: Responsive design across devices
- **Transitions**: Smooth hover and interaction effects
- **Box Shadows**: Depth and elevation effects

### HTML5 Elements

- `<section>`: Page sections (header, main, footer)
- `<article>`: Individual blog posts
- `<nav>`: Navigation menu
- `<div>`: Container and layout elements
- `<header>`: Article headers with metadata

## Getting Started

1. **Clone or Download**: Get the HTML file
2. **Open in Browser**: Double-click the HTML file or serve it locally
3. **View Responsively**: Resize browser window to test responsive design

## File Structure

```
project/
├── index.html          # Main HTML file with embedded CSS
└── README.md          # This documentation file
```

## Customization

### Colors

The color scheme uses a blue-purple gradient theme:

- Primary: `#667eea` to `#764ba2`
- Background: `#f4f4f4`
- Text: `#333`
- Accent: `#555`

### Layout

- **Container Width**: 1200px maximum
- **Grid Gap**: 2rem between blog posts
- **Padding**: Consistent 2rem spacing

## Contact Information

**Developer**: Praveen Yadav  
**Technologies**: Python | Flutter | Firebase  
**Portfolio**: Available in the blog layout

## Assignment Completion

This project successfully demonstrates:

- Proper HTML5 semantic structure
- Responsive CSS design
- Use of required HTML elements (`<div>`, `<section>`, `<article>`)
- Unique IDs for sections
- CSS classes for styling similar elements
- Single-file implementation
- Professional, modern design
- Mobile-friendly responsive layout

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

*This project was created as part of a web development assignment focusing on semantic HTML structure and responsive CSS design.*
