# React Portfolio Website

A modern, responsive portfolio website built with React and Vite showcasing projects, skills, and contact information.

## Features

- ✨ Modern React components with hooks
- 📱 Fully responsive design
- 🎨 Beautiful UI with gradient effects
- 🎯 Smooth scrolling navigation
- 📋 Projects showcase section
- 🛠️ Skills section with categorization
- 📧 Contact form
- ⚡ Fast development with Vite

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Footer.jsx / Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

- Edit component files in `src/components/` to customize each section
- Modify colors and styles in the `.css` files
- Update project information in `Projects.jsx`
- Add your skills in `Skills.jsx`
- Update social links in `Footer.jsx`

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling and animations
- **JavaScript** - Logic and interactivity

## License

This project is open source and available under the MIT License.
