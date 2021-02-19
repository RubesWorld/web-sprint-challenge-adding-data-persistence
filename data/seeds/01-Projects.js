exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Projects").insert([
        {
          project_name: "Back-end",
          project_description: "adding a back-end to the project",
          project_completed: 1,
        },
        {
          project_name: "front-end",
          project_description: "adding the modules needed for state management",
          project_completed: 0,
        },
        {
          project_name: "Design",
          project_description: "Designing the new profile page",
          project_completed: 1,
        },
        {
          project_name: "Dev-Ops",
          project_description: "Launching both to Heroku",
          project_completed: 0,
        },
      ]);
    });
};
