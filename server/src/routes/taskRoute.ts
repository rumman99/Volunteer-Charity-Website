import express from "express";
import { home, userTask, volunteerPost, volunteerTaskDelete } from "../controllers/taskController";
const router= express.Router();

// Show All Task //
router.get('/', home);

// Show User Task by Email //
router.get('/userTask', userTask);

// Post Volunteer Task with user details//
router.post('/volunteer', volunteerPost);

// Delete Volunteer Task by ID //
router.delete('/volunteerDelete/:id', volunteerTaskDelete);

export default router;