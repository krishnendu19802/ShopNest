# ShopNest

 This project is a full-stack application built with Node.js, Express, MongoDB, React, and Tailwind CSS. It provides various API endpoints for handling requests from the frontend and is divided into frontend and backend components for modularity and maintainability.

## Features

- User authentication and authorization with JWT
- CRUD operations for cart, purchases, login, and registration
- Integration with MongoDB for data storage
- Use of React Context API for managing user authentication state
- Responsive UI design with Tailwind CSS

## Backend

The backend of this project is built using Node.js, Express, and MongoDB. It is divided into the following folders:

- **models**: Contains the Mongoose models used in the backend, including purchases, users, and messages.
- **routes**: Handles CRUD operations for cart, purchase, login, and registration.
- **helper**: Contains helper files such as nodemailer for sending emails on purchase or message sending.
- **index.js**: Main entry point of the backend application.

## Frontend

The frontend is developed using React and Tailwind CSS. It is organized into the following structure:

- **src**: Contains components organized into separate folders for modularity.
  - Each component folder includes its associated sub-components.
- **react-context**: Implements a context provider for tracking the current user's authentication state and related functions.


