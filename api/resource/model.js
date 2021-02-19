const db = require("../../data/dbConfig");

module.exports = {
  find,
  insert,
};

function find() {
  return db("Resources");
}

function insert(resource) {
  return db("Resources")
    .insert(resource)
    .then(([id]) => {
      return db("Resources").where("resource_id", id).first();
    });
}
