import { Router } from "express";
import { companyController } from "../controllers/companyController";

const router = Router();

router.post("/", companyController.createCompany);

export const CompanyRoute = router;