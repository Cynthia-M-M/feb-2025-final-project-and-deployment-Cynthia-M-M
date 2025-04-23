Project Overview
The SmartCart website is an e-commerce platform that provides a simple and responsive online shopping experience. This project includes a homepage, a product page, and a contact page, with a focus on providing a seamless user interface. The website utilizes HTML5, CSS3, and JavaScript for interactivity and responsiveness. It also includes a functional navigation menu, responsive grid layout for products, and a contact form with form validation.

Key Features:
-Responsive Design: The website adjusts its layout depending on the screen size, making it usable on devices ranging from smartphones to large desktops.
-Interactive Navigation: A collapsible navigation menu for mobile devices.
-Hero Section: A visually appealing hero section on the homepage with a call-to-action button.
-Product Grid: A flexible grid layout for displaying products, with hover effects for interactivity.
-Contact Form: A contact form with input validation to ensure correct data submission.

Technology Stack
-HTML5: Used for the semantic structure of the website.
-CSS3: For styling and responsiveness, leveraging Flexbox, Grid, and media queries.
-JavaScript: For interactive features such as the mobile navigation toggle and form validation.
-Deployment Platform: The website is deployed using GitHub Pages.

Project Structure
The project is organized into the following files and directories:

bash
/smartcart-website
├── index.html          # Home page of the website
├── contact.html        # Contact page of the website
├── styles.css          # Global styles and layout
├── script.js           # JavaScript for interactivity
├── images/             # Folder containing images for the website
└── README.md           # Project documentation file

HTML Structure
The HTML structure follows semantic web standards, which helps with SEO and accessibility. Key elements include:
-Header: Contains the navigation bar with links to the Home, About, and Contact pages. It also includes a logo.
-Main: Contains the main content, which varies by page.
-Home Page: Includes the hero section with a title, tagline, and a call-to-action button.
-About Page: Describes the website's purpose and mission.
-Contact Page: Contains a contact form to collect user information.
-Footer: A simple footer with copyright information.

CSS Styles
The styles.css file is used to apply the layout, styling, and responsiveness for the website. Below are the main components of the CSS:
-Global Styles: Reset margin and padding, set box-sizing to border-box, and define global font settings.
-Navbar: A flexbox-based navigation bar that ensures links are spaced evenly and is responsive for smaller screens.
-Hero Section: Styled with a background image and text centered in the middle of the screen, adjusted for responsiveness.
-Product Grid: Uses CSS Grid to create a flexible product display with hover effects for interactivity.
-Media Queries: Ensure the website adjusts correctly for smaller screen sizes (mobile and tablet).

JavaScript Functionality
The script.js file is used to add interactivity to the website:
-Mobile Navigation: The script enables toggling the visibility of the navigation links on smaller screens (hamburger menu).
-Form Validation: JavaScript is used to validate the contact form inputs before submitting. It ensures that the user provides valid information such as a valid email address.

Responsive Design
The website has been designed to be fully responsive, ensuring that it works on a variety of devices, from mobile phones to desktops. Key techniques used include:
-Flexbox & Grid Layout: Used for fluid and adaptive layouts, allowing the content to adjust to different screen sizes.
-Media Queries: Applied at specific breakpoints to alter the layout and styling of the website based on the device's screen size.

->> Deployment
The website has been deployed using GitHub Pages. The steps to deploy were as follows:
   -Commit and push the code to the GitHub repository.
   -Enable GitHub Pages in the repository settings.
-The website is now live at: https://cynthia-m-m.github.io/feb-2025-final-project-and-deployment-Cynthia-M-M/

Challenges Faced and Solutions
Mobile Navigation Toggle: Initially, the menu wouldn't toggle properly on mobile devices. After debugging, I added a display: block to the hamburger menu and used JavaScript to toggle the menu visibility.

Responsive Design Issues: Ensuring the hero section looked good on all devices was tricky. I had to adjust the background image positioning and apply different paddings at different breakpoints.

Conclusion
This project helped me practice my skills in HTML5, CSS3, and JavaScript, and I was able to deploy the website using GitHub Pages. The website is fully responsive and includes interactive elements, making it user-friendly across a range of devices.

