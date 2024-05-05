## Overview

A simple web application designed to streamline product discovery through intuitive category filtering and dynamic product detail display.

## Features

- **Intelligent Category Filtering**: Empower users to efficiently browse products by selecting from a diverse array of categories.
- **Interactive Product Details Modal**: Enhance user engagement by presenting detailed product information in an immersive and interactive modal upon card selection.
- **Persistent Filter State via URL Parameters**: Seamlessly maintain user-selected filters allowing users to share or bookmark the filtered view and restoring it when the page is reloaded with sophisticated URL parameterization.
- **Robust Offline Experience**: Provide users with informative feedback and guidance through a dedicated offline page when internet connectivity is unavailable.
- **Multilingual Support**: Implement basic translations using i18n for enhanced accessibility across diverse linguistic audiences.


# Technologies 

- **React:** The project is built using React, a popular JavaScript library for building user interfaces, providing a robust and efficient development environment.

- **TypeScript:** TypeScript, a typed superset of JavaScript, is used to enhance the project's code quality, maintainability, and developer productivity, offering static type checking and improved tooling support.

- **Vite:** Vite is used as the build tool, providing fast and efficient development server and build processes, enhancing the overall performance and development experience.

- **i18n:** The project incorporates simple translations using i18n, enabling multi-language support and enhancing the accessibility and usability of the application


# Installation

**Clone the repository**  

```
git clone https://github.com/Hadeer-Mah/ProductsByCategory.git
```

**Navigate to the project directory**  

cd project

**Install dependencies**  

npm install

# Usage

1. After the installation is complete, run `npm start` to start the development server.
2. Open a web browser and navigate to `http://localhost:3000` to access the application.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
