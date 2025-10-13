# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Start development server on http://localhost:3000
- `npm test` - Run tests in interactive watch mode  
- `npm run build` - Build production bundle to `build/` folder
- `npm run eject` - Eject from Create React App (one-way operation)

## Project Architecture

This is a React portfolio website built with Create React App. The application follows a component-based architecture with the following structure:

### Main Application Flow
- `src/index.js` - Entry point that renders the App component
- `src/App.jsx` - Main component that orchestrates all page sections in a single-page layout

### Component Organization
Components are organized by feature in `src/components/`:
- `header/` - Hero section with name, title, CTA buttons, and social links
- `nav/` - Fixed navigation with smooth scrolling to sections (uses state for active link highlighting)
- `about/` - About section
- `experience/` - Experience/skills section  
- `service/` - Services offered section
- `portfolio/` - Project portfolio showcase
- `contact/` - Contact form with EmailJS integration and contact options
- `footer/` - Footer section

### Key Features
- **Single Page Application**: All sections rendered in one page with smooth scrolling navigation
- **Contact Form**: Uses EmailJS for form submissions (service_gtjxhqa, template_7nij3ah)
- **Active Navigation**: Nav component tracks which section is currently active
- **React Icons**: Extensive use of react-icons for UI elements
- **Responsive Design**: CSS files for each component handle responsive behavior

### Assets Structure
All images, icons, and static files are stored in `src/assets/` including profile photos, portfolio images, CV PDF, and various icons.

### Live Demo
The portfolio is deployed at: http://codekang.live/