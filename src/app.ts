import express, {
  type Application,
  type Response,
  type Request,
} from "express";

import { JobRoute } from "./routes/jobsRoutes";
import { CompanyRoute } from "./routes/companyRoute";
import { ApplictionRoute } from "./routes/applictionsRoute";
import cors from "cors";

const app: Application = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/job", JobRoute);
app.use("/api/company", CompanyRoute);
app.use("/api/applications", ApplictionRoute);

export default app;
