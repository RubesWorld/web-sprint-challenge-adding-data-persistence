exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          task_description: "create knex file",
          task_notes: "npx knex init",
          task_completed: 0,
          project_id: 1,
        },
        {
          task_description: "create dbconfig file",
          task_notes: "create this manually",
          task_completed: 0,
          project_id: 1,
        },
        {
          task_description: "create reducers",
          task_notes: "We are using Redux",
          task_completed: 1,
          project_id: 2,
        },
        {
          task_description: "Share figma file",
          task_notes: "All teams need",
          task_completed: 0,
          project_id: 3,
        },
        {
          task_description: "Launch on Heroku",
          task_notes: "Do manual deployment",
          task_completed: 1,
          project_id: 4,
        },
      ]);
    });
};
