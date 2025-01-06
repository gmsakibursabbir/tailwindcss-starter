# Tailwind CSS Starter Project

This is a starter project for setting up Tailwind CSS with plain HTML, CSS, and JavaScript. It uses **Vite** as the build tool for fast development and production builds.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Folder Structure](#folder-structure)
4. [Configuration](#configuration)
5. [Running the Project](#running-the-project)
6. [Customizing Tailwind](#customizing-tailwind)
7. [Troubleshooting](#troubleshooting)
8. [License](#license)

---

## **Prerequisites**
Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

---

## **Project Setup**

### **Step 1: Clone the Repository**
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/my-tailwind-project.git
cd my-tailwind-project
```
### Install the required dependencies:
```bash
npm install
```
## Folder Structure
Here’s the structure of the project:
```bash
my-tailwind-project/
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── styles/          # CSS files
│   │   └── main.css     # Main Tailwind CSS file
│   ├── js/              # JavaScript files
│   │   └── main.js      # Main JavaScript file
│   ├── index.html       # Main HTML file
├── dist/                # Built files (output)
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
├── package.json
└── README.md            # Project documentation
```
## Configuration
### Tailwind CSS
The `tailwind.config.js` file is used to customize Tailwind CSS. By default, it includes:
```bash
module.exports = {
  content: [
    './src/**/*.{html,js}', // Include all HTML and JS files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### PostCSS
The `postcss.config.js` file processes Tailwind CSS and autoprefixer:
```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
## Running the Project
### Development Mode
Start the development server with hot-reloading:
```bash
npm run dev
```
Visit http://localhost:3000 to view your project.

### Production Build
Build the project for production:

```bash
npm run build
```
The output will be in the dist folder.