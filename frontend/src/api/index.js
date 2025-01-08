import axios from "axios";

// Create an instance of axios to configure the base URL for API requests
const API = axios.create({
  baseURL: "https://fitnesstrack-vtv1.onrender.com/api/",
});
// Function to handle user sign-up and sign-in
export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

// Function to fetch dashboard details for a user
export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

  // Function to fetch workouts for a user on a specific date
export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // Function to add a new workout for a user
export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });