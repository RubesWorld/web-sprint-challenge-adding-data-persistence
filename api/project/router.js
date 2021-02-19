const express = require("express");

const Project = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(401).json({ message: "error finding projects" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  Project.add(newProject)
    .then((projects) => {
      res.status(201).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding project" });
    });
});

module.exports = router;
