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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

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
