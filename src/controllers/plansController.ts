import type { Request, Response } from "express";
import plansModel from "../models/plansModel";

const getByPlans = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await plansModel.findById(id);

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

export const plansController = {
  getByPlans,
};
