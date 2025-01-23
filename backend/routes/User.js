import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../Controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { getFitnessTutorials } from "../Controllers/Tutorials.js"; // Import the tutorial controller

const router = express.Router();

// User Authentication Routes
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

// User Dashboard Route
router.get("/dashboard", verifyToken, getUserDashboard);

// Workout Routes
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

// YouTube Tutorials Route
router.get("/youtube/fitness-tutorials", verifyToken, getFitnessTutorials);

export default router;