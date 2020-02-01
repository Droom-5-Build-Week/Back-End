// for registration
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
  	tbl.increments();
    tbl.string('email', 50)
      .notNullable()
      .unique();
    tbl.string('password', 250).notNullable();
  })
};

exports.down = function(knex) {
	knex.schema
		.dropTableIfExists('users');
};