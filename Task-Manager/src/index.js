const express = require("express");
const cors = require("cors");
const task = require("./Route/task.route");
const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/task", task);


module.exports = app;