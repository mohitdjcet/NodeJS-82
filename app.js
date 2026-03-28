import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

export default app;