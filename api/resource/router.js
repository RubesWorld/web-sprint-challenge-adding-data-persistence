const express = require("express");
const mw = require("../middleware/middleware");
const R = require("./model");
const router = express.Router();

router.get("/", mw.logger, (req, res) => {
  R.find()
    .then((resources) => {
      res.status(201).json(resources);
    })
    .catch((err) => {
      res.status(401).json({ message: "Error getting Resources" });
    });
});

router.post("/", mw.validateResource, mw.logger, (req, res) => {
  const newResource = req.body;
  R.insert(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(401).json({ message: "Error adding resource" });
    });
});

module.exports = router;
