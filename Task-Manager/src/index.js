const express = require("express");
const cors = require("cors");
const task = require("./Route/task.route");
const notFoundRoute = require("./Middleware/not.found");
const errorHandlerMiddleware = require("./Middleware/errorHandler");
const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/task", task);
app.use(notFoundRoute);
app.use(errorHandlerMiddleware);


module.exports = app;