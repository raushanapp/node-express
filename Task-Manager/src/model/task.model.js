const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: String,
    completed: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
