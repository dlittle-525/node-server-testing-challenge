
exports.up = async function(knex) {
  await knex.schema.createTable("smurfs", (tbl) => {
      tbl.increments()
      tbl.text("name").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("smurfs")
};
