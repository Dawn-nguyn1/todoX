import express from "express";
import tasksRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config(); // dat truoc dong connect DB


const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/tasks", tasksRouter);

//ket noi DB truoc khi start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});



