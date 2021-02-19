const db = require("../../data/dbConfig");

module.exports = {
  find,
  add,
};

function find() {
  return db("Tasks");
}

function add(newTask) {
  return db("Tasks")
    .insert(newTask)
    .then((id) => {
      return db("Tasks").where("task_id", id).first();
    });
}
