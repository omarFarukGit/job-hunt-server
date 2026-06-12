import type { Request, Response } from "express";
import JobModel from "../models/jobModel";


const createJob = async (req: Request, res: Response) => {
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
};
const getAllJob = async (req: Request, res: Response) => {
  try {
    const companyId = req.query.comId as string;

    const jobs = await JobModel.find({
      companyId,
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
};
const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await JobModel.findById(id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
};


export const jobsController = {
  createJob,
  getJobById,
  getAllJob,
};
