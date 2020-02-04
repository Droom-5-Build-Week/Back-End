
exports.up = function(knex) {
	return knex.schema.createTable('matches', tbl => {
		tbl.increments();

		tbl.integer('job_id', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.integer('user_id', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.boolean('user_match').defaultTo(false);
		tbl.boolean('job_match').defaultTo(false);
		tbl.boolean('matched').defaultTo(false);
})};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('matches');
};
