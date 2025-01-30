# Installation and Setup Guide 

## Prerequisites
Before installing the project, ensure you have the following installed on your system:

- **Node.js** (Latest LTS recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) or **yarn**
- **Git** (optional, for version control) - [Download Git](https://git-scm.com/)

## Clone the Repository
If you have a GitHub repository for this project, clone it using:
```sh
(https://github.com/SalluMia/taskproject_client.git)
```
Otherwise, download the project folder manually.

## Navigate to the Project Directory
```sh
cd client
```

## Install Dependencies
Run the following command to install all required packages:
```sh
npm install
```
Or if using Yarn:
```sh
yarn install
```

## Project Dependencies
The project includes the following dependencies:

### Core Dependencies
- **react** (`^18.3.1`) - JavaScript library for building user interfaces
- **react-dom** (`^18.3.1`) - React package for working with the DOM
- **react-router-dom** (`^6.27.0`) - Routing for React applications

### State Management
- **@reduxjs/toolkit** (`^2.3.0`) - Official Redux library for state management
- **react-redux** (`^9.1.2`) - React bindings for Redux

### HTTP Requests
- **axios** (`^1.7.9`) - Promise-based HTTP client for making API requests

### UI & Styling
- **react-icons** (`^5.3.0`) - Library for using icons in React applications
- **swiper** (`^11.1.14`) - Touch slider component for carousels

### Notifications
- **react-hot-toast** (`^2.4.1`) - Notifications and alerts in React

### Prop Validation
- **prop-types** (`^15.8.1`) - Type-checking for component props

## Running the Project
To start the development server, run:
```sh
npm start
```
Or with Yarn:
```sh
yarn start
```

The project should now be running locally on [http://localhost:3000](http://localhost:3000).

## Building for Production
To create an optimized production build, run:
```sh
npm run build
```
Or with Yarn:
```sh
yarn build
```

This will generate a `build/` folder containing the production-ready files.

## Conclusion
You have successfully installed and set up the project! For further customization, refer to the official documentation of each package as needed.

Happy coding! 🚀

