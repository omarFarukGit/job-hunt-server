import type { Request, Response } from "express";

import companyModel from "../models/companyModel";

const createCompany = async (req: Request, res: Response) => {
  try {
    const createData = req.body;

    const result = companyModel.create(createData);
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

const getJobReqruiter = async (req: Request, res: Response) => {
  try {
    const recruiterId = req.query.comId as string;

    const jobs = await companyModel.find({
      recruiterId,
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

export const companyController = {
  createCompany,
  getJobReqruiter,
};
