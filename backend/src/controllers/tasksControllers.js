export const getAllTasks = (req, res) => {
    res.send("Hello task the backend!");
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