import type { Request, Response } from "express";
import plansModel from "../models/plansModel";

const getByPlansAll = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plans = await plansModel.find();

    res.status(200).json({
      success: true,
      data: await plans,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
};
const getByPlans = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plans = await plansModel.findOne({ id: id });

    res.status(200).json({
      success: true,
      data: plans,
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
  getByPlansAll,
};
