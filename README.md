# Justine Carl Lequigan Portfolio

Personal portfolio website for Justine Carl Lequigan, a full-stack developer passionate about web development and UI/UX design.

## Features

- Responsive home, projects, technologies, and contact sections
- Monochrome bryl-minimal visual design
- Light and dark mode with saved theme preference
- Technology carousel that pauses on hover
- Responsive mobile navigation
- Contact form with client-side success alert
- Reduced-motion support

## Run Locally

This is a static website with no build step or dependency installation required.

1. Open `index.html` directly in a browser, or
2. Serve the folder with any local static server.

For example, with Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── profile-picture.jpg
    ├── projects/
    │   ├── carolinian-pos/
    │   └── edds-ngohiong-sales-management-system/
    └── technologies/
```

## Customization

Project descriptions, technology stacks, and project links can be updated in the project cards inside `index.html`.

Technology names and logo paths are configured in `script.js` in the `technologyNames` array.

The contact form currently displays a success alert and does not send email.
