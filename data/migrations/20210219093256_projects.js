exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 128);
      tbl.boolean("project_completed");
    })
    .createTable("Tasks", (tbl) => {})
    .createTable("Resources", (tbl) => {})
    .createTable("Resource_Assignment", (tbl) => {});
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("")
    .dropTableIfExists("")
    .dropTableIfExists("")
    .dropTableIfExists("");
};
