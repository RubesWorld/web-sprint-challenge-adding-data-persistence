const tModels = require("../task/model");
const pModels = require("../project/model");
const rModels = require("../resource/model");

const logger = (req, res, next) => {
  console.log(
    `The ${req.method} was made on ${Date().toLocaleString()} to ${
      req.protocol
    }://${req.get("Host")}${req.originalUrl} `
  );
  next();
};

const validateTask = (req, res, next) => {
  const { task_description, task_completed } = req.body;
  !task_completed && !task_description
    ? res.status(400).json({
        message: "You must have both the task description and completed status",
      })
    : next();
};

const validateResource = (req, res, next) => {
  const { resource_name } = req.body;
  !resource_name
    ? res.status(400).json({ error: "You must have a resource name to add" })
    : next();
};

const validateProject = (req, res, next) => {
  const { project_name, project_completed } = req.body;
  !project_completed && !project_name
    ? res.status(400).json({
        message: "You must have both the Project name and completed status",
      })
    : next();
};

module.exports = {
  logger,
  validateTask,
  validateResource,
  validateProject,
};
