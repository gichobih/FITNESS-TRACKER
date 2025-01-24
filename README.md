# Fitness Tracking App

This project is a full-stack fitness tracking application that allows users to register, log in, track their workouts, and view aggregated statistics about their fitness journey. It integrates a React frontend with a Node.js backend and MongoDB database, with state management handled using Redux and PersistGate for persistence.

---

## Features

- **User Registration & Authentication**:
  - Users can register and log in using JWT (JSON Web Token) for authentication.
  - Passwords are securely hashed using **bcrypt**.
  
- **Workout Tracking**:
  - Users can log workouts with details like duration, weight, sets, reps, and calories burned.
  - The app aggregates workout data, including total calories burned, average calories per workout, and categorizes the data for visualizations.
  
- **Dashboard**:
  - A user dashboard is available to view workout statistics and total calories burned over time.
  
- **State Management**:
  - The frontend uses **Redux** for global state management.
  - **PersistGate** ensures state is persisted across page reloads.

- **Data Visualization**:
  - Pie charts and other visualizations are used to display workout statistics (e.g., total calories burned, workout categories).

---

## Technologies Used

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Redux**: For state management, allowing global app state to be shared across components.
- **PersistGate**: To persist the Redux state to local storage and restore it on app load.
- **Axios**: For making HTTP requests to the backend API.
- **react-chartjs-2**: For rendering charts to visualize workout statistics.

### Backend:
- **Node.js**: JavaScript runtime used to build the backend server.
- **Express.js**: Framework for building the API endpoints.
- **MongoDB**: Database used to store user and workout data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to define models and interact with the database.
- **JWT (JSON Web Token)**: For user authentication.
- **bcrypt**: For password hashing to ensure user data security.

---

## Backend Overview

### API Routes:
1. **User Routes**:
   - `POST /api/user/signup`: Register a new user with email, password, and name.
   - `POST /api/user/signin`: Log in a user with email and password, returning a JWT.
   - `GET /api/user/dashboard`: Fetch a user's workout statistics (requires JWT authentication).

2. **Workout Routes**:
   - `POST /api/workouts`: Add a new workout with details like name, duration, weight, sets, reps, etc.
   - `GET /api/workouts`: Fetch all workouts for a user, with the ability to filter by date and aggregate data.
   - `GET /api/workouts/stats`: Get aggregated workout stats like total calories burned for a specific day or week.

3. **Middleware**:
   - `VerifyToken.js`: Middleware to verify that incoming requests include a valid JWT token for authentication.

### Models:
- **User.js**:
  - Defines the schema for users, including email, password, and name.
  - Handles user registration, login, and dashboard data aggregation.

- **Workout.js**:
  - Tracks workout data for each user (workout name, category, sets, reps, calories burned).
  - Calculates the total calories burned and aggregates stats over time.

---

## Frontend Overview

### Key Features:
- **User Authentication**: 
  - User registration and login screens.
  - JWT tokens are stored in localStorage and sent with each protected API request.
  
- **Workout Logging**: 
  - Users can add workouts by entering data into a form.
  - Workout details include duration, weight, sets, reps, and calories burned, which are calculated on the backend.
  
- **Dashboard**:
  - The dashboard shows aggregated workout data, such as total calories burned and averages.
  - Visualizations like pie charts or bar charts display workout statistics using **react-chartjs-2**.

---

## Setup

### Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** instance running (using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud instance).
- using account for **Google** and enabled the **YouTube Data API v3** for using API integration for video tutorials.
