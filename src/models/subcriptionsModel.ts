import { model, Schema } from "mongoose";

//schema
const subcriptionsSchema = new Schema(
{
    email:String,
    planId: String,

  },{timestamps:true});

//model

const subcriptionsModel = model("subcriptions", subcriptionsSchema);
export default subcriptionsModel;
