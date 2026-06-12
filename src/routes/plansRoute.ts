import { Router } from "express";
import { plansController } from "../controllers/plansController";

const router = Router();

router.get("/", plansController.getByPlansAll);
router.get("/:id", plansController.getByPlans);

export const PlansRote = router;
