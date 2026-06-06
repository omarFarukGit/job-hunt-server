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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
