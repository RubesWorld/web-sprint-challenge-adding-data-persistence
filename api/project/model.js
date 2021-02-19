// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("Projects");
}

module.exports = {
  find,
};
