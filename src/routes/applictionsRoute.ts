import { Router } from "express";
import { applictionController } from "../controllers/applicationController";

const router = Router();

router.post("/", applictionController.createApply);
router.get("/applictedUserJob/:id", applictionController.getJobByIdApplicatedUser);

export const ApplictionRoute = router;
