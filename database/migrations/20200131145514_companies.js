
exports.up = function (knex) {
	return knex.schema
		.createTable('companies', tbl => {
			tbl.increments();
			tbl.string('email').unique().notNullable();
			tbl.string('password').notNullable();
			tbl.string('name', 150).notNullable();
			tbl.string('location').notNullable();
		})

		.createTable('jobs', tbl => {
			tbl.increments();
			tbl.string('position_name').notNullable();
			tbl.string('type').notNullable();
			tbl.string('job_bio').notNullable();
			tbl.string('duration').notNullable();
			tbl.integer('company_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('companies')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('job_skills', tbl => {
			tbl.increments();
			tbl.string('name').notNullable();
			tbl.integer('job_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('jobs')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('job_skills')
		.dropTableIfExists('job')
		.dropTableIfExists('companies');
};
