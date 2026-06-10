import express, {
  type Application,
  type Response,
  type Request,
} from "express";

import { JobRoute } from "./routes/jobsRoutes";
import { CompanyRoute } from "./routes/companyRoute";

const app: Application = express();
const port = 3001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});


app.use("/api/job", JobRoute);
app.use("/api/company", CompanyRoute);

export default app;
