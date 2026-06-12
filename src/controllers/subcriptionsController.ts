import type { Request, Response } from "express";
import subcriptionsModel from "../models/subcriptionsModel";

const createSubcription = async (req: Request, res: Response) => {
  try {
    const createData = req.body;

    const result = subcriptionsModel.create(createData);
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

export const subcriptionsController={
    createSubcription
}