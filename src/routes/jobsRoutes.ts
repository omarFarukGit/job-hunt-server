import { Router } from "express";
import { jobsController } from "../controllers/jobsController";

const router = Router();

router.post("/", jobsController.createJob);

export const JobRoute = router;
