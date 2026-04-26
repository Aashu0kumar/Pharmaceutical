# MediCare Solutions Website

A professional, high-performance, and responsive pharmaceutical/medical corporate website built with pure HTML, CSS, and JavaScript.

## Features

-   **Modern UI/UX**: Clean, medical-inspired design using a professional blue and white color palette.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices using CSS Flexbox and Grid.
-   **Interactive Navigation**: Sticky header with scroll-spy (highlights current section) and a mobile hamburger menu.
-   **Hero Section**: High-impact visuals with a professional call-to-action.
-   **Services & Stats**: Interactive cards for therapeutic areas and animated counters for company statistics.
-   **Functional Contact Form**: Client-side form validation and simulated submission with user feedback.
-   **Optimized Performance**: No heavy frameworks, uses lightweight Google Fonts and FontAwesome for icons.

## Prerequisites

-   A modern web browser (Chrome, Firefox, Safari, or Edge).
-   No local server is required; it can be run directly as a static file.

## Installation & Running

1.  **Download/Clone**: Save all three files (`index.html`, `style.css`, and `main.js`) into the same directory on your computer.
2.  **Open**: Double-click `index.html` to open the website in your default browser.
3.  **Development**: To see changes in real-time while editing, it is recommended to use the "Live Server" extension in VS Code.

## Project Structure

    /
    ├── index.html   # Main structure and content
    ├── style.css    # Visual styling and layout
    └── main.js     # Interactivity, mobile menu, and form handling

## Configuration

### Changing Images
The images are currently served via Unsplash CDN for convenience. To use your own images:
1. Replace the URL in `style.css` under the `.hero` class.
2. Ensure images are high resolution (at least 1920x1080 for hero).

### Updating Contact Info
Open `index.html` and search for the `contact-info` div to update the email, phone number, or physical address.

## Troubleshooting

-   **Icons not showing?** Ensure you have an active internet connection as FontAwesome is loaded via CDN.
-   **Menu not clicking on mobile?** Ensure `main.js` is correctly linked at the bottom of `index.html`.
-   **Old styles showing?** Clear your browser cache or use "Hard Refresh" (Ctrl+F5 or Cmd+Shift+R).

## Credits

-   **Fonts**: Inter (Google Fonts)
-   **Icons**: FontAwesome
-   **Images**: Unsplash
