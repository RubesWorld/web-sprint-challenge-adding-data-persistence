// build your `/api/tasks` router here
const express = require("express");

const mw = require("../middleware/middleware");
const Task = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      res.status(201).json(tasks);
    })
    .catch((err) => {
      res.status(400).json({ message: "Error Getting Tasks" });
    });
});

router.post("/", mw.validateTask, mw.logger, (req, res) => {
  const newTask = req.body;
  Task.add(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(404).json({ message: "Error Adding Task" });
    });
});

module.exports = router;
