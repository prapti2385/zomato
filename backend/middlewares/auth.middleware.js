import foodPartnerModel from "../models/foodpartner.model.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authFoodPartnerMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized login" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    if (!foodPartner) return res.status(401).json({ message: "Invalid token" });
    req.foodPartner = foodPartner;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized login" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Invalid token" });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export { authFoodPartnerMiddleware, authUserMiddleware };
