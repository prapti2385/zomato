import express from "express";
import { createFood, getFoodItems } from "../controllers/food.controller.js";
import {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} from "../middlewares/auth.middleware.js";
const router = express.Router();
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

// POST: /api/food/ [protected]
router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFood);

router.get("/", authUserMiddleware, getFoodItems);

export default router;
