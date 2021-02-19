// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("Projects");
}

function add(project) {
  return db("Projects")
    .insert(project)
    .then(([id]) => {
      return db("Projects").where("project_id", id).first();
    });
}

module.exports = {
  find,
  add,
};
