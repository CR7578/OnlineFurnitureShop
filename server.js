import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import furnitureRoutes from "./routes/furnitureRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//Database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/furniture", furnitureRoutes);

//rest API
app.get("/", (req, res) => {
  res.send("WORKING");
});

//Back-end Port Number
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
