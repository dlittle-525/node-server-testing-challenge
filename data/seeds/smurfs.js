
exports.seed = async function(knex) {
    await knex("smurfs").truncate()
    await knex("smurfs").insert([
      { name: "papa smurf" },
      { name: "smurfette"},
      { name: "hefty smurf" },
      { name: "brainy smurf"}
    ])
};
