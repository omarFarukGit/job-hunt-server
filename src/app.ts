import express, {
  type Application,
  type Response,
  type Request,
} from "express";
import { jobsController } from "./controllers/jobsController";
import { JobRoute } from "./routes/jobsRoutes";
import JobModel from "./models/jobModel";
import { CompanyRoute } from "./routes/jobRoutes";

const app: Application = express();
const port = 3001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/job", async (req: Request, res: Response) => {
  try {
    const companyId = req.query.comId as string;

    const jobs = await JobModel.find({
      companyId,
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
});

app.get("/api/job/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await JobModel.findById(id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
});
app.use("/api/job", JobRoute);
app.use("/api/company", CompanyRoute);

export default app;
