// create server
import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "../routes/auth.routes.js";
import foodRouter from "../routes/food.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRouter);

export default app;
