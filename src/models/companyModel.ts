import { model, Schema } from "mongoose";

//schema
const companySchema = new Schema({
  name: String,
  websiteUrl: String,
  industry: String,
  location: String,
  employeeCount: String,
  description: String,
  logo: String,
  status: String,
  recruiterId: String,
},{timestamps:true});

//model

const companyModel = model("company", companySchema);
export default companyModel;
