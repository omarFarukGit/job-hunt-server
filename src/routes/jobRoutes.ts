import { Router } from "express";
import { companyController } from "../controllers/companyController";

const router = Router();

router.post("/", companyController.createCompany);
router.get("/", companyController.getJobReqruiter);

export const CompanyRoute = router;
