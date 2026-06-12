import { Router } from "express";
import { subcriptionsController } from "../controllers/subcriptionsController";

const router = Router();

router.post("/", subcriptionsController.createSubcription);

export const SubcriptionsRoute = router;
