import express, {
  type Application,
  type Response,
  type Request,
} from "express";
import { jobsController } from "./controllers/jobsController";
import { JobRoute } from "./routes/jobsRoutes";

const app: Application = express();
const port = 3001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use('/api/job',JobRoute)


export default app;
