# Employee Data Table Assignment

A responsive HTML table displaying employee information with modern CSS styling and alternating row colors.

## Assignment Requirements

This project fulfills the following assignment requirements:

1. ✅ **Responsive Table Design**: Table width is responsive using `max-width: 100%`
2. ✅ **Borders and Padding**: Applied to all table cells for better readability
3. ✅ **Alternating Row Colors**: Implemented using CSS `nth-child` selector
4. ✅ **Single HTML File**: All CSS styles are embedded within the HTML file

## Features

### Core Requirements

- **Responsive Design**: Table adapts to different screen sizes
- **Cell Styling**: Clean borders and proper padding for all cells
- **Row Alternation**: Even and odd rows have different background colors
- **Professional Layout**: Clean, modern appearance suitable for business use

### Additional Enhancements

- **Mobile Responsive**: Optimized for tablets and mobile devices
- **Hover Effects**: Interactive row highlighting on mouse hover
- **Professional Styling**: Clean typography and color scheme
- **Sample Data**: Realistic employee information for demonstration

## File Structure

```
project-folder/
├── index.html          # Main HTML file with embedded CSS
└── README.md          # This documentation file
```

## Technical Implementation

### CSS Features Used

- `max-width: 100%` for responsive width
- `border-collapse: collapse` for clean table borders
- `nth-child(even)` and `nth-child(odd)` for alternating rows
- Media queries for mobile responsiveness
- Flexbox container for centering

### Color Scheme

- **Header**: Green (#4CAF50) with white text
- **Even Rows**: Light gray (#f9f9f9)
- **Odd Rows**: White (#ffffff)
- **Hover**: Light green (#e8f5e8)

## Browser Compatibility

This table is compatible with all modern browsers including:

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Usage Instructions

1. **Download**: Save the HTML file to your computer
2. **Open**: Double-click the file or open with any web browser
3. **View**: The table will display with all styling applied
4. **Test Responsiveness**: Resize your browser window to see responsive behavior

## Customization Options

### Changing Colors

To modify the color scheme, update these CSS variables in the `<style>` section:

```css
/* Header color */
th { background-color: #4CAF50; }

/* Even row color */
tr:nth-child(even) { background-color: #f9f9f9; }

/* Odd row color */
tr:nth-child(odd) { background-color: #ffffff; }
```

### Adding Data

To add more employees, insert new `<tr>` elements in the `<tbody>` section:

```html
<tr>
    <td>009</td>
    <td>Employee Name</td>
    <td>Department</td>
    <td>Position</td>
    <td>Salary</td>
    <td>Hire Date</td>
</tr>
```

### Modifying Responsive Breakpoints

Adjust the media query values to change when mobile styling activates:

```css
@media screen and (max-width: 768px) { /* Tablet styles */ }
@media screen and (max-width: 480px) { /* Mobile styles */ }
```

## Assignment Checklist

- [x] Table displays employee data
- [x] CSS makes table width responsive (`max-width: 100%`)
- [x] Borders added to table cells
- [x] Padding applied to table cells
- [x] Alternate rows styled with different background colors using `nth-child`
- [x] All styles contained in single HTML file
- [x] Code is clean and well-commented

## Sample Data Included

The table includes 8 sample employees with the following information:

- Employee ID
- Full Name
- Department
- Job Position
- Annual Salary
- Hire Date

## Demo

Open `employe_table_page.html` in your web browser to see the fully functional employee data table with all assignment requirements implemented.

## Author

Created as part of a web development assignment focusing on HTML table styling and CSS responsive design techniques.
