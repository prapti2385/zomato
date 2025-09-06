import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "../routes/auth.routes.js";
import foodRouter from "../routes/food.routes.js";
import { router as foodPartnerRouter } from "../routes/food-partner.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRouter);
app.use("/api/food-partner", foodPartnerRouter);

export default app;
