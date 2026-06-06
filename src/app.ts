import express, {
  type Application,
  type Response,
  type Request,
} from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
const port = 3001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//schema
const jobSchema = new Schema({
  benefits: String,
  category: String,
  currency: String,
  deadline: Date,
  jobType: String,
  location: String,
  requirements: String,

  responsibilities: String,
  salaryMax: Number,
  salaryMin: Number,
  title: String,
  name: String,
  industry: String,
  approved: Boolean,
});

//model

const JobModel = model("jobs", jobSchema);

app.post("/", async (req: Request, res: Response) => {
  try {
    const createData = req.body;

    const result = JobModel.create(createData);
    res.status(201).json({
      success: false,
      message: "created succefuly",
      data: await result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: error,
    });
  }
});

export default app;
