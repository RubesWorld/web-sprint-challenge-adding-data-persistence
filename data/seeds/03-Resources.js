exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Resources").insert([
        {
          resource_name: "Knex Cheatsheet",
          resource_description: "Knex.com",
        },
        {
          resource_name: "Dribbble",
          resource_description: "Dribbble design references",
        },
        {
          resource_name: "MVC Architecture",
          resource_description: "Will use this structure",
        },
        {
          resource_name: "Typescript",
          resource_description: "Using this for frontend",
        },
        {
          resource_name: "Express",
          resource_description: "Helps for db management",
        },
        {
          resource_name: "Redux CheatSheet",
          resource_description: "Redux.com",
        },
        {
          resource_name: "Figma Plugin",
          resource_description: "Use this to streamline design",
        },
        {
          resource_name: "Old DB schema",
          resource_description: "DON'T use this layout. BAD!",
        },
        {
          resource_name: "New DB Schema",
          resource_description: "DO use this",
        },
      ]);
    });
};
