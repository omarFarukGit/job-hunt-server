import { Router } from "express";
import { jobsController } from "../controllers/jobsController";

const router = Router();

router.post("/", jobsController.createJob);

router.get("/", jobsController.getAllJob);

router.get("/:id", jobsController.getJobById);

export const JobRoute = router;
