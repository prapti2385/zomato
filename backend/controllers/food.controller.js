import foodModel from "../models/food.model.js";
import { uploadFile } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

const createFood = async (req, res) => {
  const fileUploadResult = await uploadFile(req.file.buffer, uuid());
  const foodItem = await foodModel.create({
    name: req.body.name,
    video: fileUploadResult.url,
    description: req.body.description,
    foodPartner: req.foodPartner._id,
  });

  res
    .status(201)
    .json({ message: "Food created successfully", food: foodItem });
};

const getFoodItems = async (req, res) => {
  const foodItems = await foodModel.find({});
  res
    .status(200)
    .json({ message: "Food items fetched successfully", food: foodItems });
};

export { createFood, getFoodItems };
