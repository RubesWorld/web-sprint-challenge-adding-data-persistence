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

module.exports = router;
