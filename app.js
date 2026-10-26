import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Task from "./models/task.js"
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(cors());


app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})   
 