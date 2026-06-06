import "dotenv/config";

const config = {
  mongo_uri: process.env.MONGO_URI as string,
  port:process.env.PORT,
};
export default config;
