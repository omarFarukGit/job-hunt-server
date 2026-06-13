import type { Request, Response } from "express";
import subcriptionsModel from "../models/subcriptionsModel";
import { UserModel } from "../models/userModel";


const createSubcription = async (req: Request, res: Response) => {
  try {
    const createData = req.body;

    const result = await subcriptionsModel.create(createData);
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: createData.email },
      { $set: { plan: createData.planId } },
      { returnDocument: "after" },
    );
    console.log(updatedUser,createData);
    res.status(201).json({
      success: false,
      message: "update succefuly",
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: error,
    });
  }
};

export const subcriptionsController = {
  createSubcription,
};
