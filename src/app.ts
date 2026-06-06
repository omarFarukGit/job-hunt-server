import express, {
  type Application,
  type Response,
  type Request,
} from "express";

const app: Application = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
