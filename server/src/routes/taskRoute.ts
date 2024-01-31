import express, {Request, Response} from "express";
import { home, volunteerPost } from "../controllers/taskController";
const router= express.Router();

// Show All Task //
router.get('/', home);

// Post Volunteer Task with user details//
router.post('/volunteer', volunteerPost)

export default router;