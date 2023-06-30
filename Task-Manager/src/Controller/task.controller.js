const { json } = require("express");
const Task = require("../model/task.model");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({}).lean().exec();
    const countDocument = await Task.countDocuments();
    console.log(countDocument);
    res.status(200).json({
      success: true,
      totalTask: countDocument,
      tasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      task: task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getSingleTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No Task with Id ${taskId}` });
    }
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No Task with Id ${taskId}` });
    }
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

// edit task using put method
// edit method does overwirte value what ever pass the body
const editTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true, // overwrite the documement
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No Task with Id ${taskId}` });
    }
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No Task with Id ${taskId}` });
    }
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
  editTask,
};
