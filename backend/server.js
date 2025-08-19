import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import serviceRoutes from "./src/routes/service.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/healthz", (req, res) => res.json({ status: "ok" }));

// Error Handler
app.use(errorHandler);

// DB + Start Server
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
