import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // lay all tasks tu database
        res.status(200).json(tasks);
    } catch (error) {
        // res.status(500).json({ message: error.message });
        console.error(`Error retrieving tasks`,error);
        res.status(500).json({ message: "System error occurred" });
    }
}

export const createTask = (req, res) => {
    res.status(201).json({ message: "Task created successfully!" });
}

export const updateTask = (req, res) => {
    const taskId = req.params.id;
    res.status(200).json({ message: `Task with ID ${taskId} updated successfully!` });
}

export const deleteTask =  (req, res) => {
    const taskId = req.params.id;
    res.status(200).json({ message: `Task with ID ${taskId} deleted successfully!` });
}