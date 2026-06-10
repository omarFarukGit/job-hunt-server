import { model, Schema } from "mongoose";

//schema
const applicationSchema = new Schema(
  {
    jobId: String,
    jobTitle: String,
    companyName: String,
    applicantId: String,
    applicantName: String,
    applicantEmail: String,
    resumeLink: String,
    portfolioLink: String,
    additionalNotes: String,
  },
  { timestamps: true },
);

//model

const applictionModel = model("applictions", applicationSchema);
export default applictionModel;
