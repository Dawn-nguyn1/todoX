import express from "express";
import tasksRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config(); // dat truoc dong connect DB


const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use("/api/tasks", tasksRouter);

//ket noi DB truoc khi start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }); 
});



