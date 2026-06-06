import { model, Schema } from "mongoose";

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
export default JobModel;
