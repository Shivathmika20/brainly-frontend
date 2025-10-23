<<<<<<< HEAD
# 🧠 Brainly Frontend
=======
# 🌐 Brainly Frontend

This repository contains the **frontend** for the **Brainly MERN Stack Application** 

The frontend provides a responsive and interactive user interface for exploring, posting, and managing content using the REST APIs served by the **Brainly Backend**.

## 🚀 Tech Stack

| Technology | Description |
|-------------|--------------|
| **React.js / Vite** | Frontend framework for building UI |
| **TypeScript** | Type safety and better developer experience |
| **Axios** | API communication with backend |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS / ShadCN UI** | Modern, responsive styling |

## ⚙️ Environment Variables

Create a `.env` file in your root directory:

For **Vite**:
```env
VITE_API_BASE_URL=https://brainly-backend.onrender.com
```

# React + TypeScript + Vite
>>>>>>> 11011a44935bd0283f019b4cf79c036885ce541a

A modern and responsive frontend application for the Brainly project built with React, TypeScript, and Vite.

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Shadcn UI** - Accessible components

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## ⚙️ Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brainly-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 🌐 Development

The application will be running at `http://localhost:5173`

<<<<<<< HEAD
## 🎨 Features

- **Modern React** with hooks and functional components
- **TypeScript** for better development experience
- **Tailwind CSS** for rapid styling
- **Fast development** with Vite's hot module replacement

## 📝 Notes

- Make sure the backend server is running on port 3000
- The app uses React Router for client-side navigation
- All components are built with accessibility
=======
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
1️⃣ Clone the repository
```
git clone https://github.com/<your-username>/brainly-frontend.git
cd brainly-frontend
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Run the development server
```
For Vite:

npm run dev


Frontend runs on 👉 http://localhost:5173
```
For Create React App:
```
npm start


Frontend runs on 👉 http://localhost:3000
```
>>>>>>> 11011a44935bd0283f019b4cf79c036885ce541a
