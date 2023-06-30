const Task = require("../model/task.model");


const getAllTask = (req, res) => {
    res.send("getAll task")
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({
            success: true,
            task:task
        })
    } catch (err) {
        res.status(505).json({
            success: false,
            message:err.message
        })
    }
};

const updateTask = (req, res) => {
    res.send("updated")
};

const deleteTask = (req, res) => {
    res.send("deleted")
};

const getSingleTask = (req, res) => {
    res.send("single task")
};

module.exports = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
}