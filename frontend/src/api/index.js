import axios from "axios";

// Create an instance of axios with a base URL for making API requests
const API = axios.create({
  baseURL: "http://localhost:8080/api/", // Base URL of the backend API
});

/**
 * Function to sign up a new user.
 * @param {Object} data - The user data for registration (e.g., email, password, name).
 * @returns {Promise} - The promise that resolves to the response from the backend API.
 */
export const UserSignUp = async (data) => {
  try {
    // Make a POST request to the /user/signup endpoint with the provided data
    const response = await API.post("/user/signup", data);
    return response; // Return the response from the backend
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error; // Rethrow the error for handling it at the caller
  }
};

/**
 * Function to sign in an existing user.
 * @param {Object} data - The user credentials (e.g., email, password).
 * @returns {Promise} - The promise that resolves to the response from the backend API.
 */
export const UserSignIn = async (data) => {
  try {
    // Make a POST request to the /user/signin endpoint with the provided credentials
    const response = await API.post("/user/signin", data);
    return response; // Return the response from the backend
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Rethrow the error for handling it at the caller
  }
};

/**
 * Function to get the user's dashboard details.
 * @param {string} token - The JWT token for authorization.
 * @returns {Promise} - The promise that resolves to the user's dashboard data.
 */
export const getDashboardDetails = async (token) => {
  try {
    // Make a GET request to the /user/dashboard endpoint with the Authorization header
    const response = await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response; // Return the response containing dashboard data
  } catch (error) {
    console.error("Error fetching dashboard details:", error);
    throw error; // Rethrow the error for handling it at the caller
  }
};

/**
 * Function to get the user's workouts for a specific date.
 * @param {string} token - The JWT token for authorization.
 * @param {string} date - The date for which to fetch workouts (in YYYY-MM-DD format).
 * @returns {Promise} - The promise that resolves to the workouts data for the given date.
 */
export const getWorkouts = async (token, date) => {
  try {
    if (!date) {
      throw new Error("Date is required"); // Ensure a date is provided
    }

    const response = await API.get(`/user/workout?date=${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Workout API Response:", response.data); // Log response for debugging
    return response;
  } catch (error) {
    console.error("Error fetching workouts:", error.message);
    throw error;
  }
};


/**
 * Function to add a workout for the user.
 * @param {string} token - The JWT token for authorization.
 * @param {Object} data - The workout data to be added (e.g., workout name, sets, reps, etc.).
 * @returns {Promise} - The promise that resolves to the response from the backend API.
 */
export const addWorkout = async (token, data) => {
  try {
    // Make a POST request to the /user/workout endpoint with the workout data
    const response = await API.post("/user/workout", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response; // Return the response containing the added workout data
  } catch (error) {
    console.error("Error adding workout:", error);
    throw error; // Rethrow the error for handling it at the caller
  }
};