const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
      maxLength: [20, "you can not provide more than 20 characters"],
    },
    completed: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
