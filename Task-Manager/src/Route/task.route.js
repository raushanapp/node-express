const express = require("express");
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../Controller/task.controller");
const router = express.Router();

router.route("/").get(getAllTask);
router.route("/").post(createTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);
router.route("/:id").get(getSingleTask);
module.exports = router;
