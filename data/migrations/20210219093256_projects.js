exports.up = function (knex) {
  return knex.schema
    .createTable("Projects", (tbl) => {
      tbl.increments("project_id");
      tbl.text("project_name", 128).notNullable();
      tbl.text("project_description", 128);
      tbl.boolean("project_completed");
    })
    .createTable("Tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.text("task_description").notNullable();
      tbl.text("task_notes", 128);
      tbl.boolean("task_completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("Projects")
        .onDelete("CASCADE");
    })
    .createTable("Resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.text("resource_name", 128).unique().notNullable();
      tbl.text("resource_description");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("assignment_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("Projects")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("Resources")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Projects");
};
