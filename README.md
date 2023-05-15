# Vue.js Custom Project Starter

This is a custom project starter for Vue.js, preconfigured with commonly used dependencies and configurations to help you kickstart your Vue.js projects quickly.

## Features

- Vue.js setup with single-file components
- Preconfigured with Vue Router for routing
- Route loading progress bar
- Axios for making HTTP requests
- TailwindCss for styling
- Preconfigured Dark Mode
- Vue Motion for animations
- Customized directory structure for scalability and organization
- Basic configuration for linting and formatting using ESLint and Prettier

## Prerequisites

To use this project starter, you need to have the following software installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager) or yarn or pnpm

## Getting Started

1. Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project's root directory:

```bash
cd your-project
```

3. Install the project dependencies:

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

4. Start the development server:

```bash
npm run dev
```

The development server will run at http://localhost:5173

Open your web browser and visit http://localhost:5173. You should see the default Wolmer's Vue.js welcome page.

## Project Structure

The project structure is organized as follows:

├── public/
│ ├── \_redirects
│ └── favicon.ico
├── src/
│ ├── assets/
│ ├── components/
│ ├── router/
│ ├── views/
│ ├── App.vue
│ └── main.js
├── .eslintrc.js
├── .eslintignore
├── .gitignore
├── .prettierrc
├── index.html
├── netlify.toml
├── vercel.json
├── pnpm-lock.yaml
├── postcss.config.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

##Acknowledgements
This project starter is built upon the foundation of Vue.js and utilizes various open-source dependencies. We express our gratitude to the developers of these projects for their contributions.

- Vue.js - https://vuejs.org/
