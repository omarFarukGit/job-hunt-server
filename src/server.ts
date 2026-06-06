import app from "./app";
import config from "./config/env.config";
import { connectDB } from "./db/db";

const main = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
};

main();
