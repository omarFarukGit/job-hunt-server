import { model, Schema } from "mongoose";

//schema
const plansSchema = new Schema(
{
    id:String,
    name: String,
    maxApplicationPerMonth: Number,
  }
);

//model

const plansModel = model("plans", plansSchema);
export default plansModel;
