const express = require("express");

const ProjectRouter = require("./project/router");
const ResourceRouter = require("./resource/router");
const TaskRouter = require("./task/router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

server.get("*", (req, res) => {
  res.json({ API: "UP" });
});

module.exports = server;
