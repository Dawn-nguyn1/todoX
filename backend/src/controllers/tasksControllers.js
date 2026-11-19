import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 }); // lay all tasks moi nhat tu database
        res.status(200).json(tasks);
    } catch (error) {
        // res.status(500).json({ message: error.message });
        console.error(`Error retrieving tasks`, error);
        res.status(500).json({ message: "System error occurred" });
    }
}

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        // const task = new Task({ title });
        // const newTask = await task.save();
        //check loi: console.log(task);
        const task = await Task.create({ title });
        res.status(201).json(task);
    } catch (error) {
        console.error(`Error creating task`, error);
        res.status(500).json({ message: "System error occurred" });
    }
}

export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(`Error updating task`, error);
        res.status(500).json({ message: "System error occurred" });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(deletedTask);
    } catch (error) {
        console.error(`Error deleting task`, error);
        res.status(500).json({ message: "System error occurred" });
    }
}
