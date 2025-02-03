# Expandable List React Project

## Overview

This project is a React-based web application that implements an expandable list component. It's built using Vite as the build tool and development server, providing a fast and efficient development experience. The project demonstrates the use of modern React practices, including hooks and state management.

## Features

- Expandable/collapsible list items
- Dynamic addition and removal of sub-properties
- Responsive design using Bootstrap classes
- State management using custom hooks
- Fast development and build process with Vite

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or Yarn (v1.22.0 or later)

## Installation

To install the project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/expandable_list.git
```

2. Navigate to the project directory:
```bash
cd expandable_list
```

3. Install the dependencies:
```
npm install
```
   or if you're using Yarn:

```bash
yarn install
```

## Usage

To run the development server:

```bash
npm run dev
```
or with Yarn:
```bash
yarn dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- `src/`: Contains the source code for the React application
  - `App.jsx`: The main application component
  - `MeasurementProperties.jsx`: The expandable list component
  - `hooks/`: Custom React hooks
    - `usePropertiesStore.js`: Custom hook for managing properties state
  - `assets/`: Static assets like images and icons
- `public/`: Public assets that are copied to the build folder
- `eslint.config.js`: ESLint configuration file
- `vite.config.js`: Vite configuration file
- `package.json`: Project metadata and dependencies

## Scripts

- `dev`: Runs the Vite development server
- `build`: Builds the project for production
- `lint`: Runs ESLint to check for code quality issues
- `preview`: Runs a local preview of the production build

## Dependencies

- React
- React DOM
- Bootstrap (for styling)

## Dev Dependencies

- Vite
- ESLint
- ESLint plugins for React

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request
