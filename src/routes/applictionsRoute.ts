import { Router } from "express";
import { applictionController } from "../controllers/applicationController";

const router = Router();

router.post("/", applictionController.createApply);

export const ApplictionRoute = router;
