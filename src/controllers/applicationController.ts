import applictionModel from "../models/applicationModel";
import type { Request, Response } from "express";

const createApply = async (req: Request, res: Response) => {
  try {
    const createData = req.body;

    const result = applictionModel.create(createData);
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
const getJobByIdApplicatedUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await applictionModel.find({ applicantId: id });

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

export const applictionController = {
  createApply,
  getJobByIdApplicatedUser
};
